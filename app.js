// Locomotive js - Smooth Scroling

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

// GSAP to animate
gsap.from(".nLink", {
    stagger: 0.1,
    y: 10,
    ease: Power2,
    opacity: 0,
});
//Shery JS to animate images

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

//Animation HOME Section
gsap.from(".anim2", {
    y: 50,
    stagger: 0.5,
    opacity: 0,
    ease: Expo,
    duration: 1,
});

// Image Animations

Shery.imageEffect("#imgAndText img", {
    style: 2,
});

Shery.imageEffect("#susImageWrapper img", {
    style: 1,
    config: {
        a: { value: 3.22, range: [0, 30] },
        b: { value: -0.95, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.6666666666666666 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: false },
        maskVal: { value: 1, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: true },
        onMouse: { value: 0 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
});

gsap.from("#imgAndText img", {
    z: -7,
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
});

Shery.imageEffect(".imgeff", {
    style: 3,
    console: {
        uFrequencyX: { value: 12, range: [0, 100] },
        uFrequencyY: { value: 12, range: [0, 100] },
        uFrequencyZ: { value: 10, range: [0, 100] },
        geoVertex: { range: [1, 64], value: 32 },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.7083333388522821 },
        gooey: { value: false },
        infiniteGooey: { value: false },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1, range: [0.1, 5] },
        durationIn: { value: 1.5, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.43, range: [1, 5] },
        scrollType: { value: 0 },
        noEffectGooey: { value: true },
        onMouse: { value: 1 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2] },
        discard_threshold: { value: 0.5, range: [0, 1] },
        antialias_threshold: { value: 0.002, range: [0, 0.1] },
        noise_height: { value: 0.5, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
});

Shery.imageEffect("#bImage", {
    style: 5,
    config: {
        a: { value: 0.25, range: [0, 30] },
        b: { value: -0.8, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 2.6356916578669485 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 2.39, range: [1, 15] },
        durationOut: { value: 0.55, range: [0.1, 5] },
        durationIn: { value: 1.54, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.2, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 1 },
        noise_speed: { value: 0.66, range: [0, 10] },
        metaball: { value: 0.2, range: [0, 2], _gsap: { id: 31 } },
        discard_threshold: { value: 0.45, range: [0, 1] },
        antialias_threshold: { value: 0.01, range: [0, 0.1] },
        noise_height: { value: 0.1, range: [0, 2] },
        noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
});

document.querySelector("#fText button").addEventListener("mouseover", () => {
    gsap.to("#future video", {
        opacity: 1,
        duration: 1,
        ease: Power4,
    });
});

document.querySelector("#fText button").addEventListener("mouseleave", () => {
    gsap.to("#future video", {
        opacity: 0,
        duration: 1,
        ease: Power4,
    });
});
