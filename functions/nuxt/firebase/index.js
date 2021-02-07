import createApp from './app.js'

import authService from './service.auth.js'
import firestoreService from './service.firestore.js'

const appConfig = {"apiKey":"AIzaSyBN4X0NsRDF6b0OA3QxyAT5nA55bV1hb_U","authDomain":"bridge-africa-c0606.firebaseapp.com","databaseURL":undefined,"projectId":"bridge-africa-c0606","storageBucket":"bridge-africa-c0606.appspot.com","messagingSenderId":"933492723772","appId":"1:933492723772:web:c3ba8d1518a42cb259b339"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    firestoreService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    firestore
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    firestore: firestore
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}