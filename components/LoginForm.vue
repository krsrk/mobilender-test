<template>
  <v-card>
    <v-card-title class="headline">
      Login
    </v-card-title>
    <v-card-text>
      <template v-if="loginError !== ''">
        <v-alert
          border="bottom"
          color="red"
          dismissible
          elevation="3"
          type="error"
        >
          {{ loginError }}
        </v-alert>
      </template>
      <form>
        <v-text-field
          v-model="email"
          :error-messages="''"
          label="User"
          required
          solo
          light
        ></v-text-field>

        <v-text-field
          v-model="password"
          :error-messages="''"
          label="Password"
          type="password"
          required
          solo
          light
        ></v-text-field>
      </form>
      <hr class="my-3">

    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        nuxt
        @click="loginClickHandler"
      >
        Entrar
      </v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    isUserLogedIn() {
      return this.$store.state.login.isUserLogedIn
    },
    loginError() {
      return this.$store.state.login.loginError
    }
  },
  methods: {
    loginClickHandler() {
      //Validate input data.

      this.$store.dispatch('login/login', {
        email: this.email,
        password: this.password,
      }).then(() => {

        if (this.$store.state.login.isUserLogedIn) {
          window.location.href = '/inspire'
        }

      })
    },
  }
}
</script>
