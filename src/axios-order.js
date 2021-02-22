import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://data.cityofnewyork.us',
    headers: {
         'Content-Type': 'application/x-www-form-urlencoded' ,
        // "Access-Control-Allow-Origin": "*", 
        // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
    },    
});

export default instance;