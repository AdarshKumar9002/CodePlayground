// Import

import axios from "axios"

// Elements
const COUNTRY_DROPDOWN_ELEMENT = document.getElementById("countryData");
const CITY_DROPDOWN_ELEMENT = document.getElementById("cityData");
const CITY_FORM_ELEMENT = document.getElementById("cityDropdown");
const FIND_HISTORY_ELEMENT = document.getElementById("findHistoryBtn");
const HISTORY_SECTION_ELEMENT = document.getElementById("history");

// Variables
const API_LINK =
  "https://raw.githubusercontent.com/AdarshKumar9002/conutry-city-detail/main/data.json";

let countryDropdownValue = "";
let cityDropdownValue = "";

// Fetching Data
const fetchData = async () => {
  let response = await axios.get(API_LINK);
  response = response.data;
  return response;
};

// Creating Option Element HTML
const createDropdownList = (key, index, dropdownElement) => {
  const DROPDOWN_LIST_ELEMENT = document.createElement("option");
  DROPDOWN_LIST_ELEMENT.id = `option${index}`;
  DROPDOWN_LIST_ELEMENT.value = key;
  DROPDOWN_LIST_ELEMENT.textContent = key;
  dropdownElement.appendChild(DROPDOWN_LIST_ELEMENT);
};

// Get all countries names
const getCountryNames = async () => {
  const data = await fetchData();
  const countryNames = data.map((obj) => Object.keys(obj)[0]);
  return countryNames;
};

// filter the country name and remove duplicate names and create a single array
const filterCountryNames = async () => {
  const countries = await getCountryNames();
  const countryNames = [];

  countries.forEach((item) => {
    if (countryNames.includes(item)) {
      return;
    }
    countryNames.push(item);
  });

  return countryNames;
};

const countryNames = filterCountryNames().then((data) => data);

const getCountryCityMapping = async () => {
  const allData = await fetchData();
  const countryNames = await filterCountryNames();
  let filteredCities;
  const countryCityMapping = {};

  countryNames.forEach((country) => {
    filteredCities = allData.filter((record) => record[country]);
    countryCityMapping[country] = filteredCities;
  });

  return countryCityMapping;
};

const getCitiesByCountry = async () => {
  const countryCityMapping = await getCountryCityMapping();
  let cityMapping = {};

  Object.keys(countryCityMapping).forEach((country) => {
    const cityList = countryCityMapping[country];
    const cities = cityList.map((cityRecord) => Object.values(cityRecord)[0]);
    cityMapping[country] = cities;
  });

  return cityMapping;
};

const cityList = getCitiesByCountry().then((data) => data);

// Populate country the Dropdown
const populateCountryDropdown = async () => {
  const countries = await countryNames;
  countries.forEach((country, index) => {
    createDropdownList(country, index, COUNTRY_DROPDOWN_ELEMENT);
  });
};
populateCountryDropdown().then((data) => data);

// get the selected country from dropdown
const getSelectedCountry = () => {
  countryDropdownValue = COUNTRY_DROPDOWN_ELEMENT.value;
  return countryDropdownValue;
};

// Populate city the Dropdown
const populateCityDropdown = async (selectedCountry) => {
  const cities = await cityList;
  const selectedCountryCities = cities[selectedCountry];
  selectedCountryCities.forEach((city, index) => {
    createDropdownList(city, index, CITY_DROPDOWN_ELEMENT);
  });
};

// get selected city from dropdown
const getSelectedCity = () => {
  cityDropdownValue = CITY_DROPDOWN_ELEMENT.value;
  return cityDropdownValue;
};

// Show histroy of selected history
const showHistory = (selectedCity) => {
  const HISTORY_TITLE_ELEMENT = HISTORY_SECTION_ELEMENT.querySelector("h2");
  const HISTORY_PARAGRAPH_ELEMENT = HISTORY_SECTION_ELEMENT.querySelector("p");
  HISTORY_TITLE_ELEMENT.textContent = `History Of ${selectedCity}`;
  HISTORY_PARAGRAPH_ELEMENT.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi alias, dicta placeat sapiente incidunt suscipit eius rem officiis at nisi ut corporis ipsam nemo esse a atque laboriosam! Saepe illum inventore ab. Non soluta rem sunt illo placeat provident est itaque quia sit impedit saepe maxime et, ullam tempora ratione earum atque inventore iusto nam commodi voluptate odio dolore ipsa nesciunt! Quas vitae, ipsum tempora, libero aliquam illo quo, natus nobis a commodi officiis asperiores soluta tempore obcaecati rerum aliquid numquam ab laudantium facere! Fuga, aliquid delectus quaerat eveniet unde eius dignissimos quo consequuntur quibusdam earum, minima voluptates omnis quas!`;
};

// Country form submit eventlistener
COUNTRY_DROPDOWN_ELEMENT.addEventListener('change', (event) => {
  event.preventDefault();
  getSelectedCountry();
  CITY_DROPDOWN_ELEMENT.innerHTML = "";
  CITY_DROPDOWN_ELEMENT.insertAdjacentHTML(
    "afterbegin",
    `<option> Select a City </option>`
  );
  populateCityDropdown(countryDropdownValue);
});

// City form submit eventlistener
FIND_HISTORY_ELEMENT.addEventListener("click", (event) => {
  event.preventDefault();
  getSelectedCity();
  showHistory(cityDropdownValue);
});
