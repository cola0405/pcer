import axios from 'axios'

let service = axios.create({
    baseURL:'http://localhost:8081'
})

export default service