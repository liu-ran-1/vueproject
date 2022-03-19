import axios from 'axios'

export function request(config){
    const instance = axios.create({
        // baseURL: 'http://82.156.187.67:1111/web',
        baseURL: 'http://127.0.0.1:1111/web',
        timeout: 60000
    })

    //axios拦截器
    instance.interceptors.request.use(config=>{
        console.log('config:'+JSON.stringify(config));
        console.log('param'+JSON.stringify(config.params))
        console.log('data',config.data)
        //拿到之后进行放行
        return config;
    },error=>{
        console.log(error);
    })

    instance.interceptors.response.use(res=>{
        return res.data;
    },error=>{
        return error;
    })
    return instance(config);
}