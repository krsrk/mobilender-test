import InspeccionarService from "@/services/inspeccionar.service";

export const state = () => ({
  searchList: [],
  filterList: [],
})

export const mutations = {
  searchList(state, value) {
    state.searchList = value
  },
  filterList(state, value) {
    state.filterList = value
  }
}

export const actions = {
  getData: (context, value) => {
    const inspeccionarService = new InspeccionarService()
    let data = inspeccionarService.fetch()
    context.commit('searchList', data)
    context.commit('filterList', data)
  },
}
