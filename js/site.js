    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
        
        $(window).on('scroll',function(){
        	isScrolledIntoView();
        });

    });
    
    var isScrolledIntoView = function() {
    	$('.first-view-animate').each(function() {
    		if(!$(this).hasClass('animated pulse')) {
    			var docViewTop = $(window).scrollTop();
    			var docViewBottom = docViewTop + $(window).height();
    			var elementTop = $(this).offset().top;
    			var elementBottom = elementTop + $(this).height();
    			if( (elementBottom <= docViewBottom) && (elementTop >= docViewTop) ) {
    				$(this).addClass('animated pulse');
    			}
    		}
    	});
    };

    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });