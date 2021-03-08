<template>
  <div>
    <v-breadcrumbs :items="breadcumbItems"></v-breadcrumbs>

    <h3>
      <v-icon>mdi-view-list</v-icon>
      Listado de Softwares

      <v-btn
        class="float-right"
        color="primary"
        elevation="2"
        @click="dialog = true"
      >
        <v-icon>
          mdi-plus
        </v-icon>
        Agregar Nuevo
      </v-btn>
    </h3>

    <DataList
      :data-items="items"
      with-row-counter
      show-action
      :with-header="false"
      :col-names="['name', 'credit']"
      :actions="[{action_id: 'see_detail', icon: 'mdi-chevron-right'}]"
      @handlerclickaction="dataListClickActionHandler">
    </DataList>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
      light
    >
      <v-card>
        <v-card-title>
          <span class="headline">Softwares</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="form.name"
                  label="Nombre"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  v-model="form.credit"
                  :items="['Credito Grupal']"
                  label="Credito"
                  required
                ></v-select>
              </v-col>

            </v-row>
          </v-container>
          <small>*Campos Requeridos</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeSaveRecordModalHandler"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="saveRecordHandler"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import DataList from "@/components/DataList";

export default {
  name: "softwares",
  components: {
    DataList
  },
  created() {
    this.$store.dispatch('softwares/getData')
  },
  data () {
    return {
      form: {
        name: '',
        credit: 'Credito Grupal',
      },
      breadcumbItems: [
        {
          text: 'Listado de Softwares',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        }
      ],
      dialog: false,
    }
  },
  computed: {
    items: {
      get () {
        return this.$store.state.softwares.items
      },
      set (value) {
        this.$store.commit('softwares/items', value)
      }
    }
  },
  methods: {
    dataListClickActionHandler(item) {
      console.log(item)
    },
    saveRecordHandler() {
      this.$store.dispatch('softwares/saveRecord', {
        name: this.form.name,
        credit: this.form.credit,
      }).then( () => {
        this.form.name = ''
        this.form.credit = 'Credito Grupal'
      })
    },
    closeSaveRecordModalHandler() {
      this.dialog = false
      this.form.name = ''
      this.form.credit = 'Credito Grupal'
    }
  }
}
</script>
