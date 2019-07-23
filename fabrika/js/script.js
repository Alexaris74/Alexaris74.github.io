$(document).ready(function () {

    var is_mobile = false;

    if ($(window).width() <= 768) {
        is_mobile = true;
    }

    if (is_mobile) {
        $('.advantages-hexagon').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });

        $('.face-us__list').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });

        var clientsItem = $(".our-clients__item");
        for(var i = 0; i < clientsItem.length; i+=2) {
            clientsItem.slice(i, i+2).wrapAll("<div class='our-clients__item--mobile'></div>");
        };

        $('.our-clients__list').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });

    }

    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    if ($(window).width() >= 768) {
        var show = true;
        var countbox = ".advantages-moment";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height(); // Высота окна браузера
            var d_height = $(document).height(); // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $('.advantages-moment__count').css('opacity', '1');
                $('.advantages-moment__count').spincrement({
                    duration: 5200
                });

                show = false;
            }
        });

        $('.advantages-moment__count').css('opacity', '0');
    };


    if($('.products__list').length) {
        $('.products__list').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            appendArrows: $('.slick-custom__arrow--products'),
            prevArrow: '<button type="button" class="slick-custom__prev"></button>',
            nextArrow: '<button type="button" class="slick-custom__next"></button>',

            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    };

    if($('.stock__list').length) {
        $('.stock__list').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            appendArrows: $('.slick-custom__arrow--stock'),
            prevArrow: '<button type="button" class="slick-custom__prev"></button>',
            nextArrow: '<button type="button" class="slick-custom__next"></button>',

            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    };

    if($('.certificates__list').length) {
        $('.certificates__list').slick({
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: true,
            appendArrows: $('.slick-custom__arrow--certificates'),
            prevArrow: '<button type="button" class="slick-custom__prev"></button>',
            nextArrow: '<button type="button" class="slick-custom__next"></button>',
            asNavFor: '.certificates__preview',

            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false
                    }
                }
            ]
        });
    };

    if($('.certificates__preview').length) {
        $('.certificates__preview').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.certificates__list',
            focusOnSelect: true,
            infinite: false
        });
    }

    if($('.slick-slider').length) {
        $('.slick-slider').addClass('slick-custom');
    };

    if($('.leaders__after').length) {
        $('.leaders__after').twentytwenty({
            no_overlay: true,
            default_offset_pct: 0.6,
            move_slider_on_hover: true
        });
    };

    // $('.certificates__prev-item').hover(function() {
    //     $('.certificates__list').slick('slickGoTo',$(this).index());
    // });

});