import styled from "styled-components";




export const Wrapper = styled.div`
    background-color: #e8ecf0;;
    left:0;
    right:0;
    bottom:0;
    top:0;
    padding-bottom: 35px;
    

`


export const Firstpart = styled.div`
    width:800px;
    height:600px;
    margin:60px auto 0;
    background:#fff;
    border-radius: 1px;
    border:2px solid gainsboro;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    .form {
    
    margin: 0 auto;
    width: 600px;
    
    padding: 20px;



    }

    .titles{
    width: 600px;
    height: 50px;

    border: 1px solid #CCC;
    border-radius: 15px;
    font: 15px sans-serif;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    color: dimgray;





    }
    .content{
        font: 20px sans-serif;
        color: dimgray;
        padding: 10px;
        width: 600px;
        height: 500px;
        box-sizing: border-box;
        border-radius: 15px;
    
        border: 1px solid #CCC;
    }

    .title:focus,.content:focus{
   
        border-color: #000000;
    }

`

export const Secondpart = styled.div`
    width:800px;
    height:300px;
    margin:15px auto  ;
    background:#fff;
    border-radius: 1px;
    border:2px solid gainsboro;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    
    .author{
    width: 500px;
    height: 35px;
    margin: 30px auto;
    border: 1px solid #CCC;
    border-radius: 6px;
    font: 15px sans-serif;
    padding: 10px;

    box-sizing: border-box;
    color: dimgray;
    }
    
    .radio{
        margin-left: 20px;
        font: 15px sans-serif;
        color: #CCC;
    
    }
    .post{
        display: inline-block;
        float: left;
        margin: 60px auto;
        border-radius:16px;
        border: 1px solid #ec6149;
        padding: 0 20px;
        font-size:14px;
        line-height:38px;
        color:#fff;
        background:#ec6149;
        cursor: pointer;
    }
    .save{
        display: inline-block;
        margin-top: 60px;
        float: right;
        line-height:38px;
        border-radius:16px;
        border: 1px solid #CCC;
        padding: 0 20px;
        font-size:14px;
        color:dimgray;
        margin-right: 30px;
        cursor: pointer;
    }
`


