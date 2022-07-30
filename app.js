var closeTab = document.querySelector('.close-tab');
var videoBox = document.querySelector('.video-box');
var playBtn = document.querySelector('.play-btn');
var video = document.querySelector('.pause');
var navToggler = document.querySelector('.nav-toggler')
var navbar = document.querySelector('.navbar')


playBtn.addEventListener('click', function () {
    videoBox.classList.toggle('show-video')
});

closeTab.addEventListener('click', function () {
    videoBox.classList.remove('show-video');
    video.classList.add('pause');


});

videoBox.addEventListener('click', function () {
    videoBox.classList.remove('show-video')

});

navToggler.addEventListener('click', function () {
    navbar.classList.toggle('open-navbar')
    navToggler.style.color = '#11A867'
});


const sr = ScrollReveal( {
    origin : 'top',
    distance : '60px',
    duration : 1500,
    delay : 300,
})

sr.reveal('.Home-right-side, .email-right-side', {origin : 'right'})
sr.reveal('.Home-left-side, .email-left-side', {origin : 'left'})
sr.reveal(".service-box, .team-box, .box, .Col-Footer", {interval : 100})
sr.reveal('.about-right-side', {origin : 'right'})
sr.reveal('.about-left-side', {origin : 'left'})
sr.reveal(".statistic-box", {interval : 100, origin : "left"})
sr.reveal(".service-left-side, .header, .heading")
