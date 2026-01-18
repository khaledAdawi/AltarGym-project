import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost/altragym_api",
    
});

export default axiosInstance;
