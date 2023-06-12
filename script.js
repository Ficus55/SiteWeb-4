//menu
document.querySelector(".header__burger").addEventListener("click", () => {
    document.querySelector(".header-body").classList.toggle('open');
    document.body.classList.toggle('disable-scoll');
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



























