<template>
  <div>
    <v-breadcrumbs :items="breadcumbItems"></v-breadcrumbs>

    <h3>
      <v-btn
        class="float-left"
        color="white"
        elevation="2"
        small
        fab
        nuxt
        to="/creditos"
      >
        <v-icon class="black--text">
          mdi-arrow-left
        </v-icon>
      </v-btn>

      <v-icon>mdi-magnify</v-icon>
      Inspeccionar
    </h3>

    <SearchBox></SearchBox>

    <DataList
      :data-items="items"
      :headers="['Cliente', 'RFC',]"
      show-action
      :col-names="['client', 'rfc',]"
      :actions="[{action_id: 'see_detail', icon: 'mdi-chevron-right'},]"
      @handlerclickaction="actionDispatchHandler">
    </DataList>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import DataList from "@/components/DataList";

export default {
  name: "inspeccionar",
  components: {
    SearchBox,
    DataList,
  },
  created() {
    this.$store.dispatch('inspeccionar/getData')
  },
  data () {
    return {
      breadcumbItems: [
        {
          text: 'Home',
          disabled: false,
          to: '/inspire',
        },
        {
          text: 'Buscar Creditos Grupales',
          disabled: false,
          to: '/creditos',
        },
        {
          text: 'Inspeccionar',
          disabled: true,
          to: '',
        }
      ],
    }
  },
  computed: {
    items: {
      get () {
        return this.$store.state.inspeccionar.filterList
      },
      set (value) {
        this.$store.commit('inspeccionar/filterList', value)
      }
    }
  },
  methods: {
    actionDispatchHandler(item) {
      console.log(item)
      this.$router.replace({ path: '/cambios/' + item.item.id })
    },
  }
}
</script>
