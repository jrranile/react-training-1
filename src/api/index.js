import axios from "axios";


export const exampleApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    params: {

    }
})

exampleApi.interceptors.request.use(
    request => {
        // condition logic here
        if(false) {
            // logic
        }
        console.log('JHello')
        return request;
    },
    err => {
        return Promise.reject(err);
    }

);
