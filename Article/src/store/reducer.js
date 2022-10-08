import {combineReducers} from 'redux-immutable';
import { Hreducer } from '../common/header/store/reducer';
import { Homereducer } from '../pages/home/store/reducer';
import  {Detailreducer} from "../pages/detail/store/reducer";
import  {Loginreducer }from"../pages/login/store/reducer"





export default combineReducers({
    header:Hreducer,
    home:Homereducer,
    detail:Detailreducer,
    login:Loginreducer,

    
})
