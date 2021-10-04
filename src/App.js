import SignIn from "./component/login/login.comp";
import SignUp from "./component/signup/signup.comp";
import "./App.css";
import { Route, Switch,Redirect } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "./component/home/home.comp";

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      loggedIn: false,
      darkMode:false
    };
  }

  componentDidMount = () => {
    console.log("APP.JS",this.props);
    const { currentUser } = this.props.userLogin;
    if (currentUser) {
      this.setState({ loggedIn: true });
    } else{
      this.setState({loggedIn:false})
    }
  };
  render() {
    const {loggedIn, darkMode} = this.state;
    console.log(loggedIn);
    return (
      <div className="App">
        <Switch>
        {loggedIn ? (
           <Route  path="/home" component={Home} />
        ) : (
          <Redirect to="/login"/>
        )}
        <Route  path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login"  render={(props)=> <SignIn {...props}/>}/>
        </Switch>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.user,
});

export default connect(mapStateToProps)(App);
