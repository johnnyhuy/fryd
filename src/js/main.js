import ScrollMagic from 'scrollmagic';
import 'animation.gsap'
import {TweenMax, Power2, TimelineLite} from 'gsap';

const controller = new ScrollMagic.Controller();

$(document).ready(() => {
    // Chicken animations
    var chickenTween = new TimelineMax()
        .to(".farm__cloud_right", 1, {right: 300})
        .to(".farm__cloud_left", 1, {left: 300}, 0)
        .to(".chicken__eye", 1, {top: 60});
    var sadChickenTween = new TimelineMax()
        .to(".chicken__eye", 1, {top: 20, left: 70});
    var normChickenTween = new TimelineMax()
        .to(".chicken__eye", 1, {top: 100, left: 58})
        .to(".machine__dial", 1, {rotation: 45});
    
    new ScrollMagic.Scene({triggerElement: ".chicken__trigger", duration: 300})
        .setTween(chickenTween)
        .setPin(".chicken__image")
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".chicken__trigger", duration: 550, offset: 400})
        .setTween(sadChickenTween)
        .setPin(".chicken__image")
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".chicken__trigger", duration: 700, offset: 1100})
        .setTween(normChickenTween)
        .setPin(".chicken__image")
        .addTo(controller);

    // Chicken box animations
    new ScrollMagic.Scene({triggerElement: ".chicken-box__trigger", duration: 800})
        .setPin(".chicken-box__image")
        .addTo(controller);
    new ScrollMagic.Scene({triggerElement: ".chicken-box__trigger", duration: 900, offset: 900})
        .setPin(".truck__image")
        .addTo(controller);

    // Cooked chicken animations
    var smellAnimation = new TimelineMax()
        .to(".smell", .8, {top: 100, repeat: -1, yoyo: true});
    var smellTween = new TimelineMax()
        .to(".smell__image", 1, {opacity: 1});
    
    smellAnimation.play();

    new ScrollMagic.Scene({triggerElement: ".chicken-cooked__trigger", duration: 270, offset: 100})
        .setTween(smellTween)
        .setPin(".chicken-cooked__image")
        .addTo(controller);
})