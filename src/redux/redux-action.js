import { MODAL_SHOW, SET_APP_TITLE, SET_SESSION, SET_SHOW_IFRAME } from "./redux-action-type"

export const reduxAction = {
    MODAL_SHOW : (data)=>{
        return {
            type: MODAL_SHOW,
            data: data,
        }
    },
    SET_SESSION : (data)=>{
        return {
            type: SET_SESSION,
            data: data,
        }
    },
    SET_APP_TITLE : (data)=>{
        return {
            type: SET_APP_TITLE,
            data: data,
        }
    },
    SET_SHOW_IFRAME: (data)=>{
        return {
            type: SET_SHOW_IFRAME,
            data: data,
        }
    }
}