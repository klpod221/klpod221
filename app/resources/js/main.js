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

    // section change event
    $('.change-section-btn').click(function () {
        if ($(this).hasClass('active')) return;

        const section = $(this).attr('data-section');
        const $section = $(`[data-section="${section}"]`);

        $('.change-section-btn').removeClass('active');
        $(this).addClass('active');

        anime({
            targets: '.content-item.active',
            clipPath: [
                { value: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0 },
                { value: 'polygon(0 0, 0 0, 0 100%, 0 100%)', duration: 500 },
            ],
            opacity: [
                { value: 1, duration: 0 },
                { value: 0, duration: 500 },
            ],
            easing: 'easeInOutQuad',
            complete: function () {
                $('.content-item').removeClass('active');
                $section.addClass('active');

                anime({
                    targets: '.content-item.active',
                    clipPath: [
                        { value: 'polygon(0 0, 0 0, 0 100%, 0 100%)', duration: 0 },
                        { value: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 500 },
                    ],
                    opacity: [
                        { value: 0, duration: 0 },
                        { value: 1, duration: 500 },
                    ],
                    easing: 'easeInOutQuad',
                });
            }
        });

        const $noClickJacking = $('#_no-clickjacking-0');
        $noClickJacking.removeAttr('id');
    });

    // contact form on click submit-btn
    $('#contact-form').submit(function (e) {
        e.preventDefault();

        const $form = $(this);
        const $submitBtn = $form.find('button[type="submit"]');
        const $submitBtnWrapper = $submitBtn.parent();

        const $name = $form.find('input[name="name"]');
        const $email = $form.find('input[name="email"]');
        const $message = $form.find('textarea[name="message"]');

        const name = $name.val();
        const email = $email.val();
        const message = $message.val();

        if (name === '' || email === '' || message === '') {
            $name.addClass('error');
            return;
        }

        const validateEmail = function (email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (!validateEmail(email)) {
            $email.addClass('error');
            return;
        }

        $submitBtn.attr('disabled', true);
        $submitBtn.text('Sending...');

        $submitBtnWrapper.addClass('btn-loading');

        $.ajax({
            url: 'https://formspree.io/f/xrgvqqel',
            method: 'POST',
            data: {
                name: name,
                email: email,
                message: message,
            },
            success: function (data) {
                $submitBtn.text('Sent!');
                showToast('Sent!', 'Message sent successfully!', 'success', 3000);
                $name.val('');
                $email.val('');
                $message.val('');
            },
            error: function (data) {
                $submitBtn.text('Error!');
                showToast('Error!', 'Message sent failed!', 'error', 3000);
                console.error(data);
            },
            complete: function () {
                setTimeout(function () {
                    $submitBtn.text('Send Message');
                    $submitBtnWrapper.removeClass('btn-loading');
                    $submitBtn.attr('disabled', false);
                }, 3000);
            }
        });
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

                showToast('Welcome!', 'Have a nice day!', 'success', 3000);

                setTimeout(() => {
                    $('.loading').css('display', 'none');
                }, 1000);
            }, 400);
        }
    }, getRandomArbitrary(100, 400));
}

/**
 * Show toast
 * @param {string} title
 * @param {string} message
 * @param {string} type
 * @param {number} duration
 */
function showToast(title, message, type, duration) {
    const toast = new Notify({
        status: type,
        title: title,
        text: message,
        effect: 'slide',
        speed: 400,
        customClass: '',
        customIcon: '',
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: duration,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
}
