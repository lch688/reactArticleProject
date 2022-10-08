import {FOCUSOFF,FOCUSON,CHANGELIST, MOUSEIN,MOUSELEAVE,CHANGEPAGE} from './actionType'
import axios from 'axios';
import {fromJS} from 'immutable'



const change_list=(data,total) =>({
    type:CHANGELIST,
    content:fromJS(data),
    totalpage:total
})




export const FocusOn = () =>({
    type:FOCUSON,
    
})


export const FocusOff = () =>({
    type:FOCUSOFF,
    
})

export const mouseIn = () =>({
    type:MOUSEIN,
    
})

export const mouseLeave = () =>({
    type:MOUSELEAVE,
    
})

export const changepage = (page) =>({
    type:CHANGEPAGE,
    content:page
    
    
})


export const get_search_info = () =>{
    return(dispatch) => {
        axios.get('/api/searchinfo.json').then((res) =>{
            let data=res.data
            if(data.success===true){
                let len=data.data.length
                let totalpage=Math.ceil(len/10)  
                
                dispatch(change_list(data.data,totalpage))
                
            }else{
                console.log('error')
            }
            

            
        }).catch((e)=>{
            console.log(e)
        })

    };



    
    
};


