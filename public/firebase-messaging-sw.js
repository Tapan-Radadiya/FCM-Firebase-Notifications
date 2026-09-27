importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");


const app = firebase.initializeApp({
    apiKey: "AIzaSyDnrUmsFefLVuTuNJJOeThWxqmc4Ha2x3A",
    authDomain: "fcm-test-5006e.firebaseapp.com",
    projectId: "fcm-test-5006e",
    storageBucket: "fcm-test-5006e.firebasestorage.app",
    messagingSenderId: "249469037119",
    appId: "1:249469037119:web:104dcb533bc96648f2a68a"
})

const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {
    try {
        const title = payload.notification?.title || "Notification"
        const options = {
            body: payload.notification?.body,
            icon: payload.notification?.icon
        }

        self.registration.showNotification(title, options);
    } catch (error) {
        console.log('error-->', error);
    }
})