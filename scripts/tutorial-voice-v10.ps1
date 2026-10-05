$ErrorActionPreference='Stop'
$bxRoot=Split-Path $PSScriptRoot -Parent
$bxWork=Join-Path $bxRoot 'work/tutorial-v10'
New-Item -ItemType Directory -Path $bxWork -Force | Out-Null
# Use the installed OneCore Vietnamese voice directly, without registry changes.
$bxSpeech=New-Object -ComObject SAPI.SpVoice
$bxToken=New-Object -ComObject SAPI.SpObjectToken
$bxToken.SetId('HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech_OneCore\Voices\Tokens\MSTTS_V110_viVN_An','',$false)
$bxSpeech.Voice=$bxToken
$bxSpeech.Rate=1
$bxSpeech.Volume=100
$bxStoryboard=Get-Content -LiteralPath (Join-Path $bxRoot 'public/assets/boxanh-tutorial-v10.json') -Raw -Encoding UTF8 | ConvertFrom-Json
foreach($bxChapter in $bxStoryboard.chapters){
 $bxStream=New-Object -ComObject SAPI.SpFileStream
 $bxStream.Format.Type=22
 $bxStream.Open((Join-Path $bxWork "$($bxChapter.file).wav"),3,$false)
 $bxSpeech.AudioOutputStream=$bxStream
 $bxSpeech.Speak($bxChapter.speech,0) | Out-Null
 $bxStream.Close()
}
Write-Output 'Vietnamese narration generated for the updated thirteen-chapter tutorial.'
