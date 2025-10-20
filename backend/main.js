 // alerts.js

const API_KEY = "4800f0a5c648e12b9214cb5f84ddd92f";

// Example: Kolkata (replace with user location dynamically if needed)
const lat = 22.5726;
const lon = 88.3639;

async function fetchWeatherAlerts() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily&appid=${API_KEY}`
        );

        const data = await response.json();

        const alertBox = document.querySelector(".weather-alert");
        const alertContent = document.querySelector(".alert-content");

        let alertMessage = "✅ No weather alerts at the moment.";
        let bgColor = "linear-gradient(135deg, #28a745, #218838)"; // green

        if (data.alerts && data.alerts.length > 0) {
            const alert = data.alerts[0];
            alertMessage = `⚠️ ${alert.event}: ${alert.description}`;

            // Severity check (you can refine by keywords)
            const severity = alert.severity ? alert.severity.toLowerCase() : "";

            if (severity.includes("severe") || severity.includes("warning")) {
                bgColor = "linear-gradient(135deg, #dc3545, #c82333)"; // red
            } else if (severity.includes("moderate") || severity.includes("watch")) {
                bgColor = "linear-gradient(135deg, #ffc107, #e0a800)"; // yellow
            } else {
                bgColor = "linear-gradient(135deg, #28a745, #218838)"; // green (default)
            }
        }

        alertContent.textContent = alertMessage;
        alertBox.style.background = bgColor;

    } catch (error) {
        console.error("Error fetching weather alert:", error);

        const alertBox = document.querySelector(".weather-alert");
        const alertContent = document.querySelector(".alert-content");

        alertContent.textContent = "⚠️ Unable to fetch alerts.";
        alertBox.style.background = "linear-gradient(135deg, #6c757d, #495057)"; // gray for error
    }
}

// Run on page load
fetchWeatherAlerts();

// Update every 10 minutes
setInterval(fetchWeatherAlerts, 600000);