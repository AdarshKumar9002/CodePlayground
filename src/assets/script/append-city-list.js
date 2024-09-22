import CardMarkup from "./card-markup.js";
import GetCityName from "./get-city-list.js";

class CityList {
    constructor() {
        this.cardMarkup = new CardMarkup();
        this.cityList = new GetCityName();
    }

    async renderCards(selectedCountry) {
        try {
            const cities = await this.cityList.getCitiesByCountry();
            const selectedCountryCities = cities[selectedCountry];

            if (!selectedCountryCities) {
                console.warn(`No cities found for country: ${selectedCountry}`);
                return;
            }

            const CITY_LIST_CONTAINER = document.getElementById('city-lists');
            CITY_LIST_CONTAINER.className = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3';

            CITY_LIST_CONTAINER.innerHTML = ''; 

            selectedCountryCities.forEach(city => {
                this.cardMarkup.render(CITY_LIST_CONTAINER, city);
            });
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    }
}

export default CityList;
