import * as type from './actionType'
import axios from 'axios';
import {fromJS} from 'immutable'



const login_data=(token) =>({
    type:type.LOGIN,
    token:token,
})




export const logout=() =>({
    type:type.LOGOUT,
})




export const submit_login = (acc,passwd) =>{
    return(dispatch) => {
        axios.get('/api/login.json?account='+acc+'&password='+passwd).then((res) =>{
            if(res.data.success===true){
                if (res.data.islogin ===true){

                    dispatch(login_data(res.data.token))
                }else {
                    alert(res.data.message)
                }

            }else{
                console.log('error')
            }



        }).catch((e)=>{
            console.log(e)
        })

    };





};


