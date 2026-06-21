// Local weather dataset profiles matching image documentation profiles
const weatherDataRegistry = {
    "Rockmart": {
        temp: "78°", condition: "Cloudy", range: "H:84°  L:71°",
        alertText: "Thunderstorms expected around 1PM. Wind gusts are up to 11 mph.",
        bg: "linear-gradient(180deg, #516375 0%, #3d4b59 40%, #1e252d 100%)",
        baseTemp: 78, aqi: 15, aqiStatus: "Good", aqiDesc: "Air quality index is 15, which is better than yesterday at about this time.", aqiPct: 8,
        feelsLike: "78°", feelsDesc: "Similar to the actual temperature.", uv: 5, uvStatus: "Moderate", uvIndicator: 50, uvDesc: "Use sun protection until 6PM.",
        wind: "6 mph", gusts: "11 mph", dir: "314° NW", angle: 314, sunset: "8:53PM", sunrise: "6:29AM",
        rainfall: '1.25"', rainfallDesc: '.05" expected in next 24h.', visibility: "12 mi", visibilityDesc: "Perfectly clear view.",
        humidity: "79%", dewPoint: "The dew point is 71° right now.", moonIllum: "27%", moonrise: "11:27 AM", moonFull: "10 DAYS", moonShadow: 68,
        avgDiff: "-1°", avgToday: "H:84°", avgNormal: "H:85°", pressure: "29.94", pressureTrend: "=", pressureRotate: 0, subtitle: "202 White Creek Loop, Rockmart, GA 30153"
    },
    "Paulding County": {
        temp: "78°", condition: "Cloudy", range: "H:85°  L:71°",
        alertText: "Overcast conditions prevailing through late afternoon hours.",
        bg: "linear-gradient(180deg, #60717e 0%, #46545f 40%, #22292f 100%)",
        baseTemp: 78, aqi: 22, aqiStatus: "Good", aqiDesc: "Air quality index is 22, which is completely safe for outdoor exercises.", aqiPct: 14,
        feelsLike: "78°", feelsDesc: "Humidity makes it feel exactly the same.", uv: 4, uvStatus: "Moderate", uvIndicator: 40, uvDesc: "UV radiation levels are modest today.",
        wind: "5 mph", gusts: "9 mph", dir: "310° NW", angle: 310, sunset: "8:52PM", sunrise: "6:30AM",
        rainfall: '0.80"', rainfallDesc: 'Clearing skies expected tonight.', visibility: "10 mi", visibilityDesc: "Standard morning horizon parameters.",
        humidity: "82%", dewPoint: "The dew point is 72° right now.", moonIllum: "27%", moonrise: "11:28 AM", moonFull: "10 DAYS", moonShadow: 68,
        avgDiff: "0°", avgToday: "H:85°", avgNormal: "H:85°", pressure: "29.92", pressureTrend: "↓", pressureRotate: -20, subtitle: "Dallas, GA 30132"
    },
    "Panama City Beach": {
        temp: "81°", condition: "Flood Watch", range: "H:84°  L:79°",
        alertText: "Heavy regional precipitation warning. Risk of flash flooding active.",
        bg: "linear-gradient(180deg, #32404e 0%, #1e2833 40%, #0d1217 100%)",
        baseTemp: 81, aqi: 12, aqiStatus: "Good", aqiDesc: "Rain has washed away airborne particles; air quality is pristine.", aqiPct: 5,
        feelsLike: "88°", feelsDesc: "High humidity makes it feel much warmer.", uv: 2, uvStatus: "Low", uvIndicator: 20, uvDesc: "Low risk from UV rays today due to storm cells.",
        wind: "18 mph", gusts: "29 mph", dir: "185° S", angle: 185, sunset: "7:44PM", sunrise: "5:42AM",
        rainfall: '4.10"', rainfallDesc: 'An additional 2.1" expected before midnight.', visibility: "3 mi", visibilityDesc: "Reduced visibility in heavy cloud downpours.",
        humidity: "95%", dewPoint: "The dew point is 79° right now.", moonIllum: "27%", moonrise: "10:35 AM", moonFull: "10 DAYS", moonShadow: 68,
        avgDiff: "+2°", avgToday: "H:84°", avgNormal: "H:82°", pressure: "29.74", pressureTrend: "↓", pressureRotate: -55, subtitle: "Front Beach Rd, Panama City Beach, FL 32413"
    },
    "Long Island City": {
        temp: "76°", condition: "Cloudy", range: "H:84°  L:70°",
        alertText: "Light intermittent cloud cover. Winds stable around 5 mph.",
        bg: "linear-gradient(180deg, #536473 0%, #3a4753 40%, #1c2329 100%)",
        baseTemp: 76, aqi: 48, aqiStatus: "Good", aqiDesc: "Air quality is acceptable; acceptable risk for most individuals.", aqiPct: 28,
        feelsLike: "75°", feelsDesc: "Light coastal breezes offer a cool sensation.", uv: 6, uvStatus: "High", uvIndicator: 60, uvDesc: "Apply protection if outdoors for long windows.",
        wind: "5 mph", gusts: "7 mph", dir: "80° E", angle: 80, sunset: "8:31PM", sunrise: "5:24AM",
        rainfall: '0.00"', rainfallDesc: 'No measurable moisture accumulation expected.', visibility: "15 mi", visibilityDesc: "Clear views across East River bridges.",
        humidity: "62%", dewPoint: "The dew point is 61° right now.", moonIllum: "27%", moonrise: "12:15 PM", moonFull: "10 DAYS", moonShadow: 68,
        avgDiff: "-2°", avgToday: "H:84°", avgNormal: "H:86°", pressure: "30.01", pressureTrend: "↑", pressureRotate: 30, subtitle: "Queens, New York, NY 11101"
    },
    "Euharlee": {
        temp: "79°", condition: "Cloudy", range: "H:85°  L:72°",
        alertText: "Storm activity moving northwards clear of the immediate vicinity.",
        bg: "linear-gradient(180deg, #44525f 0%, #2f3a44 40%, #151a1e 100%)",
        baseTemp: 79, aqi: 18, aqiStatus: "Good", aqiDesc: "Air quality index is 18, which is great for outdoor strolls.", aqiPct: 10,
        feelsLike: "80°", feelsDesc: "Feels close to actual parameters.", uv: 5, uvStatus: "Moderate", uvIndicator: 50, uvDesc: "Standard local baseline radiation protection.",
        wind: "7 mph", gusts: "12 mph", dir: "315° NW", angle: 315, sunset: "8:54PM", sunrise: "6:29AM",
        rainfall: '1.40"', rainfallDesc: 'Drying parameters expected into late evening.', visibility: "11 mi", visibilityDesc: "Clear landscape visibility profiles.",
        humidity: "80%", dewPoint: "The dew point is 72° right now.", moonIllum: "27%", moonrise: "11:28 AM", moonFull: "10 DAYS", moonShadow: 68,
        avgDiff: "0°", avgToday: "H:85°", avgNormal: "H:85°", pressure: "29.93", pressureTrend: "=", pressureRotate: 0, subtitle: "Covered Bridge Rd, Euharlee, GA 30145"
    }
};

// Generates an expanded 24-Hour slider deck layout natively
function populateHourlyTimeline(baseTemp) {
    const container = document.getElementById("detail-hourly-scroll");
    if (!container) return;
    container.innerHTML = "";

    const currentHour = 11; // Simulated starting at 11 AM
    
    for (let i = 0; i < 24; i++) {
        const hourTarget = (currentHour + i) % 12 || 12;
        const ampm = ((currentHour + i) % 24) >= 12 ? "PM" : "AM";
        const hourLabel = i === 0 ? "Now" : `${hourTarget}${ampm}`;
        
        let popPct = "";
        let iconClass = "fa-cloud";
        
        if (i >= 2 && i <= 6) {
            popPct = `${10 * (i - 1)}%`;
            iconClass = i > 3 ? "fa-cloud-bolt" : "fa-cloud-showers-water";
        } else if (i > 12 && i < 18) {
            popPct = "15%";
            iconClass = "fa-cloud-rain";
        }

        const hourlyItem = document.createElement("div");
        hourlyItem.className = "hour-item";
        hourlyItem.innerHTML = `
            <span>${hourLabel}</span>
            <i class="fas ${iconClass}"></i>
            <span class="pop-pct">${popPct}</span>
            <span>${baseTemp + Math.floor(Math.sin(i / 3) * 4)}°</span>
        `;
        container.appendChild(hourlyItem);
    }
}

// Generates an expanded 10-Day list timeline cleanly without shifting rows
function populateDailyTimeline(baseTemp) {
    const listContainer = document.getElementById("detail-daily-list");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    const daysOfWeek = ["Today", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const iconMap = ["fa-cloud-bolt", "fa-cloud-showers-heavy", "fa-cloud-showers-heavy", "fa-cloud-sun", "fa-sun", "fa-sun", "fa-cloud", "fa-cloud-rain", "fa-cloud-bolt", "fa-cloud"];
    const popMap = ["45%", "50%", "50%", "", "", "", "", "20%", "40%", ""];

    for (let i = 0; i < 10; i++) {
        const low = baseTemp - 7 + Math.floor(Math.sin(i) * 2);
        const high = baseTemp + 6 + Math.floor(Math.cos(i) * 2);
        
        const leftOffset = 20 + Math.floor(Math.sin(i) * 10);
        const progressWidth = 45 + Math.floor(Math.cos(i) * 10);
        const rangeClass = high > 82 ? "warm-range" : "cool-range";
        
        const liveDot = i === 0 ? `<div class="bar-dot" style="left: 45%;"></div>` : "";

        const dayRow = document.createElement("div");
        dayRow.className = "day-row";
        dayRow.innerHTML = `
            <span class="day-lbl">${daysOfWeek[i]}</span>
            <div class="day-icon-block">
                <i class="fas ${iconMap[i]}"></i>
                <span class="pop-pct">${popMap[i]}</span>
            </div>
            <span class="day-range-low">${low}°</span>
            <div class="temp-bar-track">
                <div class="temp-bar-progress ${rangeClass}" style="left: ${leftOffset}%; width: ${progressWidth}%;"></div>
                ${liveDot}
            </div>
            <span class="day-range-high">${high}°</span>
        `;
        listContainer.appendChild(dayRow);
    }
}

// Target View Switching Triggers Logic Setup
const listToggleTrigger = document.getElementById("list-toggle-trigger");
const globalNavbar = document.getElementById("global-navbar");
const detailPage = document.getElementById("detail-page");
const listPage = document.getElementById("list-page");
const appContainer = document.getElementById("weather-app-container");

function showListPage() {
    detailPage.classList.remove("active");
    listPage.classList.add("active");
    globalNavbar.style.display = "none";
    appContainer.style.background = "#161c22";
    appContainer.scrollTop = 0;
}

function showDetailPage(cityName) {
    // If searched city profile doesn't exist, build a simulated entry on the fly
    let data = weatherDataRegistry[cityName];
    if (!data) {
        const genTemp = 64 + Math.floor(Math.random() * 20);
        data = {
            temp: `${genTemp}°`, condition: "Clear", range: `H:${genTemp+6}°  L:${genTemp-6}°`,
            alertText: "Clear conditions observed locally. Excellent sky visibility.",
            bg: "linear-gradient(180deg, #2c5282 0%, #1a365d 50%, #0a192f 100%)",
            baseTemp: genTemp, aqi: 28, aqiStatus: "Good", aqiDesc: `Air quality is ${genTemp < 75 ? 'exceptional' : 'normal'} today.`, aqiPct: 15,
            feelsLike: `${genTemp}°`, feelsDesc: "Wind chill values match thermostat records.", uv: 6, uvStatus: "High", uvIndicator: 60, uvDesc: "Sun mitigation advised.",
            wind: "7 mph", gusts: "10 mph", dir: "180° S", angle: 180, sunset: "8:41PM", sunrise: "6:14AM",
            rainfall: '0.00"', rainfallDesc: 'Dry atmospheric envelope present.', visibility: "10 mi", visibilityDesc: "Atmosphere parameters completely clear.",
            humidity: "55%", dewPoint: `The dew point is ${genTemp-10}° right now.`, moonIllum: "27%", moonrise: "11:40 AM", moonFull: "10 DAYS", moonShadow: 68,
            avgDiff: "0°", avgToday: `H:${genTemp+6}°`, avgNormal: `H:${genTemp+6}°`, pressure: "29.92", pressureTrend: "=", pressureRotate: 0, subtitle: "Regional District Location Data"
        };
    }
    
    // Core Layout Header Injection Updates
    document.getElementById("hero-city").innerText = cityName;
    document.getElementById("hero-temp").innerText = data.temp;
    document.getElementById("hero-condition").innerText = data.condition;
    document.getElementById("hero-range").innerText = data.range;
    document.querySelector(".summary-alert").innerText = data.alertText;
    appContainer.style.background = data.bg;

    // Full Individual Tile Stat Updates
    document.getElementById("stat-aqi").innerText = data.aqi;
    document.getElementById("stat-aqi-status").innerText = data.aqiStatus;
    document.getElementById("stat-aqi-desc").innerText = data.aqiDesc;
    document.getElementById("stat-aqi-indicator").style.left = `${data.aqiPct}%`;
    document.getElementById("stat-map-badge").innerText = data.baseTemp;
    document.getElementById("stat-feels-like").innerText = data.feelsLike;
    document.getElementById("stat-feels-desc").innerText = data.feelsDesc;
    
    document.getElementById("stat-uv").innerText = data.uv;
    document.getElementById("stat-uv-status").innerText = data.uvStatus;
    document.getElementById("stat-uv-desc").innerText = data.uvDesc;
    document.getElementById("stat-uv-indicator").style.left = `${data.uvIndicator}%`;

    document.getElementById("stat-wind").innerText = data.wind;
    document.getElementById("stat-gusts").innerText = data.gusts;
    document.getElementById("stat-wind-dir").innerText = data.dir;
    document.getElementById("stat-compass-num").innerText = parseFloat(data.wind) || 0;
    document.querySelector(".compass-arrow").style.transform = `rotate(${data.angle}deg)`;

    document.getElementById("stat-sunset").innerHTML = `${data.sunset.replace(/(AM|PM)/, '')}<span class="ampm">${data.sunset.includes('PM') ? 'PM' : 'AM'}</span>`;
    document.getElementById("stat-sunrise").innerText = `Sunrise: ${data.sunrise}`;
    document.getElementById("stat-rainfall").innerText = data.rainfall;
    document.getElementById("stat-rainfall-desc").innerText = data.rainfallDesc;
    document.getElementById("stat-visibility").innerText = data.visibility;
    document.getElementById("stat-visibility-desc").innerText = data.visibilityDesc;
    document.getElementById("stat-humidity").innerText = data.humidity;
    document.getElementById("stat-dewpoint").innerText = data.dewPoint;

    document.getElementById("stat-moon-illum").innerText = data.moonIllum;
    document.getElementById("stat-moonrise").innerText = data.moonrise;
    document.getElementById("stat-moon-full").innerText = data.moonFull;
    document.getElementById("stat-moon-shadow").style.width = `${data.moonShadow}%`;

    document.getElementById("stat-avg-diff").innerText = data.avgDiff;
    document.getElementById("stat-avg-today").innerText = data.avgToday;
    document.getElementById("stat-avg-normal").innerText = data.avgNormal;
    
    document.getElementById("stat-pressure").innerText = data.pressure;
    document.getElementById("stat-pressure-trend").innerText = data.pressureTrend;
    document.getElementById("stat-pressure-needle").setAttribute("transform", `rotate(${data.pressureRotate} 50 50)`);

    document.getElementById("stat-footer-title").innerText = `Weather for ${cityName}`;
    document.getElementById("stat-footer-subtitle").innerText = data.subtitle;

    // Refresh dynamically scaled subcomponents
    populateHourlyTimeline(data.baseTemp);
    populateDailyTimeline(data.baseTemp);

    listPage.classList.remove("active");
    detailPage.classList.add("active");
    globalNavbar.style.display = "flex";
    appContainer.scrollTop = 0;
}

// Event Bindings Assignment Setup
listToggleTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    showListPage();
});

document.querySelectorAll(".location-card").forEach(card => {
    card.addEventListener("click", () => {
        const selectedCity = card.getAttribute("data-city");
        showDetailPage(selectedCity);
    });
});

// Input Lookup simulation action listener
document.getElementById("search-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter" && this.value.trim() !== "") {
        const query = this.value.trim();
        const formattedQuery = query.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        
        this.value = "";
        showDetailPage(formattedQuery);
    }
});

// Initialize first-load data seamlessly
populateHourlyTimeline(78);
populateDailyTimeline(78);