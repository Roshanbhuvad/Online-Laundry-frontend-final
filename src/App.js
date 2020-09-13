import React from "react";
import { Switch,Router, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import NavBar from "./components/NavBar";
import NearByShops from "./components/mapNearbyStores";
//import NearByShops from "./components/Nearby";
import Signin from "./components/Signin";
//import UserLogin from "./components/UserLogin";
//import Profile from "./components/ShopProfile";
import ShopRegister from "./components/ShopRegister";
import UserRegister from "./components/UserRegister";
import Profile from "./components/ShopProfile";
//import Admin from "./components/AdminLogin";
import Pickup from "./components/Pickup";
//import Data from "./components/table";
import UserPage from "./components/UserPage";
import UpdateShop from "./components/UpdateShop";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Protected from "./components/Protected";

export default function App() {
  return (
    <div>
    <NavBar />
      <div className="content">
      <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/nearby" component={NearByShops} />
          <Route exact path="/shops/registershop" component={ShopRegister} />
          <Route exact path="/user/registercustomer" component={UserRegister} />
          <Route exact path="/signin" component={Signin} />
          <UserPage>
           <Route path="/nearby" component={NearByShops} />
          </UserPage>
          <Route exact path="/shop/profile" component={Profile} />
          <Route exact path="/book/:customerId" component={Pickup} />
          <Route exact path="/shops/:myid" component={UpdateShop} />
          </Switch>
      </div>
    </div>
  );
}
