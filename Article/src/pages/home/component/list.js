import React, {PureComponent} from "react";
import {Listitem, Listwrapper, Loadmore} from "../style";
import * as actionCreators from '../store/actionCreator'
import {Link} from "react-router-dom";

import {connect} from "react-redux";

class List extends PureComponent {
    render(){

        return(
            <div >
                {
                    this.props.articlelist.map((item,index) =>{

                        if (item.get('imgurl') === null){
                            return(
                                <Listwrapper key ={ index ///item.get('id')
                                     }>
                                    <Link to={'/detail/' + item.get('id')}>
                                        <Listitem >
                                            <h3 className='title'>{item.get('title')}</h3>
                                            <p className='desc'>{item.get('desc')}</p>
                                        </Listitem>
                                    </Link>

                                </Listwrapper>
                            )
                        }else {

                            return(
                                <Listwrapper key ={ index ///item.get('id')
                                }>
                                    <img className='img_list'
                                         src={item.get('imgurl')}
                                    />
                                   <Link to={'/detail/' + item.get('id')}>
                                       <Listitem className='haveimg'>
                                           <h3 className='title'>{item.get('title')}</h3>
                                           <p className='desc'>{item.get('desc')}</p>
                                       </Listitem>
                                   </Link>

                                </Listwrapper>
                            )
                        }


                    })
                }

                <Loadmore
                   onClick={() =>{this.props.get_more_article(this.props.page)}}
                >Get more article</Loadmore>



            </div>





        )


    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        get_more_article(page){
            dispatch(actionCreators.list_more_article(page))
        }
    }

}

const mapStateToProps = (state) =>{

    return{
        articlelist:state.getIn(['home','article_list']),
        ///或者，，，focused:state.get('header').get('focused')
        page:state.getIn(['home','page'])


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(List);