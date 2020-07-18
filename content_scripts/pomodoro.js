function screenLock() {
    const element = document.createElement('div');

    element.style.height = '100%';
    element.style.left = '0px';
    element.style.position = 'fixed';
    element.style.top = '0px';
    element.style.width = '100%';
    element.style.zIndex = '9999';
    element.style.opacity = '0';

    const objBody = document.getElementsByTagName("body").item(0);
    objBody.appendChild(element);
}

function screenUnLock() {

}

setTimeout("screenLock()", 1500000)