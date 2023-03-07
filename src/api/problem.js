import axios from '@/util/axios'


export function getProblemList(){
    return axios.request({
        url: 'api/problem/getList',
        method:'get'
    })
}
