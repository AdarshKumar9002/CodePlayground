class DropdownOptionHtml {
    
    // Create option tag
    static dropdownOption(dropdownElement, countryName) {
      const DROPDOWN_OPTION_ELEMENT = document.createElement("option");
      DROPDOWN_OPTION_ELEMENT.value = countryName;
      DROPDOWN_OPTION_ELEMENT.textContent = countryName;
      dropdownElement.appendChild(DROPDOWN_OPTION_ELEMENT);
      return DROPDOWN_OPTION_ELEMENT;
    }
  }
  
  export default DropdownOptionHtml;
  