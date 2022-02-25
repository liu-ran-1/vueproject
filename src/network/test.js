import {request} from './request.js';

export function test(param){
    return request({
        url:'/test',
        params:{
            param
         }
    });
}

export function menus(param){
    return request({
        url:'/menus',
        params:{
            param
         }
    });
}

