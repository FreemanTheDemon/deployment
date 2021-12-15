const buyNow = document.getElementById('buy-now');
const button = document.getElementById('button')

button.onclick = (e) => {
    button.value = 'NO STOPPING THE MUSIC NOW!!!'
}

setInterval(() => {
    let element = document.createElement('p');
    element.textContent = 'BUY NOW'
    buyNow.appendChild(element);
}, 200);

// flash yellow and red
let red = true;
setInterval(() => {
    if (red) {
        document.body.style.backgroundColor = 'red';
        red = false;
    } else {
        document.body.style.backgroundColor = 'yellow';
        red = true;
    }
}, 400);