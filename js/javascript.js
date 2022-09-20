window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('spinner_wrapper');
    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }, 500);
})

document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.header-ul').style.left = 0;
    document.getElementById('dark-div').style.display = 'block';
})
document.querySelector('.close-icon').addEventListener('click', () => {
    document.querySelector('.header-ul').style.left = '-260px';
    document.getElementById('dark-div').style.display = 'none';
})
document.querySelector('.dark-div').addEventListener('click', () => {
    document.querySelector('.header-ul').style.left = '-260px';
    document.getElementById('dark-div').style.display = 'none';
})


var count = 0;
$("#acor-info1").slideDown();
$("#acor-info2").slideUp();
$("#acor-info3").slideUp();
$(".plus1").hide();
$(".minus2").hide();
$(".minus3").hide();
$("#acor-box1").click(function(){
    $("#acor-info1").slideToggle();
    $("#acor-info2").slideUp(() => {
        $(".minus2").hide();
        $(".plus2").show();
    });
    $("#acor-info3").slideUp(() => {
        $(".minus3").hide();
        $(".plus3").show();
    });
    count++
    if (count % 2 == 0) {
        $(".plus1").hide();
        $(".minus1").show();
    } else {
        $(".plus1").show();
        $(".minus1").hide();
    }
});
$("#acor-box2").click(function(){
    $("#acor-info2").slideToggle();
    $("#acor-info1").slideUp(() => {
        $(".minus1").hide();
        $(".plus1").show();
    });
    $("#acor-info3").slideUp(() => {
        $(".minus3").hide();
        $(".plus3").show();
    });
    count++
    if (count % 2 == 0) {
        $(".plus2").show();
        $(".minus2").hide();
    } else {
        $(".plus2").hide();
        $(".minus2").show();
    }
});
$("#acor-box3").click(function(){
    $("#acor-info3").slideToggle();
    $("#acor-info2").slideUp(() => {
        $(".minus2").hide();
        $(".plus2").show();
    });
    $("#acor-info1").slideUp(() => {
        $(".minus1").hide();
        $(".plus1").hide();
    });
    count++
    if (count % 2 == 0) {
        $(".plus3").show();
        $(".minus3").hide();
    } else {
        $(".plus3").hide();
        $(".minus3").show();
    }
});

window.addEventListener ("scroll", function(){
    let topnawbar = document.querySelector(".header");
    topnawbar.classList.toggle("sticky", scrollY > 15);
    let logo = document.getElementById('pern-logo');
    if (window.scrollY > 15) {
        logo.setAttribute('src', 'https://goldeyes.net/pera/images/logos/logo_01_dark.svg');
    }
    else {
        logo.setAttribute('src', 'https://goldeyes.net/pera/images/logos/logo_01_white.svg');
    }
})

ScrollReveal ({
    reset: false,
    distance: '100px',
    duration: 1000
});
ScrollReveal().reveal('.low-reveal',{delay: 0, origin: 'bottom'});
ScrollReveal().reveal('.med-reveal',{delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.pro-reveal',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.max-reveal',{delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.ultra-reveal',{delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.left-reveal',{delay: 100, origin: 'left'});
ScrollReveal().reveal('.left2-reveal',{delay: 200, origin: 'left'});
ScrollReveal().reveal('.left3-reveal',{delay: 300, origin: 'left'});
