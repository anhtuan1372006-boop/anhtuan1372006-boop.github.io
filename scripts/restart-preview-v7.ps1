$ErrorActionPreference='Stop'
$bxRoot=Split-Path $PSScriptRoot -Parent
$bxNode=(Get-Command node).Source
foreach($bxRole in @('local','public')){
 $bxPidPath=Join-Path $bxRoot ".runtime/$bxRole.pid"
 if(Test-Path -LiteralPath $bxPidPath){
  $bxOldPid=[int](Get-Content -LiteralPath $bxPidPath -Raw).Trim()
  $bxOldProcess=Get-CimInstance Win32_Process -Filter "ProcessId=$bxOldPid"
  if($bxOldProcess -and $bxOldProcess.Name -eq 'node.exe' -and $bxOldProcess.CommandLine -match 'server\.mjs'){Stop-Process -Id $bxOldPid -Force}
 }
 $env:PORT=if($bxRole -eq 'local'){'4173'}else{'4175'}
 $env:HOST='127.0.0.1'
 $env:PUBLIC_PREVIEW=if($bxRole -eq 'public'){'1'}else{'0'}
 $env:PUBLIC_CLIENT_ORIGIN=if($bxRole -eq 'public'){'https://anhtuan1372006-boop.github.io'}else{''}
 $bxStarted=Start-Process -FilePath $bxNode -ArgumentList @('server.mjs') -WorkingDirectory $bxRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $bxRoot ".runtime/$bxRole-v7.stdout.log") -RedirectStandardError (Join-Path $bxRoot ".runtime/$bxRole-v7.stderr.log") -PassThru
 Set-Content -LiteralPath $bxPidPath -Value $bxStarted.Id
 Write-Output "$bxRole running: $($bxStarted.Id)"
}
Remove-Item Env:PORT,Env:HOST,Env:PUBLIC_PREVIEW,Env:PUBLIC_CLIENT_ORIGIN
