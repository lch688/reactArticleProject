import styled from "styled-components";
import logoPic from "../../static/logo.png";

export const LoginWrapper = styled.div`
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background:#eee;
    z-index:0;
    .LoginRight{
        margin-left:110px;
        
    }
    .InputTop{
         margin-top:35px ;
    }
    .enter{
        border-bottom: 2px solid #ea6f5a;
    }
    

`


export const Logintext = styled.div`
    float:left;
    font-weight: 700;
    font-size:20px;
    color: #ea6f5a;
    
    margin-top:10px ;
    margin-left:50px ;
    
    

    
    

`


export const LoginBox = styled.div`
    width:400px;
    height:280px;
    margin:80px auto;
    background:#fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    
    

`

export const LoginInput = styled.input`
    margin-top:5px ;
    margin-left:70px ;
    display:line-block;
    width:230px;
    height:30px;
    line-height:30px;
    padding:0 10px;
    background: #dcdcdc;
    color:#777;
    border:1px solid;
   
    
    
    

`


export const LoginButton = styled.button`
    margin-left:75px ;
    margin-top:15px ;
    width:230px;
    height:30px;
    line-height:20px;
    background: #3194d0;
    border-radius:15px;
    color:#fff;
    border:3px solid #fff;
    text-align: center;
    
   
   
    

`

export const Logo = styled.div`
   
    
    width:60px;
    height:52px;
    background:url(${logoPic});
    background-size:contain;
    

`;