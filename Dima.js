const urlParams = new URLSearchParams(window.location.search);
let tg = window.Telegram.WebApp;
let letsgo = document.getElementById('letsgo_btn');
let click = document.getElementById('click');
let a = urlParams.get('c');
let s = urlParams.get('s');
let data = {}
const $button_cl = document.querySelector('.button_cl')
document.getElementById('clicks').innerText = a;
//window.location.search = "?c=50&s=normal";
   
function setImage(){
    if (s == 'normal') {
        $button_cl.setAttribute('style', 'background-image: url("normal.png")')
    }
    else if (s == 'rock') {
        $button_cl.setAttribute('style', 'background-image: url("rock.png")')
    }
    else if (s == 'buisness') {
        $button_cl.setAttribute('style', 'background-image: url("buisness.png")')
    }
    else if (s == 'hack') {
        $button_cl.setAttribute('style', 'background-image: url("hacker.png")')
    }
}

setImage()
click.addEventListener('click', (event) => {
    const rect = $button_cl.getBoundingClientRect()
    a++;
    document.getElementById('clicks').innerText = a;
    const plusOne = document.createElement('div')

    plusOne.classList.add('plus-one')
    plusOne.textContent = '+1'
    plusOne.style.left = `${event.clientX-5}px`
    plusOne.style.top = `${event.clientY}px`
  
    $button_cl.parentElement.appendChild(plusOne)
});

letsgo.addEventListener('click', () => {
    let data = {
        a: a
    }
    tg.sendData(JSON.stringify(data));
    tg.close();
});
