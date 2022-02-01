// Navigation

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Parallax

const parallax = document.getElementById('header');

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
})

// Scroll to top button

const btnScrollToTop = document.getElementById('btn-scroll-to-top');

btnScrollToTop.addEventListener('click', function() {
    window.scrollTo(0, 0);
})

// Experience bar graph

// setTimeout(function start() {
//     $('.bar').each(function(i) {
//         let $bar = $(this);
//         $(this).append('<span class="count"></span>')
//         setTimeout(function() {
//             $bar.css('width', $bar.attr('data-percent'));
//         }, i * 100);
//     });

//     $('.count').each(function() {
//         $(this).prop('Counter', 0).animate({
//             Counter: $(this).parent('.bar').attr('data-percent')
//         }, {
//             duration: 2000,
//             easing: 'swing',
//             step: function(now) {
//                 $(this).text(Math.ceil(now) + ' years');
//             }
//         });
//     });

// }, 500)



setTimeout(function start() {
    $('.bar').each(function() {
        let bar = $(this);
        $(this).append('<span class="count"></span>')
        setTimeout(function() {
            bar.css('width', bar.attr('data-percent'));
        });
    });

    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).parent('.bar').attr('data-percent')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now) + ' years');
            }
        });
    });

}, 1000)