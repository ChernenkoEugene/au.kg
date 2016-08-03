$(document).ready(function() {
    //choose_ccountry
    $('.head_block_1 .cur_country').on('click', function() {
        $(this).toggleClass('open');
        $('.choose_country_list').slideToggle(200).toggleClass('hidden');
    });

    //mobile_menus
    if ($(window).width() < 1040) {
        $(".categ_list li a").html("");
    }
    $(window).resize(function() {
        if ($(window).width() < 1040) {
            $(".categ_list li a").html("");
        }
    });


    //mobile_search_form
    if ($(window).width() < 1040) {
        $(".main_block_search_form label:nth-child(3)").insertBefore("#m_search_how_much");
    }

    $(window).resize(function() {
        if ($(window).width() < 1040) {
            $(".label_howm").insertBefore("#m_search_how_much");
        }
    });
    if ($(window).width() < 480) {
        $(".main_block_search_form .label_where").insertBefore("#m_search_where");
    }

    $(window).resize(function() {
        if ($(window).width() < 480) {
            $(".main_block_search_form .label_where").insertBefore("#m_search_where");
        }
    });
    //mobile_review
    if ($(window).width() < 900) {
        $('.review .review_nick').each(function() {
            $(this).siblings(".review_title").insertAfter(this);
        });
    }
    //personal_cabinet_menu
    if ($(window).width() < 1040) {
        $(".head_block_3 .user_link").insertBefore(".head_block_3 .my_panel");
        $(".head_block_3 .sale_btn").insertAfter(".head_block_3 .my_panel");
    }

    $(window).resize(function() {
        if ($(window).width() < 1040) {
            $(".head_block_3 .user_link").insertBefore(".head_block_3 .my_panel");
            $(".head_block_3 .sale_btn").insertAfter(".head_block_3 .my_panel");
        }
    });
    //search
    if ($(window).width() < 1040) {

        $(".head_search_form .search__submit").insertAfter(".select_search select");
    }

    //mobile_icons
    $('.icon_man').on('click', function() {
        $('.head_block_3').slideToggle(300);
    });
    $('.icon_search').on('click', function() {
        $('.search_block').slideToggle(300);
    });
    //tabs
    (function($) {
        $(function() {

            $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
            });

        });
    })(jQuery);


    //banner_mnu_block
    $('.banner_mnu_block .mnu_list li').on('click', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
    });






    //Countdown Clock
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);

        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);


            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 13 * 60 * 60 * 1000);
    initializeClock('clockdiv1', deadline);
    initializeClock('clockdiv2', deadline);
    initializeClock('clockdiv3', deadline);
    initializeClock('clockdiv4', deadline);
    initializeClock('clockdiv5', deadline);
    initializeClock('clockdiv6', deadline);








    //fancybox
    $(".fancybox").fancybox();

});
