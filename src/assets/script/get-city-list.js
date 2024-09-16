import FetchLocationData from "./fetch-location-data.js";
import GetCountryName from "./get-country-list.js";

class GetCityName extends FetchLocationData {
  constructor() {
    super();
    this.countryName = new GetCountryName();
    this.getCitiesByCountry(); 
  }

  async getCountryCityMapping() {
    try {
      const locationData = await this.getLocatoins();
      const countryNames = await this.countryName.countryNames();
      let filteredCities;
      const countryCityMapping = {};

      countryNames.forEach((country) => {
        filteredCities = locationData.filter((record) => record[country]);
        countryCityMapping[country] = filteredCities;
      });
      return countryCityMapping;
    } catch (error) {
      console.error('Error fetching country-city mapping:', error);
    }
  }

  async getCitiesByCountry() {
    try {
      const countryCityMapping = await this.getCountryCityMapping();
      let cityMapping = {};

      Object.keys(countryCityMapping).forEach((country) => {
        const cityList = countryCityMapping[country];
        const cities = cityList.map((cityRecord) => Object.values(cityRecord)[0]);
        cityMapping[country] = cities;
      });      
      return cityMapping;
    } catch (error) {
      console.error('Error fetching cities by country:', error);
    }
  }
}

export default GetCityName;
