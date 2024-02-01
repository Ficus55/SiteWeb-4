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


// homepage-slider

const homepageSlider = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 9000,
    gap: 0
};

if (document.querySelector(".glide-homepage-slider")) {
    new Glide(".glide-homepage-slider", homepageSlider).mount()
}


//showrooms-first-slider

const showroomsFirstSlider = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 7000,
    gap: 0
};

if (document.querySelector(".glide-showrooms-first-slider")) {
    new Glide(".glide-showrooms-first-slider", showroomsFirstSlider).mount()
}


//showrooms-second-slider

const showroomsSecondSlider = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 10000,
    gap: 0
};

if (document.querySelector(".glide-showrooms-second-slider")) {
    new Glide(".glide-showrooms-second-slider", showroomsSecondSlider).mount()
}


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

if (document.querySelector(".glide-featured-products")) {
    new Glide(".glide-featured-products", featuredProducts).mount()
}


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

if (document.querySelector(".glide-most-popular")) {
    new Glide(".glide-most-popular", mostPopularProducts).mount()
}



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

if (document.querySelector(".you-may-like")) {
    new Glide(".you-may-like", youMayLike).mount()
}


//footer accordion
document.querySelectorAll(".anchor-link").forEach((element) => {
    element.addEventListener("click", () => {
        element.closest(".footer-link").classList.toggle("is-open");
    });
});



//shop collection input
if (document.querySelector(".shop-collection-input")) {
    let shopSearchInput = document.querySelector(".shop-collection-input");
    let shopSearchClear = document.querySelector(".shop-collection-clear");

    shopSearchInput.addEventListener("input", () => {
        if (shopSearchInput.value.length > 0) {
            shopSearchClear.classList.add("active-clear");
        }
    });

    shopSearchClear.addEventListener("click", () => {
        shopSearchInput.value = "";
        shopSearchClear.classList.toggle("active-clear");
    });
}



//Form validation footer email
function emailTest(item) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(item.value);
}

if (document.querySelector(".footer-form")) {

    let contactForm = document.forms.footerForm;
    let contactFormEmail = contactForm.email;

    contactForm.addEventListener("submit", (event) => {
        if (emailTest(contactFormEmail)) {
            if (!document.querySelector(".footer-form").nextElementSibling.closest(".error")) {
                document.querySelector(".footer-form").insertAdjacentHTML('afterend', `<div class="error">Enter valid email please! <div>Example: email-name@domain.name</div></div>`);
            }
            event.preventDefault();
        }
    });


    //Remove warning on input footer email
    contactFormEmail.addEventListener("input", () => {
        if (contactForm.nextElementSibling.closest(".error")) {
            contactForm.nextElementSibling.closest(".error").remove();
        }
    });

}

if (document.querySelector(".newsletter-form")) {

    let newsletterForm = document.forms.newsletterForm;
    let newsletterFormEmail = newsletterForm.newsletterEmail;

    newsletterForm.addEventListener("submit", (event) => {
        if (emailTest(newsletterFormEmail)) {
            if (!document.querySelector(".newsletter-form-block").lastElementChild.closest(".error")) {
                document.querySelector(".newsletter-form-block").insertAdjacentHTML('beforeend', `<div class="error">Enter valid email please! <div>Example: email-name@domain.name</div></div>`);
            }
            event.preventDefault();
        }
    });

    //Remove warning on input newsletter-form email

    newsletterFormEmail.addEventListener("input", () => {
        if (document.querySelector(".newsletter-form-block").lastElementChild.closest(".error")) {
            document.querySelector(".newsletter-form-block").lastElementChild.closest(".error").remove();
        }
    });

}





//smooth scroll
// let menuLinks = document.querySelectorAll(".menu__link, .header__logo");
// if (menuLinks.length > 0) {
//     menuLinks.forEach((event) => {
//         event.addEventListener("click", (elem) => {
//             let link = elem.target.getAttribute('href');
//             elem.preventDefault();
//             if (link === '#home' || elem.target.closest('.header__logo')) {
//                 window.scrollTo({
//                     top: 0,
//                     left: 0,
//                     behavior: 'smooth'
//                 });
//             } else if (link !== '' && document.querySelector(link)) {
//                 let scrollToObject = document.querySelector(link).getBoundingClientRect().top + window.pageYOffset - document.querySelector(".header-body").offsetHeight;
//                 window.scrollTo({
//                     top: scrollToObject,
//                     left: 0,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// }























