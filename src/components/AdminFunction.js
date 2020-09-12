import axios from 'axios'

export const login = user => {
  return axios
    .post('http://localhost:8000/admin/loginadmin', {
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
    .get('http://localhost:8000/admin/allusers', {
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
    .get('http://localhost:8000/admin/allstores', {
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