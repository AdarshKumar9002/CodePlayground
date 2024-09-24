import axios from "axios"

import links from './vendor.js'

class FetchLocationData {

    constructor() {
        this.url = links.countyCityList;
    }

    async getLocatoins() {
        const response = await axios.get(this.url);
        return response.data;
    }
}

export default FetchLocationData;