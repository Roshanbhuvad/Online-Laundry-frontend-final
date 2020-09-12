import React, { Component } from 'react'
//import { Shoplogin } from './ShopFunction'
import UserLogin from "./UserLogin";
//import Admin from "./AdminLogin";
import Login from "./ShopLogin";

 function Signin () {
 /*const { Login, UserLogin } = this.props; */
return(
    <div>
        <div>
            <Login />
        </div>
        <div>
            <UserLogin />
        </div>
    </div>
);
};
export default Signin;
