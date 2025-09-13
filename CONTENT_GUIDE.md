# NotADoctor Content Customization Guide

## 🎯 Overview

This guide shows you exactly where and how to customize your NotADoctor intelligent nursing device content in the single-page Hugo site. All content is located in `themes/product-theme/layouts/index.html`.

## 📝 Step-by-Step Content Addition

### 1. Hero Section - Main Product Info

**File:** `themes/product-theme/layouts/index.html` (Lines 13-25)

**What to change:**

```html
<!-- Line 13: Product Name -->
<h1 class="display-3 fw-bold mb-4 text-white" style="text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
    NotADoctor
</h1>

<!-- Line 16: Product Description -->
<p class="lead mb-4 text-white-50" style="font-size: 1.25rem; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
    Intelligent Nursing Device with AI-powered vital monitoring. Healthcare for all.
</p>

<!-- Lines 18-24: Pricing -->
<span class="price-tag me-3" style="font-size: 2rem; padding: 1rem 1.5rem;">$580 CAD</span>
<div class="text-decoration-line-through text-white-50">$725 CAD</div>
<div class="fw-bold text-warning">Save $145 CAD!</div>
```

### 2. Product Icon/Image

**File:** `themes/product-theme/layouts/index.html` (Lines 33-40)

**What to change:**

```html
<!-- Line 37: Medical device icon -->
<i class="fas fa-heartbeat fa-5x text-white" style="filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));"></i>
```

**Medical device Font Awesome icons:**
- `fa-heartbeat` - for vital monitoring devices
- `fa-stethoscope` - for medical equipment
- `fa-user-md` - for medical devices
- `fa-thermometer-half` - for temperature monitoring
- `fa-heart` - for heart rate monitors
- `fa-lungs` - for respiratory devices
- `fa-brain` - for AI-powered devices
- `fa-microchip` - for smart medical devices
- `fa-shield-alt` - for medical safety devices
- `fa-robot` - for AI assistants like NurseAI

### 3. Features Section

**File:** `themes/product-theme/layouts/index.html` (Lines 60-120)

**What to change:**

```html
<!-- Line 60: Section title -->
<h2 class="display-5 fw-bold mb-3">Why Choose NotADoctor?</h2>

<!-- Lines 65-120: Individual feature cards -->
<h5 class="card-title fw-bold">Vital Monitoring</h5>
<p class="card-text text-muted">Continuous monitoring of temperature, blood pressure, and SPO2</p>

<!-- Change icons for each feature -->
<i class="fas fa-heartbeat fa-2x text-primary"></i>
```

**NotADoctor feature suggestions:**
- `fa-heartbeat` - Vital Monitoring
- `fa-robot` - NurseAI Assistant
- `fa-shield-alt` - Medical Grade (High-precision components)
- `fa-mobile-alt` - Smart Connectivity
- `fa-thermometer-half` - Temperature Monitoring
- `fa-heart` - Blood Pressure Monitoring
- `fa-lungs` - SPO2 Monitoring
- `fa-brain` - AI-Powered Insights
- `fa-microchip` - Advanced Sensors
- `fa-cloud` - Cloud Data Sync

### 4. Pre-Order Pricing

**File:** `themes/product-theme/layouts/index.html` (Lines 140-160)

**What to change:**

```html
<!-- Line 147: Pre-order price -->
<div class="text-primary fw-bold">$580 CAD</div>

<!-- Line 152: Availability date -->
<div class="text-warning fw-bold">March 15, 2024</div>

<!-- Line 157: Pre-order end date -->
<div class="text-danger fw-bold">Feb 28, 2024</div>
```

### 5. Pre-Order Form Pricing

**File:** `themes/product-theme/layouts/index.html` (Lines 200-210)

**What to change:**

```html
<!-- Lines 200-210: Quantity options with pricing -->
<option value="1">1 - $580 CAD</option>
<option value="2">2 - $1,160 CAD</option>
<option value="3">3 - $1,740 CAD</option>
<option value="4">4 - $2,320 CAD</option>
<option value="5">5 - $2,900 CAD</option>
```

### 6. Form Button Text

**File:** `themes/product-theme/layouts/index.html` (Line 250)

**What to change:**

```html
<button type="submit" class="btn btn-warning btn-lg px-5 py-4 fw-bold" style="font-size: 1.2rem;">
    <i class="fas fa-rocket me-3"></i>Place Pre-Order - $580 CAD
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
