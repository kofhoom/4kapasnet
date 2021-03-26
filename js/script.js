
const gifDiv = document.querySelector('#gif')
const gifDivBackground = document.querySelector('#gif .container')

document.addEventListener('mousemove', function (e) {
    gifDiv.style.left = e.pageX - 200 + 'px'
    gifDiv.style.top = e.pageY - 200 + 'px'

});

const gifs = [
	'https://media.giphy.com/media/5jZYl31O6Ge7a8GwUU/giphy.gif',
	'https://media.giphy.com/media/26xBQSShmQDxw4opi/giphy.gif',
	'https://media2.giphy.com/media/xUOrvYrdx8taHj8JIk/giphy.gif?cid=3640f6095c29655c74536845518b7133',
	'https://media1.giphy.com/media/xThuWsLtwtwCRAtVN6/giphy.gif?cid=3640f6095c2965a0634a4567632d1537',
	'https://media.giphy.com/media/xT9IgLnpv0DL6Qou6k/giphy.gif',
	'https://media.giphy.com/media/RRinVtpLrBQIw/giphy.gif',
	'https://media.giphy.com/media/3ohs7JSLR3TmOTegoM/giphy.gif',
	'https://media0.giphy.com/media/38pz4QK5fettC/giphy.gif?cid=3640f6095c2965d74e626e5851a98a45',
	'https://media.giphy.com/media/DIbzujHh2PCbm/source.gif'
]

const items = document.querySelectorAll('.item');

items.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        gifDivBackground.style.background = `url(${gifs[index]})`
        gifDivBackground.style.backgroundPosition = 'center';
        gifDivBackground.style.backgroundSize = 'cover';
    })
})

const menu = document.querySelector('#menu')

menu.addEventListener('mouseenter', function () {
    gifDivBackground.style.animation = 'appear 0.25s ease'
    gifDivBackground.style.animationFillMode = 'forwards'
    //    gifDivBackground.style.opacity = '0.9'


})

menu.addEventListener('mouseleave', function () {
    gifDivBackground.style.animation = 'disappear 0.25s ease'
    gifDivBackground.style.animationFillMode = 'forwards'
});

//Splitting();
