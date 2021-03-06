var is_mobile = false;
$(document).ready(function(e) {
    site.init();
});
var site =  {

    init: function() {
        "use strict";
        $('#scroll_top').click(function(){

            $('body, html').animate( { scrollTop: $('#top').offset().top }, 200 );
            return false;
        });


        site.resizeWindowInit();
        site.initTabs();

        $(window).resize(function(){
            site.resizeWindowInit();
        });

        $(window).scroll(function(){

            var scroll_top = $(window).scrollTop()

            if(scroll_top < 50) {
                if (!$('#scroll_top').hasClass('hidden'))
                    $('#scroll_top').addClass('hidden');
            }
            else {
                if ($('#scroll_top').hasClass('hidden'))
                    $('#scroll_top').removeClass('hidden');
            }

            /*if (!is_mobile) {

                var height = $('#panel').height() + $('header.header').height();

                if (scroll_top > height) {

                    if (!$('header.header').hasClass('fixed')) {
                        $('header.header').css('top', $('header.header').height() * -1);
                        setTimeout("$('header.header').addClass('fixed');$('header.header').css('top', 0);", 300);
                    }

                }
                else {
                    if ($('header.header').hasClass('fixed')) {
                        $('header.header').css('top', $('header.header').height() * -1);
                        setTimeout("$('header.header').removeClass('fixed');$('header.header').css('top',0);", 300);
                    }
                }
            }*/
        });
    },

    resizeWindowInit: function() {

        if ($(window).width() <= 768)
            is_mobile = true;

        if (is_mobile)
        {
            $('#burger_container, .sidebar__close a').on('click', function () {
                $('body').toggleClass('menu-opened');
                $('.sidebar').toggleClass('active');
                $('.sidebar_overlay').toggleClass('active');
                return false;
            });

            $('.sidebar').touchwipe({
                wipeLeft: function () {
                    $('.sidebar').removeClass('active');
                    $('.sidebar_overlay').removeClass('active');
                    $('body').removeClass('menu-opened');
                },
                preventDefaultEvents: false
            });
            $('.sidebar_overlay').touchwipe({
                wipeLeft: function () {
                    $('.sidebar').removeClass('active');
                    $('.sidebar_overlay').removeClass('active');
                    $('body').removeClass('menu-opened');
                },
                preventDefaultEvents: false
            });
        }
        else {

        }

    },

    errorPhones: 0,
    initPhoneMask: function(obj) {

        "use strict";

        if (!is_mobile) {

            $(obj).inputmask('+7 (999) 999-99-99', {"placeholder": "+7 (___) ___-__-__"});

            $(obj).on('focus', function () {
                site.errorPhones = 0;
                if ($(obj).hasClass('input-error')) {
                    $(obj).removeClass('input-error');
                }
            });
            $(obj).on('blur', function () {

                var value = $(this).val();
                var validate_phone_mask = '^[+][0-9] [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}$';
                var reg = new RegExp(validate_phone_mask);

                if (!reg.test(value)) {
                    $(obj).addClass('input-error');
                    site.errorPhones++;
                }
                else if ($(obj).hasClass('input-error')) {
                    $(obj).removeClass('input-error');
                    site.errorPhones++;
                }
            });
        }
    },

    checkPhones: function(form) {

        if (form !== undefined)
        {
            if ($(form).has('.input-error').length > 0)
            {
                alert('Укажите телефон в правильном формате');
                return false;
            }
        }
        else if (site.errorPhones > 0)
        {
            alert('Укажите телефон в правильном формате');
            return false;
        }

        return true;
    },

    gallery_inits: {},

    initTabs: function () {
        $('.tabs_container .tabs li a').click(function(){

            if ($(this).attr('data-code') !== undefined) {
                var $container = $(this).parent('li').parent('ul').parent('li').parent('ul').parent('div');
                var _this = $(this).parent('li').parent('ul').parent('li').children('a');
            }
            else {
                var $container = $(this).parent('li').parent('ul').parent('div');
                var _this = $(this);

                if ($(_this).hasClass('active'))
                    return false;
            }
            var id = $(_this).attr('href').substr(1);

            $container.find('.tabs li.active').removeClass('active');
            $(_this).parent('li').addClass('active');

            $container.find('.tabs_content_container .active').removeClass('active');
            $container.find('.tabs_content_container #tab-'+ id).addClass('active');

            if ($container.find('.tabs_content_container #tab-'+ id).attr('data-slider') == "1") {
                site.startGallery(id, 1);
            }
            else if ($container.find('.tabs_content_container #tab-'+ id).attr('data-slider') == "2") {
                site.startGallery(id, 2);
            }

            if ($(this).attr('data-code') !== undefined) {
                site.openInfoSection($(this).attr('data-code'));
            }

            return false;
        });

        $('.info_element_list .info_element_container .name a').click(function () {
            site.openInfoSection($(this).attr('href').substr(1));

            return false;
        });
    },

    startGallery: function(id, type) {
        var obj;

        if (site.gallery_inits[id] === undefined)
        {
            if (type == 1)
                obj = '#tab-'+ id +' .is_slider';
            else if (type == 2)
                obj = '#tab-'+ id +' > div';

            if (type == 1) {
                $(obj).slick({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true,
                    dots: true,
                    autoplay: false,
                    focusOnSelect: false,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false
                            }
                        }
                    ]
                });
            }
            else if (type == 2) {
                $(obj).slick({
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    dots: false,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 5000,
                    speed: 1000,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                dots: false
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                dots: false
                            }
                        },
                        {
                            breakpoint: 520,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false
                            }
                        }
                    ]
                });
            }
            site.gallery_inits[id] = 1;
        }
        else
        {
            $(obj).slick('unslick');

            site.gallery_inits[id] = undefined;
            site.startGallery(id);
        }
    }
};

if (window.site === undefined)
    window.site = site;

function checkPrivancy(obj, id) {
    if ($(obj).is(':checked'))
        $('#'+ id).show();
    else
        $('#'+ id).hide();
}

function textSpoilerInit() {
    if (is_mobile) {
        $.each($('.spoiler_container'), function (i, v) {
            if ($(this).attr('data-height') !== undefined && $(this).attr('data-height').length > 0) {
                $(this).height($(this).attr('data-height') / 2);
            }
        });
    }
}
$(document).ready(function () {
    textSpoilerInit();
});
function textSpoiler(obj) {

    var $container = $(obj).parents('.spoiler_container');
    var $text = $container.children('.spoiler_text');

    var height = 150;
    if ($container.attr('data-height') !== undefined && $container.attr('data-height').length > 0) {
        height = parseInt($container.attr('data-height'));
        if (is_mobile)
            height = height / 2;
    }

    if ($container.hasClass('opened')) {
        $container.animate({height: height}, 'fast');
        $container.removeClass('opened');
        $(obj).html('Подробнее &raquo;');
    }
    else {

        var h = $text.outerHeight();
        h+= 10;

        $container.animate({height: h}, 'fast');
        $container.addClass('opened');
        $(obj).html('&laquo; Скрыть');
    }

    return false;
}