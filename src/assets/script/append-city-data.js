import GetCityName from "./get-city-list.js";
import DropdownOptionHtml from "./dropdown-markup.js";

class AppendCityData {
  constructor() {
    this.COUNTRY_DROPDOWN_ELEMENT = document.getElementById("countryData");
    this.CITY_DROPDOWN_ELEMENT = document.getElementById("cityData");
    this.FIND_HISTORY_BTN_ELEMENT = document.getElementById("findHistoryBtn");
    this.cityNames = new GetCityName();
    this.selectedCity = "";
    this.attachListeners();
  }

  async appendCityOptions(selectedCountry) {
    const countyList = await this.cityNames.getCitiesByCountry();
    const selectedCountryCities = countyList[selectedCountry];
    selectedCountryCities.forEach((city) => {
      DropdownOptionHtml.dropdownOption(this.CITY_DROPDOWN_ELEMENT, city);
    });
  }

  resetDropdown() {
    this.CITY_DROPDOWN_ELEMENT.innerHTML = "";
    this.CITY_DROPDOWN_ELEMENT.insertAdjacentHTML(
      "afterbegin",
      `<option> Select a City </option>`
    );
  }

  attachListeners() {
    this.COUNTRY_DROPDOWN_ELEMENT.addEventListener("change", () => {
      this.selectedCountry = this.COUNTRY_DROPDOWN_ELEMENT.value;
      this.resetDropdown();
      this.appendCityOptions(this.selectedCountry);
    });
    
    this.CITY_DROPDOWN_ELEMENT.addEventListener('change', ()=> {
      const isDisabled = this.FIND_HISTORY_BTN_ELEMENT.getAttribute('disabled');
      if(isDisabled === 'true') {
        this.FIND_HISTORY_BTN_ELEMENT.removeAttribute('disabled');
      } else {
        this.FIND_HISTORY_BTN_ELEMENT.setAttribute('disabled', 'true');
      }
    })
  }
}

export default AppendCityData;
