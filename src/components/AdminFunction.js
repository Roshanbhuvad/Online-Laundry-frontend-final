import axios from 'axios'

export const login = user => {
  return axios
    .post('https://laundrybackend.herokuapp.com/admin/loginadmin', {
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

export const getuserProfile = user => {
  return axios
    .get('https://laundrybackend.herokuapp.com/admin/allusers', {
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
export const getshopProfile = user => {
  return axios
    .get('https://laundrybackend.herokuapp.com/admin/allstores', {
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