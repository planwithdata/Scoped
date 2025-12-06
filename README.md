# 🌍 Scoped - Sustainability Analysis Platform

A comprehensive web application that analyzes sustainability metrics for any location worldwide. Click anywhere on the map to get instant insights into environmental health, social infrastructure, and economic sustainability.

![Scoped Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

## ✨ Features

### 🎯 **Interactive Analysis**
- **One-Click Analysis**: Click anywhere on the map for instant sustainability insights
- **Current Location**: Analyze your current location with GPS integration
- **Real-time Data**: Live data from multiple APIs for accurate assessments

### 📊 **Comprehensive Scoring System**
- **Overall Sustainability Score** (0-100) based on research standards
- **3 Category Scores**: Environmental (40%), Social (35%), Economic (25%)
- **8 Neighborhood Insights**: Air quality, traffic, green living, health & safety, energy & climate, employment opportunities, economic level, and climate resilience

### 🗺️ **Advanced Mapping**
- **Multiple Map Views**: Street map and satellite imagery
- **History Tracking**: View and revisit previous analyses
- **Interactive Markers**: Color-coded by sustainability score

### 📱 **Mobile Optimized**
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Touch-Friendly**: Optimized for mobile interaction
- **Collapsible Interface**: Three-state sidebar system for mobile

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)
1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from branch" → "main" → "/ (root)"
4. Your app will be live at `https://[username].github.io/Scoped/`

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/[username]/Scoped.git
cd Scoped

# Serve locally (recommended to avoid CORS issues)
npx http-server
# Open http://localhost:8080

# Or open directly in browser (may have API limitations)
open index.html
```

## 🔧 Configuration

### API Setup
1. Copy `config.js.example` to `config.js`
2. Add your OpenWeatherMap API key:
```javascript
const API_CONFIG = {
    OPENWEATHER_API_KEY: 'your_api_key_here',
    // ... other endpoints
};
```

### API Keys Required
- **OpenWeatherMap**: For real-time air quality and weather data
  - Get free key at: https://openweathermap.org/api
  - 1,000 calls/day free tier

## 📈 Scoring Methodology

### Research Foundation
- **UN Sustainable Development Goals (SDGs)**
- **WHO Air Quality Guidelines**
- **15-Minute City Principles**
- **Urban Planning Best Practices**
- **IPCC Climate Resilience Frameworks**

### Category Breakdown
```
🌱 Environmental Health (40%)
├── Air Quality (37.5%)
├── Green Spaces (30%)
├── Water Bodies (7.5%)
├── Temperature Comfort (12.5%)
├── Noise Levels (7.5%)
└── Biodiversity (5%)

🏥 Social Infrastructure (35%)
├── Healthcare Access (37.14%)
├── Education Facilities (25.71%)
├── Public Transport (25.71%)
└── Economic Level Proxy (11.43%)

🏪 Economic Sustainability (25%)
├── Essential Services (40%)
├── Business Infrastructure (20%)
└── Solar Energy Potential (40%)
```

## 🌐 Data Sources

### Environmental Data
- **OpenWeatherMap API**: Real-time air quality (PM2.5, AQI) and weather
- **NASA POWER**: Solar radiation and climate data
- **Open-Elevation API**: Elevation data for flood risk assessment

### Infrastructure Data
- **OpenStreetMap Overpass API**: Healthcare, education, transport, business facilities
- **OSM Data**: Green spaces, parks, water bodies, roads, protected areas

### Search Radii
- Green Spaces: 1km radius
- Healthcare & Business: 2km radius
- Education: 2km radius
- Transport: 1.5km radius
- Services: 1.5km radius
- Noise Analysis: 500m radius
- Biodiversity: 5km radius

## 🎨 User Interface

### Desktop Features
- **Resizable Sidebar**: Drag to resize (250px - 80% screen width)
- **Hover Tooltips**: Detailed explanations for all metrics
- **Header Controls**: Quick access to all features

### Mobile Features
- **Three-State Sidebar**: 70vh default → minimized → expanded → default
- **Floating Action Buttons**: Easy access to key functions
- **Touch Tooltips**: Tap to show metric explanations
- **Swipe Gestures**: Intuitive mobile navigation

### Expandable Sections
- **Category Cards**: Click to expand detailed breakdowns
- **Neighborhood Insights**: Collapsible detailed view
- **Layman Explanations**: Simple language tooltips for all metrics

## 📊 Score Categories

| Score Range | Category | Color | Description |
|-------------|----------|-------|-------------|
| 80-100 | Excellent | 🟢 Green | Outstanding sustainability |
| 60-79 | Good | 🟡 Light Green | Above average performance |
| 40-59 | Fair | 🟠 Yellow | Average sustainability |
| 20-39 | Poor | 🟠 Orange | Below average, needs improvement |
| 0-19 | Critical | 🔴 Red | Significant sustainability challenges |

## 🔄 API Rate Limits

- **OpenWeatherMap**: 1,000 calls/day (free tier)
- **Overpass API**: ~10,000 queries/day
- **NASA POWER**: No official limits (be respectful)
- **Open-Elevation**: No official limits (be respectful)

## 🛠️ Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Mapping**: MapLibre GL JS (open-source)
- **APIs**: OpenWeatherMap, NASA POWER, OpenStreetMap, Open-Elevation
- **Storage**: LocalStorage for history and preferences
- **Deployment**: GitHub Pages compatible

## 📁 Project Structure

```
Scoped/
├── index.html              # Main application file
├── config.js               # API configuration
├── .gitignore             # Git ignore file
├── README.md              # This file
├── sustainability-framework.md  # Detailed methodology
├── scoring-calculations.txt     # Score calculation formulas
└── api-tests/
    └── test-framework.html      # API testing interface
```

## 🚀 Future Enhancements

- [ ] **Cloudflare Workers**: Proxy for API caching and rate limit management
- [ ] **Google Earth Engine**: NDVI vegetation index integration
- [ ] **Self-hosted Tiles**: Production-ready map tiles
- [ ] **Historical Trends**: Time-series analysis of sustainability metrics
- [ ] **Comparison Tool**: Side-by-side location comparison
- [ ] **Export Features**: PDF reports and data export
- [ ] **Offline Mode**: Progressive Web App capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenStreetMap Contributors**: For comprehensive global infrastructure data
- **OpenWeatherMap**: For real-time environmental data
- **NASA**: For climate and solar radiation data
- **MapLibre**: For open-source mapping capabilities
- **UN SDGs & WHO**: For sustainability frameworks and health standards

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/[username]/Scoped/issues)
- **Discussions**: [GitHub Discussions](https://github.com/[username]/Scoped/discussions)
- **Documentation**: [Wiki](https://github.com/[username]/Scoped/wiki)

---

**Made with 🌍 for a more sustainable future**