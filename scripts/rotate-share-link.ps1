$ErrorActionPreference='Stop'
$bxRoot=[System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$bxRuntime=Join-Path $bxRoot '.runtime'
$bxExe=Join-Path $bxRuntime 'cloudflared.exe'
if(-not(Test-Path -LiteralPath $bxExe)){throw 'Chưa có Cloudflared chính thức trong .runtime.'}
$bxCheck=Invoke-WebRequest -Uri 'http://127.0.0.1:4175/' -TimeoutSec 10
if($bxCheck.StatusCode -ne 200 -or -not $bxCheck.Content.Contains('data-service-masthead')){throw 'Máy chủ chia sẻ chưa sẵn sàng.'}
$bxAdmin=Invoke-WebRequest -Uri 'http://127.0.0.1:4175/quan-tri' -SkipHttpErrorCheck -TimeoutSec 10
if($bxAdmin.StatusCode -ne 403){throw 'Cổng quản trị cần được chặn trước khi chia sẻ.'}
$bxStamp=Get-Date -Format 'yyyyMMdd-HHmmss'
$bxLog=Join-Path $bxRuntime "tunnel-$bxStamp.stderr.log"
$bxOutput=Join-Path $bxRuntime "tunnel-$bxStamp.stdout.log"
$bxOldPidPath=Join-Path $bxRuntime 'tunnel.pid'
$bxOldUrlPath=Join-Path $bxRuntime 'public-url.txt'
if(Test-Path -LiteralPath $bxOldPidPath){Copy-Item -LiteralPath $bxOldPidPath -Destination (Join-Path $bxRuntime "tunnel-previous-$bxStamp.pid")}
if(Test-Path -LiteralPath $bxOldUrlPath){Copy-Item -LiteralPath $bxOldUrlPath -Destination (Join-Path $bxRuntime "public-url-previous-$bxStamp.txt")}
$bxTunnel=Start-Process -FilePath $bxExe -ArgumentList @('tunnel','--url','http://127.0.0.1:4175','--no-autoupdate','--protocol','quic') -WorkingDirectory $bxRoot -WindowStyle Hidden -RedirectStandardOutput $bxOutput -RedirectStandardError $bxLog -PassThru
Set-Content -LiteralPath (Join-Path $bxRuntime "tunnel-pending-$bxStamp.pid") -Value $bxTunnel.Id
for($bxAttempt=0;$bxAttempt -lt 100;$bxAttempt++){
  Start-Sleep -Milliseconds 500
  if($bxTunnel.HasExited){throw 'Tiến trình tạo link đã dừng. Kiểm tra nhật ký kết nối.'}
  try{$bxText=Get-Content -LiteralPath $bxLog -Raw -ErrorAction Stop}catch{continue}
  if(-not $bxText -or -not $bxText.Contains('Registered tunnel connection')){continue}
  $bxMatch=[regex]::Match($bxText,'https://[a-z0-9-]+\.trycloudflare\.com')
  if(-not $bxMatch.Success){continue}
  try{$bxPage=Invoke-WebRequest -Uri ($bxMatch.Value+'/') -TimeoutSec 8 -ErrorAction Stop}catch{continue}
  if($bxPage.StatusCode -eq 200 -and $bxPage.Content.Contains('data-service-masthead')){
    Set-Content -LiteralPath $bxOldUrlPath -Value $bxMatch.Value
    Set-Content -LiteralPath $bxOldPidPath -Value $bxTunnel.Id
    Write-Output $bxMatch.Value
    Write-Output 'Link HTTPS mới đã được kiểm tra. Link cũ vẫn giữ hoạt động cùng máy chủ.'
    exit 0
  }
}
throw 'Chưa kiểm tra được link mới; public-url.txt vẫn giữ link đã hoạt động.'
