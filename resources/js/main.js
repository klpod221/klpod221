import $ from 'jquery';

$(function() {
    console.log('Hi, I\'m klpod221! I\'m a web developer');
    console.log('You can find me on GitHub:')
    console.log('https://github.com/klpod221');
    console.log(`
     _   _               _ ___ ___ _
    | |_| |_ __  ___  __| |_  )_  ) |
    | / / | '_ \\/ _ \\/ _\` |/ / / /| |
    |_\\_\\_| .__/\\___/\\__,_/___/___|_|
          |_|
    `);

    // mobile menu
    const toggleMenu = () => {
        if ($('.mb-menu-wrapper').hasClass('active')) {
            $('.mb-menu-wrapper').slideDown(200);
            return;
        } 
        $('.mb-menu-wrapper').slideUp(200);
    };

    $('.hamburger').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mb-menu-wrapper').toggleClass('active');

        toggleMenu();
    });

    // when click on a link in the mobile menu, close the menu
    $('.mb-menu-wrapper a').on('click', function() {
        $('.hamburger').removeClass('active');
        $('.mb-menu-wrapper').removeClass('active');
        
        toggleMenu();
    });

    // when click outside the mobile menu, close the menu
    $(document).on('click', function(e) {
        if ($(e.target).closest('header').length) {
            return;
        }
        
        $('.hamburger').removeClass('active');
        $('.mb-menu-wrapper').removeClass('active');

        toggleMenu();
    });

    // when resize the window, close the mobile menu
    $(window).on('resize', function() {
        if ($(window).width() > 768) {
            $('.hamburger').removeClass('active');
            $('.mb-menu-wrapper').removeClass('active');

            toggleMenu();
        }
    });

    // when scroll the window, close the mobile menu
    $(window).on('scroll', function() {
        $('.hamburger').removeClass('active');
        $('.mb-menu-wrapper').removeClass('active');

        toggleMenu();
    });

    // count years of experience from 2021
    const countYears = () => {
        const date = new Date();
        const currentYear = date.getFullYear();

        return currentYear - 2021;
    }

    $('.experience').text(countYears());
});