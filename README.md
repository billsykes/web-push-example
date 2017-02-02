# An example of how to setup web push

The **client/** directory contains the web application itself, which will load the service worker. In order to work properly with Chrome, the **"gcm_sender_id"** property in **client/manifest.json** must be updated with your own GCM id. In addition, the ajax call to post the PushSubscription must be updated with your own endpoint.

**send-push.js** is a simple example of how to send a push notification using the [web-push](https://github.com/web-push-libs/web-push) package.
