const remote = document.querySelector('.remote');
const tvoff = document.querySelector('.mainbutton button:nth-child(1)');
const imgElement = document.querySelector('.maintvbox .tv');
const signalimg = document.querySelector('.mainpng .maintvbox .signal .img');
const signal = document.querySelector('.mainpng .maintvbox .signal');
const signaltext = document.querySelector('.mainpng .maintvbox .signal .vhs');

const all = document.querySelector('*');
const background1 = document.querySelector('.background .img1');
const background2 = document.querySelector('.background .img2');
const background3 = document.querySelector('.background .img3');
const background4 = document.querySelector('.background .img4');
const background5 = document.querySelector('.background .img5');
//const tvimgwidth = document.querySelector('.mainpng .maintvbox .tv.off');




//function resizeApply() {
//    var minWidth = 1200;
//    var body = document.getElementsByTagName('body')[0];
//    if (window.innerWidth < minWidth) {
//        body.style.zoom = (window.innerWidth / minWidth);
//    } else body.style.zoom = 1;
//}
//window.onload = function () {
//    window.addEventListener('resize', function () {
//        resizeApply();
//    });
//}






//const tvoffimg = document.querySelector('.mainpng .maintvbox .tv.off');

document.addEventListener('mousemove', function (e) {
    remote.style.left = e.pageX - 30 + 'px'
    remote.style.top = e.pageY - 70 + 'px'

});

function onoff() {
    signaltext.classList.toggle("show2");
    signalimg.classList.toggle("show");

    imgElement.classList.toggle("on");
}

function init() {
    tvoff.addEventListener("click", onoff);
}
init();



signaltext.addEventListener('mouseover', function () {

    remote.style.opacity = '0';
    all.style.cursor = 'default';

});
signaltext.addEventListener('mouseout', function () {

    remote.style.opacity = '1';
//    all.style.cursor = 'none';
});


function resizeing(number) {

    background1.style.height = number + '%';
    background2.style.height = number + '%';
    background3.style.height = number + '%';
    background4.style.height = number + '%';
    background5.style.height = number + '%';
    //    tvimgwidth.style.height = number + '%';

    //    tvoffimg.style.height = num + '%';


}
resizeing(100);
