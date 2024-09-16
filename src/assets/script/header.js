class Header {
    constructor() {
        this.DROPDOWN_VERSION_ELEMENT = document.querySelectorAll('.version');
        this.attachListeners();
    }

    dropdown(event) {
        const version = event.currentTarget.closest('.version'); 
        const releaseList = version.querySelector('.version__release-list');
        
        if (releaseList.classList.contains('hidden')) {
            releaseList.classList.remove('hidden');
        } else {
            releaseList.classList.add('hidden');
        }
    }

    attachListeners() {
        this.DROPDOWN_VERSION_ELEMENT.forEach(element => {
            const button = element.querySelector('.version-btn');
            button.addEventListener('click', this.dropdown.bind(this));
        });
    }
}

export default Header;
