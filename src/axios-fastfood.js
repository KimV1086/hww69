import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://hw69-1b8c1.firebaseio.com/'
});


export default instance;
