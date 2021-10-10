import {request} from './request.js';

export function login(param){
    return request({
        url:'/user/login',
        params:{
            param
         }
    });
}

export function register(param){
    return request({
        url:'/user/register',
        params:{
           param
        }
    });
}