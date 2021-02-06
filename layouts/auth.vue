<template>
  <v-app light>
    <v-main>
      <v-container justify="center" align="center" style="padding-top: 10%">
        <h1
          class="primary--text display-3 font-weight-bold text-center mb-5 pb-5"
        >
          <nuxt-link to="/">Logo.</nuxt-link>
        </h1>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app class="justify-center">
      <span class="">&copy; {{ new Date().getFullYear() }} BridgeAfrica</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  // middleware: "auth",

  data() {
    return {};
  },


};
</script>
