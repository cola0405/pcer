import axios from '@/util/axios'

export function updateTags(tags){
    return axios.request({
        url: 'api/tag/update',
        method:'post',
        data: {
            tags: tags
        }
    })
}

export function getTagList(){
    return axios.request({
        url: 'api/tag/list',
        method:'get'
    })
}