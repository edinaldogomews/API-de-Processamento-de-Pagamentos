@echo off

:: Navegar para o diretório do backend e iniciar o servidor
cd /d C:\Users\Jr\Desktop\Node.JS\api_de_pagamentos\pagamento-api
start cmd /k "npm run start"

:: Navegar para o diretório do frontend e iniciar o servidor
cd /d C:\Users\Jr\Desktop\Node.JS\api_de_pagamentos\frontend
start cmd /k "npm run serve"

:: Abrir o Postman
start "" "C:\Users\Jr\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Postman\Postman.lnk"

echo Servidores frontend e backend iniciados e Postman aberto.
pause
