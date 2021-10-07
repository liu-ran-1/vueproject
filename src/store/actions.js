import {
    ADD_COUNTER,
    ADD_TO_CART
}from './mutation-types'
export default {
    addCart(context, payload) {
        let product = context.state.cartList.find(item =>
          item.iid === payload.iid
        )
  
        if (product) {
        //   product.count += 1;
          context.commit([ADD_COUNTER],product);
        } else {
          payload.count = 1;
          context.commit([ADD_TO_CART],payload);

        }
  
        // let oldProduct =  null;
        // for(let item of state.cartList){
        //     if(item.iid === payload.iid){
        //         oldProduct == item;
        //     }
        // }
        // if(oldProduct){
        //     oldProduct.count +=1;
        // }else{
        //     payload.count =1;
        //     state.cartList.push(payload)
        // }
  
      }
  }