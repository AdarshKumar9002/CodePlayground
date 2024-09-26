import CardMarkup from "./card-markup.js";

class ShowDropdownResult {
  constructor() {
    this.cardMarkup = new CardMarkup();
    this.CITY_DROPDOWN_ELEMENT = document.getElementById("cityData");
    this.CARD_CONTAINER_ELEMENT = document.getElementById('selectedByDropdown');
    this.eventListener();
  }

  eventListener() {
    this.CITY_DROPDOWN_ELEMENT.addEventListener("change", () => {
      const cityDropdownValue = this.CITY_DROPDOWN_ELEMENT.value; 
      this.CARD_CONTAINER_ELEMENT.innerHTML='';
      this.CARD_CONTAINER_ELEMENT.innerHTML='<h2 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Dropdown</h2>';
      this.cardMarkup.render(this.CARD_CONTAINER_ELEMENT, cityDropdownValue);
    });
  }
}

export default ShowDropdownResult;
