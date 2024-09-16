import FetchLocationData from "./fetch-location-data.js";

class GetCountryName extends FetchLocationData {
  constructor() {
    super();
  }

  async getNames() {
    const locationData = await this.getLocatoins();
    const countryNames = locationData.map((obj) => Object.keys(obj)[0]);
    return countryNames;
  }

  async removeDuplicatesNames() {
    const orignalList = await this.getNames();
    const newList = [...new Set(orignalList)]; // Set remove duplicates and return a new object;
    return newList;
  }

  async countryNames() {
    const country = await this.removeDuplicatesNames();
    return country;
  }
}

export default GetCountryName;
