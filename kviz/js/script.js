$(document).ready(function(){

    var  quiz = {};

    $('.quiz-offers--1 a').on('click', function () {
        $('.quiz-offers--1').hide();
        $('.quiz-offers--2').css('height', '215px');
        return false;
    });

    $('.quiz-offers--2 a').on('click', function () {
        $('.quiz-offers--2').hide();
        $('.quiz, .quiz__step--1').show();
        return false;
    });

    $('.quiz__step .quiz__item').on('click', function () {
        $('.quiz__step input').prop('checked', false);
        $(this).find('input').prop('checked', true);
        $('.quiz__step .quiz__item').removeClass('quiz__item--select');
        $(this).addClass('quiz__item--select');
        $(this).parents('.quiz__step').find('.quiz__next').addClass('quiz__next--active');

        var valueStep = $(this).find('span').text();
        var numberStep = $(this).parents('.quiz__step').data('step');
        quiz['step'+numberStep] = valueStep;
        console.log(quiz);
        return false;
    });

    $('.quiz__step--2 .quiz__item').on('click', function () {
        if($('.quiz__step--2').find('.quiz__item:nth-child(2) input').prop('checked')) {
            $('.quiz__step--2').find('.quiz__offers-item--help').addClass('quiz__offers--show');
            $('.quiz__step--2').find('.quiz__offers-wrap').addClass('quiz__offers--show');
        } else {
            $('.quiz__step--2').find('.quiz__offers-item--help').removeClass('quiz__offers--show');
            $('.quiz__step--2').find('.quiz__offers-wrap').removeClass('quiz__offers--show');
        }
        return false;
    });

    $('.quiz__step--4 .quiz__item').on('click', function () {
        if($('.quiz__step--4').find('.quiz__item:nth-child(1) input').prop('checked')) {
            $('.quiz__step--4').find('.quiz__offers-item--grate').addClass('quiz__offers--show');
            $('.quiz__step--4').find('.quiz__offers-wrap').addClass('quiz__offers--show');
        } else {
            $('.quiz__step--4').find('.quiz__offers-item--grate').removeClass('quiz__offers--show');
            $('.quiz__step--4').find('.quiz__offers-wrap').removeClass('quiz__offers--show');
        }
        return false;
    });



    $(document).on('click', '.quiz__next--active', function () {

        if ( ($(this).parents('.quiz__step').data('step') == 4) && ($('.quiz__step--4').find('.quiz__item:nth-child(1) input').prop('checked')) ) {
            console.log('test');
            $(this).parents('.quiz__step').hide();
            $(this).parents('.quiz').find('.quiz__order--attachment').show();
        } else if ( ($(this).parents('.quiz__step').data('step') == 7) ) {
            $(this).parents('.quiz__step').hide();
            $(this).parents('.quiz').find('.quiz__order--text').show();
        } else {
            $(this).parents('.quiz__step').hide();
            var stepNum = $(this).parents('.quiz__step').data('step') + 1;
            var classStep = '.quiz__step--' + stepNum;
            $(classStep).show();
        }

    });

    $('.quiz__prev').on('click', function () {

        var stepNum = $(this).parents('.quiz__step').data('step') - 1;

        if (stepNum >= 1) {
            $(this).parents('.quiz__step').hide();
            var classStep = '.quiz__step--' + stepNum;
            console.log(classStep);
            $(classStep).show();
        }
    });

});