class DropdownOptionHtml {
 
    static dropdownOption(dropdownElement, countryName) {
      const DROPDOWN_OPTION_ELEMENT = document.createElement("option");
      DROPDOWN_OPTION_ELEMENT.value = countryName;
      DROPDOWN_OPTION_ELEMENT.textContent = countryName;
      dropdownElement.appendChild(DROPDOWN_OPTION_ELEMENT);
      return DROPDOWN_OPTION_ELEMENT;
    }
    static dropdownOption(dropdownElement, countryName) {
      const DROPDOWN_OPTION_ELEMENT = $("<option> </option>");
      DROPDOWN_OPTION_ELEMENT.val(countryName);
      DROPDOWN_OPTION_ELEMENT.text(countryName);
      dropdownElement.append(DROPDOWN_OPTION_ELEMENT);
      return DROPDOWN_OPTION_ELEMENT;
    }
  }
  
  export default DropdownOptionHtml;
  