@echo off
REM Sync dist/ folder to secondary repository
REM Usage: sync-dist.bat

echo Building production version...
call npm run build:production

if not exist "..\AlphaTONCapitalIR-dev" (
    echo Creating dist repository directory...
    mkdir "..\AlphaTONCapitalIR-dev"
    cd "..\AlphaTONCapitalIR-dev"
    git init
    git remote add origin https://github.com/gabrielbarbera/AlphaTONCapitalIR-dev.git
    cd "..\AlphaTonIR"
)

echo Syncing dist/ contents...
xcopy "dist\*" "..\AlphaTONCapitalIR-dev\" /E /I /Y

echo Committing changes...
cd "..\AlphaTONCapitalIR-dev"
git add .
git commit -m "Update production build - %date% %time%"
git push origin main

echo Sync complete!
cd "..\AlphaTonIR"
pause
