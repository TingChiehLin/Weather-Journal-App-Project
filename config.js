//https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}

const constants = {
    openWeatherMap: {
        BASE_URL: "https://api.openweathermap.org/data/2.5/weather?zip=",
        KEY:"cf301ca20db80baafb28fee8d8d13a95"
    }
}

const d = new Date();

module.exports = constants;
// module.exports.d = d;
