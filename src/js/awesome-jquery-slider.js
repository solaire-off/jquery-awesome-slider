$(function() {




	var methods = {
    init : function( options ) {


			// Default options
			var settings = $.extend({
					cover: true,
					autoplay: false,
			}, options );




      currentSlide = 0;
      countThumbnails = lastThumbnails = 3;
			autoplay = false;

      $(this).addClass('awesome-slider').children().wrap('<div class="awesome-slider_item"></div>');
      slide = $(this).find('.awesome-slider_item');


      countSlide = slide.length;

      $('<div class="awesome-slider_navigation"></div>' ).insertAfter($(this));

      nav = $('.awesome-slider_navigation');

      nav.append('<div class="awesome-slider_thumbnails-viewport"><div class="awesome-slider_thumbnails-list"></div></div>');
      thumbnailsList = nav.find('.awesome-slider_thumbnails-list');


      nav.append('<span class="awesome-slider_arrow awesome-slider_arrow__right">&#8250;</span>')
      nav.find('.awesome-slider_arrow__right').click(function(){
        $(this).awesomeSlider('nextThumbnails');
      });

      nav.append('<span class="awesome-slider_arrow awesome-slider_arrow__left">&#8249;</span>')
      nav.find('.awesome-slider_arrow__left').click(function(){
        $(this).awesomeSlider('prevThumbnails');
      });


      slide.each(function(index,el){
        image = $(el).find('img');
        thumbnailsList.append('<img data-index="' + index + '"  class="awesome-slider_thumbnail" src="' + $(image).attr('src') + '">')
      })

      thumbnails = thumbnailsList.find('.awesome-slider_thumbnail');


      thumbnails.click(function(){
        $(this).awesomeSlider('getCurrentSlide', $(this).attr('data-index'))

      })


			// Apply options

			if (settings.cover === true) slide.addClass('awesome-slider_item__cover');
      if (settings.autoplay == true){
        $(this).awesomeSlider('autoPlay');
      }

    },

    nextThumbnails : function( ) {
      if (lastThumbnails < countSlide - 1){
        lastThumbnails += 1;
        translateX = 25 * (lastThumbnails - 3);
        thumbnailsList.css('transform','translateX(-' + translateX + '%)');
      }
    },
    prevThumbnails : function( ) {
      if (lastThumbnails => countThumbnails){
        lastThumbnails -= 1;
        translateX = 25 * (lastThumbnails - 3);
        thumbnailsList.css('transform','translateX(-' + translateX + '%)');
      }
    },
    nextSlide : function( ) {

      currentSlide += 1;

      thumbnails.removeClass('is-active');
      $(thumbnails[currentSlide]).addClass('is-active');

      translateX = 100 * currentSlide;

      if (currentSlide === countSlide){
        currentSlide = 0;
        translateX = 0;
      }
      slide.each(function()
      {
        $(this).css('transform','translateX(-' + translateX + '%)');
      });
    },

    prevSlide : function( ) {

      currentSlide -= 1;

      thumbnails.removeClass('is-active');
      $(thumbnails[currentSlide]).addClass('is-active');

      translateX = 100 * currentSlide;
      slide.each(function()
      {
        $(this).css('transform','translateX(-' + translateX + '%)');
      });
    },
    autoPlay : function( ){
      thumbnails.removeClass('is-active');

      if (autoplay == false){
          autoplay = true;
          autoPlayInterval = setInterval(function () {
            $(this).awesomeSlider('nextSlide')
          }, 5000);
      }
      else{
          autoplay = false;
          clearInterval(autoPlayInterval);
      }
    },
    getCurrentSlide : function( slideNumber ) {
      thumbnails.removeClass('is-active');
      currentSlide = slideNumber - 1;

      translateX = slideNumber * 100;
      $(thumbnails[slideNumber]).addClass('is-active');

      slide.each(function()
      {
        $(this).css('transform','translateX(-' + translateX + '%)');
      });
    }
  };

  $.fn.awesomeSlider = function( method ) {
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.awesomeSlider' );
    }
  };

});
