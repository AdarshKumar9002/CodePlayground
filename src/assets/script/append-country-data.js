import GetCountryName from "./get-country-list.js";
import DropdownOptionHtml from "./dropdown-markup.js";

class AppendCountryData {
  constructor() {
      this.COUNTRY_DROPDOWN_ELEMENT = document.getElementById("countryData");
    this.countryNames = new GetCountryName();
    this.selectedCountry = '';
    this.appendCountryOptions();
    // this.attachListeners();
  }

  async appendCountryOptions() {
    const countryList = await this.countryNames.countryNames();
    countryList.forEach((name) => {
      DropdownOptionHtml.dropdownOption(this.COUNTRY_DROPDOWN_ELEMENT, name);
    });
  }
}

export default AppendCountryData;