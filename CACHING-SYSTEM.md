# 🚀 Scoped Caching System Documentation

## Overview

Scoped uses **Cloudflare Workers KV** (Key-Value storage) to cache sustainability analysis results globally. This dramatically improves performance and reduces API usage by **99%** for popular locations.

---

## 🎯 Why Caching?

### The Problem
Without caching, every analysis requires **8-10 API calls**:
- OpenWeatherMap (air quality + weather) = 2 calls
- OpenStreetMap Overpass (infrastructure) = 5 calls
- NASA POWER (solar data) = 1 call
- Open-Elevation (elevation) = 1 call

**Result**: 10 seconds per analysis, 1,000 API calls/day limit reached with just 100 users.

### The Solution
With caching:
- **First user** in an area: 10 seconds, 8 API calls
- **Next 1,000 users** in same area: 0.5 seconds, 0 API calls
- **API savings**: 99% reduction
- **Speed improvement**: 20x faster

---

## 🗺️ How It Works

### 1. Grid-Based Caching

Scoped divides the world into **11km × 11km grid cells** using coordinate rounding:

```
User clicks: 40.7589°N, 73.9851°W (Times Square, NYC)
Rounded to:  40.8°N, 74.0°W
Cache key:   "40.8_-74.0"
```

**Why 11km grid?**
- Infrastructure data already covers 1-2km radius
- Entire neighborhoods share same cache
- Balance between accuracy and cache efficiency
- 100x better cache hit rate than precise coordinates

### 2. Cache Flow Diagram

```
User clicks map location
        ↓
Round coordinates to 1 decimal (40.7589 → 40.8)
        ↓
Check Cloudflare KV cache
        ↓
    ┌───────────────────┐
    │  Cache HIT? ✅    │
    └───────────────────┘
         ↓           ↓
       YES          NO
         ↓           ↓
    Return cached   Fetch from APIs
    data instantly  (8-10 calls)
    (0.5 seconds)        ↓
                    Calculate scores
                         ↓
                    Store in cache
                    (7 days TTL)
                         ↓
                    Return results
                    (10 seconds)
```

### 3. Cache Storage Duration

- **Time-to-Live (TTL)**: 7 days (604,800 seconds)
- **Reason**: Infrastructure doesn't change frequently
- **Auto-refresh**: Cache expires after 7 days, next user triggers fresh analysis

---

## 📦 What Data Gets Cached?

### Complete Analysis Package

Every cached entry contains:

#### 1. **Sustainability Scores**
```json
{
  "overall": 75,
  "environmental": 68,
  "social": 82,
  "economic": 71,
  "airQuality": 65,
  "traffic": 78,
  "greenLiving": 72,
  "healthSafety": 85,
  "energyClimate": 70,
  "employmentOpportunity": 68,
  "climateResilience": 73,
  "economicLevel": 65,
  "neighborhoodOverall": 73
}
```

#### 2. **Environmental Data**
```json
{
  "greenData": {
    "count": 12,
    "waterCount": 2
  },
  "airData": {
    "pm25": 15.3,
    "pm10": 27.5
  },
  "weatherData": {
    "temperature": 22.5,
    "humidity": 65,
    "pressure": 1013,
    "windSpeed": 3.2
  },
  "climateData": {
    "solarRadiation": 5.2
  },
  "elevationData": {
    "elevation": 45
  },
  "noiseData": {
    "noiseLevel": 35,
    "roadDensity": 8,
    "railwayCount": 1
  },
  "biodiversityData": {
    "protectedAreas": 1,
    "naturalAreas": 3
  }
}
```

#### 3. **Infrastructure Data**
```json
{
  "healthcareData": {
    "total": 15,
    "hospitals": 3,
    "clinics": 8,
    "pharmacies": 4
  },
  "educationData": {
    "total": 22,
    "schools": 15,
    "colleges": 5,
    "libraries": 2
  },
  "transportData": {
    "total": 45,
    "busStops": 38,
    "stations": 7
  },
  "servicesData": {
    "total": 28,
    "banks": 8,
    "atms": 12,
    "markets": 6,
    "police": 2
  },
  "businessData": {
    "total": 35,
    "offices": 18,
    "coworking": 4,
    "commercial": 10,
    "industrial": 3
  }
}
```

#### 4. **Climate Resilience Data**
```json
{
  "climateResilienceData": {
    "floodRisk": 35,
    "droughtRisk": 28,
    "heatIslandRisk": 42
  }
}
```

#### 5. **Location Metadata**
```json
{
  "locationName": "Manhattan, New York City, New York, United States"
}
```

---

## 🌍 Global Distribution

### Cloudflare's Edge Network

Cached data is stored on **Cloudflare's global CDN** with 300+ data centers worldwide:

- **North America**: 100+ locations
- **Europe**: 80+ locations
- **Asia**: 70+ locations
- **South America**: 20+ locations
- **Africa**: 15+ locations
- **Oceania**: 15+ locations

**Result**: Users get cached data from the nearest server (typically <50ms latency).

---

## 📊 Cache Performance Metrics

### Real-World Impact

| Metric | Without Cache | With Cache | Improvement |
|--------|--------------|------------|-------------|
| **Response Time** | 10 seconds | 0.5 seconds | **20x faster** |
| **API Calls** | 8 per analysis | 0.08 per analysis | **99% reduction** |
| **Daily Capacity** | 125 users | 12,500 users | **100x capacity** |
| **Cost** | $40/month at scale | $0/month (free tier) | **100% savings** |

### Cache Hit Rate Examples

**Popular City (New York)**
- Day 1: 100 users → 1 cache miss, 99 cache hits → **99% hit rate**
- Day 7: 1,000 users → 1 cache miss, 999 cache hits → **99.9% hit rate**

**Random Location (Rural Area)**
- Day 1: 5 users → 5 cache misses → **0% hit rate**
- Day 2: 2 users → 2 cache hits → **100% hit rate**

---

## 🔒 Data Privacy & Security

### What We Store
- **Geographic data**: Coordinates, location names
- **Public infrastructure**: Hospitals, schools, parks (from OpenStreetMap)
- **Environmental metrics**: Air quality, weather, solar radiation
- **Calculated scores**: Sustainability metrics

### What We DON'T Store
- ❌ User personal information
- ❌ IP addresses
- ❌ User identities
- ❌ Search history
- ❌ Device information

### Security Features
- ✅ **HTTPS encryption**: All data transmitted securely
- ✅ **No authentication required**: Anonymous usage
- ✅ **Public data only**: All cached data is from public APIs
- ✅ **CORS enabled**: Secure cross-origin requests
- ✅ **Rate limiting**: Prevents abuse

---

## 🛠️ Technical Architecture

### System Components

```
┌─────────────────────────────────────────────────────────┐
│                    User's Browser                        │
│  (GitHub Pages: planwithdata.github.io/Scoped)          │
└────────────────────┬────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────┐
│            Cloudflare Worker (Edge Function)             │
│  URL: scoped-api-cache.planwithdata.workers.dev         │
│  • Checks KV cache                                       │
│  • Returns cached data if available                      │
│  • Stores new analysis results                           │
└────────────────────┬────────────────────────────────────┘
                     │
                     ↓
┌─────────────────────────────────────────────────────────┐
│         Cloudflare KV (Key-Value Storage)                │
│  • Global distributed database                           │
│  • 1 GB storage (free tier)                             │
│  • 100,000 reads/day (free tier)                        │
│  • 1,000 writes/day (free tier)                         │
└─────────────────────────────────────────────────────────┘
```

### API Call Flow

**Without Cache:**
```
User → App → OpenWeatherMap API (2 calls)
           → Overpass API (5 calls)
           → NASA POWER API (1 call)
           → Open-Elevation API (1 call)
           → Calculate scores
           → Display results
Total: 9 API calls, ~10 seconds
```

**With Cache (Hit):**
```
User → App → Cloudflare Worker → KV Cache → Return data
Total: 0 external API calls, ~0.5 seconds
```

**With Cache (Miss):**
```
User → App → Cloudflare Worker → KV Cache (miss)
           → OpenWeatherMap API (2 calls)
           → Overpass API (5 calls)
           → NASA POWER API (1 call)
           → Open-Elevation API (1 call)
           → Calculate scores
           → Store in KV Cache
           → Display results
Total: 9 API calls, ~10 seconds (first time only)
```

---

## 📈 Scalability

### Free Tier Limits

**Cloudflare Workers KV (Free)**
- ✅ 100,000 reads/day → **10,000+ users/day**
- ✅ 1,000 writes/day → **1,000 new locations/day**
- ✅ 1 GB storage → **~100,000 cached locations**
- ✅ Unlimited bandwidth

**Estimated Capacity**
- **Daily users**: 10,000+ (with 90% cache hit rate)
- **Monthly users**: 300,000+
- **Cached locations**: 100,000+ unique grid cells
- **Cost**: $0/month

### Upgrade Path

If you exceed free tier:
- **Paid tier**: $5/month
  - 10 million reads/month
  - 1 million writes/month
  - Supports 1 million+ users/month

---

## 🔍 How to Verify Caching Works

### Browser Console

Open Developer Tools (F12) and check console logs:

**Cache Miss (First Visit):**
```
Starting analysis for: 40.7589 -73.9851
PM2.5: 12.3 PM10: 22.1
💾 Cached result in Cloudflare KV
```

**Cache Hit (Subsequent Visit):**
```
✅ Using cached data from Cloudflare KV
```

### Network Tab

1. Open Developer Tools → Network tab
2. Click on a location
3. Look for request to `scoped-api-cache.planwithdata.workers.dev`
4. Check response headers:
   - `X-Cache: HIT` → Data from cache
   - `X-Cache: MISS` → Fresh API calls

### Cloudflare Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to "Workers & Pages" → "KV"
3. Click "SCOPED_CACHE"
4. View stored keys (e.g., `40.8_-74.0`, `51.5_-0.1`)
5. Click a key to see cached JSON data

---

## 🌟 Benefits Summary

### For Users
- ⚡ **20x faster** results for popular locations
- 🌍 **Global performance** via Cloudflare's CDN
- 📱 **Better mobile experience** with instant loading
- 🔒 **Privacy-friendly** (no personal data stored)

### For Developers
- 💰 **99% cost reduction** on API usage
- 📈 **100x scalability** without infrastructure changes
- 🛡️ **Rate limit protection** for external APIs
- 🔧 **Zero maintenance** (managed by Cloudflare)

### For the Platform
- 🌱 **Sustainable** (reduced server load)
- 🚀 **Production-ready** (enterprise-grade infrastructure)
- 📊 **Analytics-friendly** (track cache hit rates)
- 🔄 **Auto-updating** (7-day refresh cycle)

---

## 🤔 Frequently Asked Questions

### Q: Why 11km grid instead of exact coordinates?
**A:** Infrastructure data (hospitals, schools, parks) already covers 1-2km radius. An 11km grid provides 100x better cache efficiency while maintaining accuracy for neighborhood-level analysis.

### Q: What if data becomes outdated?
**A:** Cache expires after 7 days. Next user triggers fresh analysis with updated data.

### Q: Can I force a fresh analysis?
**A:** Currently no, but this feature can be added. The 7-day TTL ensures data stays reasonably fresh.

### Q: Does caching work for all locations?
**A:** Yes! Every location gets cached after first analysis. Popular cities benefit most from high cache hit rates.

### Q: What happens if Cloudflare is down?
**A:** App falls back to direct API calls. You'll see a warning in console: "⚠️ Cache check failed, proceeding with API calls"

### Q: Is my search history stored?
**A:** No. Only aggregated analysis results are cached (no user data, no search history).

### Q: How much does this cost?
**A:** $0/month on Cloudflare's free tier (supports 10,000+ users/day).

---

## 📚 Additional Resources

- **Cloudflare Workers Docs**: https://developers.cloudflare.com/workers/
- **KV Storage Guide**: https://developers.cloudflare.com/kv/
- **Scoped GitHub**: https://github.com/planwithdata/Scoped
- **Live Demo**: https://planwithdata.github.io/Scoped/

---

**Last Updated**: December 2024  
**Version**: 1.0  
**Author**: Scoped Development Team
