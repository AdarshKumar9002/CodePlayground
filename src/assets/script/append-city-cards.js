import CardMarkup from "./card-markup.js";
import GetCityName from "./get-city-list.js";
import GetCountryName from "./get-country-list.js";

class CityCards {
  constructor() {
    this.cardMarkup = new CardMarkup();
    this.cityCards = new GetCityName();
    this.countrylist = new GetCountryName();

    this.CITY_LIST_CONTAINER = document.getElementById("city-lists");
  }

  // Render cards of all the cities
  async renderAllCards() {
    try {
      const cities = await this.cityCards.getCitiesByCountry();
      const countryList = await this.countrylist.countryNames();

      const allCities = [];

      countryList.forEach((country) => {
        const countryCityList = cities[country];
        countryCityList.forEach((city) => {
          allCities.push(city);
        });
      });

      this.CITY_LIST_CONTAINER.innerHTML = "";

      allCities.forEach((city) => {
        this.cardMarkup.render(this.CITY_LIST_CONTAINER, city);
      });
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }

  // Render selected country cards
  async renderSelctedCoutnryCards(selectedCountry) {
    try {
      const cities = await this.cityCards.getCitiesByCountry();
      const selectedCountryCities = cities[selectedCountry];

      if (!selectedCountryCities) {
        console.warn(`No cities found for country: ${selectedCountry}`);
        return;
      }

      this.CITY_LIST_CONTAINER.innerHTML = "";

      selectedCountryCities.forEach((city) => {
        this.cardMarkup.render(this.CITY_LIST_CONTAINER, city);
      });
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  }

  // Render the card of selcted city
  async renderSelectedCityCard(selectedCity) {
    this.CITY_LIST_CONTAINER.innerHTML = "";
    this.cardMarkup.render(this.CITY_LIST_CONTAINER, selectedCity);
  }
}

export default CityCards;
