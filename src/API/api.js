import axios from "axios";

const BASE_URL = "https://re-crm-backend.herokuapp.com";

async function submitOfferToAPI(data) {
    try {
        const resp = (await axios.post(`${BASE_URL}/new_lead`, data)).data;

        if (resp.errors) {
            throw (resp.errors)
        }

        return resp;
    } catch(err) {
        console.error("API Error:", err);
        let message = err;
        throw Array.isArray(message) ? message : [message];
    }
}

export default submitOfferToAPI;