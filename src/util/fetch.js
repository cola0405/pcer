import {baseurl} from "@/config/env";
import {findLastIndex} from "core-js/internals/array-iteration-from-last";

export default async (url='', data={}, type='GET', method='fetch') =>{
    type = type.toUpperCase();
    url =baseurl +url;

    if(type === 'GET'){
        let dataStr = '';
        Object.keys(data).forEach(key =>{
            dataStr +=key + '=' + data[key]+ '&'
        })

        if(dataStr !== ''){
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
            url = url + '?' + dataStr
        }

    }
}