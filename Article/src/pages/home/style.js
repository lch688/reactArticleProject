import styled from 'styled-components';



export const  HomeWrapper = styled.div`
   
    width:1100px;
    margin-left:155px;
    height:320px;
    

`


export const  Homeleft = styled.div`
    width:650px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .b-img {
        width:625px;
        height:240px;
    }
    

`


export const  Homeright = styled.div`
    width:240px;
   
    float:right
    
    


`


export const  Topicwrapper = styled.div`
   overflow:hidden;
   
   padding:20px 0 10px 0;
   margin-left:-10px;
   border-bottom: 1px solid #dcdcdc;
`


export const  Topicitem = styled.div`
    
    float:left;
    height:32px;
    padding-right:10px;
    margin-left:18px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .img-item{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`


export const  Listwrapper = styled.div`
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
    padding:20px 0;
    .img_list{
        display:block;
        float:right;
        width:125px;
        height:100px;
        border-radius:10px;
    }
    .haveimg{
        width:500px;
    }
`


export const  Listitem = styled.div`

    
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        fobt-weight;bold;
    }
    .desc{
        line-height:27px;
        font-size:13px;
        color:#999;
    }
    
`



export const  Rewrapper = styled.div`   
     margin-top:25px;
     margin:30 0px;
     width:200px;
     
    
    
`


export const  Reitem = styled.div`

    width:280px;
    height:50px;
    background:url(${(props) =>props.imgUrl});
    background-size:contain;
    
`

export const  WriterWrapper = styled.div`

    width:280px;
   
  
    
   
    
`
export const  Writeritem = styled.div`

    margin: 8px ;
    .imgWriter{
        width: 48px;
        height: 48px;
        float: left;
        margin-right: 10px;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .spanWriter{
        float: right;
        margin-top: 6px;
        color: #42c02e;
        padding: 0;
        font-size: 16px;
        cursor: pointer;
    }
    .spanWriter2{
        float: right;
        margin-top: 6px;
        color: #969696;;
        padding: 0;
        font-size: 16px;
        cursor: pointer;
    }
    .divWriter{
        padding-top: 8px;
        margin-right: 60px;
        font-size: 15px;
    }
    .pWriter{
        margin-top: 6px;
        font-size: 14px;
        color: #969696;
        padding-top: 5px;
    
    }
`


export const  Loadmore = styled.div`
    width:200px;
    height:40px;
    background:#a5a5a5;
    line-height:40px;
    text-align:center;
    border-radius:20px;
    margin: 30px 0;
    color:#fff;
    cursor:pointer;
    margin-left: 210px;
    
   
    
`

export const  Backtop = styled.div`

    position:fixed;
    width:60px;
    height:60px;
    border: 1px solid #ccc;
    line-height:60px;
    text-align:center;
    font-size:14px;
    right:150px;
    bottom:50px;
    
    
    
    
   
    
`