import axios from 'axios';

const ins = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        token:
            localStorage.getItem("user") && localStorage.getItem('user') !== 'null' ? "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken : '',
    },
});

ins.interceptors.request.use(
    (config) => {
      config.headers.token = localStorage.getItem("user") && localStorage.getItem('user') !== 'null' ? "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken : '';
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
);

export default ins;
