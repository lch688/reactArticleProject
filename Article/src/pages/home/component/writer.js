import React, {PureComponent} from "react";
import {WriterWrapper,Writeritem} from "../style";

import {connect} from "react-redux";
import * as actionCreators from '../store/actionCreator'


class Writer extends PureComponent {




    render(){
        const {handleFollow,authors,total,current,isFollow,handleChangeAuthors} =this.props

        const authorList=authors.toJS()
        const isFollowList=isFollow.toJS()
        let pageList=[]
        if(authorList.length){
            for (let i =(current-1)*5; i < current*5; i++){
                if(authorList[i] === undefined){
                    break
                }

                pageList.push(authorList[i])

            }
        }


        return(

                <div style={{marginTop:"60px"}}>
                    <WriterWrapper >
                        <div>
                            <span style={{color:'#969696',fontSize: '14px'}}>Authors</span>
                            <div style={{color:'#969696',fontSize: '14px',float:'right',display:'inline-block',cursor: "pointer"}}
                                onClick={() =>{
                                    handleChangeAuthors(current,total)
                                }}
                            >
                                <span className="iconfont span">&#xeb7b;</span>
                                Change</div>
                        </div>
                        {
                            pageList.map((item) =>{

                                return(
                                    <Writeritem key={item.id}>
                                        <img className='imgWriter'
                                             src={item.profile}/>
                                        {
                                            isFollowList[parseInt(item.id)-1]?<span className="spanWriter2" onClick={() =>{handleFollow(parseInt(item.id)-1)}}>✔Folloing</span>:
                                                <span className="spanWriter" onClick={() =>{handleFollow(parseInt(item.id)-1)}}>+Follow</span>
                                        }

                                        <div className="divWriter">
                                            {item.name}

                                        </div>
                                        <p className="pWriter">{item.detail}</p>
                                    </Writeritem >
                                )
                            })
                        }




                    </WriterWrapper>
                </div>



        )


    }

}

const mapDispatchToProps = (dispatch) =>{
    return{
        handleFollow:(id)=> {
            dispatch(actionCreators.change_follow(id))
        },
        handleChangeAuthors:(current_page,total_page) =>{

            let page=current_page
            if(current_page >= total_page ){
                page=1
            }else{
                page+=1
            }
            dispatch(actionCreators.change_authorspage(page))
        }

    }

}

const mapStateToProps = (state) =>{

    return{
        authors:state.getIn(['home','authors']),
        total:state.getIn(['home','totalAuthor']),
        current:state.getIn(['home','currentAuthor']),
        isFollow:state.getIn(['home','isFollow'])



    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Writer);