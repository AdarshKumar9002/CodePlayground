import CityCards from "./append-city-list.js";

const COUNTRY_DROPDOWN_ELEMENT = document.getElementById("countryData");
const CITY_DROPDOWN_ELEMENT = document.getElementById("cityData");

const cityCards = new CityCards();

const renderCards = () => {
  if (
    COUNTRY_DROPDOWN_ELEMENT.value === "Select a Country" ||
    COUNTRY_DROPDOWN_ELEMENT.value === "" ||
    COUNTRY_DROPDOWN_ELEMENT.value === null
  ) {
    cityCards.renderAllCards();
  } else {
    const selectedCountry = COUNTRY_DROPDOWN_ELEMENT.value;
    cityCards.renderSelctedCoutnryCards(selectedCountry);
  }
};

const renderSelectedCityCard = () => {
  if (
    CITY_DROPDOWN_ELEMENT.value !== "Select a City" ||
    CITY_DROPDOWN_ELEMENT.value !== "" ||
    CITY_DROPDOWN_ELEMENT.value !== null
  ) {
    const selectedCity = CITY_DROPDOWN_ELEMENT.value;
    cityCards.renderSelectedCityCard(selectedCity);
  }
};


export {
  CITY_DROPDOWN_ELEMENT,
  COUNTRY_DROPDOWN_ELEMENT,
  renderCards,
  renderSelectedCityCard,
};
