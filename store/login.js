import LoginService from "@/services/login.service";

export const state = () => ({
  isUserLogedIn: false,
  sessionLogin: null,
  userInfo: {},
  loginError: '',
})

export const mutations = {
  isUserLogedIn(state, value) {
    state.isUserLogedIn = value
  },
  sessionLogin(state, value) {
    state.sessionLogin = value
  },
  userinfo(state, value) {
    state.userInfo = value
  },
  loginError(state, value) {
    state.loginError = value
  }
}

export const actions = {
  login: (context, value) => {
    context.commit('loginError', '')
    const loginService = new LoginService()
    loginService.loginProcess(value)
    context.commit('isUserLogedIn', loginService.auth)
    context.commit('userinfo', loginService.userAuth)

    if (!loginService.auth) {
      context.commit('loginError', 'Usuario o Password incorrectos!')
    }
  },

  logout: (context, value) => {
    const loginService = new LoginService()
    loginService.logoutProcess()
    context.commit('isUserLogedIn', loginService.auth)
    context.commit('userinfo', loginService.userAuth)
  }
}
