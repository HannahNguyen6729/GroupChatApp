import {ADD_COMMENT} from '../Types/ChatAppTypes';

export const addComment =(payload)=>({
    type: ADD_COMMENT,
    payload
})