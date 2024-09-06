var $69Rza$axios = require("axios");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
// Import

// Elements
const $a1c8099e9c0774ab$var$COUNTRY_DROPDOWN_ELEMENT = document.getElementById("countryData");
const $a1c8099e9c0774ab$var$CITY_DROPDOWN_ELEMENT = document.getElementById("cityData");
const $a1c8099e9c0774ab$var$COUNTRY_FORM_ELEMENT = document.getElementById("countryDropdown");
const $a1c8099e9c0774ab$var$CITY_FORM_ELEMENT = document.getElementById("cityDropdown");
const $a1c8099e9c0774ab$var$HISTORY_SECTION_ELEMENT = document.getElementById("history");
// Variables
const $a1c8099e9c0774ab$var$API_LINK = "https://raw.githubusercontent.com/AdarshKumar9002/conutry-city-detail/main/data.json";
let $a1c8099e9c0774ab$var$countryDropdownValue = "";
let $a1c8099e9c0774ab$var$cityDropdownValue = "";
// Fetching Data
const $a1c8099e9c0774ab$var$fetchData = async ()=>{
    let response = await (0, ($parcel$interopDefault($69Rza$axios))).get($a1c8099e9c0774ab$var$API_LINK);
    response = response.data;
    return response;
};
// Creating Option Element HTML
const $a1c8099e9c0774ab$var$createDropdownList = (key, index, dropdownElement)=>{
    const DROPDOWN_LIST_ELEMENT = document.createElement("option");
    DROPDOWN_LIST_ELEMENT.id = `option${index}`;
    DROPDOWN_LIST_ELEMENT.value = key;
    DROPDOWN_LIST_ELEMENT.textContent = key;
    dropdownElement.appendChild(DROPDOWN_LIST_ELEMENT);
};
// Get all countries names
const $a1c8099e9c0774ab$var$getCountryNames = async ()=>{
    const data = await $a1c8099e9c0774ab$var$fetchData();
    const countryNames = data.map((obj)=>Object.keys(obj)[0]);
    return countryNames;
};
// filter the country name and remove duplicate names and create a single array
const $a1c8099e9c0774ab$var$filterCountryNames = async ()=>{
    const countries = await $a1c8099e9c0774ab$var$getCountryNames();
    const countryNames = [];
    countries.forEach((item)=>{
        if (countryNames.includes(item)) return;
        countryNames.push(item);
    });
    return countryNames;
};
const $a1c8099e9c0774ab$var$countryNames = $a1c8099e9c0774ab$var$filterCountryNames().then((data)=>data);
const $a1c8099e9c0774ab$var$getCountryCityMapping = async ()=>{
    const allData = await $a1c8099e9c0774ab$var$fetchData();
    const countryNames = await $a1c8099e9c0774ab$var$filterCountryNames();
    let filteredCities;
    const countryCityMapping = {};
    countryNames.forEach((country)=>{
        filteredCities = allData.filter((record)=>record[country]);
        countryCityMapping[country] = filteredCities;
    });
    return countryCityMapping;
};
const $a1c8099e9c0774ab$var$getCitiesByCountry = async ()=>{
    const countryCityMapping = await $a1c8099e9c0774ab$var$getCountryCityMapping();
    let cityMapping = {};
    Object.keys(countryCityMapping).forEach((country)=>{
        const cityList = countryCityMapping[country];
        const cities = cityList.map((cityRecord)=>Object.values(cityRecord)[0]);
        cityMapping[country] = cities;
    });
    return cityMapping;
};
const $a1c8099e9c0774ab$var$cityList = $a1c8099e9c0774ab$var$getCitiesByCountry().then((data)=>data);
// Populate country the Dropdown
const $a1c8099e9c0774ab$var$populateCountryDropdown = async ()=>{
    const countries = await $a1c8099e9c0774ab$var$countryNames;
    countries.forEach((country, index)=>{
        $a1c8099e9c0774ab$var$createDropdownList(country, index, $a1c8099e9c0774ab$var$COUNTRY_DROPDOWN_ELEMENT);
    });
};
$a1c8099e9c0774ab$var$populateCountryDropdown().then((data)=>data);
// get the selected country from dropdown
const $a1c8099e9c0774ab$var$getSelectedCountry = ()=>{
    $a1c8099e9c0774ab$var$countryDropdownValue = $a1c8099e9c0774ab$var$COUNTRY_DROPDOWN_ELEMENT.value;
    return $a1c8099e9c0774ab$var$countryDropdownValue;
};
// Populate city the Dropdown
const $a1c8099e9c0774ab$var$populateCityDropdown = async (selectedCountry)=>{
    const cities = await $a1c8099e9c0774ab$var$cityList;
    const selectedCountryCities = cities[selectedCountry];
    selectedCountryCities.forEach((city, index)=>{
        $a1c8099e9c0774ab$var$createDropdownList(city, index, $a1c8099e9c0774ab$var$CITY_DROPDOWN_ELEMENT);
    });
};
// get selected city from dropdown
const $a1c8099e9c0774ab$var$getSelectedCity = ()=>{
    $a1c8099e9c0774ab$var$cityDropdownValue = $a1c8099e9c0774ab$var$CITY_DROPDOWN_ELEMENT.value;
    return $a1c8099e9c0774ab$var$cityDropdownValue;
};
// Show histroy of selected history
const $a1c8099e9c0774ab$var$showHistory = (selectedCity)=>{
    const HISTORY_TITLE_ELEMENT = $a1c8099e9c0774ab$var$HISTORY_SECTION_ELEMENT.querySelector("h2");
    const HISTORY_PARAGRAPH_ELEMENT = $a1c8099e9c0774ab$var$HISTORY_SECTION_ELEMENT.querySelector("p");
    HISTORY_TITLE_ELEMENT.textContent = `History Of ${selectedCity}`;
    HISTORY_PARAGRAPH_ELEMENT.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi alias, dicta placeat sapiente incidunt suscipit eius rem officiis at nisi ut corporis ipsam nemo esse a atque laboriosam! Saepe illum inventore ab. Non soluta rem sunt illo placeat provident est itaque quia sit impedit saepe maxime et, ullam tempora ratione earum atque inventore iusto nam commodi voluptate odio dolore ipsa nesciunt! Quas vitae, ipsum tempora, libero aliquam illo quo, natus nobis a commodi officiis asperiores soluta tempore obcaecati rerum aliquid numquam ab laudantium facere! Fuga, aliquid delectus quaerat eveniet unde eius dignissimos quo consequuntur quibusdam earum, minima voluptates omnis quas!`;
};
// Country form submit eventlistener
$a1c8099e9c0774ab$var$COUNTRY_FORM_ELEMENT.addEventListener("submit", (event)=>{
    event.preventDefault();
    $a1c8099e9c0774ab$var$getSelectedCountry();
    $a1c8099e9c0774ab$var$CITY_DROPDOWN_ELEMENT.innerHTML = "";
    $a1c8099e9c0774ab$var$CITY_DROPDOWN_ELEMENT.insertAdjacentHTML("afterbegin", `<option> Select a City </option>`);
    $a1c8099e9c0774ab$var$populateCityDropdown($a1c8099e9c0774ab$var$countryDropdownValue);
});
// City form submit eventlistener
$a1c8099e9c0774ab$var$CITY_FORM_ELEMENT.addEventListener("submit", (event)=>{
    event.preventDefault();
    $a1c8099e9c0774ab$var$getSelectedCity();
    $a1c8099e9c0774ab$var$CITY_DROPDOWN_ELEMENT.innerHTML = "";
    $a1c8099e9c0774ab$var$showHistory($a1c8099e9c0774ab$var$countryDropdownValue);
});


//# sourceMappingURL=index.js.map
