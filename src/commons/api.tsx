import axios from "axios";

import { DiscoveryRequestModel } from "../models/RequestModel";

const API_KEY = "yEFg4Y4rsIfKymR5Yyj9Kq6H2Qmn1ebb";

const instance = axios.create({
    baseURL: "https://app.ticketmaster.com/"
});


export const getDiscoveryEvent = async (params : DiscoveryRequestModel) => {
    const response = await instance.get('discovery/v2/events.json',{
        params
    });
    return response;
};


instance.interceptors.request.use(config => {
    config.params = {
        ...config.params,
        apikey: API_KEY
    };
    return config;
});


export default instance;