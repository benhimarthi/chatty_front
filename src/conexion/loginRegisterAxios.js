import axios from "axios";

const apiUser = axios.create({
    baseURL : "http://localhost:8084/api/user"
})

export default apiUser;