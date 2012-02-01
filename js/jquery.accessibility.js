/*
jQuery Acessibility Plugin
version: 0.0.1
@requires jQuery 1.7 or later
@homepage https://github.com/nandorossetto/jQuery-accessibility

Licensed under the MIT:
	http://www.opensource.org/licenses/mit-license.php
	Copyright nandorossetto

Usage:
   $("#container").fontSize();

Default options:
	size    : 12,
	target  : "p",
	maxSize : 17,
	minSize : 9,
	speed   : 100
*/

(function($){
    $.fn.fontSize = function(settings){
		var settings = $.extend({
			size    : 12,
			target  : "p",
			maxSize : 17,
			minSize : 9,
			speed   : 100
		}, settings);

		$(this).prepend("<div id='font-size'><a href='javascript:;;' class='font-bigger'>A+</a> <a href='javascript:;;' class='font-smaller'>A-</a></div>");

		//make a bigger font
		$(".font-bigger").on("click", function(){
			if(settings.size < settings.maxSize){
				settings.size += 1;
				$(settings.target).animate({fontSize: settings.size}, settings.speed);
			}return false;
		});

		//make a smaller font
		$(".font-smaller").on("click", function(){
			if(settings.size > settings.minSize){
				settings.size -= 1;
				$(settings.target).animate({fontSize: settings.size}, settings.speed);
			}return false;
		});
    }
})(jQuery);