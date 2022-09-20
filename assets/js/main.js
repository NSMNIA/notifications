"use strict";
var _a;
(_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            const notification = new Notification('Hello world!', {
                body: 'This is a notification',
                icon: '/assets/images/icon.png',
                data: {
                    id: 1
                },
                // tag: 'hello-world'
            });
            notification.addEventListener("close", e => {
                console.log("Notification closed", e);
            });
        }
    });
});
