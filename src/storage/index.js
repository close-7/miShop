/**
 * Storage封装
 */

const STORAGE_KEY = 'mall';

export default{
    //存储值
    setItem(key, value,model_name){
        if(model_name){
            let val = this.getItem(model_name);
            val[key] = value
            this.setItem(model_name,val)
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
        }
    },

    //获取值
    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
        return this.getStorage()[key];
    },

    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)||'{}')
    },
    //清空值
    clear(key,model_name){
        let val = this.getStorage();
        if(model_name){
            delete val[model_name][key]
        }else{
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}