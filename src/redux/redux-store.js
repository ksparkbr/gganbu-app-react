import { createStore } from "redux";
import { MODAL_SHOW, SET_SESSION } from "./redux-action-type";


const initState = {
    modalShow : {
        show: false,
        msg: ''
    },
    session: {
        user_id : '',
    }
}

const reducer = (state = initState, action)=>{
    switch(action.type){
        case MODAL_SHOW:
            return {
                ...state,
                modalShow: action.data
            }
        case SET_SESSION:
            return {
                ...state,
                session: action.data
            }
        default:
            return state;
    }
}

export const reduxStore = createStore(reducer);