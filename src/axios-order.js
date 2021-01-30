import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://data.cityofnewyork.us'
});

export default instance;