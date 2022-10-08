import React, {PureComponent} from "react";
import List from "./component/list";
import Topic from "./component/topic";
import Recommend from "./component/recommend";
import Writer from "./component/writer";

import {connect} from "react-redux";
import * as actionCreater from './store/actionCreator'

import {
    HomeWrapper,
    Homeleft,
    Homeright,
    Backtop,
} from  './style'
import Header from "../../common/header";
import * as actionCreators from "./store/actionCreator";

class Home extends PureComponent {
    handlescroll(){
        window.scrollTo(0,0)
    }
    render(){
        return(
                <div>
                    <Header />
                    <HomeWrapper>
                        <Homeleft>

                            <img className='b-img' src="/img/main.png" />
                            <Topic />
                            <List />
                        </Homeleft>

                        <Homeright>
                            <Recommend />
                            <Writer />
                        </Homeright>
                        {this.props.scroll ? <Backtop onClick={this.handlescroll.bind(this)}> Back Top </Backtop> : null}


                    </HomeWrapper>
                </div>






        )


    }

    componentDidMount() {
        this.props.change_home_reducer()
        this.props.getAuthors()
        this.monitor_scroll()
    }
    componentWillUnmount() {

        window.removeEventListener('scroll',this.props.if_scroll_show)
    }

    monitor_scroll(){
        window.addEventListener('scroll',this.props.if_scroll_show)
    }

}


const mapDispatchToProps = (dispatch) =>{
    return{
        change_home_reducer(){
           dispatch(actionCreater.get_home_info())
        },
        if_scroll_show(){
            let action
            if(document.documentElement.scrollTop >200){
                action=actionCreater.scroll_show(true)
            }else {
                action=actionCreater.scroll_show(false)

            }

            dispatch(action)

        },
        getAuthors:() =>{
            dispatch(actionCreators.get_authors())
        }

    }

}

const mapStateToProps = (state) =>{

    return{
        scroll:state.getIn(['home','scroll']),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);