(function ($) {


  
  "use strict";
  
  var maxW = 979;


  
 
  
      /* -------------------------------------------
  https://github.com/louisremi/jquery-smartresize
   * ------------------------------------------- */

  (function($) {

    var $event = $.event,
        $special,
        resizeTimeout;

    $special = $event.special.debouncedresize = {
      setup: function() {
        $( this ).on( "resize", $special.handler );
      },
      teardown: function() {
        $( this ).off( "resize", $special.handler );
      },
      handler: function( event, execAsap ) {
        // Save the context
        var context = this,
            args = arguments,
            dispatch = function() {
              // set correct event type
              event.type = "debouncedresize";
              $event.dispatch.apply( context, args );
            };

        if ( resizeTimeout ) {
          clearTimeout( resizeTimeout );
        }

        execAsap ?
          dispatch() :
        resizeTimeout = setTimeout( dispatch, $special.threshold );
      },
      threshold: 150
    };

  })(jQuery);
  
  

  function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};
  
  /*
  on_resize(function() {
    // handle the resize event here
  
  });
  */
  
  /*
  function initShadowbox() {
    var myApp = {
        SBAdjust: function() {
            if (Shadowbox.hasNext())
                jQuery('#sb-info').addClass('sb-touch');
    
            jQuery(document).on('swipeleft', '.sb-touch', function (e) {
                e.preventDefault();
                Shadowbox.next();
            });
            jQuery(document).on('swiperight', '.sb-touch', function (e) {
                e.preventDefault();
                Shadowbox.previous();
            });
        }  
    }

*/	
  /* Shadowbox Init  with swipe  */ 
  
    /*
    Shadowbox.init({
      overlayOpacity: 1,
      counterType: "default",
      continuous: true,
      handleOversize: "resize",
      onOpen: myApp.SBAdjust,
      onClose: function() {
      jQuery('.sb-touch').removeClass('sb-touch');
      }
      }); 
  
  }
	*/
  
 	// MM Custom 
  /*
  jQuery(document).ready(function() {
    $(".fancybox").fancybox();
	var $isotopegridinit = $('.list-collections').isotope({
      // options
      itemSelector: '.list-collections__item',
      // layoutMode: 'fitRows'
      percentPosition: true,
      transitionDuration: 0,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.list-collections__item'
      }
      });
    $isotopegridinit.imagesLoaded().progress( function() {
      $isotopegridinit.isotope('layout');
    });
  });

  */
  
  function initnavigation() { 
    

    $('.sidebar-nav-link-list-mm.level-1 li.active').each(function(){
		$(this).parent().addClass('active');
    });
    
    
    
    /* *********** START "Open menue with hover"  *********** */ 
    
    
    /*  ***********  START "Use hoverIntent PlugIn" ***********  */ 
    /*
    $(".sidbar-nav-link_mm_li").hoverIntent({
        over: makeTall,
        out: makeShort,
		timeout: 500
    });
    */
    /*
    function makeTall () {
      if (! $(this).hasClass('active')){
        $( this ).children('ul').delay( 100 ).slideDown('1500,easeInOutQuad');
      }
    };
     
    function makeShort ()  {
      if (! $(this).hasClass('active')){
        $( this ).children('ul').delay( 100 ).slideUp('1500,easeInOutQuad');
      }
    };

	*/
    
    /*  ***********  END "Use hoverIntent PlugIn" ***********   */ 
    
    /*  ***********  START "Without hoverintent Plugin"  ***********  */ 
    
    /*   
    
    $( '.sidbar-nav-link_mm_li' ).mouseenter(
      
        function() {
          if (! $(this).hasClass('active')){
          	$( this ).children('ul').delay( 300 ).slideDown('1500,easeInOutQuad');
          }
        }
      
    );
    
    $( '.sidbar-nav-link_mm_li' ).mouseleave(
      function() {
        if (! $(this).hasClass('active')){
        	$( this ).children('ul').delay( 300 ).slideUp('1500,easeInOutQuad');
        }
      }
    );	
  */        
    
   /*  *********** END  "Without hoverintent Plugin"  */ 
    
    
   /* *********** END "Open menue with hover"  *********** */ 
    
  }

  
  
		
  
  function initBoxHeight() {

    on_resize(function() {
      divheight();
    });

    jQuery(window).imagesLoaded()
    .done( function( instance ) {
      divheight();
    });
    
    function divheight() {
      var $viewportwidth = jQuery( window ).width();


      if ($viewportwidth >= 768) { 
        $('.block__item__image.renderheight').each(function(){
          var BlockWidth = parseInt(jQuery(this).children('.block__item-inner').children('.img-link-content-wrapper').width());
          jQuery(this).css('height', parseInt(BlockWidth * 1.418));
        });
        $('.section__item__image.renderheight').each(function(){
          var BlockWidth = parseInt(jQuery(this).width());
          jQuery(this).css('height', parseInt(BlockWidth * 1.418));
        });
        $('.block__item__image.noheight').each(function(){
          var BlockWidth = parseInt(jQuery(this).children('.block__item-inner').children('.img-link-content-wrapper').width());
          jQuery(this).css('height', 'auto');
        });
        $('.section__item__image.noheight').each(function(){
          var BlockWidth = parseInt(jQuery(this).width());
          jQuery(this).css('height', 'auto');
        });
        
        /*
        $('.top-mega-nav-link-list-mm').each(function(){
          var MenuImageWidth = parseInt(jQuery(this).children('.top-mega-nav-link_mm_li').width());
          jQuery(this).children('.top-mega-nav-link_mm_li').children('.top-mega-nav-link_mm').children('span').children('.menu-image').css('height', parseInt(MenuImageWidth * 1.48));
        });
        */
      }
    
      
      if ($viewportwidth < 768) { 
        $('.block__item__image.jsrenderheight-mobile').each(function(){
          var BlockWidth = parseInt(jQuery(this).children('.block__item-inner').children('.img-link-content-wrapper').width());
          jQuery(this).css('height', parseInt(BlockWidth * 1.418));
        });
        $('.block__item__image.no-mobile-js-height').each(function(){
          var BlockWidth = parseInt(jQuery(this).children('.block__item-inner').children('.img-link-content-wrapper').width());
          jQuery(this).css('height', 'auto');
          jQuery(this).find('img').removeClass( 'centered');
        });

        $('.section__item__image.jsrenderheight-mobile').each(function(){
          var BlockWidth = parseInt(jQuery(this).width());
          jQuery(this).css('height', parseInt(BlockWidth * 1.418));
        });
        $('.section__item__image.no-mobile-js-height').each(function(){
          var BlockWidth = parseInt(jQuery(this).width());
          jQuery(this).css('height', 'auto');
        });
      }

      
      jQuery('.home-action-teaser-item-img-link').each(function(){

        var homeImgHeightActionTeaser = parseInt(jQuery(this).find('img').outerWidth());

        if ( $_viewportwidth >= 768 )  {
          jQuery(this).css('height', parseInt(homeImgHeightActionTeaser * 1));
        }
        else {
          jQuery(this).css('height', parseInt(homeImgHeightActionTeaser * 1));
        }
      });


      //  ******** neue Variante: higher column sets height for both columns **********

      $('.feature-row').each(function(){
        jQuery(this).children('.feature-row__text').css('height', 'auto');
        jQuery(this).children('.feature-row__item-image').css('height', 'auto');
      });

      if ($viewportwidth >= 768) {
        $('.feature-row').each(function(){

          var ImageHeight = parseInt(jQuery(this).children('.feature-row__item-image').height());
          var TextHeight = parseInt(jQuery(this).children('.feature-row__text').height());

          if (ImageHeight > TextHeight ) {
            jQuery(this).children('.feature-row__text').css('height', ImageHeight );
          }
          else {
            jQuery(this).children('.feature-row__item-image').css('height', TextHeight );
          };
        });
      }
      else {
        $('.feature-row').each(function(){
          jQuery(this).children('.feature-row__text').css('height', 'auto');
          jQuery(this).children('.feature-row__item-image').css('height', 'auto');
        });
      };


      $('.block__item-inner--image_with_text_story .tab-and-up').each(function(){
        jQuery(this).children('.text-wrapper').css('height', 'auto');
        jQuery(this).children('.img-wrapper').css('height', 'auto');
      });

      if ($viewportwidth >= 600) {
        $('.block__item-inner--image_with_text_story .tab-and-up').each(function(){

          var ImageHeight = parseInt(jQuery(this).children('.img-wrapper').children('.img-wrapper-inner').height());
          var TextHeight = parseInt(jQuery(this).children('.text-wrapper').children('.text-wrapper-inner').height());

          if (ImageHeight > TextHeight ) {
            jQuery(this).children('.text-wrapper').css('height', ImageHeight );
          }
          else {
            jQuery(this).children('.img-wrapper').css('height', TextHeight );
            jQuery(this).children('.text-wrapper').css('height', TextHeight );
          };
        });
      }
      else {
        $('.feature-row').each(function(){
          jQuery(this).children('.text-wrapper').css('height', 'auto');
          jQuery(this).children('.img-wrapper').css('height', 'auto');
        });
      };
      
      $('.collection__item.product-item').each(function(){
        var Product_Grid_Image_Height = parseInt(jQuery(this).children('.product-item__inner').children('.product-item__image').children('.product-item__image-wrapper').width()*1.493);
        jQuery(this).children('.product-item__inner').children('.product-item__image').children('.product-item__image-wrapper').css('height', Product_Grid_Image_Height );
      });
      
    }
    
  }

  
  
/*
  $(function () {

  $('.radioSelect').each(function (selectIndex, selectElement) {

    var select = $(selectElement);
    var container = $("<div class='radioSelectContainer' />");
    select.parent().append(container);
    container.append(select);

    select.find('option').each(function (optionIndex, optionElement) {
      var radioGroup = select.attr('id');
      var label = $("<label />");
      container.append(label);

      $("<input type='radio' name='" + radioGroup + "' />")
          .attr("value", $(this).val())
          .click((function () { select.val($(this).val()); })) //radio updates select - see optional below
          .appendTo(label);

      $("<span>" + $(this).val() + "</span>").appendTo(label);
    });

    //http://stackoverflow.com/questions/4957207/how-to-check-uncheck-radio-button-on-click
    //optional - this logic handles unchecking when clicking on an already checked radio

    container.find(":radio + span").mousedown(
      function (e) {
        var $span = $(this);
        var $radio = $($span.prev());
        if ($radio.is(':checked')) {
          var uncheck = function() {
            setTimeout(function () { $radio.prop('checked', false); }, 0);
          };
          var unbind = function() {
            $span.unbind('mouseup', up);
          };
          var up = function() {
            uncheck();
            unbind();
          };
          $span.bind('mouseup', up);
          $span.one('mouseout', unbind);
        } else {
          select.val($radio.val());
        }
      }
    );

    select.change((function () { //select updates radio
      $("input[name='" + select.attr('id') + "Group" + "'][value='" + this.value + "']").prop("checked", true);
    }));
    
  });	
});
*/
  
  function initLazyLoad() {
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
        // ... more custom settings?
    });
    
  }
  
  
  
  function init_toggler() {
    $('#shipping-toggler').click( function() {
      $( "#shipping-toggler" ).toggleClass('active');
      $('#delivery').slideToggle(500);
      return false; 
    });
  }
  
  
  /* -------------------------------------------
       INNIT FUNCTIONS
    * ------------------------------------------- */

  
  jQuery(document).ready(function() {
   	// initShadowbox();
    initBoxHeight();
    initnavigation();
    initLazyLoad();
    init_toggler();
  });
  

})(jQuery);