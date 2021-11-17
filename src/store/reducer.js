import todo from "./todo";
import {combineReducers} from 'redux'

const reducers = combineReducers({
    todo: todo,
})


export default reducers