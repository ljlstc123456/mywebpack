import toastUI from './toast.vue'
import Vue from 'vue'

let Toast = Vue.extend(toastUI);
let getToast = ()=>{
    return new Toast({el: document.createElement('div')});
}

//config
//文本 text
let toastInst = (config)=>{
    let inst = getToast();
    inst.message = config.message;

    document.body.appendChild(inst.$el);

    setTimeout(function(){
        document.body.removeChild(inst.$el);
    },config.timeout?config.timeout:2000);

    return  inst;
}


export default toastInst;

