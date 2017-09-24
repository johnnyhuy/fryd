import ScrollMagic from 'scrollmagic';
import 'animation.gsap'
import {TweenMax, Power2, TimelineLite} from 'gsap';

const controller = new ScrollMagic.Controller();

$(document).ready(() => {
    var cloudTween = new TimelineMax()
        .to(".farm__cloud_right", 1, {right: 300})
        .to(".farm__cloud_left", 1, {left: 300}, 0)

    new ScrollMagic.Scene({triggerElement: ".chicken__trigger", duration: 300})
        .setTween(cloudTween)
        .setPin(".chicken__image")
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".chicken__trigger", duration: 550, offset: 400})
        .setPin(".chicken__image")
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".chicken__trigger", duration: 700, offset: 1100})
        .setPin(".chicken__image")
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: ".chicken-box__trigger", duration: 800})
        .setPin(".chicken-box__image")
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".chicken-box__trigger", duration: 900, offset: 900})
        .setPin(".truck__image")
        .addTo(controller);
})