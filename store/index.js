export const state = () => ({
  user: {},
  authenticated: false
})

export const mutations = {
  login(state, paramuser) {
    state.user = paramuser
    state.authenticated = true
  }
}
