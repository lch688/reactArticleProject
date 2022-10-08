import {fromJS} from 'immutable'
import * as action_type from "./actionType";

const defaultState=fromJS({
    login:false,
    token:''
})



export const Loginreducer = (state = defaultState,action) =>{
    switch(action.type){
        case action_type.LOGIN:

            return state.merge({
                login:true,
                token:action.token

            })
        case action_type.LOGOUT:

            return state.merge({
                login:false,
                token:''

            })

    }

    return state;

}