class Header {
    constructor() {
        this.DROPDOWN_VERSION_ELEMENT = $('.version');
        this.attachListeners();
    }

    dropdown(event) {
        const version = $(event.currentTarget).closest('.version'); 
        const releaseList = version.find('.version__release-list');

        if (releaseList.hasClass('hidden')) {
            releaseList.removeClass('hidden');
        } else {
            releaseList.addClass('hidden');
        }
    }

    attachListeners() {
        this.DROPDOWN_VERSION_ELEMENT.each((index, element) => {
            const button = $(element).find('.version-btn');
            button.on('click', (event) => this.dropdown(event));
        });
    }
}

export default Header;
