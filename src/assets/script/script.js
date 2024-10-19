import $ from 'jquery';

import "../style/main.css";

import Header from "./header.js";
import GetCountryName from "./get-country-list.js";
import AppendCountryData from "./append-country-data.js";
import GetCityName from "./get-city-list.js";
import AppendCityData from "./append-city-data.js";
import {
  CITY_DROPDOWN_ELEMENT,
  COUNTRY_DROPDOWN_ELEMENT,
  renderCards,
  renderSelectedCityCard,
} from "./render-cards.js";
import FetchLocationData from './fetch-location-data.js';

class App {
  constructor() {
    this.Header = new Header();
    this.getCountryNames = new GetCountryName();
    this.appendCountryData = new AppendCountryData();
    this.getCityNames = new GetCityName();
    this.appendCityData = new AppendCityData();
  }
}

new App();


$(document).ready(renderCards); // Runs renderCards when the DOM is fully loaded
COUNTRY_DROPDOWN_ELEMENT.on("change", renderCards);
CITY_DROPDOWN_ELEMENT.on("change", renderSelectedCityCard);


