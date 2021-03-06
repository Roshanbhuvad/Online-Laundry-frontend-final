import React, { Component } from 'react'
import { Shoplogin } from './ShopFunction'
//import { AuthConsumer } from "../authContext";

class ShopLogin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      phoneNumber: this.state.phoneNumber,
      password: this.state.password
    }

   Shoplogin(user).then(res => {
      if (res) {
        this.props.history.push(`https://laundrybackend.herokuapp.com/shops/myorder`)
      }
    })
  }
    handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  /*handleSubmit = event => {
    console.log("Submitting");
    console.log(this.state);
  }; */


  render() {
    return (
       <div className="col-md-6 mt-5 mx-auto">
     <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal" className="font-weight-bold text-primary">Sign in as a ShopOwner</h1>
                <div className="form-group">
                  <label htmlFor="phoneNumber" className="font-weight-bold text-danger">Mobile Number</label>
                  <input type="number" className="form-control" name="phoneNumber" placeholder="Enter your registered Mobile number" value={this.state.phoneNumber} onChange={this.handleChange}/> 
                  </div>
              <div className="form-group">
                <label htmlFor="password" className="font-weight-bold text-danger">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
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
export default ShopLogin