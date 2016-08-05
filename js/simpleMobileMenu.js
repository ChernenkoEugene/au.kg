(function ( $ ) {
 
    $.fn.smplmnu = function(options) {

    	//settings
    	var settings = $.extend({
            // These are the defaults.
            background: "#363D48",
            speed: "0.5s"
        }, options );


    	//vars
      	var hittrigger = $(this);
    	var clspos = hittrigger.next('ul');
    	var menutextcolor = hittrigger.next('ul li a');
    	var overllay = '<div class="overally"></div>';

    	//manipulating dom
    	hittrigger.addClass('inrwrpr');
    	clspos.addClass('inrwrpr');
    	$('.inrwrpr').wrapAll( "<div class='navwrp'>" );
    	   clspos.prepend('<a href="javascript:void(0)"><div class="menu_logo mnuclose" style="background: url(img/menu_logo.png) no-repeat 50%;"></div></a>');
    	$('body').prepend(overllay);
    	
 		
 		//functions and methods
        hittrigger.click(function(event){
			hittrigger.next('ul').addClass('mobimenu');
		    $('.mobimenu').addClass('mnuopn');
		    $('.mnuopn').css({
		    	'z-index': '9999',
		    	'background-color': settings.background,
		    	'transition': settings.speed
		    });
		    $('.mnuopn a').css({
		    	'color': settings.textColor
		    });
		    $('.overally').addClass('ovrActv');
           // $('.main_logo').css({
           //  'visibility': 'hidden'
           //  });
           $('.mobile_icons').addClass('open');
           $('.left_menu_button').addClass('open');
            $(".main_logo").addClass('open');
           
		});

        $('.mnuclose').click(function(event) {
			hittrigger.next('ul').removeClass('mnuopn');
			$('.overally').removeClass('ovrActv');
            		});

		$('.overally').click(function(event) {
			clspos.removeClass('mnuopn');
			$(this).removeClass('ovrActv');
            // $('.main_logo, .left_menu_button').css({
            // 'visibility': 'visible'
            // });
              $('.mobile_icons').removeClass('open');
            $('.left_menu_button').removeClass('open');
            $(".main_logo").removeClass('open');
		});

		return this				
 
    };
 
}( jQuery ));