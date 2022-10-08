import React, {PureComponent} from "react";
import {connect} from "react-redux";
import * as actionCreater from './store/actionCreator'
import { useNavigate, useParams,useSearchParams} from "react-router-dom";
import {wihtrouter} from 'react-router-dom';
import {
    DetailWrapper,
    Dheader,
    Content,
} from  './style'
import Header from "../../common/header";


export const DetailWrap = (props)=> {
    let navigate = useNavigate();
    let params = useParams();
    let Element=props.el
    return <Element params={params} navigate={navigate}  {...props} />
}



class Detail extends PureComponent {
    render(){

        return(
            <div>
                <Header />
                <DetailWrapper>
                    <Dheader>
                        <b>{this.props.title}</b>
                    </Dheader>
                    <Content
                        dangerouslySetInnerHTML= {{__html:this.props.content}}
                    />


                </DetailWrapper>

            </div>



        )


    }

    componentDidMount() {
        this.props.get_detail_content(this.props.params.id)
    }

}


const mapDispatchToProps = (dispatch) =>{
    return{
        get_detail_content(id){
            dispatch(actionCreater.get_detail(id))
        },
    }

};

const mapStateToProps = (state) =>{


    return{
        title:state.getIn(['detail','title']),
        content:state.getIn(['detail','content']),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Detail);