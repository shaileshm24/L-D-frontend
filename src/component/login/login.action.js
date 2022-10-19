import axios from "axios";
import { userLogin } from "./login.actionTypes";
import history from "../../history";
// import { Redirect } from "react-router";

export const setCurrentUser = user => {
//     console.log("history",history);
// console.log("Set current user",user);
    return async function(dispatch){
        return await axios.post("http://localhost:3020/api/login", {user:user})
        .then(res=>{
            console.log("RES",res);
            
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

export const deleteCurrentUser = user => {
    return function(dispatch){
        dispatch({
        type:userLogin.DELETE_CURRENT_USER,
        payload:null
    });
}
}