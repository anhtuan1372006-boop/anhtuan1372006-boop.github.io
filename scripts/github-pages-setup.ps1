param([string]$Owner='anhtuan1372006-boop',[string]$Repository='anhtuan1372006-boop.github.io',[string]$ApiBase)
$ErrorActionPreference='Stop'
if($Owner -notmatch '^[a-zA-Z0-9-]+$' -or $Repository -notmatch '^[a-zA-Z0-9_.-]+$'){throw 'Tên kho chưa hợp lệ.'}
if($ApiBase -notmatch '^https://[a-z0-9.-]+$'){throw 'Cần địa chỉ HTTPS của máy chủ API.'}
# Reuse the user's existing Git Credential Manager session. Never print or save it.
$bxCredential="protocol=https`nhost=github.com`n`n" | git credential fill
$bxFields=@{}
foreach($bxLine in $bxCredential){$bxPair=$bxLine.Split('=',2);if($bxPair.Length -eq 2){$bxFields[$bxPair[0]]=$bxPair[1]}}
if(-not $bxFields['password']){throw 'GitHub chưa có phiên Git được lưu.'}
$bxHeaders=@{Authorization=('Bearer '+$bxFields['password']);Accept='application/vnd.github+json';'X-GitHub-Api-Version'='2022-11-28'}
try{
 $bxAccount=Invoke-RestMethod -Uri 'https://api.github.com/user' -Headers $bxHeaders
 if($bxAccount.login -ne $Owner){throw 'Tài khoản Git hiện tại không trùng chủ kho được chọn.'}
 $bxRepoUrl="https://api.github.com/repos/$Owner/$Repository"
 $bxExisting=Invoke-WebRequest -Uri $bxRepoUrl -Headers $bxHeaders -SkipHttpErrorCheck
 if($bxExisting.StatusCode -eq 404){
   $bxBody=@{name=$Repository;description='BOXANH — Chuyển trọ, dọn phòng, bàn giao và vòng đời mới tại Vinh, Nghệ An';private=$false;auto_init=$false;homepage="https://$Owner.github.io/"} | ConvertTo-Json
   $bxRepo=Invoke-RestMethod -Uri 'https://api.github.com/user/repos' -Method Post -Headers $bxHeaders -ContentType 'application/json' -Body $bxBody
   Write-Output ('Created repository: '+$bxRepo.html_url)
 }elseif($bxExisting.StatusCode -ne 200){throw 'Không kiểm tra được kho GitHub.'}
 $bxVar=@{name='BOXANH_API_BASE';value=$ApiBase} | ConvertTo-Json
 $bxVariable=Invoke-WebRequest -Uri "$bxRepoUrl/actions/variables/BOXANH_API_BASE" -Headers $bxHeaders -SkipHttpErrorCheck
 if($bxVariable.StatusCode -eq 404){Invoke-RestMethod -Uri "$bxRepoUrl/actions/variables" -Method Post -Headers $bxHeaders -ContentType 'application/json' -Body $bxVar | Out-Null}
 elseif($bxVariable.StatusCode -eq 200){Invoke-RestMethod -Uri "$bxRepoUrl/actions/variables/BOXANH_API_BASE" -Method Patch -Headers $bxHeaders -ContentType 'application/json' -Body $bxVar | Out-Null}
 else{throw 'Không cấu hình được địa chỉ API.'}
 $bxPages=Invoke-WebRequest -Uri "$bxRepoUrl/pages" -Headers $bxHeaders -SkipHttpErrorCheck
 if($bxPages.StatusCode -eq 404){Invoke-RestMethod -Uri "$bxRepoUrl/pages" -Method Post -Headers $bxHeaders -ContentType 'application/json' -Body '{"build_type":"workflow"}' | Out-Null}
 elseif($bxPages.StatusCode -eq 200){
   $bxCurrent=$bxPages.Content | ConvertFrom-Json
   if($bxCurrent.build_type -ne 'workflow'){Invoke-RestMethod -Uri "$bxRepoUrl/pages" -Method Put -Headers $bxHeaders -ContentType 'application/json' -Body '{"build_type":"workflow"}' | Out-Null}
 }else{throw 'Không cấu hình được GitHub Pages.'}
 Write-Output 'GitHub Pages and the public API origin are configured.'
}finally{Remove-Variable bxCredential,bxFields,bxHeaders -ErrorAction SilentlyContinue}
