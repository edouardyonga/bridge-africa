export const state = () => ({
    products: [],
    token: null
})

export const mutations = {
    setProducts(state, posts) {
        state.products = posts
    },
    addProduct(state, post) {
        state.products.push(post)
    },
    editPost(state, editPost) {
        let postIdex = state.products.findIndex(post => post.id == editPost.id)
        state.products[postIdex] = editPost
    },


}

export const actions = {
    nuxtServerInit({ commit }, { context }) {

        return this.$fire.firestore.collection("products")
            .get().then((res) => {
                let prod = []
                const tempDoc = res.docs.map((doc) => {
                    prod.push(doc.data())

                    console.log(doc.data())

                })
                commit('setProducts', prod)

            });
    },
    getProductsListenner({ commit }) {

        return this.$fire.firestore.collection("products")
            .onSnapshot((res) => {
                let prod = []
                const tempDoc = res.docs.map((doc) => {
                    prod.push(doc.data())

                    console.log(doc.data())

                })
                commit('setProducts', prod)

            });
    },
    addProduct({ commit }, product) {

        return this.$fire.firestore.collection("products").doc(product.name).set({
                name: product.name,
                price: product.price,
                desc: product.desc,
                imgLink: product.imgLink
            })
            .then((res) => {
                commit('addProduct', {...product })
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

    },
    deleteProduct(product) {

        return this.$fire.firestore.collection("products").doc(product.name).delete(product)


    },
    editProduct(product) {

        return this.$fire.firestore.collection("products").doc(product.name).update({
            name: product.name,
            imgLink: product.imgLink,
            desc: product.desc,
            price: product.price
        })


    },
    authUser({ commit, dispatch }, authData) {

        return this.$fire.auth.signInWithEmailAndPassword(authData.email, authData.password)

    },
    createUser({ commit, dispatch }, authData) {

        return this.$fire.auth.createUserWithEmailAndPassword(authData.email, authData.password)

    },
    logout({ commit }) {
        return this.$fire.auth.signOut()
    },

}

export const getters = {
    products(state) {
        return state.products
    },

}