// Import

import axios from "./node_modules/axios/dist/esm/axios.js";

// Elements
const DROPDOWN_ELEMENT = document.getElementById("countryData");
const LIST_ELEMENT = document.getElementById("list");

// Variables
const API_LINK =
  "https://raw.githubusercontent.com/AdarshKumar9002/conutry-city-detail/main/data.json";


  // Fetching Data
async function fetchData() {
  let response = await axios.get(API_LINK);
  response = response.data;
  return response;
}

// Creating Option Element HTML
const createDropdownList = (key, index) => {
  const DROPDOWN_LIST_ELEMENT = document.createElement("option");
  DROPDOWN_LIST_ELEMENT.id = `option${index}`;
  DROPDOWN_LIST_ELEMENT.value = key;
  DROPDOWN_LIST_ELEMENT.textContent = key;
  DROPDOWN_ELEMENT.appendChild(DROPDOWN_LIST_ELEMENT);
};


// Get all countries names

// Get all the city name bassed on country 

// create array of city name

// Check for Duplicate and store only one copy

// Populate the Dropdown 

// Create a eventlistner for btn

// Show the History text







