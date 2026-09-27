"use client"
import { initializeApp } from "firebase/app"

export const FCM_PUB_KEY = process.env.FCM_PUB_KEY

export const app = initializeApp({
    apiKey: process.env.FCM_API_KEY,
    authDomain: process.env.FCM_AUTH_DOMAIN,
    projectId: process.env.FCM_PROJECT_ID,
    storageBucket: process.env.FCM_STORAGE_BUCKET,
    messagingSenderId: process.env.FCM_MESSAGING_SENDER_ID,
    appId: process.env.FCM_APP_ID
})