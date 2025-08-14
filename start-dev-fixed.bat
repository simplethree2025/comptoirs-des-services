@echo off
echo Configuration du PATH pour Node.js...
set PATH=%PATH%;C:\Program Files\nodejs

echo Lancement du serveur de développement...
"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev

pause
