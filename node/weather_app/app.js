const weatherAPI = {
  key: "742accb6158a9fd2fec3770de2ff4dbb",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?",
};
const searchInputBox = document.getElementById("input-box");
searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
    document.querySelector(".weather-body").style.display = "block";
  }
});
function getWeatherReport(city) {
  fetch(`${weatherAPI.baseUrl}?q=${city}&appid=${weatherAPI.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}
function showWeatherReport(weather) {
  console.log(weather);
  let city = document.getElementById("city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  let temprature = getElementById("temp");
  temprature.innerHTML = `${Math.round(weather.main.temp)}&deg;c`;

  let minMaxtemp = document.getElementById("min-max");
  minMaxtemp.innerHTML = `${Math.floor(
    weather.min.temp_min
  )}&deg;c (min)- ${Math.ceil(weather.main.temp_max)}`;

  let weatherType = document.getElementById("weather");
  weatherType.innerText = `${weather.weather[0].min}`;

  let date = document.getElementById("date");
  let todayDate = new date();
  date.innerText = dateManage(todayDate);
}
function dateManage(dateArg) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;
}
