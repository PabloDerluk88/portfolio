
$('#about-links').css('opacity', 0);
$('#about-p').css('opacity', 0);
$('.cards').css('opacity', 0);
$('.project-1').css('opacity', 0);
$('.text-project').css('opacity', 0);

let hamburguer = document.getElementById("hamburguer");
let enlaces = document.getElementById('enlaces');

hamburguer.addEventListener("click", () => {
    enlaces.classList.toggle("show");
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".nav-bar").style.top = "0";
    } else {
        document.querySelector(".nav-bar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}


var waypoint = new Waypoint({
    element: document.getElementById('about-links'),
    handler: function () {
        $('#about-links').addClass('animate__animated animate__fadeInRight');
        $('#about-p').addClass('animate__animated animate__fadeInLeft')
    },
    offset: '85%'
});

var waypoint2 = new Waypoint({
    element: document.getElementById('habilidades'),
    handler: function () {
        $('.cards').addClass('animate__animated animate__flipInX')
        $('.cards').css('opacity', 1);
    },
    offset: '30%'
});

var waypoint3 = new Waypoint({
    element: document.getElementById('portfolio'),
    handler: function () {
        $('.project-1').addClass('animate__animated animate__fadeInLeft')
        $('.text-project').addClass('animate__animated animate__fadeInRight')


    },
    offset: '30%'
});

let icons = document.querySelectorAll("i")
icons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        let iconName = icon.className
        icon.className = iconName + 'animate__animated animate__headShake'
        icon.addEventListener('mouseout', () => {
            icon.className = iconName
        })
    })

})