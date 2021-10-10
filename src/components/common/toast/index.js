import Toast from './Toast'
const obj ={}

obj.install = function(Vue){
    //用Vue.use就会调用 obj.install
    //执行obj的install函数
   
    //创建组件构造器
    const toastConstructor = Vue.extend(Toast);
    //new 的方式根据组价构造器 创建一个组件
    const toast = new toastConstructor();
    //将组件对象，手动挂在到某一个元素上
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    //  Vue.prototype.$toast=  Toast;
}

export default obj