
import {ALERT_HIDE, ALERT_SHOW} from "../constants/actions"
import {ERROR, INFO} from "../constants/alerts"
import UUID from '../providers/UUIDProvider'


export const showAlert = ({message, type, uuid=UUID()}) => ({
    type: ALERT_SHOW,
    payload: {message, type: INFO, uuid: UUID()}
})


export const showError = (message) => ({
    type: ALERT_SHOW,
    payload: {message, type: ERROR, uuid: UUID()}
})


export const hideAlert = (uuid) => ({
    type: ALERT_HIDE,
    payload: uuid
})