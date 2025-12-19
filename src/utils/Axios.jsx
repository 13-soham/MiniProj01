import axios from "axios";


// timeout 7000 means after 7 sec, it cancel request

const instance = axios.create({
    baseURL: "https://fakestoreapi.com",
    timeout: 7000
});

export default instance;