function screenLock() {
    const element = document.createElement('div');

    element.id = 'startTimer';
    element.style.height = '100%';
    element.style.left = '0px';
    element.style.position = 'fixed';
    element.style.top = '0px';
    element.style.width = '100%';
    element.style.zIndex = '9999';
    element.style.opacity = '0';

    const objBody = document.querySelector('body');
    objBody.appendChild(element);

    setTimeout(function() {
        element.remove()
    }, 3000);
}
