const DROPDOWN_ELEMENT = document.getElementById("countryData");
const LIST_ELEMENT = document.getElementById("list");

async function fetchData() {
  const request = await fetch(
    "https://raw.githubusercontent.com/AdarshKumar9002/conutry-city-detail/main/data.json"
  );
  const response = await request.json();
  return response;
}

const createDropdownList = (key, index) => {
  const DROPDOWN_LIST_ELEMENT = document.createElement("option");
  DROPDOWN_LIST_ELEMENT.id = `option${index}`;
  DROPDOWN_LIST_ELEMENT.value = key;
  DROPDOWN_LIST_ELEMENT.textContent = key;
  DROPDOWN_ELEMENT.appendChild(DROPDOWN_LIST_ELEMENT);
};

const storeKeys = async () => {
  const data = await fetchData();
  let totalKeys = [];

  data.forEach((item) => {
    let key = Object.keys(item)[0];
    if (!totalKeys.includes(key)) {
      totalKeys.push(key);
    }
  });

  return totalKeys;
};

const populateDropdownList = async () => {
  const keys = await storeKeys();
  keys.forEach((key, index) => {
    createDropdownList(key, index + 1);
  });
};

const checkExistedKeys = (keys, countryName, obj, cities) => {
  if (keys.includes(countryName)) {
    if (!obj[countryName]) {
      obj[countryName] = [];
    }
    // Use concat to merge the cities array into obj[countryName]
    obj[countryName] = obj[countryName].concat(cities);
  }
};

const getCitiesName = async () => {
  const data = await fetchData();
  const keys = await storeKeys();

  const obj = {};

  data.map((item) => {
    const countryName = Object.keys(item)[0];
    const cities = Object.values(item)[0];
    console.log(Object.values(item)[0]);

    checkExistedKeys(keys, countryName, obj, cities);
  });
  console.log(obj);

  return obj;
};

const createListElements = (city) => {
    const LIST_ITEM_ELEMENT = document.createElement("li");
    LIST_ITEM_ELEMENT.classList.add(
      "border-b-2",
      "border-gray-300",
      "bg-blue-100",
      "text-gray-700",
      "text-lg",
      "font-semibold"
    );
    LIST_ITEM_ELEMENT.textContent = city;
    LIST_ELEMENT.appendChild(LIST_ITEM_ELEMENT);
  };
  

const populateList = async (selectedCountry) => {
  const data = await getCitiesName();
  const cities = data[selectedCountry];
  if (cities) {
    cities.forEach((city) => {
      createListElements(city);
    });
  }
};

const handleDropdownChange = () => {
  LIST_ELEMENT.innerHTML = ""; // Clear previous list
  const selectedOption = DROPDOWN_ELEMENT.value;
  if (selectedOption === "Select a Country") return;

  if (selectedOption) {
    populateList(selectedOption);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  await populateDropdownList();
  DROPDOWN_ELEMENT.addEventListener("change", handleDropdownChange);
});
