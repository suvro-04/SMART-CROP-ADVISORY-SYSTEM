const API_KEY = '4800f0a5c648e12b9214cb5f84ddd92f';
        const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

        const elements = {
            searchForm: document.getElementById('searchForm'),
            cityInput: document.getElementById('cityInput'),
            weatherCard: document.getElementById('weatherCard'),
            errorMessage: document.getElementById('errorMessage'),
            loading: document.getElementById('loading'),
            cityName: document.getElementById('cityName'),
            dateTime: document.getElementById('dateTime'),
            temperature: document.getElementById('temperature'),
            weatherDesc: document.getElementById('weatherDesc'),
            weatherIcon: document.getElementById('weatherIcon'),
            feelsLike: document.getElementById('feelsLike'),
            humidity: document.getElementById('humidity'),
            windSpeed: document.getElementById('windSpeed'),
            pressure: document.getElementById('pressure'),
            visibility: document.getElementById('visibility'),
            cloudiness: document.getElementById('cloudiness')
        };

        function getWeatherIcon(weatherCode, isDay = true) {
            const iconMap = {
                '01d': 'fas fa-sun',
                '01n': 'fas fa-moon',
                '02d': 'fas fa-cloud-sun',
                '02n': 'fas fa-cloud-moon',
                '03d': 'fas fa-cloud',
                '03n': 'fas fa-cloud',
                '04d': 'fas fa-cloud',
                '04n': 'fas fa-cloud',
                '09d': 'fas fa-cloud-rain',
                '09n': 'fas fa-cloud-rain',
                '10d': 'fas fa-cloud-sun-rain',
                '10n': 'fas fa-cloud-moon-rain',
                '11d': 'fas fa-bolt',
                '11n': 'fas fa-bolt',
                '13d': 'fas fa-snowflake',
                '13n': 'fas fa-snowflake',
                '50d': 'fas fa-smog',
                '50n': 'fas fa-smog'
            };
            return iconMap[weatherCode] || 'fas fa-question';
        }

        function showError(message) {
            elements.errorMessage.textContent = message;
            elements.errorMessage.style.display = 'block';
            elements.weatherCard.classList.remove('show');
            setTimeout(() => {
                elements.errorMessage.style.display = 'none';
            }, 5000);
        }

        function showLoading() {
            elements.loading.style.display = 'block';
            elements.errorMessage.style.display = 'none';
            elements.weatherCard.classList.remove('show');
        }

        function hideLoading() {
            elements.loading.style.display = 'none';
        }

        function updateDateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            };
            elements.dateTime.textContent = now.toLocaleDateString('en-US', options);
        }

        function displayWeatherData(data) {
            const { main, weather, wind, visibility, clouds, name, sys } = data;
            
            elements.cityName.textContent = `${name}, ${sys.country}`;
            elements.temperature.textContent = `${Math.round(main.temp)}°C`;
            elements.weatherDesc.textContent = weather[0].description;
            elements.weatherIcon.innerHTML = `<i class="${getWeatherIcon(weather[0].icon)}"></i>`;
            
            elements.feelsLike.textContent = `${Math.round(main.feels_like)}°C`;
            elements.humidity.textContent = `${main.humidity}%`;
            elements.windSpeed.textContent = `${Math.round(wind.speed * 3.6)} km/h`;
            elements.pressure.textContent = `${main.pressure} hPa`;
            elements.visibility.textContent = `${Math.round(visibility / 1000)} km`;
            elements.cloudiness.textContent = `${clouds.all}%`;
            
            updateDateTime();
            
            hideLoading();
            elements.weatherCard.classList.add('show');
        }

        async function fetchWeatherData(city) {
            try {
                showLoading();
                
                const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('City not found. Please check the spelling and try again.');
                    } else if (response.status === 401) {
                        throw new Error('API key error. Please check your API configuration.');
                    } else {
                        throw new Error(`Weather service error: ${response.status}`);
                    }
                }
                
                const data = await response.json();
                displayWeatherData(data);
                
            } catch (error) {
                hideLoading();
                showError(error.message);
                console.error('Weather fetch error:', error);
            }
        }

        elements.searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const city = elements.cityInput.value.trim();
            if (city) {
                fetchWeatherData(city);
            }
        });

        // Load default city on page load
        window.addEventListener('load', () => {
            fetchWeatherData('Kolkata');
        });

        // Update time every minute
        setInterval(updateDateTime, 60000);