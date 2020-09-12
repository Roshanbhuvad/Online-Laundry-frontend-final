import React, { Component } from 'react'
import { login } from './UserFunction'
import LaundryShops from "./laundryShop";
import MediaCard from "./shopComponent";
import axios from "axios"
import { Link } from "react-router-dom";

class UserLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneNumber: "",
      password: "",
      //errors: {}
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  submit(e) {
    e.preventDefault()
    axios.post("user/nearby", {
      phoneNumber: this.state.phoneNumber,
      password: this.state.password
    }).then(res => {
      localStorage.setItem("cool-jwt",res.data);
      this.props.history.push("/nearby");
    });
}
    /*login(user).then(res => {
      if (res) {
        this.props.history.push(`/nearby`)
      }
    })
  }
  /*handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  }; */

  render() {
    return (
      <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={e => this.submit(e)}>
              <h1 className="h3 mb-3 font-weight-normal" className="font-weight-bold text-primary">Sign in as a Customer</h1>
                <div className="form-group">
                  <label htmlFor="phoneNumber" className="font-weight-bold text-danger">Mobile Number</label>
                  <input type="number" className="form-control" name="phoneNumber" placeholder="Enter your registered Mobile number" value={this.state.phoneNumber} onChange={e => this.change(e)} /> 
                  </div>
              <div className="form-group">
                <label htmlFor="password" className="font-weight-bold text-danger">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={e => this.change(e)} />
              </div>
              <div className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="customCheck1" />
      <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
      </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">Sign in</button>
             <p className="forgot-password text-right"> Forgot <a href="#">password?</a></p>
            </form>
          </div>
    )
  };
  };

export default UserLogin;