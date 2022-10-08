import React, {PureComponent} from "react";
import {connect} from "react-redux";

import {Navigate} from "react-router-dom";
import Header from '../../common/header/index.js'
import axios from "axios";
import {
    Wrapper,
    Firstpart,
    Secondpart
} from  './style'




class Write extends PureComponent {

    constructor(props) {
        super(props)
        this.state={
            title:null,
            content:null
        }
    }

    render(){



        if (this.props.login === true){
            return(

            <Wrapper>
                <Header />
                <Firstpart>
                    <form className='form'>
                        <ul className='ul'>
                            <li>
                                <input placeholder='Title : Enter Your Title Here' className='titles'
                                    onMouseLeave={(e)=> {
                                       this.setState({
                                           title:e.target.value
                                       })
                                    }}
                                />
                            </li>

                            <li>
                                <textarea placeholder='Content : Write Your Article Here' className='content'
                                          onMouseLeave={(e)=> {
                                              this.setState({
                                                  content:e.target.value
                                              })
                                          }}
                                />
                            </li>
                        </ul>
                    </form>
                </Firstpart>
                <Secondpart>
                    <form name='submit' style={{margin:'auto',width:'500px'}}>
                        <input placeholder='Author Name : Enter Author Name Here ' name="author" className='author'/>
                        <div>
                            <label style={{display:'inline-block'}} >Posting Form:</label>
                            <input type="radio" name="gender" value="all" className="radio" />All visible
                            <input type="radio" name="gender" value="me" className="radio" />Only visible to me
                            <input type="radio" name="gender" value="fans" className="radio" />Visible to fans
                        </div>
                        <div style={{margin:'auto',width:'400px'}}>
                            <div className='post' onClick={(e) =>{
                                const data=JSON.stringify({
                                    key:"posting",
                                    title:this.state.title,
                                    content:this.state.content,
                                    author:document.forms.submit.author.value,
                                    visible:document.forms.submit.gender.value
                                })
                                axios.get('/api/write.json?param'+data).then((res) =>{
                                    if (res.data.success){
                                        alert('post success')
                                       
                                    }else {
                                        alert('error')
                                    }
                                }).catch((e)=>{
                                    alert(e)
                                })

                            }}> Posting Article</div>
                            <div className='save'
                                 onClick={(e) =>{
                                     const data={
                                         key:"save",
                                         title:this.state.title,
                                         content:this.state.content,
                                         author:document.forms.submit.author.value,
                                         visible:document.forms.submit.gender.value
                                     }
                                     axios.get('/api/write.json?param'+data).then((res) =>{
                                         if (res.data.success){
                                             alert('save success')


                                         }else {
                                             alert('error')
                                         }
                                     }).catch((e)=>{
                                         alert(e)
                                     })
                                 }}
                            >Save Draft</div>
                        </div>

                    </form>

                </Secondpart>
            </Wrapper>



        )
        }else {

            return <Navigate to="/login" />
        }




    }


}


const mapDispatchToProps = (dispatch) =>{
    return{

    }

};

const mapStateToProps = (state) =>{


    return{
        login:state.getIn(['login','login']),

    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Write);