import * as type from './actionType'
import axios from 'axios';
import {fromJS} from 'immutable'




const change_list=(data) =>({
    type:type.CHANGEHOMEDATA,
    topiclist:fromJS(data.topiclist),
    article_list:fromJS(data.article_list),
    re_list:fromJS(data.re_list)
})


const add_more_article=(data,page) =>({
    type:type.ADDARTICLE,
    article_list:fromJS(data.article_list),
    page:page

})

const authors=(data,page,isFollow) =>({
    type:type.AUTHOR,
    author_list:fromJS(data),
    totalpage:page,
    isFollow:fromJS(isFollow)
})

export const scroll_show=(judge) =>({
    type:type.SCROLLSHOW,
    content:judge

})


export const change_follow=(id) =>({
    type:type.FOLLOW,
    content:id

})

export const change_authorspage=(page) =>({
    type:type.CHANGEAUTHORS,
    content:page

})


export const get_home_info = () =>{
    return(dispatch) => {
        axios.get('/api/homedata.json').then((res) => {
            if (res.data.success ===true){
                const result=res.data.data
                let action=change_list(result)
                dispatch(action)

            }else {
                alert('error')
            }
        }).catch((e) =>{
            console.log(e)
        })

    };





};

export const list_more_article = (page) =>{
    return(dispatch) => {
        axios.get('/api/homedata_more.json?page='+page).then((res) => {
            if (res.data.success ===true){
                const result=res.data.data
                let action=add_more_article(result,page+1)



                dispatch(action)



            }else {
                alert('error')
            }
        }).catch((e) =>{
            console.log(e)
        })

    };





};


export const get_authors = () =>{
    return(dispatch) => {
        axios.get('/api/author.json').then((res) => {
            if (res.data.success ===true){
                const result=res.data.data
                let len=result.length
                let totalpage=Math.ceil(len/5)
                let isFollowList=[]
                for (let i in result){
                    isFollowList.push(false)
                }
                let action=authors(result,totalpage,isFollowList)


                dispatch(action)


            }else {
                alert('error')
            }
        }).catch((e) =>{
            console.log(e)
        })

    };





};