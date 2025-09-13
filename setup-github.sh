#!/bin/bash

# GitHub Setup Script for Hugo Product Site
echo "🚀 Setting up GitHub deployment for your Hugo site..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if hugo is installed
if ! command -v hugo &> /dev/null; then
    echo "❌ Hugo is not installed. Please install Hugo first."
    exit 1
fi

echo "✅ Git and Hugo are installed"

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
else
    echo "✅ Git repository already exists"
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "✅ No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Initial commit: Hugo product site with pre-order functionality"
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Create a new repository on GitHub.com"
echo "2. Run these commands (replace with your details):"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "   git push -u origin main"
echo ""
echo "3. Go to your repository Settings > Pages"
echo "4. Select 'GitHub Actions' as source"
echo "5. Your site will be deployed automatically!"
echo ""
echo "📚 See DEPLOYMENT_GUIDE.md for detailed instructions"
echo "📝 See CONTENT_GUIDE.md for content customization"
echo ""
echo "🌐 Your site will be live at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
echo ""
echo "Happy deploying! 🚀✨"

