# Development Server Configuration
# This file helps resolve CORS issues when developing locally

## Option 1: Use Live Server with CORS disabled
# In VS Code with Live Server extension:
# 1. Right-click on index.html
# 2. Select "Open with Live Server"
# 3. The server should handle CORS automatically

## Option 2: Use Python HTTP Server (if Python is installed)
# Run this command in your project root:
# python -m http.server 8000
# Then visit: http://localhost:8000

## Option 3: Use Node.js HTTP Server
# Install: npm install -g http-server
# Run: http-server -p 8000 --cors
# Then visit: http://localhost:8000

## Option 4: Use PHP Built-in Server (if PHP is installed)
# Run: php -S localhost:8000
# Then visit: http://localhost:8000

## Current Solution
The components now have fallback HTML embedded in JavaScript, so they will work regardless of CORS restrictions. In development, you'll see a warning message in the console, but the components will still load and function properly.

## Production Deployment
When deployed to a proper web server (Apache, Nginx, etc.), the CORS restrictions won't apply and the external HTML files will load normally.
