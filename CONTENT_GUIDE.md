# Product Content Addition Guide

## 🎯 Overview

This guide shows you exactly where and how to add your product content to the single-page Hugo site. All content is located in `themes/product-theme/layouts/index.html`.

## 📝 Step-by-Step Content Addition

### 1. Hero Section - Main Product Info

**File:** `themes/product-theme/layouts/index.html` (Lines 13-25)

**What to change:**

```html
<!-- Line 13: Product Name -->
<h1 class="display-3 fw-bold mb-4 text-white" style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
    YOUR PRODUCT NAME HERE
</h1>

<!-- Line 16: Product Description -->
<p class="lead mb-4 text-white-50" style="font-size: 1.25rem; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
    YOUR PRODUCT DESCRIPTION HERE
</p>

<!-- Lines 18-24: Pricing -->
<span class="price-tag me-3" style="font-size: 2rem; padding: 1rem 1.5rem;">$YOUR_PRICE</span>
<div class="text-decoration-line-through text-white-50">$REGULAR_PRICE</div>
<div class="fw-bold text-warning">Save $SAVINGS!</div>
```

### 2. Product Icon/Image

**File:** `themes/product-theme/layouts/index.html` (Lines 33-40)

**What to change:**

```html
<!-- Line 37: Change the icon -->
<i class="fas fa-YOUR_ICON fa-5x text-white" style="filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));"></i>
```

**Popular Font Awesome icons:**
- `fa-laptop` - for computers/laptops
- `fa-mobile-alt` - for phones
- `fa-headphones` - for audio devices
- `fa-camera` - for cameras
- `fa-gamepad` - for gaming devices
- `fa-watch` - for smartwatches
- `fa-tablet-alt` - for tablets
- `fa-gem` - for premium products
- `fa-cube` - for general products
- `fa-star` - for featured products

### 3. Features Section

**File:** `themes/product-theme/layouts/index.html` (Lines 60-120)

**What to change:**

```html
<!-- Line 60: Section title -->
<h2 class="display-5 fw-bold mb-3">Why Choose YOUR PRODUCT?</h2>

<!-- Lines 65-120: Individual feature cards -->
<h5 class="card-title fw-bold">YOUR FEATURE 1</h5>
<p class="card-text text-muted">YOUR FEATURE DESCRIPTION</p>

<!-- Change icons for each feature -->
<i class="fas fa-YOUR_ICON fa-2x text-primary"></i>
```

**Feature icon suggestions:**
- `fa-cogs` - Advanced Technology
- `fa-award` - Premium Quality
- `fa-headset` - 24/7 Support
- `fa-shipping-fast` - Free Shipping
- `fa-shield-alt` - Security
- `fa-bolt` - Fast Performance
- `fa-battery-full` - Long Battery Life
- `fa-wifi` - Connectivity

### 4. Pre-Order Pricing

**File:** `themes/product-theme/layouts/index.html` (Lines 140-160)

**What to change:**

```html
<!-- Line 147: Pre-order price -->
<div class="text-primary fw-bold">$YOUR_PREORDER_PRICE</div>

<!-- Line 152: Availability date -->
<div class="text-warning fw-bold">YOUR_DATE</div>

<!-- Line 157: Pre-order end date -->
<div class="text-danger fw-bold">YOUR_END_DATE</div>
```

### 5. Pre-Order Form Pricing

**File:** `themes/product-theme/layouts/index.html` (Lines 200-210)

**What to change:**

```html
<!-- Lines 200-210: Quantity options with pricing -->
<option value="1">1 - $YOUR_PRICE</option>
<option value="2">2 - $YOUR_PRICE_X2</option>
<option value="3">3 - $YOUR_PRICE_X3</option>
<option value="4">4 - $YOUR_PRICE_X4</option>
<option value="5">5 - $YOUR_PRICE_X5</option>
```

### 6. Form Button Text

**File:** `themes/product-theme/layouts/index.html` (Line 250)

**What to change:**

```html
<button type="submit" class="btn btn-warning btn-lg px-5 py-4 fw-bold" style="font-size: 1.2rem;">
    <i class="fas fa-rocket me-3"></i>Place Pre-Order - $YOUR_PRICE
</button>
```

### 7. Contact Information

**File:** `themes/product-theme/layouts/index.html` (Lines 280-300)

**What to change:**

```html
<!-- Email -->
<a href="mailto:YOUR_EMAIL" class="text-decoration-none">
    YOUR_EMAIL
</a>

<!-- Phone -->
<a href="tel:YOUR_PHONE" class="text-decoration-none">
    YOUR_PHONE
</a>

<!-- Address -->
<p class="mb-0">YOUR_ADDRESS</p>

<!-- Business Hours -->
<p class="mb-0">YOUR_HOURS</p>
```

## 🚀 Quick Examples

### Smartphone Product Example

```html
<!-- Hero Section -->
<h1>iPhone 15 Pro Max</h1>
<p>Experience the future with our latest flagship smartphone. Pre-order now and save $200!</p>
<span class="price-tag">$999.99</span>
<div class="text-decoration-line-through">$1,199.99</div>

<!-- Icon -->
<i class="fas fa-mobile-alt fa-5x text-white"></i>

<!-- Features -->
<h2>Why Choose iPhone 15 Pro Max?</h2>
<h5>A17 Pro Chip</h5>
<p>Most powerful smartphone chip ever</p>
<i class="fas fa-microchip fa-2x text-primary"></i>
```

### Laptop Product Example

```html
<!-- Hero Section -->
<h1>MacBook Pro 16"</h1>
<p>Professional-grade laptop with M3 Max chip. Pre-order now and save $300!</p>
<span class="price-tag">$2,499.99</span>
<div class="text-decoration-line-through">$2,799.99</div>

<!-- Icon -->
<i class="fas fa-laptop fa-5x text-white"></i>

<!-- Features -->
<h2>Why Choose MacBook Pro 16"?</h2>
<h5>M3 Max Chip</h5>
<p>Ultimate performance for professionals</p>
<i class="fas fa-microchip fa-2x text-primary"></i>
```

## 📋 Content Checklist

- [ ] **Product Name** (Hero section)
- [ ] **Product Description** (Hero section)
- [ ] **Product Icon** (Hero section)
- [ ] **Pre-order Price** (Multiple locations)
- [ ] **Regular Price** (Hero section)
- [ ] **Savings Amount** (Hero section)
- [ ] **Availability Date** (Pre-order section)
- [ ] **Pre-order End Date** (Pre-order section)
- [ ] **Product Features** (Features section)
- [ ] **Contact Information** (Contact section)

## 💡 Pro Tips

1. **Keep descriptions concise** - Users scan quickly
2. **Use specific numbers** - "Save $200" vs "Save money"
3. **Highlight unique features** - What makes your product special
4. **Use relevant icons** - Match your product type
5. **Test pricing math** - Ensure all calculations are correct
6. **Update all price references** - Check hero, pre-order section, and form
7. **Use consistent formatting** - Keep dates and prices in same format

## 🔧 Technical Notes

- **File location:** `themes/product-theme/layouts/index.html`
- **Auto-rebuild:** Hugo server automatically rebuilds on save
- **Preview:** Visit `http://localhost:1313/` to see changes
- **Backup:** Consider backing up the file before major changes

## 🎨 Styling Customization

### Color Scheme
The site uses CSS variables for easy color customization:

```css
:root {
    --primary-color: #1e40af;    /* Main brand color */
    --accent-color: #3b82f6;     /* Accent/highlight color */
    --text-color: #f8fafc;       /* Main text color */
    --dark-bg: #0f172a;          /* Dark background */
}
```

### Font Awesome Icons
Browse available icons at: https://fontawesome.com/icons

### Bootstrap Classes
The site uses Bootstrap 5 for responsive design and components.

## 🚀 Getting Started

1. **Open the file:** `themes/product-theme/layouts/index.html`
2. **Find the sections** using the line numbers above
3. **Replace placeholder text** with your product information
4. **Save the file** and check `http://localhost:1313/`
5. **Repeat** for all sections until complete

## 📞 Need Help?

- Check the Hugo documentation: https://gohugo.io/
- Font Awesome icons: https://fontawesome.com/icons
- Bootstrap documentation: https://getbootstrap.com/docs/5.3/

---

**Happy customizing! 🎉**
