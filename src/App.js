import SignIn from "./component/login/login.comp";
import SignUp from "./component/signup/signup.comp";
import "./App.css";
import { Route, Switch } from "react-router-dom";
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
    console.log(this.props);
    const { token } = this.props.userLogin.currentUser;
    if (token) {
      this.setState({ loggedIn: true });
    }
  };
  render() {
    const {loggedIn, darkMode} = this.state;
    return (
      <div className="App">
        <Switch>
        {loggedIn ? (
          <Route exact path="/" render={(props) => (
            <Home {...props} isDark={darkMode} />
          )} />
        ) : (
          <Route exact path="/login" render={(props)=> <SignIn {...props} isDark={darkMode} />} />
        )}
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login"  render={(props)=> <SignIn {...props} isDark={darkMode} />}/>
        </Switch>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.user,
});

export default connect(mapStateToProps)(App);
