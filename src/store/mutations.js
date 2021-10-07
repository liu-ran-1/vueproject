import {
    ADD_COUNTER,
    ADD_TO_CART
}from './mutation-types'

export default   {
    //mutations的设置的目的是修改state中的状态
    //mutations设计原则 尽可能单一
    [ADD_COUNTER](state,payload){
      payload.count++;
    },
    [ADD_TO_CART](state,payload){
        payload.checked = true;
      state.cartList.push(payload)
    }
 
}