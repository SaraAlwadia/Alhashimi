function shows_pop(){
    document.getElementById("whatsap-pop").classList.add('open');

}
function close_pop() {
    document.getElementById("whatsap-pop").classList.remove('open');
}


window.addEventListener('load' , function(){
    let loader = document.querySelector('.loader');
    loader.className += " hidden";
});
let serchpopup = document.querySelector('.serch-popup');
function openSerch(){
    serchpopup.style.top= '40px';
}
function closeserch(){
    serchpopup.style.top= '-1000px';
}