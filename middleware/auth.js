import firebase from "firebase/app";
import "firebase/auth";

export default function(context) {
    console.log('[Middleware] Auth')

    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            context.redirect('/auth/login')
            console.log("USER NOT LOGGED IN")
        }
    });


}
