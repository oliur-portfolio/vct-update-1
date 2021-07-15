// CountUp Effect
jQuery(document).ready(function ($) {
    $(".counter").counterUp({
        delay: 10,
        time: 100000,
    });
});

// Animated Hamburger Icon
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change");
    });
});

// GSAP Banner Text Animation
var banner = gsap.timeline();

banner.from(".banner-content h1", {
    duration: 1.5,
    autoAlpha: 0,
    delay: 0.4,
}),
    banner.from(
        ".banner-content h1 span",
        {
            duration: 1.5,
            autoAlpha: 0,
        },
        "-=0.8"
    );

// GSAP Section Title Animation
gsap.registerPlugin(ScrollTrigger);

var stitle = gsap.timeline({
    scrollTrigger: {
        trigger: ".green-tec-area",
        start: "0 70%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

stitle.from(".section-title h3", {
    duration: 0.6,
    autoAlpha: 0,
});

// GSAP Single Box 1 Image Animation
gsap.registerPlugin(ScrollTrigger);

var boximg1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-box .single-box-image",
        start: "-200 50%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boximg1.from(".first-box .single-box-image", {
    duration: 0.6,
    y: 100,
    autoAlpha: 0,
});

// GSAP Single Box 2 Image Animation
gsap.registerPlugin(ScrollTrigger);

var boximg2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-box .single-box-image",
        start: "-200 50%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boximg2.from(".second-box .single-box-image", {
    duration: 0.6,
    x: 100,
    autoAlpha: 0,
});

// GSAP Single Box 3 Image Animation
gsap.registerPlugin(ScrollTrigger);

var boximg1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".last-box .single-box-image",
        start: "-200 50%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

boximg1.from(".last-box .single-box-image", {
    duration: 0.6,
    y: 100,
    autoAlpha: 0,
});

// GSAP Center Details Text Animation
gsap.registerPlugin(ScrollTrigger);

var centertext = gsap.timeline({
    scrollTrigger: {
        trigger: ".center-details-area",
        start: "-80 70%",
        end: "50% top",
        toggleActions: "play none none reverse",
        markers: false,
    },
});

centertext.from(".center-details-content h5", {
    duration: 0.6,
    autoAlpha: 0,
    y: 100,
}),
    centertext.from(
        ".center-details-content p",
        {
            duration: 0.6,
            autoAlpha: 0,
        },
        "-=0.1"
    ),
    centertext.from(
        ".center-details-content .learn-btn a",
        {
            y: 25,
            duration: 0.2,
            autoAlpha: 0,
        },
        "-=0.5"
    );
