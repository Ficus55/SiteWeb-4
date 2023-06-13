//menu
document.querySelector(".header__burger").addEventListener("click", () => {
    document.querySelector(".header-body").classList.toggle('open');
    document.body.classList.toggle('disable-scoll');
});

//close mobile menu when link is cliсked
document.querySelector('.menu__list').addEventListener("click", (event) => {
    if (event.target.closest('.menu__link')) {
        document.querySelector(".header-body").classList.remove('open');
        document.body.classList.remove('disable-scoll');
    }
});

document.querySelector(".close__menu__body").addEventListener("click", () => {
    document.querySelector(".header-body").classList.toggle('open');
    document.body.classList.toggle('disable-scoll');
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        document.querySelector(".header-body").classList.add('header-body-scroll');
    } else if (window.pageYOffset < 50) {
        document.querySelector(".header-body").classList.remove('header-body-scroll');
    }
});


//copyright
document.querySelector(".footer-copyright span").innerHTML = new Date().getFullYear();


// section-featured-products-slider

const featuredProducts = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 10,
    breakpoints: {
        1024: {
            perView: 3
        },
        768: {
            perView: 2
        },
        425: {
            perView: 1
        }
    }
};

new Glide('.glide-featured-products', featuredProducts).mount()


// most-popular-slider

const mostPopularProducts = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 10,
    breakpoints: {
        1024: {
            perView: 3
        },
        768: {
            perView: 2
        },
        425: {
            perView: 1
        }
    }
};

new Glide('.glide-most-popular', mostPopularProducts).mount()



// you-may-like-slider

const youMayLike = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 10,
    breakpoints: {
        1024: {
            perView: 3
        },
        768: {
            perView: 2
        },
        425: {
            perView: 1
        }
    }
};

new Glide('.you-may-like', youMayLike).mount()



//smooth scroll
let menuLinks = document.querySelectorAll(".menu__link, .header__logo");
if (menuLinks.length > 0) {
    menuLinks.forEach((event) => {
        event.addEventListener("click", (elem) => {
            let link = elem.target.getAttribute('href');
            elem.preventDefault();
            if (link === '#home' || elem.target.closest('.header__logo')) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            } else if (link !== '' && document.querySelector(link)) {
                let scrollToObject = document.querySelector(link).getBoundingClientRect().top + window.pageYOffset - document.querySelector(".header-body").offsetHeight;
                window.scrollTo({
                    top: scrollToObject,
                    left: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
}























