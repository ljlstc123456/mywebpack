import loadingUI from './loading.vue'
import Vue from 'vue'
let LoadingBase = Vue.extend(loadingUI);

class Loading {

    constructor() {
        this.stack_count = 0;
        this.inst = this.getLoading();
        this.isAppend = false;
    }

    getLoading() {
        return new LoadingBase({el: document.createElement('div')});
    }

    show(showLoading = true) {
        if(this.stack_count==0 && showLoading) {
            document.body.appendChild(this.inst.$el);
            this.isAppend = true;
        }
        this.stack_count++;
    }

    close() {
        setTimeout(()=>{
            this.stack_count--;
            if(this.stack_count==0 && this.isAppend) {
                document.body.removeChild(this.inst.$el);
                this.isAppend = false;
            }
        } , 100);
    }
}

export default new Loading();