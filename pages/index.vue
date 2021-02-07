<template>
  <div>
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
            <v-btn color="primary lighten-2" text >
              {{product.price}} XAF
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn color="primary" @click="servIndex = index"> Buy now </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    
  }),
  computed:{
    products(){
      return this.$store.state.products
    }
  }
};
</script>
