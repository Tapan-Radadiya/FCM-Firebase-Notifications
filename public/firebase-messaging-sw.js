importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");


const app = firebase.initializeApp({
    apiKey: process.env.FCM_API_KEY,
    authDomain: process.env.FCM_AUTH_DOMAIN,
    projectId: process.env.FCM_PROJECT_ID,
    storageBucket: process.env.FCM_STORAGE_BUCKET,
    messagingSenderId: process.env.FCM_MESSAGING_SENDER_ID,
    appId: process.env.FCM_APP_ID
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