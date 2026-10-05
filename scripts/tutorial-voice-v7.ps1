$ErrorActionPreference='Stop'
$bxRoot=Split-Path $PSScriptRoot -Parent
$bxWork=Join-Path $bxRoot 'work/tutorial-v7'
New-Item -ItemType Directory -Path $bxWork -Force | Out-Null
Add-Type -AssemblyName System.Speech
$bxSpeech=New-Object System.Speech.Synthesis.SpeechSynthesizer
$bxSpeech.SelectVoice('Microsoft An')
$bxSpeech.Rate=1
$bxSpeech.Volume=100
$bxWelcome=Get-Content -LiteralPath (Join-Path $bxRoot 'work/welcome-v7.txt') -Raw -Encoding UTF8
$bxSpeech.SetOutputToWaveFile((Join-Path $bxWork 'welcome.wav'))
$bxSpeech.Speak($bxWelcome)
$bxSpeech.SetOutputToNull()
$bxChapters=Get-Content -LiteralPath (Join-Path $bxRoot 'work/tutorial-v7.json') -Raw -Encoding UTF8 | ConvertFrom-Json
foreach($bxChapter in $bxChapters){
 $bxSpeech.SetOutputToWaveFile((Join-Path $bxWork "$($bxChapter.file).wav"))
 $bxSpeech.Speak($bxChapter.speech)
 $bxSpeech.SetOutputToNull()
}
$bxSpeech.Dispose()
Write-Output 'Vietnamese narration generated for 9 chapters and the welcome.'
