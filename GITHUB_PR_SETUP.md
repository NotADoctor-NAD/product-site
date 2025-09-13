# GitHub PR-Based Form Submission Setup

## 🚀 **Overview**

This setup creates a system where form submissions automatically create GitHub Pull Requests, allowing you to:
- **Review each submission** as a PR
- **Comment and discuss** orders with your team
- **Track status** through PR labels and comments
- **Approve/merge** to process orders
- **Reject** by closing PRs

## 📋 **What Happens When Someone Submits a Form**

1. **Form submission** → Webhook handler receives data
2. **GitHub API call** → Triggers repository dispatch event
3. **GitHub Action runs** → Creates new branch with submission data
4. **Pull Request created** → You get notified and can review
5. **Review process** → Comment, approve, or reject
6. **Merge/close** → Process or reject the order

## 🔧 **Setup Steps**

### **Step 1: Create GitHub Personal Access Token**

1. **Go to GitHub Settings** → Developer settings → Personal access tokens
2. **Generate new token** with these permissions:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
3. **Copy the token** (you'll need it for the webhook handler)

### **Step 2: Set Up Webhook Handler**

#### **Option A: Deploy to Vercel (Recommended)**

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy the webhook handler:**
   ```bash
   vercel --prod
   ```

3. **Set environment variables in Vercel dashboard:**
   ```
   GITHUB_TOKEN=your_github_token_here
   GITHUB_OWNER=your_github_username
   GITHUB_REPO=product-site
   ```

#### **Option B: Deploy to Railway**

1. **Push to GitHub** (if not already done)
2. **Connect to Railway** and deploy
3. **Set environment variables** in Railway dashboard

#### **Option C: Local Development**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```
   GITHUB_TOKEN=your_github_token_here
   GITHUB_OWNER=your_github_username
   GITHUB_REPO=product-site
   ```

3. **Run locally:**
   ```bash
   npm start
   ```

4. **Use ngrok for webhook testing:**
   ```bash
   npx ngrok http 3000
   ```

### **Step 3: Update Form Actions**

The forms are already configured to use the webhook endpoints:
- **Pre-order form:** `/webhook/pre-order`
- **Contact form:** `/webhook/contact`

If you deployed to a different URL, update these in `themes/product-theme/layouts/_default/pre-order.html`.

### **Step 4: Test the System**

1. **Submit a test pre-order** through your site
2. **Check GitHub** for a new PR with the submission
3. **Verify the PR** contains all the form data
4. **Test the contact form** as well

## 📊 **What You'll See in GitHub**

### **Pre-Order PR Example:**
```
🚀 Pre-Order: John Doe

## New Pre-Order Submission

**Customer:** John Doe
**Email:** john@example.com
**Phone:** +1 (555) 123-4567

**Order Details:**
- Quantity: 2
- Color: Black
- Special Requests: Please include gift wrapping
- Total: $499.98

**Status:** Pending Review

---

### Review Checklist
- [ ] Customer information verified
- [ ] Order details confirmed
- [ ] Contact customer if needed
- [ ] Ready to process

### Actions
- Approve and merge to process the order
- Comment with any questions
- Close PR to reject the order
```

### **Contact PR Example:**
```
📧 Contact: Pre-Order Question

## New Contact Inquiry

**Customer:** Jane Smith
**Email:** jane@example.com
**Phone:** +1 (555) 987-6543

**Inquiry:**
- Subject: Pre-Order Question
- Message: When will the product be available?

**Status:** Pending Response
```

## 🏷️ **PR Labels and Workflow**

### **Labels:**
- `pre-order` - Pre-order submissions
- `contact` - Contact inquiries
- `pending-review` - Needs review
- `pending-response` - Needs response

### **Workflow:**
1. **PR Created** → Automatically assigned to you
2. **Review** → Check customer info and order details
3. **Comment** → Ask questions or request changes
4. **Approve** → Ready to process
5. **Merge** → Order processed
6. **Close** → Order rejected

## 📁 **File Structure Created**

### **Pre-Orders:**
```
pre-orders/
├── 20241228-143022.md  # Pre-order submission
├── 20241228-150145.md  # Another submission
└── ...
```

### **Contact Inquiries:**
```
contact-inquiries/
├── 20241228-143022.md  # Contact inquiry
├── 20241228-150145.md  # Another inquiry
└── ...
```

## 🔒 **Security Considerations**

1. **GitHub Token** - Keep it secure, rotate regularly
2. **Webhook URL** - Use HTTPS in production
3. **Rate Limiting** - GitHub has API rate limits
4. **Validation** - Consider adding form validation

## 🚀 **Deployment Options**

### **Vercel (Recommended):**
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Easy environment variable management
- ✅ Good performance

### **Railway:**
- ✅ Simple deployment
- ✅ Good for Node.js apps
- ✅ Environment variable support

### **Heroku:**
- ✅ Reliable platform
- ✅ Good documentation
- ✅ Free tier available

### **DigitalOcean App Platform:**
- ✅ Scalable
- ✅ Good performance
- ✅ Reasonable pricing

## 🐛 **Troubleshooting**

### **Common Issues:**

1. **Webhook not triggering:**
   - Check GitHub token permissions
   - Verify webhook URL is accessible
   - Check GitHub Action workflow file

2. **PR not created:**
   - Check GitHub Action logs
   - Verify repository permissions
   - Check workflow file syntax

3. **Form submission fails:**
   - Check webhook handler logs
   - Verify environment variables
   - Test webhook endpoint directly

### **Debug Commands:**
```bash
# Test webhook endpoint
curl -X POST https://your-webhook-url.com/webhook/pre-order \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"1234567890","quantity":1,"color":"black","specialRequests":"test"}'

# Check GitHub Action logs
# Go to Actions tab in your GitHub repository
```

## 🎯 **Next Steps**

1. **Deploy the webhook handler**
2. **Set up environment variables**
3. **Test with a sample submission**
4. **Customize the workflow** as needed
5. **Set up notifications** (email, Slack, etc.)

## 💡 **Pro Tips**

- **Use PR templates** for consistent formatting
- **Set up branch protection** rules
- **Configure notifications** for new PRs
- **Create custom labels** for different order types
- **Use GitHub Projects** to track orders
- **Set up automated responses** for common questions

Your GitHub PR-based form submission system is now ready! 🚀✨
