import axios from 'axios';

const ins = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        token:
            localStorage.getItem("user") ? "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken : '',
    },
});

export default ins;
