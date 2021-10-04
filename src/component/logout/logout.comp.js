import React,{Component} from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router';
import {deleteCurrentUser} from '../login/login.action';

class Logout extends Component{

    constructor(props){
        super(props);
        console.log("PROPS",props);
    }

    handleSubmit = async()=>{
        await this.props.deleteCurrentUser({
            currentUser:null
        });
        return <Redirect to="/login" />
    }


    render(){
        return(
            <div>
                <h1>
                    <button onClick={this.handleSubmit}>Logout</button>
                </h1>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    deleteCurrentUser : (userData) => dispatch(deleteCurrentUser(userData))
})
export default connect(null,mapDispatchToProps)(Logout);