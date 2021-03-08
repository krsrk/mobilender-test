export default async function ({ store, redirect }) {
  let uri = window.location.pathname

  if (localStorage.getItem("sessid") === null) {
    if (uri !== '/') {
      store.state.logginSession = false
      window.location.href = '/'
    }
  } else {
    store.state.logginSession = true
    if (! store.state.login.userInfo.hasOwnProperty('name')) {
      let sessionInfo = localStorage.getItem("sessid").split(',')
      store.state.login.userInfo.name = sessionInfo[0]
      store.state.login.userInfo.photo = sessionInfo[1]
    }
  }

  return
}
