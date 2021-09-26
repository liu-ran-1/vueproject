import {request} from './request.js';

export function getHomeMultiData(){
    return request({
        url:'/home/mutidata'
    });
}

export function getHomeGoods(type,page){
    return request({
        url:'/home/mutidata',
        params:{
            type,
            page
        }
    });
}

let totalNums=[]

const   nums1=[]

const nums2=[]

// for(let n of nums1){
//     totalNums.push(n)
// }
totalNums.push(...nums1);
totalNums.push(...nums2);