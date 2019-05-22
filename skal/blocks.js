$(document).ready(function () {

    if (!is_mobile) {

        $('.akcii .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.akcii .navigation',
            vertical: true
        });
        $('.akcii .navigation').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.akcii .slider',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            vertical: true
        });
    }
    $(".lazyload").Lazy();

    $(document).on('click', '.quantity button', function () {
        var $parent = $(this).parent('.quantity__container'),
            id = $parent.data('id'),
            type = $(this).data('type'),
            current_count = parseInt($parent.find('input').val());

        clearTimeout(quantityTimer[id]);
        if (current_count < 1) {
            current_count = 1;
        }

        if (type == '+') {
            current_count++;
        }
        else {
            current_count--;
        }

        if (current_count < 1) {
            current_count = 1;
        }

        $parent.find('input').val(current_count);

        quantityTimer[id] = setTimeout('setQuantity('+id+')', 500);

    });

    $(document).on('keyup', '.quantity input', function () {
        var $parent = $(this).parent('.quantity__container'),
            id = $parent.data('id'),
            current_count = parseInt($parent.find('input').val());

        clearTimeout(quantityTimer[id]);
        if (current_count < 1) {
            current_count = 1;
        }

        $parent.find('input').val(current_count);
        quantityTimer[id] = setTimeout('setQuantity('+id+')', 500);
    });
});