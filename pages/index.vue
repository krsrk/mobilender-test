<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">

      <!-- Login Form -->
      <LoginForm></LoginForm>

    </v-col>
  </v-row>
</template>

<script>
import LoginForm from "~/components/LoginForm";

export default {
  components: {
    LoginForm
  }
}
</script>
