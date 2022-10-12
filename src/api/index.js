import axios from "axios";


const examplApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    params: {}
})

examplApi.interceptors.request.use(
    request => {
        // condition logic here
        if(false) {
        }
        console.log('JHello')
        return request;
    },
    err => {
        return Promise.reject(err);
    }

);

export default examplApi;