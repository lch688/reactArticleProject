import * as action_type from "./actionType";
import {fromJS} from 'immutable'

const defaultState=fromJS({
   title:"",
   content:""
})



export const Detailreducer = (state = defaultState,action) =>{
    switch(action.type){
        case action_type.GETDETAIL :
            return state.merge({
                title:action.title,
                content:action.content,
            })

    }

    return state;

}