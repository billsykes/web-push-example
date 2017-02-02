const webpush = require('web-push'),
      // This is the PushSubscription received from the user
      userPushSubscription = {
        endpoint: '...',
        keys: {
          p256dh: '...',
          auth: '...'
        }
      };

webpush.setGCMAPIKey('<your GCM API key>'); 

const payload = {
  message : 'You have a notification!'
};

webpush
  .sendNotification(userPushSubscription, JSON.stringify(payload))
  .then(function() {
    console.log('Push notification sent to user!');
  })
  .catch(function(err) {
    if (err.code === 'expired-subscription') {
      // The user's push token data is no longer valid
      // and should be discarded.
    } else {
      console.log('Error occurred!', err);
    }
  });
