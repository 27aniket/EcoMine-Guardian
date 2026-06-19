# Coal Mine Afforestation Monitoring System

A modern, fully responsive React.js application for showcasing tree plantation activities in coal mining areas with QR code-based monitoring, real-time analytics, and interactive maps.

## 🌱 Project Overview

The Coal Mine Afforestation Monitoring System is a comprehensive web application designed to:

- Showcase tree plantation activities in reclaimed coal mining areas
- Enable QR code scanning for field officers to access plantation details
- Provide real-time monitoring and reporting capabilities
- Display GIS mapping and satellite monitoring data
- Track sustainability metrics and environmental impact

## 🚀 Features

### 1. **Landing Page (Hero Section)**

- Full-width background with gradient overlay
- Compelling heading and subheading
- Call-to-action buttons for site exploration and dashboard access
- Animated statistics preview
- Smooth scroll animations

### 2. **Intent to Solution Section**

- Three workflow cards displaying:
  - Site Identification & Planning
  - Tree Plantation & Monitoring
  - Analysis & Reporting
- Hover animations and glassmorphic design
- Responsive grid layout

### 3. **QR-Based Monitoring**

- Timeline visualization of QR monitoring process
- 5-step workflow display
- Benefits section with icons
- Progress tracking

### 4. **Plantation Gallery**

- Responsive image gallery with categories:
  - Before plantation
  - During plantation
  - After plantation
  - Drone surveys
  - Satellite monitoring
- Image modal preview
- Category filtering

### 5. **External Redirect Section**

- Quick access buttons to external tools:
  - GIS Dashboard
  - Drone Survey
  - Monitoring Portal
  - Sustainability Reports
- Open in new tab functionality
- Animated hover effects

### 6. **Statistics Section**

- Animated counter cards:
  - Trees Planted
  - Plantation Sites
  - Area Reclaimed (in hectares)
  - QR Codes Generated
- Scroll-triggered animations
- Call-to-action for engagement

### 7. **Footer with Maps**

- Two-column responsive layout
- **USA Office Section:**
  - Address, emails, phone numbers
  - Embedded React Leaflet Map with markers
  - Zoom and popup controls
- **India Office Section:**
  - Address, email, phone numbers
  - Map highlighting Rajasthan, Delhi, and Bihar
  - Animated region circles
- Quick links, policies, and social media icons
- Copyright and branding

## 🛠️ Technology Stack

- **Framework:** React.js 18+
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Maps:** React Leaflet + Leaflet
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Package Manager:** npm

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Footer.jsx
│   ├── ImageModal.jsx
│   ├── StatCard.jsx
│   ├── LoadingSkeletons.jsx
│   └── index.js
├── sections/
│   ├── Hero.jsx
│   ├── IntentToSolution.jsx
│   ├── QRMonitoring.jsx
│   ├── Gallery.jsx
│   ├── ExternalRedirect.jsx
│   ├── Statistics.jsx
│   └── index.js
├── pages/
│   └── Home.jsx
├── hooks/
│   └── index.js (useInView, useCounter, useScrollAnimation)
├── constants/
│   └── index.js (Configuration, dummy data)
├── routes/
│   └── index.js
├── assets/
├── App.jsx
├── main.jsx
├── index.css (Tailwind + custom styles)
└── vite.config.js
```

## 🎨 Design System

### Color Palette

- **Primary:** #166534 (Forest Green)
- **Secondary:** #22c55e (Lime Green)
- **Accent:** #f59e0b (Amber)
- **Neutral:** #f8fafc (Slate Light)

### Responsive Breakpoints

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Laptop:** 1024px - 1439px
- **Desktop:** ≥ 1440px

### UI Features

- Glassmorphism cards
- Gradient backgrounds
- Smooth scrolling behavior
- Scroll-triggered animations
- Hover interactions
- Loading skeletons
- Responsive typography
- Mobile-first design

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory:**

   ```bash
   cd coaltotree
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Dummy Data

The application uses pre-configured dummy data in `src/constants/index.js`:

- **Statistics:** Tree counts, plantation sites, area reclaimed, QR codes
- **Workflow Steps:** 5-step QR monitoring process
- **Workflow Cards:** 3 intent-to-solution cards
- **Gallery Images:** 6 sample images from Unsplash
- **Office Information:** USA and India office details with coordinates
- **External Links:** 4 external portal links
- **Social Media:** 4 social media links

## 🗺️ Maps Integration

### React Leaflet Features

- **USA Office Map:**
  - Centered on California coordinates
  - Custom marker with popup
  - Zoom level: 12
- **India Office Map:**
  - Regions highlighted: Rajasthan, Delhi, Bihar
  - Custom markers for each region
  - Animated circles around regions
  - Zoom level: 6

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text for images
- Color contrast compliance
- Mobile-friendly touch targets

## 🔒 Security Considerations

- No sensitive data stored in constants
- External links open with `noopener,noreferrer`
- Email and phone links use proper `mailto:` and `tel:` protocols
- Safe component exports and routing

## 🎯 SEO Features

- Semantic HTML
- Meta tags ready (can be added via Helmet or similar)
- Proper heading hierarchy
- Open Graph tags support
- Structured data ready

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Performance Optimizations

- Image lazy loading
- Scroll-triggered animations (IntersectionObserver)
- Component code splitting ready
- Optimized CSS with Tailwind purging
- Smooth animations with GPU acceleration

## 🎨 Customization

### Colors

Edit color variables in `tailwind.config.js`:

```javascript
colors: {
  "forest-green": "#166534",
  "lime-green": "#22c55e",
  "amber": "#f59e0b",
}
```

### External URLs

Update links in `src/constants/index.js`:

```javascript
export const EXTERNAL_URLS = {
  gisDashboard: "https://your-gis-url.com",
  // ...
};
```

### Contact Information

Modify office details in `src/constants/index.js`:

```javascript
export const OFFICES = {
  usa: {
    /* ... */
  },
  india: {
    /* ... */
  },
};
```

## 📝 License

This project is created for demonstration and educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support and inquiries:

- Email: contact@coaltotree.com
- Website: https://www.coaltotree.com

## 🙏 Acknowledgments

- Unsplash for placeholder images
- OpenStreetMap for map data
- Lucide React for icons
- Framer Motion for animations
- Tailwind CSS for styling
- React Leaflet for map integration

---

**Built with ❤️ for environmental sustainability and coal mine reclamation**
