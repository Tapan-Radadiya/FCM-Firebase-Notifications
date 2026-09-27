"use client"
import { useEffect, useState } from "react";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { FCM_PUB_KEY, app } from "../firebase_config/fcm.config"
export default function Home() {

  // Use Stats
  const [isNotiAllowed, setIsNotiAllowed] = useState(false)

  // Use Effects
  useEffect(() => {
    requestPermission()
  }, [])
  async function requestPermission() {
    const permission = await Notification.requestPermission()

    const messaging = getMessaging(app)

    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: FCM_PUB_KEY
      })
      setIsNotiAllowed(true)
    } else {
      console.log(permission)
    }

    onMessage(messaging, (payload) => {

      new Notification(payload?.notification?.title || 'Default Title', {
        body: payload.notification?.body
      })
      console.log('payload-->', payload);
    })

  }
  return (
    <div className="m-auto">
      <div className={`w-fit p-4 border-2 rounded-2xl ${isNotiAllowed ? 'bg-green-500' : 'bg-red-900'} text-white`}>
        Notification Status
      </div>
    </div>
  );
}
