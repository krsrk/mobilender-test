<template>
  <div>
    <v-breadcrumbs :items="breadcumbItems"></v-breadcrumbs>

    <h3>
      <v-icon>mdi-view-list</v-icon>
      Buscar Creditos Grupales

      <v-btn
        class="float-right"
        color="primary"
        elevation="2"
        nuxt
        to="/inspeccionar"
      >
        <v-icon>
          mdi-magnify
        </v-icon>
        Inspeccionar
      </v-btn>
    </h3>

    <DataList
      :data-items="items"
      :headers="['Archivo', 'Expedición', '%Calidad Información', 'Finalización', 'Usuario', 'Estatus']"
      show-action
      :col-names="['archive', 'expedition', 'information_quality', 'ending', 'user', 'status']"
      :actions="[{action_id: 'see_detail', icon: 'mdi-chevron-right'},{action_id: 'download_file', icon: 'mdi-download'}]"
      @handlerclickaction="actionDispatchHandler">
    </DataList>

    <a id="downloadFile" download="cliente_archivo.xml" href="/cliente_archivo.xml" style="display: none;"></a>
  </div>
</template>

<script>
import DataList from "@/components/DataList";

export default {
  name: "creditos",
  components: {
    DataList,
  },
  created() {
    this.$store.dispatch('creditos/getData')
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
          disabled: true,
          to: '',
        }
      ],
    }
  },
  computed: {
    items: {
      get () {
        return this.$store.state.creditos.items
      },
      set (value) {
        this.$store.commit('creditos/items', value)
      }
    }
  },
  methods: {
    actionDispatchHandler(item) {
      if (item.action === 'download_file') {
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

<style scoped>

</style>
