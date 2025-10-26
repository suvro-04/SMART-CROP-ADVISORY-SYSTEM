// =================== CONFIG ===================
// Insert your keys here for local testing (or use a Flask proxy in production)
const NEWS_API_KEY = "04b3a1fe90fe4f478897566939d76ba0"; // <-- replace locally for testing
const WEATHER_API_KEY = "4800f0a5c648e12b9214cb5f84ddd92f"; // <-- replace locally for testing

// Global location data
let userLocation = {
    city: '',
    state: '',
    country: '',
    district: '',
    coordinates: { lat: null, lon: null }
};

// =================== SIDEBAR TOGGLE ===================
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
}

// =================== UPDATE DATE TIME ===================
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const el = document.getElementById('currentDate');
    if (el) el.textContent = now.toLocaleDateString('en-US', options);
}
updateDateTime();
setInterval(updateDateTime, 60 * 1000);

// =================== PRECISE LOCATION DETECTION ===================
async function getPreciseLocation() {
    return new Promise((resolve) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    userLocation.coordinates = { lat: latitude, lon: longitude };

                    // Get detailed location from coordinates
                    const locationDetails = await reverseGeocode(latitude, longitude);
                    userLocation = { ...userLocation, ...locationDetails };

                    updateLocationBadge();
                    resolve(userLocation);
                },
                () => {
                    // Fallback to IP-based location
                    getIPLocation().then((loc) => {
                        userLocation = { ...userLocation, ...loc };
                        updateLocationBadge();
                        resolve(userLocation);
                    });
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
            );
        } else {
            getIPLocation().then((loc) => {
                userLocation = { ...userLocation, ...loc };
                updateLocationBadge();
                resolve(userLocation);
            });
        }
    });
}

async function reverseGeocode(lat, lon) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`);
        const data = await response.json();

        return {
            city: data.address.city || data.address.town || data.address.village || '',
            state: data.address.state || '',
            country: data.address.country || 'India',
            district: data.address.state_district || data.address.county || ''
        };
    } catch (error) {
        console.error('Reverse geocoding failed:', error);
        return { city: '', state: '', country: 'India', district: '' };
    }
}

async function getIPLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        return {
            city: data.city || '',
            state: data.region || '',
            country: data.country_name || 'India',
            district: '',
            coordinates: { lat: data.latitude, lon: data.longitude }
        };
    } catch (error) {
        console.error('IP location failed:', error);
        return {
            city: 'Mumbai',
            state: 'Maharashtra',
            country: 'India',
            district: '',
            coordinates: { lat: 19.0760, lon: 72.8777 }
        };
    }
}

function updateLocationBadge() {
    const badge = document.getElementById('locationBadge');
    if (!badge) return;
    const locationText = userLocation.city
        ? `${userLocation.city}, ${userLocation.state}`
        : userLocation.state || 'Location detected';

    badge.innerHTML = `
        <i class="fas fa-map-marker-alt"></i>
        <span>${locationText}</span>
    `;
}

// =================== CITY-ORIENTED NEWS FETCHING ===================
async function fetchFarmingNews() {
    const location = await getPreciseLocation();

    // Only use city for strict location-based news
    const cityQuery = location.city || location.state || location.country || 'India';

    const queries = [
        `(storm OR cyclone OR hurricane OR flood OR drought OR "heavy rain" OR "extreme weather") AND (${cityQuery}) AND (agriculture OR farming OR crops)`,
        `(agriculture OR farming OR crops OR harvest OR "crop yield" OR irrigation OR pesticide) AND (${cityQuery})`,
        `("government scheme" OR subsidy OR "farm policy" OR "agricultural loan") AND (${cityQuery})`
    ];

    const allArticles = [];

    for (const query of queries) {
        try {
            const encodedQuery = encodeURIComponent(query);
            const url = `https://newsapi.org/v2/everything?q=${encodedQuery}&language=en&sortBy=publishedAt&pageSize=10&apiKey=${NEWS_API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.articles && data.articles.length > 0) {
                allArticles.push(...data.articles);
            }
        } catch (error) {
            console.error('News fetch error:', error);
        }
    }

    displayNews(allArticles);
}

// =================== NEWS DISPLAY WITH CATEGORIZATION ===================
async function displayNews(articles) {
    const newsContainer = document.getElementById('newsContainer');
    if (!newsContainer) return;
    newsContainer.innerHTML = '';

    if (!articles || articles.length === 0) {
        newsContainer.innerHTML = `
            <div class="service-card">
                <div class="service-header">
                    <div class="service-icon">
                        <i class="fas fa-info-circle"></i>
                    </div>
                    <div>
                        <h3 class="service-title">No News Available</h3>
                    </div>
                </div>
                <p class="service-description">No farming news found for your city at the moment. Please check back later.</p>
            </div>
        `;
        return;
    }

    const uniqueArticles = Array.from(
        new Map(articles.map(article => [article.url, article])).values()
    ).slice(0, 6);

    for (const article of uniqueArticles) {
        const title = article.title || "No title";
        const link = article.url || "#";
        const description = article.description || "No description available";
        const image = article.urlToImage || "https://via.placeholder.com/400x200?text=Farming+News";
        const source = article.source && article.source.name ? article.source.name : "Unknown";
        const publishedDate = article.publishedAt ? new Date(article.publishedAt) : new Date();
        const timeAgo = getTimeAgo(publishedDate);

        const category = categorizeArticle(title, description);
        const categoryClass = category.toLowerCase().includes('storm') || category.toLowerCase().includes('alert') ? 'storm' : '';

        const translatedTitle = await translateToRegional(title);

        const card = document.createElement('div');
        card.className = 'service-card news-card';
        card.innerHTML = `
            <img src="${image}" alt="news" class="news-image" onerror="this.src='https://via.placeholder.com/400x200?text=Farming+News'">
            <div class="news-content">
                <span class="news-category ${categoryClass}">${category}</span>
                <h3 class="service-title">${translatedTitle}</h3>
                <p class="service-description">${description.substring(0, 120)}${description.length > 120 ? '...' : ''}</p>
                <div class="news-meta">
                    <span class="news-source">
                        <i class="fas fa-newspaper"></i>
                        ${source}
                    </span>
                    <span class="news-date">
                        <i class="far fa-clock"></i>
                        ${timeAgo}
                    </span>
                </div>
                <div class="service-footer">
                    <a href="${link}" target="_blank" rel="noopener" class="service-link" onclick="event.stopPropagation()">
                        Read Full Article <i class="fas fa-external-link-alt"></i>
                    </a>
                    <div class="service-status">
                        <span class="status-dot"></span>
                        Live
                    </div>
                </div>
            </div>
        `;
        newsContainer.appendChild(card);
    }
}

function categorizeArticle(title, description) {
    const text = (title + ' ' + description).toLowerCase();
    if (text.match(/storm|cyclone|hurricane|typhoon|tornado/)) return '🌪️ Storm Alert';
    if (text.match(/flood|heavy rain|monsoon|deluge/)) return '🌊 Flood Warning';
    if (text.match(/drought|water shortage|dry spell/)) return '☀️ Drought Alert';
    if (text.match(/frost|cold wave|freeze/)) return '❄️ Cold Weather';
    if (text.match(/heatwave|extreme heat|high temperature/)) return '🌡️ Heat Alert';
    if (text.match(/scheme|subsidy|government|policy|loan/)) return '🏛️ Gov. Schemes';
    if (text.match(/price|market|trading|commodity/)) return '💰 Market News';
    if (text.match(/technology|innovation|digital|app/)) return '🚀 AgriTech';
    if (text.match(/disease|pest|fungus|insect/)) return '🐛 Pest Alert';
    return '🌾 Farming News';
}

function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' years ago';
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' months ago';
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' days ago';
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' hours ago';
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' minutes ago';
    return 'Just now';
}

async function translateToRegional(text) {
    try {
        const userLang = navigator.language || 'en';
        if (userLang.startsWith('en')) return text;
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${userLang}`);
        const data = await response.json();
        return data.responseData.translatedText || text;
    } catch {
        return text;
    }
}

// =================== WEATHER SYSTEM ===================
const weatherAlert = document.getElementById('weatherAlert');

async function fetchWeatherAlerts() {
    try {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => getWeatherByCoords(position.coords.latitude, position.coords.longitude),
                () => getWeatherByCity('Mumbai')
            );
        } else {
            getWeatherByCity('Mumbai');
        }
    } catch (error) {
        showError('Unable to fetch weather data');
    }
}

async function getWeatherByCoords(lat, lon) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const data = await response.json();
        displayWeatherAlert(data);
    } catch (error) {
        showError('Weather service unavailable');
    }
}

async function getWeatherByCity(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
        const data = await response.json();
        displayWeatherAlert(data);
    } catch (error) {
        showError('Weather service unavailable');
    }
}

function displayWeatherAlert(data) {
    if (!data || !data.main) {
        showError('Invalid weather data');
        return;
    }
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like || temp);
    const humidity = data.main.humidity;
    const windSpeed = Math.round((data.wind && data.wind.speed ? data.wind.speed : 0) * 3.6);
    const pressure = data.main.pressure;
    const description = data.weather && data.weather[0] ? data.weather[0].description : '';
    const location = data.name || '';

    let alertIcon = '⚠️';
    let alertMessage = '';
    let alertLevel = 'Warning';

    if (temp > 35) {
        alertIcon = '🌡️';
        alertLevel = 'High Temperature';
        alertMessage = `Temperature has reached ${temp}°C. Ensure adequate irrigation for crops and monitor for heat stress. Consider scheduling activities for cooler hours.`;
    } else if (temp < 10) {
        alertIcon = '❄️';
        alertLevel = 'Cold Weather';
        alertMessage = `Temperature has dropped to ${temp}°C. Protect sensitive crops from potential frost damage. Consider covering young plants and checking irrigation systems.`;
    } else if (humidity > 80) {
        alertIcon = '💧';
        alertLevel = 'High Humidity';
        alertMessage = `Humidity levels at ${humidity}%. Monitor crops closely for fungal diseases and ensure proper air circulation. Avoid overhead irrigation.`;
    } else if (windSpeed > 40) {
        alertIcon = '💨';
        alertLevel = 'Strong Winds';
        alertMessage = `Wind speeds reaching ${windSpeed} km/h. Secure loose equipment, check structural integrity of greenhouses, and protect tall crops from wind damage.`;
    } else if (description.includes('rain')) {
        alertIcon = '🌧️';
        alertLevel = 'Rainfall Alert';
        alertMessage = `Rain detected in your area. Check drainage systems, postpone pesticide applications, and protect harvested crops. Plan indoor activities.`;
    } else {
        alertIcon = '✅';
        alertLevel = 'Favorable Conditions';
        alertMessage = `Weather conditions are optimal for farming activities. Temperature is ${temp}°C with ${description}. Good time for field operations and crop management.`;
    }

    weatherAlert.innerHTML = `
        <div class="alert-header">
            <div class="alert-title-section">
                <div class="alert-icon">${alertIcon}</div>
                <div>
                    <div class="alert-title">Weather Alert</div>
                    <div class="alert-location">${location}</div>
                </div>
            </div>
            <div class="alert-badge">${alertLevel}</div>
        </div>
        <div class="alert-content">
            <p class="alert-message">${alertMessage}</p>
            <div class="weather-stats">
                <div class="stat-item"><div class="stat-icon"><i class="fas fa-temperature-high"></i></div><div class="stat-details"><div class="stat-label">Temperature</div><div class="stat-value">${temp}°C</div></div></div>
                <div class="stat-item"><div class="stat-icon"><i class="fas fa-thermometer-half"></i></div><div class="stat-details"><div class="stat-label">Feels Like</div><div class="stat-value">${feelsLike}°C</div></div></div>
                <div class="stat-item"><div class="stat-icon"><i class="fas fa-tint"></i></div><div class="stat-details"><div class="stat-label">Humidity</div><div class="stat-value">${humidity}%</div></div></div>
                <div class="stat-item"><div class="stat-icon"><i class="fas fa-wind"></i></div><div class="stat-details"><div class="stat-label">Wind Speed</div><div class="stat-value">${windSpeed} km/h</div></div></div>
                <div class="stat-item"><div class="stat-icon"><i class="fas fa-compress-arrows-alt"></i></div><div class="stat-details"><div class="stat-label">Pressure</div><div class="stat-value">${pressure} hPa</div></div></div>
                <div class="stat-item"><div class="stat-icon"><i class="fas fa-cloud"></i></div><div class="stat-details"><div class="stat-label">Condition</div><div class="stat-value" style="font-size: 13px; text-transform: capitalize;">${description}</div></div></div>
            </div>
        </div>
    `;
    weatherAlert.classList.add('show');
}

function showError(message) {
    if (!weatherAlert) return;
    weatherAlert.innerHTML = `
        <div class="alert-header">
            <div class="alert-title-section">
                <div class="alert-icon">⚠️</div>
                <div>
                    <div class="alert-title">Weather Service</div>
                    <div class="alert-location">Connection Issue</div>
                </div>
            </div>
            <div class="alert-badge">Error</div>
        </div>
        <div class="alert-content">
            <p class="alert-message">${message}. Please check your internet connection and try again later.</p>
        </div>
    `;
    weatherAlert.classList.add('show');
}

// =================== INITIALIZATION ===================
(async function init() {
    try {
        updateDateTime();
        await fetchWeatherAlerts();
        await fetchFarmingNews();
    } catch (e) {
        console.error('Init error:', e);
    }

    // Auto-refresh
    setInterval(fetchWeatherAlerts, 10 * 60 * 1000); // every 10 min
    setInterval(fetchFarmingNews, 30 * 60 * 1000); // every 30 min
})();
