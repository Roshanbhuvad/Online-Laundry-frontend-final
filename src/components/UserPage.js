import React, {Component} from "react";
import {getJwt} from "../helpers/jwt"
import {withRouter} from "react-router-dom"; 
import axios from "axios";

class UserPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: undefined
		}
	}

	componentDidMount() {
	const jwt = getJwt();
	if(!jwt) {
		this.props.history.push("https://laundrybackend.herokuapp.com/signin")
	}
	axios.get("https://laundrybackend.herokuapp.com/user/nearbyshops?lat=17.4448&lng=78.3498", {headers: {authorization:"Bearer ${jwt}" }}).then(res => this.setState({
		user: res.data
	})).catch(err => {
		localStorage.removeItem("cool-jwt");
		this.props.history.push("https://laundrybackend.herokuapp.com/signin")
	});
	}

	render() {
		if(this.state.user === undefined) {
			return (
				<div><h1>Loading..</h1></div>
			)
		}
		return (
			<div>
			{this.props.children}
			</div>
		)
	}
}

export default withRouter(UserPage);