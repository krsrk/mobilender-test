
export default class LoginService {

  constructor() {
    this.mockUserData = [
      {userName: 'bruce.wayne@gmail.com', password:'secret12', name: 'Bruce Wayne', photo: 'https://reqres.in/img/faces/11-image.jpg'},
      {userName: 'selina.kyle@gmail.com', password:'secret123', name: 'Selina Kyle', photo: 'https://reqres.in/img/faces/12-image.jpg'}
    ]

    this.auth = false
    this.userAuth = {}
  }

  auth() {
    return this.auth
  }

  userAuth() {
    return this.userAuth
  }

  loginProcess(userRequestLoginData) {
    this.mockUserData.map((it) => {
      if (it.userName === userRequestLoginData.email && it.password === userRequestLoginData.password) {
        this.auth = true
        this.userAuth = it
        localStorage.setItem("sessid", it.name + ',' + it.photo);
      }
    })
  }

  logoutProcess() {
    this.auth = false
    this.userAuth = {}
    localStorage.removeItem('sessid')
  }
}
