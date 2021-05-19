<template>
  <v-app light>
    <v-app-bar fixed app>
      <span class="font-weight-bold display-1 primary--text">Logo.</span>
      <v-spacer />

      <div class="nav">
        <nuxt-link to="/">
          <v-btn text class="mx-4"> STORE </v-btn>
        </nuxt-link>

        <nuxt-link to="/admin">
          <v-btn text class="mx-4"> Admin </v-btn>
        </nuxt-link>

        <v-btn outlined color="primary" class="mx-2" @click="logout">
          Logout
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
      <v-container>
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
  middleware: "auth",

  data() {
    return {

      items: [
        {
          src:
            "https://static01.nyt.com/images/2020/02/25/well/PHYSED-SHOES1/merlin_168154896_a69879b8-d43a-40d0-8297-dd7086d7d784-superJumbo.jpg?quality=90&auto=webp",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],

    };
  },
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          // this.$router.push("/auth/login");
        })
        .catch((error) => {
          console.log("LOGGED OUT ERROR");
        });
    },
  },

};
</script>
