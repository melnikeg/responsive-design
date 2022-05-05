function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg();

// $('.icon-menu').click(function(event) {
//     $(this).toggleClass('active');
//     $('.menu__body').toggleClass('active');
//     $('body').toggleClass('lock');
// });

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
}

//SLIDER
if($('.slider__body').length>0){
    $('.slider__body').slick({
        //autoplay: true,
        //infinite: false,
        dots: true,
        arrows: false,
        accessibility: false,
        sliderToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    });
 }

 const menuLinks = document.querySelectorAll('.menu__link[data-goto]'); 
 if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('active')) {
                document.body.classList.remove('lock');
                iconMenu.classList.remove('active');
                menuBody.classList.remove('active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
 }


// const windowScrollTop;
const btnUp = document.querySelector('.btn-up');
window.addEventListener('scroll', function() {
    const windowScrollTop = pageYOffset;
    if (windowScrollTop > 575) {
        btnUp.classList.add('active');
    } else {
        btnUp.classList.remove('active');
    }
});
