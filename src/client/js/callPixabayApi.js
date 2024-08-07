let pixabayApi = async (cityName) => {
    const pixabayApiKey = "45205487-884b8bb23e0c34fe935c88d4f";
    const pixabayApiReqURL = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${cityName}&image_type=photo`;
    const res = await fetch(pixabayApiReqURL);
    let result = {};
    try {
      result = await res.json();
    } catch (error) {
      console.log("error:", error);
    }
    return result;
  };
  
  export { pixabayApi };
  