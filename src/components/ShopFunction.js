import axios from 'axios'

export const Shopregister = newUser => {
  return axios
    .post('https://laundrybackend.herokuapp.com/shops/registershop', {
      name: newUser.name,
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      password: newUser.password,
      OpeningTime: newUser.OpeningTime,
      ClosingTime: newUser.ClosingTime,
      price: newUser.price,
      image: newUser.image,
      Latitude: newUser.Latitude,
      Longitude: newUser.Longitude,
      role: newUser.role,
      address: newUser.address,
    })
    .then(response => {
      console.log('Registered')
    })
}


export const Shoplogin = user => {
  return axios
    .post('https://laundrybackend.herokuapp.com/signin', {
      phoneNumber: user.phoneNumber,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('https://laundrybackend.herokuapp.com/shops/:id', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}