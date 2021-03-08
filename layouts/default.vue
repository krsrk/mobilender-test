<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon v-if="isAuth" @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <template v-if="isAuth">
        {{ userInfo.name }}
        &nbsp;&nbsp;&nbsp;
        <v-avatar>
          <img
            :src="userInfo.photo"
            alt="John"
          >
        </v-avatar>

        <v-menu
          left
          bottom
          light
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              @click="logOutClickHandler"
            >
              <v-list-item-title>Salir</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-view-list',
          title: 'Softwares',
          to: '/softwares'
        },
        {
          icon: 'mdi-view-list',
          title: 'Creditos Grupales',
          to: '/creditos'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'IntegraSoftware'
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.login.userInfo
    },
    isAuth() {
      return this.$store.state.logginSession
    }
  },
  methods: {
    logOutClickHandler() {
      this.$store.dispatch('login/logout').then(() => {
        window.location.href = '/'
      })
    },
  }
}
</script>
