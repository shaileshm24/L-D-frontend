import axios from "axios";
import { userLogin } from "./login.actionTypes";

export const setCurrentUser = user => {
console.log(user);
    return function(dispatch){
        return axios.post("http://localhost:3020/api/login", {user:user})
        .then(res=>{
            dispatch({
                type:userLogin.SET_CURRENT_USER,
                payload: res.data
                });
                
        })
        .catch(error =>{
            console.log(error);
        });
        
    }
    
};