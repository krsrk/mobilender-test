export const state = () => ({
  items: [],
})

export const mutations = {
  items(state, value) {
    state.items = value
  },
}

export const actions = {
  getData: async(context, value) => {
    const response = await fetch('/' + value + '.json')

    if (response.ok) {
      response.json().then((data) => {
        context.commit('items', data)
      })
    } else {
      context.commit('items', [])
    }
  },
}
