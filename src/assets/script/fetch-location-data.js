import links from "./vendor.js";

class FetchLocationData {
  constructor() {
    this.url = links.countyCityList;
  }

  async getLocatoins() {
    try {
      const request = await $.get(this.url);
      const response = await JSON.parse(request);
      return response;
    } catch (error) {
        console.log(error);

    }
  }
}

export default FetchLocationData;
