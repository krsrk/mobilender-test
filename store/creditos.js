import CreditosService from "@/services/creditos.service";

export const state = () => ({
  items: [],
})

export const mutations = {
  items(state, value) {
    state.items = value
  },
}

export const actions = {
  getData: (context, value) => {
    const creditosService = new CreditosService()
    let data = creditosService.fetch()
    context.commit('items', data)
  },
}
