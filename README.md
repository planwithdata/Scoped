# Scoped - Sustainability Click POC

A free, client-side web app that analyzes sustainability metrics for any location you click on a map. Uses MapLibre GL with open APIs to fetch green spaces, air quality, and elevation data to compute a simple sustainability score (0-100).

## Features

- **Interactive Map**: Click anywhere to analyze sustainability
- **Multi-API Integration**: Combines Overpass (green spaces), OpenAQ (air quality), and Open-Elevation APIs
- **Real-time Scoring**: Instant sustainability score calculation
- **Location Services**: "Go to my location" button for quick navigation
- **Responsive Design**: Works on desktop and mobile

## How to Run

### Local Development
```bash
# Option 1: Open directly in browser (may have CORS issues with some APIs)
open index.html

# Option 2: Use local server (recommended)
npx http-server
# Then open http://localhost:8080
```

### Deploy to GitHub Pages
1. Go to your repository Settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"
6. Your app will be available at: `https://[username].github.io/[repository-name]/`

## API Rate Limits & Notes

- **OSM Tiles**: For demo use only. Consider self-hosting for production
- **Overpass API**: ~10,000 queries per day limit
- **OpenAQ**: 2,000 requests per hour limit
- **Open-Elevation**: No official limits but please be respectful

## Next Steps (Optional Enhancements)

- Add Cloudflare Workers proxy to cache API responses and avoid rate limits
- Integrate Google Earth Engine for NDVI (vegetation index) data
- Self-host map tiles for production use
- Add more environmental indicators (noise, temperature, etc.)
- Implement data caching in localStorage
- Add historical trend analysis

## Tech Stack

- **MapLibre GL JS**: Open-source mapping library
- **Overpass API**: OpenStreetMap data queries for green spaces
- **OpenAQ**: Global air quality data
- **Open-Elevation**: Elevation data service
- **Vanilla JavaScript**: No frameworks, pure client-side code

## License

MIT License - Feel free to use and modify for your projects.