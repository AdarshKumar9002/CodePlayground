class CardMarkup {
    render(element, title) {
      return this.card(element, title);
    }
  
    card(appendContainer, title) {
      const CARD_ITEM_ELEMENT = document.createElement("div");
      CARD_ITEM_ELEMENT.className =
        "flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700 px-6 py-6";
  
      const IMG_CONTAINER_ELEMENT = this.cardImg();
      const TITLE_ELEMENT = this.cardTitle(title);
      const DETAILS_ELEMENT = this.cardDetails();
      const LEARN_MORE_BTN_ELEMENT = this.learnMoreBtn();
  
      // Append all elements to the card
      CARD_ITEM_ELEMENT.appendChild(IMG_CONTAINER_ELEMENT);
      CARD_ITEM_ELEMENT.appendChild(TITLE_ELEMENT);
      CARD_ITEM_ELEMENT.appendChild(DETAILS_ELEMENT);
      CARD_ITEM_ELEMENT.appendChild(LEARN_MORE_BTN_ELEMENT);
  
      // Append the card to the container
      appendContainer.appendChild(CARD_ITEM_ELEMENT);
      return CARD_ITEM_ELEMENT;
    }
  
    cardImg() {
      const CARD_IMG_CONTAINER_ELEMENT = document.createElement("div");
      CARD_IMG_CONTAINER_ELEMENT.className = "rounded-t-lg overflow-hidden w-full";
  
      const CARD_IMG_ELEMENT = document.createElement("img");
      CARD_IMG_ELEMENT.src = "https://picsum.photos/250"; // Unsplash random image
      CARD_IMG_ELEMENT.className = "w-full h-48 object-cover"; // Added responsive image styles
  
      CARD_IMG_CONTAINER_ELEMENT.appendChild(CARD_IMG_ELEMENT);
      return CARD_IMG_CONTAINER_ELEMENT;
    }
  
    cardTitle(title) {
      const CARD_TITLE_ELEMENT = document.createElement("h3");
      CARD_TITLE_ELEMENT.className =
        "mt-4 mb-2 text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300";
      CARD_TITLE_ELEMENT.textContent = title;
      return CARD_TITLE_ELEMENT;
    }
  
    cardDetails() {
      const CARD_DETAILS_ELEMENT = document.createElement("div");
      CARD_DETAILS_ELEMENT.className =
        "mb-4 text-base text-gray-700 dark:text-gray-400";
      CARD_DETAILS_ELEMENT.textContent = "This is a sample description text for the card. Modify it as needed.";
      return CARD_DETAILS_ELEMENT;
    }
  
    learnMoreBtn() {
      const CARD_LEARN_MORE_BTN_ELEMENT = document.createElement("a");
      CARD_LEARN_MORE_BTN_ELEMENT.href = "#";
      CARD_LEARN_MORE_BTN_ELEMENT.className =
        "inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 transition-transform transform hover:translate-y-1";
      CARD_LEARN_MORE_BTN_ELEMENT.textContent = "Learn More";
      return CARD_LEARN_MORE_BTN_ELEMENT;
    }
  }
  
  export default CardMarkup;
  