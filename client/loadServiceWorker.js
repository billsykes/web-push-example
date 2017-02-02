(function() {
  'use strict';

  function handlePushSubscription(pushSubscription) {
    // Pass the push subscription data to our backend
    $.ajax({
      url: 'https://api.example.com/setPushSubscription',
      type: 'POST',
      data: {
        pushData: JSON.stringify(pushSubscription)
      }
    });
  }

  function handleServiceWorkerRegistered(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe({ userVisibleOnly : true })
      .then(handlePushSubscription)
      .catch(function(err) {
        log('Unable to get push subscription', err);
      });
  }

  if ('serviceWorker' in navigator) {

    // The location of our service worker
    navigator.serviceWorker.register('serviceWorker.js');
    navigator.serviceWorker.ready.then(handleServiceWorkerRegistered);
  }
}());
