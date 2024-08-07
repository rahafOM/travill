
const geoURL = "http://api.geonames.org/searchJSON?q=";
const apiKey = "&maxRows=10&username=pduoebsi1";
let geoData = {};

function formHandler() {

  let cityName = document.getElementById("zip").value;
  let departure = document.getElementById("date").value;


  let countDownDate = Date.parse(departure);

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let daysUntil = Math.floor(distance / (1000 * 60 * 60 * 24));
  geoData.daysUntil = daysUntil;

  Client.geonamesApi(geoURL, cityName, apiKey)
    .then((res) => {
      geoData.name = res.geonames[0].name;
      geoData.lat = res.geonames[0].lat;
      geoData.lng = res.geonames[0].lng;
      geoData.countryCode = res.geonames[0].countryCode;

      Client.weatherbitApi(geoData).then((res) => {
        geoData.currentTemp = res.data[0].temp;
        geoData.weatherIcon = res.data[0].weather.icon;

        Client.pixabayApi(cityName).then((res) => {
          geoData.image = res.hits[0].webformatURL;
          console.log(geoData);

          Client.updateUi(geoData);
        });
      });
    })

    .catch((err) => {
      console.log(err);
    });
}

export { formHandler };
