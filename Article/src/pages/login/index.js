import React, {PureComponent} from "react";
import {connect} from "react-redux";
import * as actioncreator from './store/actionCreator';
import {
   LoginWrapper,
    LoginBox,
    Logintext,
    LoginInput,
    LoginButton,
    Logo,
} from  './style'
import {Link,Navigate} from "react-router-dom";







class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            Renter:false,
            Lenter:false,
        }
    }

    render(){
        if (this.props.login === false){
            return(

                <LoginWrapper>
                    <LoginBox>
                        <Link to='/'>
                            <Logo />
                        </Link>
                        <Logintext className={this.state.Renter ? 'enter LoginRight' : 'LoginRight'}
                                   onMouseEnter={this.handlenter.bind(this,'on','right')}
                                   onMouseLeave={this.handlenter.bind(this)}

                        >
                            Login
                        </Logintext>
                        <Logintext
                            className={this.state.Lenter ? 'enter' : ''}
                            onMouseEnter={this.handlenter.bind(this,'on','left')}
                            onMouseLeave={this.handlenter.bind(this)}
                        >
                            Register
                        </Logintext>

                        <LoginInput
                            ref={(input) =>{this.account=input}}
                            className='InputTop' placeholder="account"/>
                        <LoginInput
                            ref={(input) =>{this.password=input}}
                            placeholder="password"/>
                        <LoginButton
                            onClick={() =>{this.props.handle_submit(this.account,this.password)}}
                        >Login</LoginButton>

                    </LoginBox>
                </LoginWrapper>



            )
        }else {

            return <Navigate to="/" />
        }




    }
    handlenter(judge,location){
        if(judge==='on'){
            if (location ==='right'){
                this.setState({
                    Renter:true
                })
            }else if (location ==='left'){

                this.setState({
                    Lenter:true
                })
            }

        }else {
            this.setState({
                Renter:false,
                Lenter:false

            })
        }
    }

}


const mapDispatchToProps = (dispatch) =>{
    return{
        handle_submit(acc,passwd){
            dispatch(actioncreator.submit_login(acc.value,passwd.value))
        }


    }

};

const mapStateToProps = (state) =>{


    return{
        login:state.getIn(['login','login']),
        token:state.getIn(['login','token']),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Login);