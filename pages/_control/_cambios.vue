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
        to="/inspeccionar"
      >
        <v-icon class="black--text">
          mdi-arrow-left
        </v-icon>
      </v-btn>
      &nbsp;&nbsp;&nbsp;
      <v-icon>mdi-magnify</v-icon>
      Control de Cambios
    </h3>
    <template v-if="items.length > 0">
      <DataList
        :data-items="items"
        :headers="['Fecha', 'Archivo', 'Cambios',]"
        show-action
        :col-names="['date', 'file', 'changes',]"
        :actions="[{action_id: 'download_file', icon: 'mdi-download'}]"
        @handlerclickaction="actionDispatchHandler">
      </DataList>
    </template>
    <template v-else>
      <v-alert
        style="margin-top: 35px;"
        border="bottom"
        color="red"
        elevation="3"
        type="error"
      >
        No hay control de cambios para ese registro.
      </v-alert>
    </template>
    <a id="downloadFile" download="cliente_archivo.xml" href="/cliente_archivo.xml" style="display: none;"></a>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const cambios = params.cambios

    return { cambios }
  },
  created() {
    this.$store.dispatch('cambios/getData', this.cambios)
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
          disabled: false,
          to: '/inspeccionar',
        },
        {
          text: 'Control de Cambios',
          disabled: true,
          to: '',
        }
      ],
    }
  },
  computed: {
    items: {
      get () {
        return this.$store.state.cambios.items
      },
      set (value) {
        this.$store.commit('cambios/items', value)
      }
    }
  },
  methods: {
    actionDispatchHandler(it) {
      if (it.action === 'download_file') {
        this.downloadFile()
      }
    },
    downloadFile() {
      let element = document.getElementById('downloadFile')
      element.click()
    }
  }
}
</script>
