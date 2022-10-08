import styled from 'styled-components';
import  logoPic from '../../static/logo.png';

export const HeaderDiv = styled.div`
    width:100%;
    height:56px;
    border-bottom:2px solid #f0f0f0;
    position: relative; 
    display:inline-block;
    z-index:1;
    
`;

export const Logo = styled.div`
   
    position;absolute;
    top:0;
    left:0;
    display:inline-block;
    width:60px;
    height:52px;
    background:url(${logoPic});
    background-size:contain;


`;


export const Nav = styled.div`
   
    width:70%;
    height:100%;
    margin-left:50px;
    margin-right:15px;
   
    
    display: inline-block;
    
    
    
`;


export const Navitem = styled.div`
    line-height:56px;
    margin: 0px 20px 0px 20px;
    padding: 0 15 px;
    font-size:17px;
    color;#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }

    
`;
export const Navsearch = styled.input.attrs({
    placeholder:'Search'
})`
    position:relative;
    float:left;
    width:160px;
    height:30px;
    border:none;
    outline:none;
    margin-top:15px;
    margin-left:18px;
    padding: 0 20 px;
    box-sizing:border-box;
    border-radius:16px;
    background:#eee;
    font-size:14px{
        color:#999;
    }
    &::placeholder{
        color:#999
    }
    &.focuse{
        width:200px
    }
`;

export const Addition = styled.div`
    width:245px;
    position:absolute;
    margin-right:65px;
    float:right;
    height:56px;
    display:inline-block;

`;

export const Button = styled.div`
    float:left;
    line-height:38px;
    margin-top:9px;
    
    margin-left:20px;
    border-radius:16px;
    border: 1px solid #ec6149;
    padding: 0 20px;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.write{
        color:#fff;
        background:#ec6149;
    }

`;

export const Search= styled.div`
    float:left;
    
    position:relative;
    width:200px;
   
    .zoom{
        position:absolute;
        width:28px;
        height:28px;
        top:19px;
        font-size: 20px;
        border-radius:15px;
        right:22px;
        bottom:0px;
        
        
    &.focused{
        
        color:#ec6149;
        }
    }
    
    &.focuses{
        width:240px;
    }
    .slide-enter{
        transition:all .2s ease-out;
    }
    .slide-enter-active{
        width:200px
    }
    .slide-exit{
        transition:all .2s ease-out;
    }
    .slide-exit-active{
        width:160px
    }

    
`;

export const Searchinfo = styled.div`
    position:absolute;
    left:2px;
    top:56px;
    width:240px;
    
    padding:0 20px;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.2);

`;

export const SearchinfoTitle = styled.div`
   margin-top:20px;
   margin-bottom:15px;
   line-height:20px;
   font-size:14px;
   color:#969696
`

export const SearchSwitch = styled.span`
   float:right;
   font-size:13px;
   cursor: pointer;
   .span{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition: all .2s ease-in;
   
    transform-origin:center center;

}
`

export const SearchItem = styled.a`
    font-size:12px;
    line-height:20px;
    padding:0 5px;
    border:1px solid #ddd;
    color: #787878;
    display:block;
    float:left;
    border-radius:3px;
    margin-right:8px;
    margin-bottom:8px;

`   

export const SearchList = styled.div`
  

`



