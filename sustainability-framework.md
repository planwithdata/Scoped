# Scoped - Research-Based Sustainability Framework

## Overview
This document outlines the scientific foundation for Scoped's sustainability scoring system, based on established research from urban planning, environmental science, and sustainability studies.

---

## Research Foundation

### 1. UN Sustainable Development Goals (SDGs)
**Primary SDGs Addressed:**
- **SDG 3**: Good Health and Well-being
- **SDG 6**: Clean Water and Sanitation  
- **SDG 7**: Affordable and Clean Energy
- **SDG 11**: Sustainable Cities and Communities
- **SDG 13**: Climate Action
- **SDG 15**: Life on Land

### 2. Academic Research Sources
- **"Urban Sustainability Indicators" (Mori & Christodoulou, 2012)**: Framework for measuring urban sustainability
- **"Green Infrastructure and Urban Sustainability" (Beatley, 2000)**: Impact of green spaces on urban livability
- **"Air Quality and Public Health" (WHO, 2021)**: Health impacts of air pollution
- **"Urban Heat Island Effect" (Santamouris, 2014)**: Climate impacts in urban areas
- **"Walkability and Health Outcomes" (Frank et al., 2006)**: Transportation accessibility impacts

---

## Sustainability Scoring Framework

### Core Principles
1. **Environmental Health**: Air quality, green spaces, climate resilience
2. **Social Equity**: Access to services, healthcare, education
3. **Economic Viability**: Infrastructure efficiency, resource accessibility
4. **Climate Resilience**: Adaptation to climate change impacts

---

## Weighted Scoring System (Research-Based)

### Environmental Health (40% - Highest Priority)
**Research Justification**: Environmental factors have direct health impacts and long-term sustainability consequences.

#### Air Quality (15%)
- **Data Source**: OpenWeatherMap Air Pollution API
- **Metric**: PM2.5-based US AQI
- **Research**: WHO estimates 7M deaths annually from air pollution
- **Scoring**: Inverse relationship (lower pollution = higher score)

#### Green Space Access (15%)
- **Data Source**: OpenStreetMap green infrastructure
- **Metric**: Parks, forests, gardens within 1km radius
- **Research**: 3-30-300 rule (Beatley): 3 trees visible, 30% canopy, 300m to park
- **Scoring**: Based on WHO recommendation of 9m² green space per person

#### Climate Comfort (10%)
- **Data Sources**: OpenWeatherMap + NASA POWER
- **Metrics**: Temperature, humidity, solar radiation
- **Research**: Heat stress increases mortality by 5% per 1°C above 35°C
- **Scoring**: Optimal range 18-26°C, 40-60% humidity

### Social Infrastructure (35%)
**Research Justification**: Access to services determines quality of life and social sustainability.

#### Healthcare Access (15%)
- **Data Source**: OpenStreetMap healthcare facilities
- **Metric**: Hospitals, clinics, pharmacies within 2km
- **Research**: WHO recommends 1 hospital bed per 1000 people
- **Scoring**: Distance-weighted accessibility index

#### Education Access (10%)
- **Data Source**: OpenStreetMap education facilities  
- **Metric**: Schools, colleges, libraries within 2km
- **Research**: UNESCO Education for Sustainable Development goals
- **Scoring**: Diversity and proximity of educational resources

#### Public Transport (10%)
- **Data Source**: OpenStreetMap transport infrastructure
- **Metric**: Bus stops, stations within 1.5km
- **Research**: 400m walking distance to transit (TOD principles)
- **Scoring**: Transit accessibility and frequency

### Economic Sustainability (25%)
**Research Justification**: Economic access and resource efficiency support long-term sustainability.

#### Essential Services (15%)
- **Data Source**: OpenStreetMap amenities
- **Metric**: Banks, markets, services within 1.5km
- **Research**: 15-minute city concept (Moreno et al., 2021)
- **Scoring**: Diversity and accessibility of daily needs

#### Energy Potential (10%)
- **Data Source**: NASA POWER solar radiation
- **Metric**: Solar energy potential (kWh/m²/day)
- **Research**: Renewable energy transition requirements (IPCC)
- **Scoring**: Higher solar potential = higher sustainability

---

## Enhanced Scoring Algorithm

### Baseline Calculation
```
Total Score = Σ(Category Weight × Normalized Category Score)
Where each category score is normalized to 0-100 scale
```

### Research-Based Thresholds

#### Air Quality (PM2.5 to Score)
- **Excellent (0-12 μg/m³)**: 100 points (WHO guideline)
- **Good (12-25 μg/m³)**: 80 points
- **Moderate (25-50 μg/m³)**: 60 points  
- **Poor (50-100 μg/m³)**: 40 points
- **Very Poor (100+ μg/m³)**: 0-20 points

#### Green Space Density
- **Excellent (15+ features/km²)**: 100 points
- **Good (10-15 features/km²)**: 80 points
- **Moderate (5-10 features/km²)**: 60 points
- **Poor (1-5 features/km²)**: 40 points
- **Very Poor (0-1 features/km²)**: 0-20 points

#### Healthcare Accessibility
- **Excellent (10+ facilities/2km)**: 100 points (WHO urban standard)
- **Good (7-10 facilities/2km)**: 80 points
- **Moderate (4-7 facilities/2km)**: 60 points
- **Poor (1-4 facilities/2km)**: 40 points
- **Very Poor (0-1 facilities/2km)**: 0-20 points

---

## Additional Data Sources for Enhanced Sustainability

### Phase 3: Environmental Monitoring
1. **Water Quality Indicators**
   - Source: Government water quality databases
   - Metrics: pH, dissolved oxygen, pollutants
   - Weight: 5% (new environmental category)

2. **Noise Pollution**
   - Source: Traffic density proxy (OSM roads)
   - Metrics: Road classification and density
   - Weight: 5% (environmental health)

3. **Biodiversity Indicators**
   - Source: Protected areas (OSM + government data)
   - Metrics: Distance to nature reserves, wildlife corridors
   - Weight: 5% (environmental health)

### Phase 4: Climate Resilience
1. **Flood Risk Assessment**
   - Source: Elevation + precipitation data
   - Metrics: Flood zone proximity, drainage capacity
   - Weight: 5% (climate resilience)

2. **Heat Island Effect**
   - Source: Satellite land surface temperature
   - Metrics: Urban heat differential
   - Weight: 5% (climate adaptation)

3. **Drought Resilience**
   - Source: Precipitation patterns + water infrastructure
   - Metrics: Water security indicators
   - Weight: 5% (climate resilience)

---

## Validation Methodology

### 1. Cross-Reference with Existing Indices
- **Global Livability Index** (EIU)
- **Environmental Performance Index** (Yale)
- **Sustainable Cities Index** (Arcadis)
- **UN-Habitat City Prosperity Index**

### 2. Ground Truth Validation
- Compare scores with known sustainable/unsustainable areas
- Validate against local sustainability assessments
- Expert review by urban planning professionals

### 3. Sensitivity Analysis
- Test score stability with data variations
- Analyze weight sensitivity for different contexts
- Regional calibration for different climates/cultures

---

## Implementation Priorities

### Immediate (Current Phase)
1. Implement research-based weighting system
2. Add climate comfort scoring
3. Enhance green space analysis with density metrics
4. Improve healthcare accessibility calculations

### Short-term (Next 2 months)
1. Add noise pollution proxy via traffic analysis
2. Integrate water body proximity analysis
3. Implement 15-minute city accessibility scoring
4. Add biodiversity indicators via protected areas

### Medium-term (3-6 months)
1. Satellite-based vegetation health (NDVI)
2. Urban heat island analysis
3. Flood risk assessment
4. Energy efficiency indicators

---

## Regional Adaptations

### Urban vs Rural Scoring
- **Urban**: Higher weight on air quality, transport, services
- **Rural**: Higher weight on green spaces, climate resilience, water access

### Climate Zone Adjustments
- **Tropical**: Higher weight on heat stress, humidity comfort
- **Temperate**: Balanced environmental and social factors
- **Arid**: Higher weight on water access, heat resilience

### Development Level Calibration
- **Developed**: Higher standards for all categories
- **Developing**: Focus on basic services and environmental health
- **Least Developed**: Emphasis on water, sanitation, basic healthcare

---

*Framework based on peer-reviewed research and international sustainability standards*
*Last Updated: December 2024*