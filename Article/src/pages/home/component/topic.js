import React, {PureComponent} from "react";
import {Topicwrapper,Topicitem} from "../style";

import {connect} from "react-redux";

class Topic extends PureComponent {
    render(){

        return(
           <Topicwrapper>
               {
                   this.props.topiclist.map((item) =>{
                        return(
                            <Topicitem key ={item.get('id')}>
                                <img className='img-item'
                                     src={item.get('imgurl')}
                                />
                                {item.get('title')}
                            </Topicitem>
                        )
                   })
               }

           </Topicwrapper>


        )


    }

}

const mapDispatchToProps = (dispatch) =>{
    return{

    }

}

const mapStateToProps = (state) =>{

    return{
        topiclist:state.getIn(['home','topiclist']),
        ///或者，，，focused:state.get('header').get('focused')


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Topic);

