import axois from 'axios'
import { authHeader } from '../helpers/auth-header'
import config from '../config/app'

const BASE_URL = config.service_base_path


export default {
    login: credendials => axois.post(BASE_URL+`/api/login`, credendials).then(res => res.data)
}