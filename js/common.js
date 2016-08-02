$(document).ready(function() {

    $('.head_block_1 .cur_country').on('click', function() {
        $(this).toggleClass('open');
        $('.choose_country_list').slideToggle(200).toggleClass('hidden');
    });



(function($) {
$(function() {

	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

});
})(jQuery);



    $(".fancybox").fancybox();

});
