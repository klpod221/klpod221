import $ from 'jquery';

import anime from 'animejs/lib/anime.es.js';

import Swiper, { Autoplay, EffectFade } from 'swiper';
import 'swiper/scss';
import "swiper/scss/effect-fade";

import Typewriter from 'typewriter-effect/dist/core';

$(document).ready(async function () {
    console.log('Hi, I am klpod221!');
    console.log('This is my personal website.');
    console.log('You can find source code of this website at:');
    console.log('http://github.com/klpod221/klpod221');
    console.log('Thanks for visiting my website!');
    console.log('Have a nice day!');

    // Load function 
    await tsParticlesGenerate();
    fakeLoading();

    // Swiper with fade effect
    const swiper = new Swiper('.swiper', {
        modules: [Autoplay, EffectFade],
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });

    // Typewriter effect
    const typewriter = new Typewriter('#typewriter', {
        loop: true,
        delay: 75,
        autoStart: true,
        strings: [
            'Front-end Developer',
            'Back-end Developer',
            'Freelancer',
            'Web Developer',
            'Programmer',
        ]
    });
});

/**
 * tsParticles generate
 **/
async function tsParticlesGenerate() {
    tsParticles.load("tsparticles", {
        background: {
            color: {
                value: "#0b0f17",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#f59e0b",
            },
            links: {
                color: "#f59e0b",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 20,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    });
}

/**
 * Fake loading
 */
function fakeLoading() {
    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const loadingDots = anime({
        targets: ".loading-dots .dot",
        translateY: [
            { value: -10, duration: 500, easing: "easeInOutQuad" },
            { value: 0, duration: 500, easing: "easeInOutQuad" }
        ],
        delay: anime.stagger(200),
        loop: true
    });

    loadingDots.play();

    let progress = 0;
    const fakeLoaderInterval = window.setInterval(function () {
        const $lp = $('.loading-progress');
        progress = progress + getRandomArbitrary(10, 25)
        $lp.css('transform', `translateX(${progress}%)`);

        if (progress >= 75) {
            window.clearInterval(fakeLoaderInterval);
            $lp.css('transform', 'translateX(100%)');
            setTimeout(() => {
                $('.loading').css('transform', 'translateY(calc(100% + 10px))');
                loadingDots.pause();

                setTimeout(() => {
                    $('.loading').css('display', 'none');
                }, 1000);
            }, 400);
        }
    }, getRandomArbitrary(100, 400));
}
