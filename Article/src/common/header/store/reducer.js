import * as action_type from './actionType'
import {fromJS} from 'immutable'

const defaultState=fromJS({
    focused:false,
    mouseEnter:false,
    headerList:[],
    page:1,
    totalpage:1,
    
})



export const Hreducer = (state = defaultState,action) =>{

    switch(action.type){
        case action_type.FOCUSON :
            return state.set('focused',true)
            
        case action_type.FOCUSOFF :
            return state.set('focused',false)

        case action_type.CHANGELIST :

            return state.merge({
                headerList:action.content,
                totalpage:action.totalpage

            })
            ///return state.set('headerList',action.content).set('totalpage',action.totalpage)
                
        

        case action_type.MOUSEIN :
            return state.set('mouseEnter',true)


        case action_type.MOUSELEAVE :
            return state.set('mouseEnter',false)


        case action_type.CHANGEPAGE :
            return state.set('page',action.content)
            
    }

    return state;

}
