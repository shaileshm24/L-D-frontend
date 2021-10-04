import React, { Component } from 'react';
import Logout from '../logout/logout.comp';

class Home extends Component{

    constructor(props){
        super(props);
        console.log("PROPS",props);
    }

    render(){
        return(
            <div>
                <h1>
                    Home
                </h1>
               <Logout />
            </div>
        )
    }
}


export default Home;