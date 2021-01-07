import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-react-daf56.firebaseio.com/'
});

export default instance;