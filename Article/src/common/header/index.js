import React ,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux'
import * as actioncreator from './store/actionCreator'
import {logout} from '../../pages/login/store/actionCreator'
import {Link} from "react-router-dom";

import { 
    HeaderDiv,
    Logo,
    Nav,
    Navitem,
    Navsearch,
    Addition,
    Button,
    Search,
    Searchinfo,
    SearchinfoTitle,
    SearchSwitch,
    SearchItem,
    SearchList,
}  from './style.js'
import { List } from 'immutable';




class Header extends Component{
    
    constructor(props){
        super(props)



    }


    getListArea=() =>{
        const {focused,list,mouseEnter,handlemouse,page,totalpage,handleChange} =this.props
        const pageList=[];
        const jslist=list.toJS();
        if(jslist.length){
            for (let i =(page-1)*10; i < page*10; i++){
                if(jslist[i] === undefined){
                    break
                }

                pageList.push(
                    <SearchItem key= {jslist[i]}>{jslist[i]}</SearchItem>
    
    
                )
               
            }
        }

        
     
        if(focused || mouseEnter){
            return(
                
                <Searchinfo onMouseEnter={() =>{handlemouse('in')}}
                            onMouseLeave={handlemouse}
                >
                                <SearchinfoTitle>
                                    Hot Search
                                    <SearchSwitch
                                    onClick={() =>{handleChange(page,totalpage,this.spinIcon)}}
                                    >
                                        
                                        <span ref={(icon) =>{this.spinIcon=icon}}
                                        
                                        className="iconfont span">&#xeb7b;</span>
                                        Change

                                    </SearchSwitch>
                                </SearchinfoTitle>
                                <SearchList>
                                    {pageList}
                                </SearchList>
    
                 </Searchinfo>
    
            )
        }else{
            return null;
        }
    }
    




    render(){
        const {focused,handlefocuse,mouseEnter,list,login,handle_logout} =this.props
        return(
            <div style={{backgroundColor:'white',width:"100%",display:"table"}}>
            <HeaderDiv>
                <Link to='/'>
                    <Logo />
                </Link>

                <Nav>
                    <Link to={'/'}>
                        <Navitem    className='left active' >Home Page</Navitem>
                    </Link>

                    <Navitem    className='left'>Download App</Navitem>
                    {
                        login ? <Navitem    className='right'
                                            onClick={handle_logout}
                            >Logout</Navitem>:
                        <Link to='/login'>
                                <Navitem    className='right'>Login</Navitem>
                        </Link>
                     }


                    <Navitem    className='right'>
                        
                        <span className="iconfont">&#xe636;</span>

                    </Navitem>
                    <Search
                            className={focused || mouseEnter? 'focuses' : ''}
                    >
                        <CSSTransition
                            in={focused || mouseEnter}
                            timeout={200}
                            classNames='slide'
                        >
                            <Navsearch
                                className={focused || mouseEnter ? 'focuse' : ''}
                                onFocus={() =>{handlefocuse('on',list)}}
                                onBlur={handlefocuse}
                            />
                        </CSSTransition>
                        <span
                            className={focused || mouseEnter ? 'focused iconfont zoom' : 'iconfont zoom'}
                            
                        >&#xe6dd;</span>
                       
                        {this.getListArea()}
                    </Search>
                    
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='write'>Write Article</Button>
                    </Link>

                    <Button className='reg'>Register</Button>
                   
                </Addition>
                
                
            </HeaderDiv>
            </div>

        )
    }
}




const mapDispatchToProps = (dispatch) =>{
    return{
        
        handlefocuse(judege,list){
            if(judege==='on'){
                
                if(list.size === 0){
                    dispatch(actioncreator.get_search_info())
                }
                
                dispatch(actioncreator.FocusOn())

            }else{
        
                    dispatch(actioncreator.FocusOff())
                
                
            }
        },


        handlemouse(judege){
            if(judege==='in'){
                dispatch(actioncreator.mouseIn())
                

            }else{
                
                dispatch(actioncreator.mouseLeave())
            }
        },

        handleChange(page,total,spin){
            let newpage=page
            let origin=spin.style.transform.replace(/[^0-9]/ig,'');
            
            if(origin > 3600){
                origin =0
            }
           if(origin){
               origin = parseInt(origin,10);
             
           }else{
               origin=0
           }
          
           spin.style.transform = 'rotate('+(origin+360)+ 'deg)'
            if(page >= total ){
                newpage=1
            }else{
                newpage+=1
            }
            dispatch(actioncreator.changepage(newpage))

        },
        handle_logout(){
            dispatch(logout())
        }


    }

}

const mapStateToProps = (state) =>{
   
    return{
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','headerList']),
        mouseEnter:state.getIn(['header','mouseEnter']),
        page:state.getIn(['header','page']),
        totalpage:state.getIn(['header','totalpage']),
        login:state.getIn(['login','login'])


        ///或者，，，focused:state.get('header').get('focused')

        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);

