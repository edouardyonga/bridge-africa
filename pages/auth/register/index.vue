<template>
    <v-row justify="center" align="center">
      <v-card class="row col-md-8 mx-auto">
        <div class="col-md-6 auth-card-img">
          <img class="text-center" src="/login.jpg" />
        </div>

        <div class="col-md-4">
          <v-card-title> Create an account </v-card-title>
          <v-alert
            type="error"
            v-if="error"
            dense
            text
            class="alert text-left"
            >{{ error }}</v-alert
          >
          <v-card-text>
            <p class="text-light--text text-left">
                            Enter your email and password

            </p>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="signUp.email"
                label="Email"
                outlined
                required
              ></v-text-field>

              <v-text-field
                v-model="signUp.password"
                label="Password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                outlined
                required
                @click:append="show1 = !show1"
              ></v-text-field>
              <v-text-field
                v-model="repassword"
                label="Confirm Password"
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
                @click="signUpSubmit"
              >
                <span>Register</span>
              </v-btn>
            </v-form>

            <!-- <hr width='50' class="my-5" color='grey'> -->

            <p class="pt-5 text-light--text text-center">
              Have an account?
              <nuxt-link to="/auth/login">SignIn</nuxt-link>
            </p>
          </v-card-text>
        </div>
      </v-card>
    </v-row>
</template>

<script>

export default {
  layout: "auth",

  data: () => ({
    valid: true,
    show1: false,
    repassword: '',
    signUp: {
      isLogin: true,
      email: "",
      password: "",
    },
    authLoader: false,
    error: "",
  }),



  methods: {
    signUpSubmit() {
      this.authLoader = true;

      this.$store
        .dispatch("createUser", this.signUp)
        .then((user) => {
          this.authLoader = false;

          // this.authDisabler, this.authLoader = false
          console.log(user)
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
    return { title: "Register" };
  },
};
</script>
