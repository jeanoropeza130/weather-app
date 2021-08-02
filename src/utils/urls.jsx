
const appid = "3d34aed0205843cb45b37b44c8b83b67"

export const getWeatherUrl = ({ city, countryCode }) => (
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
)

export const getForecastUrl = ({ city, countryCode }) => (
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
)
