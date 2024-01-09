import axios from "axios";

const apiMessager = axios.create({
    baseURL : "http://localhost:8060/api/chatty"
})

export default apiMessager;