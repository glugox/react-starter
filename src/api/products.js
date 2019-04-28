import axois from 'axios'
import { authHeader } from '../helpers/auth-header'
import config from '../config/app'

const BASE_URL = config.service_base_path


export default {
    list: ({page=1}) =>   axois.get(BASE_URL+`/api/products/?page=${page}`).then(res => res.data)
}