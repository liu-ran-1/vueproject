import { request } from "./request"
export function getDetail(id){
    return request({
        url:"/detail",
        params:{
            id
        }
    })
}


export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.logo;
        this.name = shopInfo.name;
        this.fans = shopInfo.fans;
        this.sells = shopInfo.sells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.goodsCount;
    }
}