$(document).ready(function() {

    $('.head_block_1 .cur_country').on('click', function() {
        $(this).toggleClass('open');
        $('.choose_country_list').slideToggle(200).toggleClass('hidden');
    });







    $(".fancybox").fancybox();

});
