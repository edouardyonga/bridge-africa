<template>
  <div>
    <h1 class="text-center my-5 display-2">WELCOME</h1>
    <v-row justify="center" align="center">
      <v-col cols="8" sm="6" md="3" class="mx-auto">
        <v-btn class="text-center" outlined @click="addProduct = true">
          <v-icon>mdi-plus</v-icon> ADD A PRODUCT</v-btn
        >
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="8"
        sm="6"
        md="3"
        v-for="(product, index) in products"
        :key="index"
      >
        <v-card class="mx-3" max-width="430">
          <v-img
            :src="product.imgLink"
            height="200px"
            style="background-color: #cccccc"
          ></v-img>

          <v-card-title class="pa-4">
            {{ product.name }}
          </v-card-title>

          <v-card-subtitle class="pa-4">
            {{ product.desc }}
          </v-card-subtitle>

          <v-card-actions class="pa-4">
            <v-btn color="primary lighten-2" text @click="servIndex = index">
              {{ product.price }} XAF
            </v-btn>

            <v-spacer></v-spacer>
            <v-btn
              color="info"
              @click="emitEdit(product)"
            >
              Update
            </v-btn>

            <v-btn
              color="error"
              :loading="loader"
              @click="deleteProduct(product)"
            >
              delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- add product -->
    <v-dialog v-model="addProduct" max-width="450px">
      <v-card>
        <v-card-title
          ><h2 class="font-weight-medium">ADD PRODUCT</h2>
          <v-btn
            @click="addProduct = false"
            color="red"
            icon
            fab
            small
            elevation="3"
            absolute
            right
            class="btn-close"
            ><v-icon color="red">mdi mdi-close</v-icon></v-btn
          >
        </v-card-title>
        <v-divider height="15" class="mt-2 font-weight-bold" />
        <v-card-text>
          <div class="mt-4">
            <v-text-field
              v-model="product.name"
              label="Name"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="product.price"
              label="Price"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="product.imgLink"
              label="Image Link"
              outlined
              append-icon="mdi-link-variant"
              required
            ></v-text-field>
            <v-textarea
              v-model="product.desc"
              label="desc"
              outlined
              required
            ></v-textarea>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            id="sign-in-button"
            block
            large
            :loading="loader"
            color="primary"
            class="mb-4"
            @click="add"
          >
            ADD
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- add product -->
    <v-dialog v-model="editProduct" max-width="450px">
      <v-card>
        <v-card-title
          ><h2 class="font-weight-medium">Edit PRODUCT</h2>
          <v-btn
            @click="editProduct = false"
            color="red"
            icon
            fab
            small
            elevation="3"
            absolute
            right
            class="btn-close"
            ><v-icon color="red">mdi mdi-close</v-icon></v-btn
          >
        </v-card-title>
        <v-divider height="15" class="mt-2 font-weight-bold" />
        <v-card-text>
          <div class="mt-4">
            <v-text-field
              v-model="prod.name"
              label="Name"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="prod.price"
              label="Price"
              outlined
              required
            ></v-text-field>
            <v-text-field
              v-model="prod.imgLink"
              label="Image Link"
              outlined
              append-icon="mdi-link-variant"
              required
            ></v-text-field>
            <v-textarea
              v-model="prod.desc"
              label="desc"
              outlined
              required
            ></v-textarea>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            id="sign-in-button"
            block
            large
            :loading="loader"
            color="primary"
            class="mb-4"
            @click="edit"
          >
            UPDATE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data: () => ({
    addProduct: false,
    editProduct: false,

    prod:[],
    product: [
      {
        name: "",
        imgLink: "",
        price: null,
        desc: "",
      },
    ],
    loader: false,
  }),
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    add() {
      this.loader = true;

      this.$store
        .dispatch("addProduct", this.product)
        .then(() => {
          this.loader = false;
          this.addProduct = false;
          // this.authDisabler, this.authLoader = false
          // console.log(user);
        })
        .catch((error) => {
          this.loader = false;
          this.addProduct = false;

          // this.authDisabler, this.authLoader = false
          this.error = error.message;
          console.log(error);
        });
    },
    deleteProduct(product) {
      this.loader = true;

      this.$store
        .dispatch("deleteProduct", product)
        .then(() => {
          this.loader = false;

          console.log("Document successfully Deleted!");
        })
        .catch((error) => {
          this.loader = false;

          console.error("Error deleting document: ", error);
        });
    },
    emitEdit(prod){
      this.editProduct = true
      this.prod = prod
    },
    edit() {
      this.loader = true;
      console.log(this.prod)
      this.$store
        .dispatch("editProduct", this.prod)
        .then(() => {
          this.loader = false;

          console.log("Document successfully updated!");
        })
        .catch((error) => {
          this.loader = false;

          console.error("Error updating document: ", error);
        });
    },
  },
};
</script>
