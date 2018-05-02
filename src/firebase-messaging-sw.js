importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');
firebase.initializeApp({
  'messagingSenderId': '436445429764'
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('Received background message ', payload);
    // here you can override some options describing what's in the message; 
    // however, the actual content will come from the Webtask
    const notificationOptions = {
      icon: '/assets/img/logo.png'
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
  });