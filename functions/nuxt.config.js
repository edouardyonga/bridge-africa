import colors from 'vuetify/es5/util/colors'

module.exports = {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - bridgeAfrik',
        title: 'bridgeAfrik',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/style.css'
    ],

    // progress-bar
    loading: {
        color: '#e75c18',
        height: '4px',
        duration: 5000
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/firebase',
            {
                config: {

                    apiKey: "AIzaSyBN4X0NsRDF6b0OA3QxyAT5nA55bV1hb_U",
                    authDomain: "bridge-africa-c0606.firebaseapp.com",
                    databaseURL: process.env.FIREBASE_DB_URL, //"https://PROJECT_ID.firebaseio.com",
                    projectId: "bridge-africa-c0606",
                    storageBucket: "bridge-africa-c0606.appspot.com",
                    messagingSenderId: "933492723772",
                    appId: "1:933492723772:web:c3ba8d1518a42cb259b339",
                    // measurementId: "G-8H78YMQ2L0"


                },
                services: {
                    auth: true, // Just as example. Can be any other service.
                    firestore: true,
                }
            }
        ]
    ],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                },
                light: {
                    primary: '#e75c18',
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}