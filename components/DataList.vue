<template>
  <div style="margin-top: 55px;">
    <v-simple-table>
      <template v-slot:default>
        <template v-if="withHeader">
          <thead>
            <tr>
              <template v-if="withRowCounter">
                <th>
                  #
                </th>
              </template>

              <th v-for="header in headers" class="text-left">
                {{ header }}
              </th>

              <template v-if="showAction">
                <th>
                  &nbsp;
                </th>
              </template>
            </tr>
          </thead>
        </template>
        <tbody>

          <tr v-for="(it, index) in dataItems">
            <template v-if="withRowCounter">
              <td>
                {{ index + 1 }}
              </td>
            </template>
            <td v-for="col in colNames">
              <template v-if="col === 'client'">
                <v-avatar>
                  <img
                    :src="it[col].photo"
                  >
                </v-avatar>
                &nbsp;&nbsp;&nbsp;
                {{ it[col].name }}
              </template>

              <template v-if="col !== 'status' && col !== 'client'">
                {{ it[col] }}
              </template>
              <template v-else>
                <span :class="it[col].color"> {{ it[col].text }} </span>
              </template>
            </td>
            <template v-if="showAction">
              <td>
                  <template v-for="action in actions">
                    <v-icon @click="handlerActionClick(it, index, action.action_id)" class="float-right"> {{ action.icon }} </v-icon>
                  </template>
              </td>
            </template>
          </tr>

        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "DataList",
  props: {
    dataItems: {
      type: Array,
    },
    dataFields: {
      type: Array,
    },
    actions: {
      type: Array,
    },
    colNames: {
      type: Array,
    },
    headers: {
      type: Array,
    },
    withRowCounter: {
      type: Boolean,
      default: false,
    },
    withHeader: {
      type: Boolean,
      default: true,
    },
    showAction: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handlerActionClick (it, indexData, action) {
      this.$emit('handlerclickaction', {item: it, index: indexData, action: action})
    },
  }
}
</script>

<style scoped>

</style>
