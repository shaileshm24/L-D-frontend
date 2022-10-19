import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { setCurrentUser } from "./login.action";
import { connect } from "react-redux";
import "./login.style.css";
class SignIn extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    const device = window.navigator.userAgent;
    console.log(device);
    const { setCurrentUser } = this.props;
    const user = {
      email: this.state.email,
      password: this.state.password,
      device: device,
    };
    const res = await setCurrentUser(user);
    if (res){
      return <Redirect to="/home"/>
    }
  };
  render() {
    return (
      <div className="flex w-full m-auto background h-screen">
        <div className="w-full md:w-1/2 flex flex-col ml-auto justify-end  ">
          <div className="flex flex-col justify-center md:justify-center my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center text-3xl">Welcome.</p>
            <form
              className="flex flex-col pt-3 md:pt-8"
            >
              <div className="flex flex-col pt-4">
                <label className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={this.handleChange}
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={this.handleChange}
                />
              </div>

              <input
                type="submit"
                value="Log In"
                className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                onClick={this.handleSubmit}
              />
            </form>
            <div className="text-center pt-12 pb-12">
              <p>
                Don't have an account?{" "}
                <Link to="signup" className="underline font-semibold">
                  Register here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (userData) => dispatch(setCurrentUser(userData)),
});

export default connect(null, mapDispatchToProps)(SignIn);
