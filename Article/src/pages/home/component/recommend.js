import React, {PureComponent} from "react";
import {Rewrapper, Reitem, Topicitem} from "../style";

import {connect} from "react-redux";

class Recommend extends PureComponent {
    render(){

        return(
           <Rewrapper>
               {


                   this.props.ReList.map((item) =>{
                       return <Reitem imgUrl={item.get('imgurl')} key={item.get('id')}  />
                       })




               }
           </Rewrapper>


        )


    }

}

const mapDispatchToProps = (dispatch) =>{
    return{

    }

}

const mapStateToProps = (state) =>{

    return{
        ReList:state.getIn(['home','re_list']),
        ///或者，，，focused:state.get('header').get('focused')


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Recommend);