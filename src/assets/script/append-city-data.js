import GetCityName from "./get-city-list.js";
import DropdownOptionHtml from "./dropdown-markup.js";
import CityList from "./append-city-list.js";

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

    async appendCityOptions(selectedCountry) {
        try {
            const countyList = await this.cityNames.getCitiesByCountry();
            const selectedCountryCities = countyList[selectedCountry] || [];

            selectedCountryCities.forEach((city) => {
                DropdownOptionHtml.dropdownOption(this.CITY_DROPDOWN_ELEMENT, city);
            });
        } catch (error) {
            console.error('Error fetching city options:', error);
        }
    }

    resetDropdown() {
        this.CITY_DROPDOWN_ELEMENT.innerHTML = "";
        this.CITY_DROPDOWN_ELEMENT.insertAdjacentHTML(
            "afterbegin",
            `<option>Select a City</option>`
        );
    }

    static async renderCityCards(selectedCountry) {
        const cityList = new CityList();
        await cityList.renderCards(selectedCountry);
    }

    attachListeners() {
        this.COUNTRY_DROPDOWN_ELEMENT.addEventListener("change", () => {
            this.selectedCountry = this.COUNTRY_DROPDOWN_ELEMENT.value;
            this.resetDropdown();
            this.appendCityOptions(this.selectedCountry);
            AppendCityData.renderCityCards(this.selectedCountry);
        });
    }
}

export default AppendCityData;
