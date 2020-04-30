/*scroll to & change border for navbar*/
let navLinks = Array.from(document.querySelectorAll(".nav-link"));

navLinks.forEach(navLink => {

    navLink.addEventListener("click", function (e) {
        $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);

        /*change border for navbar (click)*/
        // if (e.target == this) {
        //     navLinks.forEach(navLink => {
        //         navLink.classList.remove("active");
        //     });
        //     e.target.classList.add("active");
        // }
    })

    /*change border for navbar (scroll)*/
    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        let aHref = $(navLink).attr("href");
        let secOffset = $(aHref).offset().top;

        if (windowScroll >= secOffset) {
            navLinks.forEach(navLink => {
                navLink.classList.remove("active");
            });
            navLink.classList.add("active");
            // let s =  $(navLink).attr("href", aHref);

            // console.log(aHref);
        }
    });
});





/*navbar btn & list(side bar)*/
var navbarBtn = document.querySelector(".navbar-btn");
var navbarBtnIcon = document.querySelector("#toggle");
var navbarList = document.querySelector(".navbar-list");

navbarBtn.addEventListener("click", function () {
    if (navbarBtnIcon.classList.contains("fa-bars")) {
        navbarBtnIcon.classList.replace("fa-bars", "fa-times");
        navbarList.classList.add("show-nav");

    } else {
        navbarBtnIcon.classList.replace("fa-times", "fa-bars");
        navbarList.classList.remove("show-nav");
    }
})





/*modal & slider*/
let items = Array.from(document.querySelectorAll(".item"));
let imgs = Array.from(document.querySelectorAll(".item img"));
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelector("#modalClose");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");

let counter = 0;
// open modal
for (let i = 0; i < items.length; i++) {

    items[i].addEventListener("click", function (e) {
        let imgSrc = e.currentTarget.firstElementChild.src;

        counter = items.indexOf(e.currentTarget);

        overlay.classList.add("show");
        overlay.firstElementChild.classList.add("show");
        // overlay.style.transform = "scale(1)";
        // overlay.firstElementChild.style.transform = "scale(1)";

        overlay.firstElementChild.style.backgroundImage = "url(" + imgSrc + ")";
    })
}

prevBtn.addEventListener("click", function () {

    counter--;
    if (counter < 0) {
        counter = imgs.length - 1;
    }
    overlay.firstElementChild.style.backgroundImage = "url(" + imgs[counter].src + ")";
})
// }

nextBtn.addEventListener("click", function () {

    counter++;
    if (counter > imgs.length - 1) {
        counter = 0;
    }
    overlay.firstElementChild.style.backgroundImage = "url(" + imgs[counter].src + ")";
})

// close modal
overlay.addEventListener("click", function (e) {
    if (e.target == this)
        overlay.classList.remove("show");
})








/*team slider*/
let teamSlides = Array.from(document.querySelectorAll(".sec-slider"));
let teamSliderBtns = Array.from(document.querySelectorAll("#team .section-inner span"));

teamSliderBtns.forEach(sliderBtn => {
    sliderBtn.addEventListener("click", function () {
        let btnIndex = teamSliderBtns.indexOf(sliderBtn);                

        teamSlides.forEach(secSlide => {
            let secIndex = teamSlides.indexOf(secSlide);
            secSlide.style.display = "none";
            
            if (secIndex == btnIndex) {
                // console.log(sliderBtn);

                teamSliderBtns.forEach(sliderBtn => {
                    sliderBtn.classList.remove("s-active");
                });
                secSlide.style.display = "block";
                sliderBtn.classList.add("s-active");
            }
        });
    })
});














/*top btn*/
let topBtn = document.querySelector(".top-btn");

topBtn.addEventListener("click", function () {
    $("html,body").animate({
        scrollTop: '0'
    }, 1000);

    navLinks.forEach(navLink => {
        navLink.classList.remove("active");
    });
    navLinks[0].classList.add("active");
})

$(window).scroll(function () { 
    let wScroll = $(window).scrollTop();
    if (wScroll > 50) {
        $(topBtn).fadeIn(500);
    }
    else {
        $(topBtn).fadeOut(500);
    }
});