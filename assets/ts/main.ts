document.querySelector('button')?.addEventListener('click', () => {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            new Notification('Hello world!');
        }
    });
});