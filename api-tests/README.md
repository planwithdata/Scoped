# API Testing Framework

This directory contains tools for testing individual APIs before integrating them into the main Scoped application.

## Files

### test-framework.html
- **Purpose**: Comprehensive testing interface for all planned APIs
- **Usage**: Open in browser, enter coordinates, test each API individually
- **Features**: 
  - Real-time testing with visual feedback
  - Error handling and detailed logging
  - JSON response display
  - Rate limiting detection

## How to Use

1. Open `test-framework.html` in your browser
2. Enter test coordinates (default: Delhi, India - 28.6, 77.2)
3. Click "Test" button for each API you want to verify
4. Review results and error messages
5. Only integrate APIs that pass testing

## APIs Currently Testable

### ✅ Working APIs
- **Overpass API (OSM)**: Healthcare, Education, Transport, Services
- **Open-Elevation**: Elevation data
- **Mock AQI**: Location-based air quality estimation

### ⚠️ Requires API Key
- **OpenWeatherMap**: Weather data (need valid API key)

### 🔄 Future APIs to Add
- NASA POWER API (solar/climate data)
- World Bank Climate API
- Government data portals (India-specific)
- Satellite imagery APIs

## Testing Strategy

1. **Isolation**: Test each API separately before integration
2. **Error Handling**: Verify graceful failure modes
3. **Rate Limiting**: Check API limits and implement delays
4. **Data Quality**: Validate response structure and content
5. **Fallback**: Ensure backup data when APIs fail

## Integration Checklist

Before adding any API to main app:
- [ ] API test passes consistently
- [ ] Error handling implemented
- [ ] Rate limiting considered
- [ ] Fallback data available
- [ ] Mobile-friendly implementation
- [ ] Console logging added for debugging