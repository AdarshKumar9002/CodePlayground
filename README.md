# CodePlayground

## Overview
This repository is a practice project for learning and applying various web development topics. Each feature or set of related topics will be introduced incrementally through different release branches, branching from the `development` (main) branch. The goal is to build up a fully-featured web application step by step.

## Branch Structure
- `development`: This is the main branch used for publishing updates. All the branches are merged into this branch.
- `feature/release-x.x`: these will be use as braches name for adding new features.  

## Features by Release

### **Release 0.1: **
- **Feature**: Selecting a country from dropdown will show the city list of that country.

- **Web Topics**:
  - API/JSON call
  - Object Manipulation
  - DOM Manipulation

### How Does It Work : 

- **Fetching Data:** Using axios library to fetch the JSON file from Github repo. The JSON file contains the country names as keys and its city name as value. For example: [{India: Mumbai}, {US: New York}].

- **Storing Unique Country Names::** After fetching the data, Storing all the key in an array after that checking for dublicate name if there are dublicates removeing thoes dublicate from the array.

- **Populating the Dropdown:** After storing the countries names, Createing the HTML for option tag and puting the country name in them. After that appending the option tags in country dropdown element.

- **Extracting City Names:** After a country is selected, the cities related to that country are retrieved by finding the corresponding key-value pair in the JSON data. The cities are stored in an array, and each city is dynamically added to an ordered list (<ol>) displayed below the dropdown.

- **Handling Selection:** When a user selects a country from the dropdown, All the cites related to that country will be shown as a list.

- **Updating the City List:** The city list is updated every time a new country is selected. If a country is selected more than once, the previous city list is cleared, and the new list is populated to avoid duplication. Each city is displayed as an individual list item under the selected country.