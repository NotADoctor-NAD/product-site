# Product Site - Hugo

A modern, responsive product website built with Hugo featuring beautiful design and comprehensive contact information.

## Features

- **Modern Design**: Clean, professional design with Bootstrap 5 and custom CSS
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Product Showcase**: Detailed product pages with features and specifications
- **Contact Information**: Multiple contact methods including email, phone, and address
- **Contact Forms**: Interactive contact forms for customer inquiries
- **Fast Performance**: Static site generation for optimal speed
- **SEO Optimized**: Proper meta tags and structured content

## Pages

### Home Page (`/`)
- Hero section with product introduction
- Feature highlights
- Product preview
- Contact information and form

### Products Page (`/products/`)
- Grid layout of all products
- Product cards with key information
- Contact section for assistance

### Individual Product Page (`/products/main-product/`)
- Detailed product information
- Features and specifications
- Pricing information
- Comprehensive contact section
- Call-to-action buttons

## Contact Information

The site includes multiple ways for customers to get in touch:

- **Email**: sales@company.com
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Business St, City, State 12345
- **Business Hours**: Mon-Fri: 9AM-6PM EST

## Getting Started

### Prerequisites

- Hugo installed on your system
- Git (optional, for version control)

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Run the development server:

```bash
hugo server --buildDrafts
```

4. Open your browser and visit `http://localhost:1313`

### Building for Production

To build the site for production:

```bash
hugo
```

The built site will be in the `public/` directory.

## Customization

### Adding Products

1. Create a new markdown file in `content/products/`
2. Use the following front matter structure:

```yaml
---
title: "Product Name"
date: 2024-01-01
draft: false
description: "Product description"
price: "$299.99"
features:
  - "Feature 1"
  - "Feature 2"
  - "Feature 3"
contact:
  email: "sales@company.com"
  phone: "+1 (555) 123-4567"
  address: "123 Business St, City, State 12345"
  hours: "Mon-Fri: 9AM-6PM EST"
---
```

### Modifying Contact Information

Update the contact information in:
- Individual product files (`content/products/*.md`)
- Template files in `themes/product-theme/layouts/`

### Styling

The site uses:
- Bootstrap 5 for responsive layout
- Font Awesome for icons
- Custom CSS variables for consistent theming

Main color variables (in `themes/product-theme/layouts/_default/baseof.html`):
- `--primary-color`: #2563eb (Blue)
- `--secondary-color`: #1e40af (Dark Blue)
- `--accent-color`: #f59e0b (Orange)
- `--text-color`: #1f2937 (Dark Gray)
- `--light-bg`: #f8fafc (Light Gray)

## File Structure

```
product-site/
├── content/
│   └── products/
│       └── main-product.md
├── themes/
│   └── product-theme/
│       └── layouts/
│           ├── _default/
│           │   ├── baseof.html
│           │   └── single.html
│           ├── products/
│           │   └── list.html
│           └── index.html
├── hugo.toml
└── README.md
```

## Deployment

The site can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `public/` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a GitHub repository
- **AWS S3**: Upload the `public/` folder contents

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please contact:
- Email: sales@company.com
- Phone: +1 (555) 123-4567
