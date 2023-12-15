<template>
<div id="weather_APP">
    <main>
        <div class="search-box">
            <input type="text" class="search-bar" placeholder="seach......." v-model="query" @keypress="fetchWeather" />

        </div>
        <div class="weather-wrap" v-if="(typeof weather.main != 'undefined')">
            <div class="location-box">
                <div class="location"> {{ weather.name }} ,{{ weather.sys.country }}</div>
                <div class="date"> {{ Date() }}</div>
            </div>

            <div class="weather-box">
                <div class="temp">{{ weather.main.temp }}°C</div>
                <div class="weather">Rain</div>
            </div>
        </div>

    </main>
</div>
</template>

<script>
export default {
    name: "WeatherApp",
    data() {
        return {
            api_key: '7f189e3ac458292a96fa8997b71e5274',
            url_base: 'https://api.openweathermap.org/data/2.5/',

            query: '',
            weather: {

            }
        }

    },
    methods: {

        fetchWeather(e) {
            
                // fetch(`${this.url_base}this.weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                  
            if (e.key == "Enter") {
                fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                    .then(res => {
                        return res.json();
                    })
                    .then(this.setResults)
                    .catch(error => {
                        console.error("Error fetching weather data:", error);
                    });
            }
        },
        setResults(results) {
            this.weather = results;

        }

    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

body {
    font-family: 'montserrat', sans-serif;
}

#weather_APP {
    /* background-image: url('../../assets/logo.png'); */
    background-size: cover;
    background-position: bottom;
    transition: 0.45;

}

main {
    min-height: 100vh;
    padding: 25px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.23), rgba(0, 0, 0, 0.75));

}

.search-box {
    width: 100%;
    margin-bottom: 30px;

}

.search-box .search-bar {
    display: block;
    width: 100%;
    padding: 15px;
    color: #313131;
    font-size: 20px;
    appearance: none;
    outline: none;

    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
    transition: 0.4s;
}

.search-box .search-bar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;

}

.location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);

}

.location-box .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;

}

.weather-box {
    text-align: center;
}

.weather-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 102px;
    font-weight: 900;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin: 30px 0px;
}

.weather-box .weather {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
