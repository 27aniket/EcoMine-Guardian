/**
 * Application Constants
 * Contains configuration, dummy data, and external URLs
 */

// Color Palette
export const COLORS = {
  primary: "#166534", // Forest Green
  secondary: "#22c55e", // Lime Green
  accent: "#f59e0b", // Amber
  neutral: "#f8fafc", // Slate Light
  dark: "#1f2937",
  lightGray: "#f3f4f6",
};

// External URLs
export const EXTERNAL_URLS = {
  gisDashboard: "https://www.google.com/maps",
  droneSurvey: "https://earth.google.com/web/",
  monitoringPortal: "https://www.esri.com/en-us/arcgis/about-arcgis/overview",
  sustainabilityReports: "https://www.un.org/sustainabledevelopment/",
};

// Office Contact Information
export const OFFICES = {
  uk: {
    name: "UK Office",
    //     address: "123 Green Street, California, USA",
    emails: ["rohit@i2s.in ", "ankit@i2s.in "],
    phones: ["+44 7795 047527", "+44 7552 560585"],
    coordinates: {
      lat: 34.0522,
      lng: -118.2437,
    },
  },
  india: {
    name: "India Office",
    //     address: "Delhi, India",
    email: "vikash@i2s.in",
    phones: ["+91 98918 43471"],
    coordinates: {
      lat: 28.6139,
      lng: 77.209,
    },
    regions: [
      {
        name: "Rajasthan",
        lat: 27.0238,
        lng: 74.2179,
      },
      {
        name: "Delhi",
        lat: 28.6139,
        lng: 77.209,
      },
      {
        name: "Bihar",
        lat: 25.5941,
        lng: 85.1376,
      },
    ],
  },
};

// Plantation Statistics
export const STATISTICS = [
  {
    id: 1,
    label: "Trees Planted",
    value: 50000,
    icon: "🌳",
  },
  {
    id: 2,
    label: "Plantation Sites",
    value: 156,
    icon: "📍",
  },
  {
    id: 3,
    label: "Area Reclaimed",
    value: 2450,
    unit: "hectares",
    icon: "🌍",
  },
  {
    id: 4,
    label: "QR Codes Generated",
    value: 12500,
    icon: "📱",
  },
];

// Workflow Steps
export const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "Tree Plantation Completed",
    description: "Coal mine area plantation execution completed",
  },
  {
    id: 2,
    title: "QR Code Generated & Attached",
    description: "Unique QR code created and tagged to plantation site",
  },
  {
    id: 3,
    title: "Officer Scans QR Code",
    description: "Field officer scans QR code using mobile device",
  },
  {
    id: 4,
    title: "Plantation Details Retrieved",
    description: "System retrieves plantation information from database",
  },
  {
    id: 5,
    title: "Report & Images Generated",
    description: "Monitoring report and site images displayed",
  },
];

// Intent to Solution Workflow Cards
export const WORKFLOW_CARDS = [
  {
    id: 1,
    title: "QR Basic",
    description:
      "Essential QR-based tree plantation monitoring solution for individual plantation sites.",
    items: [
      "Plantation Image Preview",
      "Basic Plantation Details",
      "Simple Monitoring Access",
    ],
    icon: "📱",
    color: "from-blue-500 to-blue-600",
    link: "/1qr.html",
  },
  {
    id: 2,
    title: "QR Standard",
    description:
      "Advanced monitoring package with geo-referenced data and plantation tracking capabilities.",
    items: [
      "QR Code Tagging",
      "Geo-referenced Monitoring",
      "Growth Tracking Reports",
    ],
    icon: "🌱",
    color: "from-green-500 to-green-600",
    link: "/2qr.html",
  },
  {
    id: 3,
    title: "QR Full Solution",
    description:
      "Complete end-to-end plantation intelligence platform with GIS, analytics, and reporting.",
    items: [
      "GIS Integration",
      "Satellite & Drone Monitoring",
      "Analytics & Sustainability Reports",
    ],
    icon: "🚀",
    color: "from-amber-500 to-amber-600",
    link: "/3qr.html",
  },
];

// Gallery Images (Dummy Data)
export const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Before Plantation",
    category: "before",
    imageUrl:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    description: "Barren coal mining area before afforestation",
  },
  {
    id: 2,
    title: "Plantation Day",
    category: "during",
    imageUrl:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    description: "Tree plantation in progress",
  },
  {
    id: 3,
    title: "Three Months Growth",
    category: "after",
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    description: "Plantation site after 3 months",
  },
  {
    id: 4,
    title: "Drone Survey",
    category: "drone",
    imageUrl:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&h=400&fit=crop",
    description: "Aerial drone survey of plantation",
  },
  {
    id: 5,
    title: "Satellite Monitoring",
    category: "satellite",
    imageUrl:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
    description: "Satellite imagery monitoring",
  },
  {
    id: 6,
    title: "One Year Growth",
    category: "after",
    imageUrl:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&h=400&fit=crop",
    description: "Forest ecosystem after one year",
  },
];

// External Links for Buttons
export const EXTERNAL_LINKS = [
  {
    id: 1,
    label: "Open GIS Dashboard",
    icon: "🗺️",
    url: EXTERNAL_URLS.gisDashboard,
    description: "Access comprehensive GIS mapping dashboard",
  },
  {
    id: 2,
    label: "View Drone Survey",
    icon: "🚁",
    url: EXTERNAL_URLS.droneSurvey,
    description: "View aerial drone survey footage",
  },
  {
    id: 3,
    label: "Plantation Monitoring Portal",
    icon: "📱",
    url: EXTERNAL_URLS.monitoringPortal,
    description: "Access real-time monitoring portal",
  },
  {
    id: 4,
    label: "Sustainability Reports",
    icon: "📊",
    url: EXTERNAL_URLS.sustainabilityReports,
    description: "View sustainability and impact reports",
  },
];

// Social Media Links
export const SOCIAL_LINKS = [
  {
    id: 1,
    name: "Twitter",
    icon: "Twitter",
    url: "https://twitter.com",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Facebook",
    icon: "Facebook",
    url: "https://facebook.com",
  },
  {
    id: 4,
    name: "Instagram",
    icon: "Instagram",
    url: "https://instagram.com",
  },
];
