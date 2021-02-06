export const state = () => ({
    loadedPosts: [],
    token: null
})

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts
    },
    addPost(state, post) {
        state.loadedPosts.push(post)
    },
    editPost(state, editPost) {
        let postIdex = state.loadedPosts.findIndex(post => post.id == editPost.id)
        state.loadedPosts[postIdex] = editPost
    },
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    },

}

export const actions = {
    nuxtServerInit({ commit }, { context }) {

        // return axios.get(process.env.baseUrl + '/posts.json')
        //     .then(res => {
        //         let postArray = []
        //         for (const key in res.data) {
        //             postArray.push({...res.data[key], id: key })
        //                 // console.log(postArray)
        //         }
        //         commit('setPosts', postArray)
        //     })
        //     .catch(error => {
        //         console.log(error.error)

        //     })
    },
    addPost({ commit }, post) {

        return axios.post(process.env.baseUrl + '/posts.json', post)
            .then(res => {
                commit('addPost', {...post, id: res.data.name })
                console.log(post)
            })
            .catch(error => {
                console.log(error.error)
            })
    },
    editPost({ commit, state }, editPost) {

        return axios.put(process.env.baseUrl + '/posts/' + editPost.id + '.json?auth=' + state.token, editPost)
            .then((res) => {
                commit('editPost', editPost)
            })
            .catch(error => {
                console.log(error.error)
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
    loadedPosts(state) {
        return state.loadedPosts
    },
    isAuthenticated(state) {
        // let out = false
        // if (state.token != null){
        //      out = true
        // }
        return state.token != null
    }
}
