# Form Submission Setup Guide

## 📋 **Current Form Status**

Your Hugo site now has properly configured forms with `name` attributes and form actions, but you need to set up the backend processing. Here are your options:

## 🚀 **Option 1: Formspree (Recommended - Easiest)**

### Setup Steps:
1. **Go to [Formspree.io](https://formspree.io)** and create a free account
2. **Create a new form** for pre-orders
3. **Get your form ID** (looks like `xrgjqkab`)
4. **Update the form action** in your template:

```html
<!-- Replace YOUR_FORM_ID with your actual Formspree form ID -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Benefits:
- ✅ **Free tier available** (100 submissions/month)
- ✅ **No server setup required**
- ✅ **Email notifications**
- ✅ **Spam protection**
- ✅ **Form data dashboard**

## 🚀 **Option 2: Netlify Forms (If hosting on Netlify)**

### Setup Steps:
1. **Deploy your Hugo site to Netlify**
2. **Add `netlify` attribute** to your forms:

```html
<form action="/thank-you" method="POST" netlify>
```

3. **Create a thank you page** at `content/thank-you.md`

### Benefits:
- ✅ **Free with Netlify hosting**
- ✅ **Built-in spam protection**
- ✅ **Form data in Netlify dashboard**
- ✅ **Email notifications**

## 🚀 **Option 3: Custom Backend (Advanced)**

### Setup Steps:
1. **Create a server** (Node.js, PHP, Python, etc.)
2. **Set up email sending** (SendGrid, Mailgun, etc.)
3. **Update form action** to point to your server:

```html
<form action="https://your-server.com/submit-preorder" method="POST">
```

### Benefits:
- ✅ **Full control over data**
- ✅ **Custom validation**
- ✅ **Database integration**
- ✅ **Advanced features**

## 🚀 **Option 4: Google Forms (Quick Setup)**

### Setup Steps:
1. **Create a Google Form**
2. **Get the form URL**
3. **Use iframe or redirect** to Google Form

### Benefits:
- ✅ **Completely free**
- ✅ **No setup required**
- ✅ **Responses in Google Sheets**

## 📧 **Current Form Configuration**

### Pre-Order Form Fields:
- `firstName` - Customer's first name
- `lastName` - Customer's last name  
- `email` - Customer's email address
- `phone` - Customer's phone number
- `quantity` - Number of items (1-5)
- `color` - Color preference (silver/black/gold)
- `specialRequests` - Additional notes

### Contact Form Fields:
- `firstName` - Customer's first name
- `lastName` - Customer's last name
- `email` - Customer's email address
- `phone` - Customer's phone number
- `subject` - Message subject
- `message` - Customer's message

## 🔧 **Quick Setup with Formspree**

1. **Sign up at [Formspree.io](https://formspree.io)**
2. **Create two forms**: one for pre-orders, one for contact
3. **Update these lines** in `themes/product-theme/layouts/_default/pre-order.html`:

```html
<!-- Line ~200: Pre-order form -->
<form action="https://formspree.io/f/YOUR_PREORDER_FORM_ID" method="POST" id="pre-order-form">

<!-- Line ~350: Contact form -->
<form action="https://formspree.io/f/YOUR_CONTACT_FORM_ID" method="POST" id="contact-form">
```

4. **Replace `YOUR_PREORDER_FORM_ID`** and `YOUR_CONTACT_FORM_ID` with your actual Formspree form IDs

## 📊 **Form Data You'll Receive**

### Pre-Order Submission:
```
Subject: New Pre-Order Submission
From: [customer email]
Message:
- Name: John Doe
- Email: john@example.com
- Phone: +1 (555) 123-4567
- Quantity: 2
- Color: Black
- Special Requests: Please include gift wrapping
```

### Contact Submission:
```
Subject: Pre-Order Question
From: [customer email]
Message:
- Name: Jane Smith
- Email: jane@example.com
- Phone: +1 (555) 987-6543
- Subject: Pre-Order Question
- Message: When will the product be available?
```

## 🎯 **Next Steps**

1. **Choose your form submission method** (Formspree recommended)
2. **Set up the backend service**
3. **Update the form actions** in your template
4. **Test the forms** to ensure they work
5. **Set up email notifications** for new submissions

## 💡 **Pro Tips**

- **Use Formspree** for the easiest setup
- **Set up spam protection** to avoid fake submissions
- **Create a thank you page** for better user experience
- **Test forms thoroughly** before going live
- **Monitor submissions** regularly

Your forms are now properly configured and ready for backend setup! 🚀
