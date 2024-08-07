let weatherbitApi = async (geoData) => {
    const lat = geoData.lat;
    const lng = geoData.lng;
    const weatherbitApiKey = "dcdfff4ecfb4441689e7d1532ddd4999";
    const weatherbitApiReqURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${weatherbitApiKey}`;
    const res = await fetch(weatherbitApiReqURL);
    let result = {};
    try {
      result = await res.json();
    } catch (error) {
      console.log("error:", error);
    }
    return result;
  };
  
  export { weatherbitApi };
  