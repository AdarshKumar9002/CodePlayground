class DropdownOptionHtml {
    /**
     * Creates a dropdown option element and appends it to the provided dropdown element.
     * @param {HTMLElement} dropdownElement - The dropdown menu element to which the option will be added.
     * @param {string} countryName - The value and text content for the option.
     * @param {number} index - The index for the option's ID.
     * @returns {HTMLOptionElement} The created option element.
     */
    static dropdownOption(dropdownElement, countryName) {
      const DROPDOWN_OPTION_ELEMENT = document.createElement("option");
      DROPDOWN_OPTION_ELEMENT.value = countryName;
      DROPDOWN_OPTION_ELEMENT.textContent = countryName;
      dropdownElement.appendChild(DROPDOWN_OPTION_ELEMENT);
      return DROPDOWN_OPTION_ELEMENT;
    }
  }
  
  export default DropdownOptionHtml;
  