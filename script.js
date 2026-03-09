$(document).ready(function() {
    // Scroll event for navbar and scroll-up button
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Show/hide scroll up button
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // Applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Cloud DevOps Engineer", "GCP Expert", "Infrastructure Coder", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Cloud DevOps Engineer", "GCP Expert", "Infrastructure Coder", "Problem Solver"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Scroll Reveal Animations
    const sr = ScrollReveal({
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: false // Set to true if you want animations to repeat on scroll up
    });

    sr.reveal('.home-content, .about-content .right, .skills-content .left', { delay: 200, origin: 'left' });
    sr.reveal('.about-content .left, .skills-content .right, .contact-content .right', { delay: 200, origin: 'right' });
    sr.reveal('.projects-content .card, .contact-content .left', { delay: 200, origin: 'bottom', interval: 200 });
});