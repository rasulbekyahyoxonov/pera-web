window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('spinner_wrapper');
    loader.style.opacity = 0;
    setTimeout(() => {
        loader.style.display = 'none';
    }, 300);
})
// Header sticky
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

// Header links active state on scroll
const li = document.querySelectorAll('.scrollto');
const sec = document.querySelectorAll('section');

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll', activeMenu);

// Hamburger menu
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

let progresBar = document.querySelector('.progres-bar'),
    progresBar2 = document.querySelector('.progres-bar2'),
    progresBar3 = document.querySelector('.progres-bar3'),
    progresBar4 = document.querySelector('.progres-bar4'),
    progresValue = document.querySelector('.progres-value'),
    progresValue2 = document.querySelector('.progres-value2'),
    progresValue3 = document.querySelector('.progres-value3'),
    progresValue4 = document.querySelector('.progres-value4');

let startValue = 0,
    startValue2 = 0,
    startValue3 = 0,
    startValue4 = 0,
    endvalue = 74,
    endvalue2 = 82,
    endvalue3 = 77,
    endvalue4 = 96,
    speed = 25;

setTimeout(() => {
    let progres = setInterval(() => {
        startValue++
        progresValue.textContent = `${startValue}`;
        progresBar.style.background = `conic-gradient(var(--Colored) ${parseInt(startValue * 3.6)}deg, rgba(204, 204, 204, 0.47) 0deg)`
        if (startValue == endvalue) {
            clearInterval(progres);
        }
    }, speed);
    let progres2 = setInterval(() => {
        startValue2++
        progresValue2.textContent = `${startValue2}`;
        progresBar2.style.background = `conic-gradient(var(--Colored) ${parseInt(startValue2 * 3.6)}deg, rgba(204, 204, 204, 0.47) 0deg)`
        if (startValue2 == endvalue2) {
            clearInterval(progres2);
        }
    }, speed);
    let progres3 = setInterval(() => {
        startValue3++
        progresValue3.textContent = `${startValue3}`;
        progresBar3.style.background = `conic-gradient(var(--Colored) ${parseInt(startValue3 * 3.6)}deg, rgba(204, 204, 204, 0.47) 0deg)`
        if (startValue3 == endvalue3) {
            clearInterval(progres3);
        }
    }, speed);
    let progres4 = setInterval(() => {
        startValue4++
        progresValue4.textContent = `${startValue4}`;
        progresBar4.style.background = `conic-gradient(var(--Colored) ${parseInt(startValue4 * 3.6)}deg, rgba(204, 204, 204, 0.47) 0deg)`
        if (startValue4 == endvalue4) {
            clearInterval(progres4);
        }
    }, speed);
},600)



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
        $(".plus1").show();
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

ScrollReveal ({
    reset: false,
    distance: '70px',
    duration: 1000
});
ScrollReveal().reveal('.low',{delay: 0, origin: 'bottom'});
ScrollReveal().reveal('.med',{delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.pro',{delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.max',{delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.ultra',{delay: 400, origin: 'bottom'});
ScrollReveal().reveal('.left',{delay: 100, origin: 'left'});
ScrollReveal().reveal('.left2',{delay: 200, origin: 'left'});
ScrollReveal().reveal('.left3',{delay: 300, origin: 'left'});
ScrollReveal().reveal('.right',{delay: 100, origin: 'right'});
ScrollReveal().reveal('.right2',{delay: 200, origin: 'right'});
ScrollReveal().reveal('.right3',{delay: 300, origin: 'right'});


let cateBtn = document.querySelector('.cate-btn');
let cateBtn2 = document.querySelector('.cate-btn2');
let cateBtn3 = document.querySelector('.cate-btn3');
let cateBtn4 = document.querySelector('.cate-btn4');
let cateBtn5 = document.querySelector('.cate-btn5');
cateBtn.addEventListener('click', () => {   
    cateBtn.setAttribute('active', '');
    document.querySelector('.cate-btn2').removeAttribute('active','');
    document.querySelector('.cate-btn3').removeAttribute('active','');
    document.querySelector('.cate-btn4').removeAttribute('active','');
    document.querySelector('.cate-btn5').removeAttribute('active','');
})
cateBtn2.addEventListener('click', () => {   
    cateBtn2.setAttribute('active', '');
    document.querySelector('.cate-btn').removeAttribute('active','');
    document.querySelector('.cate-btn3').removeAttribute('active','');
    document.querySelector('.cate-btn4').removeAttribute('active','');
    document.querySelector('.cate-btn5').removeAttribute('active','');
})
cateBtn3.addEventListener('click', () => {   
    cateBtn3.setAttribute('active', '');
    document.querySelector('.cate-btn').removeAttribute('active','');
    document.querySelector('.cate-btn2').removeAttribute('active','');
    document.querySelector('.cate-btn4').removeAttribute('active','');
    document.querySelector('.cate-btn5').removeAttribute('active','');
})
cateBtn4.addEventListener('click', () => {   
    cateBtn4.setAttribute('active', '');
    document.querySelector('.cate-btn').removeAttribute('active','');
    document.querySelector('.cate-btn2').removeAttribute('active','');
    document.querySelector('.cate-btn3').removeAttribute('active','');
    document.querySelector('.cate-btn5').removeAttribute('active','');
})
cateBtn5.addEventListener('click', () => {   
    cateBtn5.setAttribute('active', '');
    document.querySelector('.cate-btn').removeAttribute('active','');
    document.querySelector('.cate-btn2').removeAttribute('active','');
    document.querySelector('.cate-btn3').removeAttribute('active','');
    document.querySelector('.cate-btn4').removeAttribute('active','');
})



document.getElementById('select1').addEventListener('click', () => {
    document.querySelector('.cre-img').style.width = '100%';
    document.querySelector('.dsg-img').style.width = 0;
    document.querySelector('.wp-img').style.width = 0;
    document.querySelector('.js-img').style.width = 0;
    document.querySelector('.react-img').style.width = 0;
})
document.getElementById('select2').addEventListener('click', () => {
    document.querySelector('.dsg-img').style.width = '100%';
    document.querySelector('.cre-img').style.width = 0;
    document.querySelector('.wp-img').style.width = 0;
    document.querySelector('.js-img').style.width = 0;
    document.querySelector('.react-img').style.width = 0;
})
document.getElementById('select3').addEventListener('click', () => {
    document.querySelector('.wp-img').style.width = '100%';
    document.querySelector('.cre-img').style.width = 0;
    document.querySelector('.dsg-img').style.width = 0;
    document.querySelector('.js-img').style.width = 0;
    document.querySelector('.react-img').style.width = 0;
})
document.getElementById('select4').addEventListener('click', () => {
    document.querySelector('.js-img').style.width = '100%';
    document.querySelector('.cre-img').style.width = 0;
    document.querySelector('.dsg-img').style.width = 0;
    document.querySelector('.wp-img').style.width = 0;
    document.querySelector('.react-img').style.width = 0;
})
document.getElementById('select5').addEventListener('click', () => {
    document.querySelector('.react-img').style.width = '100%';
    document.querySelector('.cre-img').style.width = 0;
    document.querySelector('.dsg-img').style.width = 0;
    document.querySelector('.wp-img').style.width = 0;
    document.querySelector('.js-img').style.width = 0;
})