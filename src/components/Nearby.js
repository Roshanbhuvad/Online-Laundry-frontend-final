import React, { Component } from 'react'
//import { Shoplogin } from './ShopFunction'
import mapNearbyStores from "./mapNearbyStores";
//import Admin from "./AdminLogin";
import laundryShop from "./laundryShop";
import landingPage from "./landingPage";
 function Nearby () {
 /*const { Login, UserLogin } = this.props; */
return(
    <div>
        <div>
            <mapNearbyStores />
        </div>
        <div>
            <laundryShop />
        </div>
         <div>
            <landingPage />
        </div>
    </div>
);
};
export default Nearby;
