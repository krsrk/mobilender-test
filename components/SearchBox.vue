<template>
  <div  style="margin-top: 55px;">
    <v-text-field
      v-model="searchInput"
      label="Inspeccionar"
      placeholder="Buscar Creditos ..."
      solo
      light
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data () {
    return {
      searchInput: '',
    }
  },
  watch: {
    searchInput: {
      handler: function (value) {
        this.filterListByInputSearch()
      },
    },
  },
  computed: {
    dataList: {
      get () {
        return this.$store.state.inspeccionar.searchList
      },
      set (value) {
        this.$store.commit('searchList', value)
      }
    },
    filterDataList: {
      get () {
        return this.$store.state.inspeccionar.filterList
      },
      set (value) {
        this.$store.commit('filterList', value)
      }
    }
  },
  methods: {
    filterListByInputSearch() {
      if (this.searchInput !== '') {
        let searchDataList = this.filterDataList.filter(it => it.name.toLowerCase().includes(this.searchInput.toLowerCase()))
        if (searchDataList.length === 1) {
          searchDataList = this.dataList.filter(it => it.name.toLowerCase().includes(this.searchInput.toLowerCase()))
        }
        this.$store.commit('inspeccionar/filterList', searchDataList)
      } else {
        this.$store.dispatch('inspeccionar/getData')
      }
    },
  }
}
</script>
