"use strict";
var _a;
(_a = document.querySelector('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            new Notification('Hello world!');
        }
    });
});
