import SoftwaresService from "@/services/softwares.service";

export const state = () => ({
  items: [],
})

export const mutations = {
  items(state, value) {
    state.items = value
  },
  saveItem(state, value) {
    state.items.push(value)
  }
}

export const actions = {
  getData: (context, value) => {
    const softwaresService = new SoftwaresService()
    let data = softwaresService.fetch()
    context.commit('items', data)
  },

  saveRecord: (context, value) => {
    context.commit('saveItem', value)
  }
}
