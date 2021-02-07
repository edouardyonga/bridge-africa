<template>
  <v-row justify="center" align="center">
    <v-sheet color="white" elevation="2" class="row col-md-8 mx-auto">
      <div class="col-md-6 auth-card-img">
        <img class="text-center" src="/login.jpg" />
      </div>

      <v-col md="4">
        <v-card-title> Sign in to your account </v-card-title>
        <v-alert type="error" v-if="error" dense text class="alert text-left">{{
          error
        }}</v-alert>
        <v-card-text>
          <p class="text-light--text text-left">
            Enter your email and password
          </p>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="login.email"
              label="Email"
              outlined
              required
            ></v-text-field>

            <v-text-field
              v-model="login.password"
              label="Password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              outlined
              required
              @click:append="show1 = !show1"
            ></v-text-field>

            <v-btn
              id="sign-in-button"
              block
              large
              color="primary"
              class="mb-5"
              :loading="authLoader"
              @click="signInSubmit"
            >
              <span>Login</span>
            </v-btn>
          </v-form>

          <!-- <hr width='50' class="my-5" color='grey'> -->

          <p class="pt-5 text-light--text text-center">
            Don't have an account?
            <nuxt-link to="/auth/register">Sign up</nuxt-link>
          </p>
        </v-card-text>
      </v-col>
    </v-sheet>
  </v-row>
</template>

<script>
export default {
  layout: "auth",

  data: () => ({
    valid: true,
    show1: false,
    login: {
      isLogin: true,
      email: "",
      password: "",
    },
    authLoader: false,
    error: "",
  }),

  methods: {
    signInSubmit() {
      this.authLoader = true;

      this.$store
        .dispatch("authUser", this.login)
        .then((user) => {
          this.authLoader = false;

          // this.authDisabler, this.authLoader = false
          console.log(user);
          this.$router.push("/");
        })
        .catch((error) => {
          this.authLoader = false;

          // this.authDisabler, this.authLoader = false
          this.error = error.message;
          console.log(error);
        });
    },
  },

  head() {
    return { title: "Login" };
  },
};
</script>
