import GetCityName from "./get-city-list.js";
import DropdownOptionHtml from "./dropdown-markup.js";

class AppendCityData {
  constructor() {
    this.COUNTRY_DROPDOWN_ELEMENT = document.getElementById("countryData");
    this.CITY_DROPDOWN_ELEMENT = document.getElementById("cityData");
    this.cityNames = new GetCityName();
    this.selectedCountry = "";
    this.selectedCity = "";
    this.attachListeners();
    this.resetDropdown();
  }

  // Add citylist in the City dropdown
  async populateCityDropdown(selectedCountry) {
    try {
      const countyList = await this.cityNames.getCitiesByCountry();
      const selectedCountryCities = countyList[selectedCountry] || [];

      selectedCountryCities.forEach((city) => {
        DropdownOptionHtml.dropdownOption(this.CITY_DROPDOWN_ELEMENT, city);
      });
    } catch (error) {
      console.error("Error fetching city options:", error);
    }
  }

  // Empty the City dropdown and then add a select a city option
  resetDropdown() {
    this.CITY_DROPDOWN_ELEMENT.innerHTML = "";
    this.CITY_DROPDOWN_ELEMENT.insertAdjacentHTML(
      "afterbegin",
      `<option>Select a City</option>`
    );
  }

  // Event listeners
  attachListeners() {
    this.COUNTRY_DROPDOWN_ELEMENT.addEventListener("change", () => {
      this.selectedCountry = this.COUNTRY_DROPDOWN_ELEMENT.value;
      this.COUNTRY_DROPDOWN_ELEMENT.value = this.selectedCountry;
      this.resetDropdown();
      this.populateCityDropdown(this.selectedCountry);
    });
  }
}

export default AppendCityData;
