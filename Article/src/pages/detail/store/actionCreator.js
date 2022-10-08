import * as type from './actionType'
import axios from 'axios';
import {fromJS} from 'immutable'



const chnage_detail=(data) =>({
    type:type.GETDETAIL,
    title:fromJS(data.title),
    content:fromJS(data.content),

})




export const get_detail= (id) =>{
    return(dispatch) => {
        axios.get('/api/detail.json?page=' + id).then((res) =>{
            if (res.data.success === true){
                let result = res.data.data
                dispatch(chnage_detail(result))


            }else {
                console.log('error')
            }


        }).catch((e) =>{
            console.log(e)
        })

    };







};