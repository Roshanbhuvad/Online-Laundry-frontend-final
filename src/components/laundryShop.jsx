import React, { Component } from "react";
import MediaCard from "./shopComponent";
import { Grid } from "@material-ui/core";
import axios from "axios";
class LaundryShops extends Component {
  state = {
    nearByShops: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://laundrybackend.herokuapp.com/user/nearbyshops?lat=17.4448&lng=78.3498`
      )
      .then((res) => {
        const nearByShops = res.data;
        // const nearByShops = [1, 2, 3, 4, 5, 6, 7];

        this.setState({ nearByShops });
      })
      .catch((e) => {
        console.log(e);
        // this.setState({ nearByShops: ["a", "b"] });
      });
  }
  render() {
    return (
      <div>
        <div>
          <Grid container spacing={4}>
            {this.state.nearByShops.map((shop, index) => (
              <Grid item xs={12} sm={6} md={4}>
                <MediaCard
                  name={shop.name}
                  email={shop.email}
                  phoneNumber={shop.phoneNumber}
                  image={
                    "https://laundrybackend.herokuapp.com/uploads/" +
                    shop.imagename
                  }
                  address={shop.address}
                  openingTime={shop.OpeningTime}
                  closingTime={shop.ClosingTime}
                  price={shop.price}
                />
                {/* <h1>{shop}</h1> */}
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default LaundryShops;
