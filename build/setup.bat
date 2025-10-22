@echo off
echo ========================================
echo AlphaTON Capital IR Website Build Setup
echo ========================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    echo Minimum version required: Node.js 14+
    pause
    exit /b 1
)

echo Node.js version:
node --version

echo.
echo Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed or not in PATH
    pause
    exit /b 1
)

echo npm version:
npm --version

echo.
echo Installing dependencies...
cd build
npm install

if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

cd ..
echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Available commands:
echo   npm run dev          - Development build
echo   npm run watch        - Watch mode (recommended)
echo   npm run build        - Production build
echo   npm run build:production - Notified-ready build
echo.
echo Quick start:
echo   npm run watch
echo.
echo This will watch for file changes and rebuild automatically.
echo.
pause
