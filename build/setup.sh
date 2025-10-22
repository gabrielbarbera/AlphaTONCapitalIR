#!/bin/bash

echo "========================================"
echo "AlphaTON Capital IR Website Build Setup"
echo "========================================"
echo

echo "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed or not in PATH"
    echo "Please install Node.js from https://nodejs.org/"
    echo "Minimum version required: Node.js 14+"
    exit 1
fi

echo "Node.js version:"
node --version

echo
echo "Checking npm installation..."
if ! command -v npm &> /dev/null; then
    echo "ERROR: npm is not installed or not in PATH"
    exit 1
fi

echo "npm version:"
npm --version

echo
echo "Installing dependencies..."
cd build
npm install

if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install dependencies"
    exit 1
fi

cd ..
echo
echo "========================================"
echo "Setup Complete!"
echo "========================================"
echo
echo "Available commands:"
echo "  npm run dev          - Development build"
echo "  npm run watch        - Watch mode (recommended)"
echo "  npm run build        - Production build"
echo "  npm run build:production - Notified-ready build"
echo
echo "Quick start:"
echo "  npm run watch"
echo
echo "This will watch for file changes and rebuild automatically."
echo
