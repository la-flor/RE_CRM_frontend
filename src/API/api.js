import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

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