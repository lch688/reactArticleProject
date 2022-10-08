import {fromJS} from 'immutable'
import * as action_type from "./actionType";

const defaultState=fromJS({
    topiclist:[],
    article_list:[],
    re_list:[],
    page:1,
    scroll:false,
    authors:[],
    totalAuthor:null,
    currentAuthor:1,
    isFollow:[]
})



export const Homereducer = (state = defaultState,action) =>{
    switch(action.type){
        case action_type.CHANGEHOMEDATA :
            return state.merge({
                topiclist:action.topiclist,
                article_list:action.article_list,
                re_list:action.re_list
            })

        case action_type.ADDARTICLE :

            return state.merge({
                article_list:state.get('article_list').concat(action.article_list),
                page:action.page
            })

        case action_type.SCROLLSHOW :
            return state.set('scroll',action.content)


        case action_type.AUTHOR :
            return state.merge({
                authors:action.author_list,
                totalAuthor:action.totalpage,
                isFollow:action.isFollow
            })
        case action_type.FOLLOW :

            return state.setIn(['isFollow',action.content],!state.getIn(['isFollow',action.content]))

        case action_type.CHANGEAUTHORS :

            return state.set('currentAuthor',action.content)
    }

    return state;

}