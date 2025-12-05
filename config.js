// API Configuration
// Replace these keys with your actual API keys before deployment

const API_CONFIG = {
    // OpenWeatherMap API Key
    OPENWEATHER_API_KEY: '85a2b8b250dae0e17ed6790a62aeb92c',
    
    // Future API Keys (add as needed)
    NASA_POWER_API_KEY: null, // No key required for NASA POWER
    WORLD_BANK_API_KEY: null, // No key required for World Bank
    
    // Government API Keys (India-specific)
    CPCB_API_KEY: null, // Central Pollution Control Board
    IMD_API_KEY: null,  // India Meteorological Department
    
    // Commercial API Keys (if needed later)
    GOOGLE_MAPS_API_KEY: null,
    MAPBOX_API_KEY: null,
    
    // API Endpoints
    ENDPOINTS: {
        OPENWEATHER: 'https://api.openweathermap.org/data/2.5',
        OVERPASS: 'https://overpass-api.de/api/interpreter',
        OPEN_ELEVATION: 'https://api.open-elevation.com/api/v1',
        NASA_POWER: 'https://power.larc.nasa.gov/api/temporal/daily/point',
        WORLD_BANK_CLIMATE: 'https://climateknowledgeportal.worldbank.org/api'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
}