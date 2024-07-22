const urlParams = new URLSearchParams(window.location.search);
let tg = window.Telegram.WebApp;
let letsgo = document.getElementById('letsgo_btn');
let click = document.getElementById('click');
let a = urlParams.get('c');
let s = urlParams.get('s');
let data = {}
const $button_cl = document.querySelector('.button_cl')
document.getElementById('clicks').innerText = a;

function setImage(){
    if (s == 'normal') {
        $button_cl.setAttribute('style', 'background-image: url("217853.png")')
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
click.addEventListener('click', () => {
    a++;
    document.getElementById('clicks').innerText = a;
});

letsgo.addEventListener('click', () => {
    let data = {
        a: a
    }
    tg.sendData(JSON.stringify(data));
    tg.close();
});
