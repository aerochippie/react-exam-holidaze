import axios from "axios";

export default axios.create({
    baseURL : "https://api.noroff.dev",
    headers: {
        Authorization : `Bearer ${localStorage.getItem("accessToken")}`,
        }
})

