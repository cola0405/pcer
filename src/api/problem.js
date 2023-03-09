import axios from '@/util/axios'


export function getProblemList(){
    return axios.request({
        url: 'api/problem/getList',
        method:'get'
    })
}

export function newProblem(formData){
    return axios.request({
        url: 'api/problem/new',
        method:'post',
        data: formData
    })
}

export function getProblemById(id){
    return axios.request({
        url: 'api/problem/get?id='+id,
        method:'get'
    })
}
