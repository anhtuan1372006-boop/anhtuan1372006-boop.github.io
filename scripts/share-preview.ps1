$ErrorActionPreference='Stop'
$boxanhRoot=[System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$boxanhRuntime=Join-Path $boxanhRoot '.runtime'
New-Item -ItemType Directory -Path $boxanhRuntime -Force | Out-Null
$boxanhExe=Join-Path $boxanhRuntime 'cloudflared.exe'
if(-not(Test-Path -LiteralPath $boxanhExe)){
  Invoke-WebRequest -Uri 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe' -OutFile $boxanhExe
}
if(Get-NetTCPConnection -LocalPort 4175 -State Listen -ErrorAction SilentlyContinue){
  throw 'Cổng 4175 đang được dùng. Dừng bản chia sẻ trước trước khi tạo link mới.'
}
$boxanhPreviousPort=$env:PORT
$boxanhPreviousPreview=$env:PUBLIC_PREVIEW
try{
  $env:PORT='4175';$env:PUBLIC_PREVIEW='1'
  $boxanhServer=Start-Process -FilePath (Get-Command node.exe).Source -ArgumentList 'server.mjs' -WorkingDirectory $boxanhRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $boxanhRuntime 'public-out.log') -RedirectStandardError (Join-Path $boxanhRuntime 'public-error.log') -PassThru
  $boxanhServer.Id | Set-Content (Join-Path $boxanhRuntime 'public.pid')
}finally{
  $env:PORT=$boxanhPreviousPort;$env:PUBLIC_PREVIEW=$boxanhPreviousPreview
}
$boxanhLog=Join-Path $boxanhRuntime 'tunnel-error.log'
$boxanhTunnel=Start-Process -FilePath $boxanhExe -ArgumentList @('tunnel','--url','http://127.0.0.1:4175','--no-autoupdate','--protocol','quic') -WindowStyle Hidden -RedirectStandardOutput (Join-Path $boxanhRuntime 'tunnel-out.log') -RedirectStandardError $boxanhLog -PassThru
$boxanhTunnel.Id | Set-Content (Join-Path $boxanhRuntime 'tunnel.pid')
Write-Output 'Đang tạo link HTTPS xem thử. Cổng quản trị được chặn trên bản công khai.'
for($boxanhAttempt=0;$boxanhAttempt -lt 120;$boxanhAttempt++){
  Start-Sleep -Milliseconds 500
  if(Test-Path -LiteralPath $boxanhLog){
    try {
      $boxanhText=Get-Content -LiteralPath $boxanhLog -Raw -ErrorAction Stop
    } catch {
      continue
    }
    if(-not $boxanhText){continue}
    $boxanhMatch=[regex]::Match($boxanhText,'https://[a-z0-9-]+\.trycloudflare\.com')
    if($boxanhMatch.Success -and $boxanhText.Contains('Registered tunnel connection')){
      $boxanhMatch.Value | Set-Content (Join-Path $boxanhRuntime 'public-url.txt')
      Write-Output $boxanhMatch.Value
      Write-Output 'Link tạm: máy và hai tiến trình phải tiếp tục chạy. Xem DEPLOYMENT.md để triển khai 24/7.'
      exit 0
    }
  }
}
Write-Output "Chưa xác nhận kết nối. Xem log tại $boxanhLog; không chia sẻ URL nếu chưa truy cập được."
exit 1
