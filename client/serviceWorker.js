(function() {
  'use strict';

  self.addEventListener('push', handlePushNotification);
  self.addEventListener('notificationclick', handleNotificationClick);

  function handlePushNotification(evt) {
    var payload = evt.data.json();
    
    // Let's generate a notification the user will see.
    evt.waitUntil(
      self.registration.showNotification(
        'Notification recieved', // Title
        {
          body : payload.message, // The payload sent using send-push.js
          icon : 'http://images.example.com/notification.jpg',
          data : {
            // This will be available to our notification
            // click handler.
          }
        })
    );
  }

  function handleNotificationClick(evt) {
    evt.notification.close();

    evt.waitUntil(
      // Open a new tab.
      clients.openWindow('http://example.com/view-notification')
    );
  }
}());
