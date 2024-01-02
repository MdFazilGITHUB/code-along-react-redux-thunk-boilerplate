import { FETCH_DATA } from "./actionType"
import axios from 'axios'

export const fetchUserData = (data) => {
    return {
        type: FETCH_DATA,
        payload: data
    }
}

export const fetchData = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            let users = res.data
            dispatch(fetchUserData(users))
        })
    }
}