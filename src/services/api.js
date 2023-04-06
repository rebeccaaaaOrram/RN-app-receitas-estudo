import axios from 'axios';

/* 
    json-server --host -d 180 --host SEU_IPV4 --watch db.json
*/

const api = axios.create({
    baseURL: 'http://192.168.0.34:3000',
});

export default api;