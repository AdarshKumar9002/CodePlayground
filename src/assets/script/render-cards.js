import CityCards from "./append-city-cards.js";

const COUNTRY_DROPDOWN_ELEMENT = $("#countryData");
const CITY_DROPDOWN_ELEMENT = $("#cityData");

const cityCards = new CityCards();

const renderCards = () => {
  if (
    COUNTRY_DROPDOWN_ELEMENT.val("Select a Country") ||
    COUNTRY_DROPDOWN_ELEMENT.val("") ||
    COUNTRY_DROPDOWN_ELEMENT.val(null)
  ) {
    cityCards.renderAllCards();
  } else {
    const selectedCountry = COUNTRY_DROPDOWN_ELEMENT.val();
    cityCards.renderSelctedCoutnryCards(selectedCountry);
  }
};

const renderSelectedCityCard = () => {
  if (
    CITY_DROPDOWN_ELEMENT.val("Select a City") ||
    CITY_DROPDOWN_ELEMENT.val("") ||
    CITY_DROPDOWN_ELEMENT.val(null)
  ) {
    const selectedCity = CITY_DROPDOWN_ELEMENT.val();
    cityCards.renderSelectedCityCard(selectedCity);
  }
};

export {
  CITY_DROPDOWN_ELEMENT,
  COUNTRY_DROPDOWN_ELEMENT,
  renderCards,
  renderSelectedCityCard,
};
