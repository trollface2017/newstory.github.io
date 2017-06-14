$(document).ready(function(){
    $('.main').parallax({
        speed : 0.25
    });

    $('.work').parallax({
        speed : 0.65
    });
    $('.bottom').parallax({
        speed : 0.7
    });

    $('.calc-2').on('click', function(){
        $('.calc-sw').removeClass('left');
        $('.calc-sw').addClass('right');
        $('.for-people').removeClass('active');
        $('.for-fact').addClass('active');
    });

    $('.calc-1').on('click', function(){
        $('.calc-sw').removeClass('right');
        $('.calc-sw').addClass('left');
        $('.for-fact').removeClass('active');
        $('.for-people').addClass('active');

    });

    $('.send').on('click', function(){
        $(this).parents('form').submit();
    });

    $('form').submit(function() {
        $(this).isCorrectRequest();
        return false;
    });


    $('.work-steps').waypoint(function () {
        animation_run(0);
    }, {
        triggerOnce: true,
        offset: '80%'
    });

    $('.types-slider-left').carouFredSel({
        prev: {
            button: '.left-slider-wrap .prev-slide',
            onBefore: function(){

            }
        },
        next: {
            button: '.left-slider-wrap .next-slide',
            onBefore: function(){

            }
        },
        align: 'center',
        auto: {
            play: false,
            timeoutDuration: 20000
        },
        easing: "swing",
        scroll: {
            items: 1,
            duration: 300,
            timeoutDuration: 10000,
            onAfter: function(){
                var slide = $('.types-slider-left li').eq(0);
                var d_name = slide.data('name');
                var d_1 = slide.data('val-1');
                var d_2 = slide.data('val-2');
                var d_3 = slide.data('val-3');
                var d_4 = slide.data('val-4');
                var d_5 = slide.data('val-5');
                var d_6 = slide.data('val-6');
                var d_7 = slide.data('val-7');
                var d_pr_o = slide.data('price-old');
                var d_pr_n = slide.data('price-new');
                $('.left-val-9 span').text(d_pr_n);
                $('.left-val-8 span').text(d_pr_o);
                $('.left-val-7').text(d_7);
                $('.left-val-6').text(d_6);
                $('.left-val-5').text(d_5);
                $('.left-val-4').text(d_4);
                $('.left-val-3').text(d_3);
                $('.left-val-2').text(d_2);
                $('.left-val-1').text(d_1);
                $('.left-product-name').text(d_name);

                /*if(d_name == $('.right-product-name').text()){
                    $('.right-slider-wrap .next-slide').trigger('click');
                }*/
            }
        }
    });


    $('.types-slider-right').carouFredSel({
        prev: {
            button: '.right-slider-wrap .prev-slide',
            onBefore: function(){

            }
        },
        next: {
            button: '.right-slider-wrap .next-slide',
            onBefore: function(){

            }
        },
        align: 'center',
        auto: {
             play: false,
             timeoutDuration: 20000
         },
        easing: "swing",
        scroll: {
            items: 1,
            duration: 300,
            timeoutDuration: 10000,
            onAfter: function(){
                var slide = $('.types-slider-right li').eq(0);
                var d_name = slide.data('name');
                var d_1 = slide.data('val-1');
                var d_2 = slide.data('val-2');
                var d_3 = slide.data('val-3');
                var d_4 = slide.data('val-4');
                var d_5 = slide.data('val-5');
                var d_6 = slide.data('val-6');
                var d_7 = slide.data('val-7');
                var d_pr_o = slide.data('price-old');
                var d_pr_n = slide.data('price-new');
                $('.right-val-9 span').text(d_pr_n);
                $('.right-val-8 span').text(d_pr_o);
                $('.right-val-7').text(d_7);
                $('.right-val-6').text(d_6);
                $('.right-val-5').text(d_5);
                $('.right-val-4').text(d_4);
                $('.right-val-3').text(d_3);
                $('.right-val-2').text(d_2);
                $('.right-val-1').text(d_1);
                $('.right-product-name').text(d_name);

                /*if(d_name == $('.left-product-name').text()){
                    $('.left-slider-wrap .next-slide').trigger('click');
                }*/
            }
        }
    });

    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {

        if(!/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
            niceScrollInit();
        }

        $('*[data-appear="fade-in"]').each(function () {

            var appearDelay = $(this).data('appear-delay') || 0;
            var appearDirection = $(this).data('appear-direction') || 'none';


            $(this).css({ opacity: '0', 'visibility': 'hidden' });
            if ($(this).css('position') == 'absolute') {
                switch (appearDirection) {
                    case 'top': $(this).css({ top: -$(this).height() / 2 + 'px' }); break;
                    case 'right': $(this).css({ right: -$(this).width() / 2 + 'px' }); break;
                    case 'bottom': $(this).css({ bottom: -$(this).height() / 2 + 'px' }); break;
                    case 'left': $(this).css({ left: -$(this).width() / 2 + 'px' }); break;
                }
            } else {
                switch (appearDirection) {
                    case 'top': $(this).css({ position: 'relative', top: -$(this).height() / 2 + 'px' }); break;
                    case 'right': $(this).css({ position: 'relative', right: -$(this).width() / 2 + 'px' }); break;
                    case 'bottom': $(this).css({ position: 'relative', bottom: -$(this).height() / 2 + 'px' }); break;
                    case 'left': $(this).css({ position: 'relative', left: -$(this).width() / 2 + 'px' }); break;
                }
            }

            $(this).waypoint(function (direction) {
                $(this).css({ 'visibility': 'visible' });

                if (direction == 'down') {
                    switch (appearDirection) {
                        case 'top': $(this).delay(appearDelay).animate({ 'opacity': 1, 'top': 0 }, 800); break;
                        case 'right': $(this).delay(appearDelay).animate({ 'opacity': 1, 'right': 0 }, 800); break;
                        case 'bottom': $(this).delay(appearDelay).animate({ 'opacity': 1, 'bottom': 0 }, 800); break;
                        case 'left': $(this).delay(appearDelay).animate({ 'opacity': 1, 'left': 0 }, 800); break;
                        default: $(this).delay(appearDelay).animate({ 'opacity': 1 }, 800);
                    }
                    $(this).waypoint('destroy');
                }
            }, {
                offset: function () {
                    switch (appearDirection) {
                        case 'top': return $.waypoints('viewportHeight') - $(this).height(); break;
                        case 'bottom': return $.waypoints('viewportHeight'); break;
                        default: return $.waypoints('viewportHeight') - Math.min($(this).height() / 2, 150); break;
                    }
                }
            });
        });
    }



    $('.companies-slider').bxSlider({
        mode: 'horizontal',
        prevSelector: $('.companies .prev-slide'),
        nextSelector: $('.companies .next-slide'),
        nextText: '',
        prevText: '',
        pager: false,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        slideWidth: 212,
        auto: true,
        pause: 6000,
        easing: 'ease-in-out'
    });

    $('.reviews-slider').bxSlider({
        mode: 'horizontal',
        nextText: '',
        prevText: '',
        pager: true,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        auto: true,
        pause: 12000,
        easing: 'ease-in-out'
    });

    $('.modal-open').fancybox({
        autoSize: true,
        type: 'inline',
        closeBtn: false,
        padding: 0,
        scrolling: 'no',
        beforeShow: function() {
            $(".fancybox-skin").css("background-color", "transparent");
        },
        afterClose: function() {

        }
    }).click(function() {
        if (typeof($(this).data('from')) !== 'undefined') {

        }
    });

    $('.modal-close, .modal-content .close-btn').click(function() {
        $.fancybox.close();
        return false;
    });

    var step = $.animateNumber.numberStepFactories.separator(' ');

    $('.calc-btn').on('click', function(){

        if($('.calc-form-wrap').isCorrectArea() != false){
            var switch_val = 0;
            if($('.for-people').hasClass('active')){
                switch_val = 0;
            }else{
                switch_val = 1;
            }

            var max_width = getRandomInt(305, 310);

            var calc_val_max;
            $('.calc-section').each(function(){

                var calc_val = Math.round(calc_cost(switch_val, $(this).data('type'), $('.area').val()));
                if($(this).data('type') == 0){
                    calc_val_max = calc_val;
                    $(this).find('.calc-bar').width(max_width);
                }else{
                    var calc_width = Math.round((calc_val * max_width)/calc_val_max);
                    $(this).find('.calc-bar').width(calc_width);
                }

                $(this).find('.calc-val').animateNumber(
                    {
                        number: calc_val,
                        numberStep: step
                    },
                    1500
                );
            });
        }

    });

    $('.calculate').waypoint(function() {
        $('.calc-section').each(function(){
            $(this).find('.calc-bar').width($(this).find('.calc-bar').data('width'));
            $(this).find('.calc-val').animateNumber(
                {
                    number: $(this).find('.calc-val').data('val'),
                    numberStep: step
                },
                1500
            );
        });
    },{
        triggerOnce: true,
        offset: '50%'
    });

});

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calc_cost(switch_val, type, data){

    //Коэфициенты сверху-вниз на шкале соответствуют слева на право ниже в массивах
    var koef_people = [168.71, 130.88, 67.43, 76.58, 63.72, 50.87]; //Коефициэнты для населения
    var koef_people_287 = 141.62; //Коефициэнт для населения для газа, есди площадь больше 100 кв.м.
    var koef_fact = [179.06, 91.8, 61.99, 45.29, 53.64, 60.05]; //Коефициэнты для предприятий
    var rez;

    if(switch_val == 0){
        if(data >= 119 && type == 1){
            rez = koef_people_287 * data;
        }else{
            rez = koef_people[type] * data;
        }

    }else{
        rez = koef_fact[type] * data;
    }
    return rez;
}

function animation_run(icon){
    setTimeout(function(){
        $('.work-icon-inside').removeClass('hover');
        $('.work-icon-inside').eq(icon).addClass('hover');
        if(icon < 4){
            icon = icon + 1;
        }else{
            icon = 0;
        }
        animation_run(icon);
    }, 1300);
}

function niceScrollInit(){
    $("html").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 45,
        cursorwidth: 10,
        cursorborder: 0,
        cursorcolor: '#e6790f',
        cursorborderradius: 2,
        autohidemode: true,
        horizrailenabled: false
    });

    $('html').addClass('no-overflow-y');
}

(function($) {
    $.fn.isCorrectRequest = function() {
        this.find('input[type=text]').removeClass('correct incorrect');
        var nameInput = $(this).find('[name = name]');
        var telephoneInput = $(this).find('[name = phone]');

        telephoneInput.val($.trim(telephoneInput.val()));

        if(nameInput.val() != undefined){
            if(nameInput.val().length === 0)
            {
                nameInput.addClass('incorrect');
                nameInput.focus();
                return false;
            }
        }

        if(telephoneInput.val() != undefined){
            if(telephoneInput.val().length === 0)
            {
                telephoneInput.addClass('incorrect');
                telephoneInput.focus();
                return false;
            }
        }

        var form = $(this);
        var formData = form.serialize();
        var url = form.attr('action');
        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            processData: false,
            dataType: 'text',
            context: this,
            async: false,
            success: function(data)
            {
                if (data === 'OK') {
                    window.location.href = 'thanks.html';
                }
            },
            error: function()
            {
                alert('Ошибка отправки данных. Попробуйте еще раз.');
            }
        });
    };
})(jQuery);

(function($) {
    $.fn.isCorrectArea = function() {

        $('input[name=area]').removeClass('correct incorrect');

        var areaInput = $('input[name=area]');
        areaInput.val($.trim(areaInput.val()));

        if(areaInput.val() != undefined){
            if(areaInput.val().length === 0)
            {
                areaInput.addClass('incorrect');
                areaInput.focus();
                return false;
            }
        }
    };
})(jQuery);