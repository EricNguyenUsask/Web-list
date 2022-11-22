import { actionChannel } from "@redux-saga/core/effects";

const DEFAULT_STATE = {
    listTask: [],
    isFetching: false,
    error: null
}

function todoListReducer(state=DEFAULT_STATE,acion){
    switch(action.type){
        default:
            return state;
    }
}

export default todoListReducer