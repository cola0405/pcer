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
        method: 'post',
        data: formData
    })
}

export function updateProblem(problem){
    return axios.request({
        url: 'api/problem/update',
        method: 'post',
        data: problem
    })
}
