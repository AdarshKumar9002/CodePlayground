import CardMarkup from "./card-markup.js";

class ShowDropdownResult {
  constructor() {
    this.cardMarkup = new CardMarkup();
    this.FIND_BTN_ELEMENT = document.getElementById("findHistoryBtn");
    this.CITY_DROPDOWN_ELEMENT = document.getElementById("cityData");
    this.CARD_CONTAINER_ELEMENT = document.getElementById('selectedByDropdown');
    this.eventListener();
  }

  eventListener() {
    this.FIND_BTN_ELEMENT.addEventListener("click", () => {
      const cityDropdownValue = this.CITY_DROPDOWN_ELEMENT.value; 
      console.log(cityDropdownValue);
      this.CARD_CONTAINER_ELEMENT.innerHTML='';
      this.CARD_CONTAINER_ELEMENT.innerHTML='<h2 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Dropdown</h2>';
      this.cardMarkup.render(this.CARD_CONTAINER_ELEMENT, cityDropdownValue);
    });
  }
}

export default ShowDropdownResult;
