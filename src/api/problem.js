import axios from '@/util/axios'


export function getProblemList(){
    return axios.request({
        url: '/problem/getList',
        method:'get'
    })
}
