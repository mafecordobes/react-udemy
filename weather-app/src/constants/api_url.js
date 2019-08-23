const location = "Buenos Aires,ar";
const api_key = "7fdcc724256ed0a1196ae5ad6ed81a40";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;