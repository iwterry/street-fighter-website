$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		/* when mouse enters, show .ryu-ready and hide .ryu-still */
		$('.ryu-still').hide();
		$('.ryu-ready').show(); 
	})
	.mouseleave(function() {
		/* when mouse leaves, show .ryu-still and hide .ryu-ready */
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {		
		/* play hadouken.mp3 */
		playHadouken();
		/* when mouse button is pressed down, show .ryu-throwing and hide .ryu-ready and .ryu-still*/
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.ryu-still').hide(); 
		/* show .hadouken and have it travel 1020px from the left in 500ms; once the position is reached, hide .hadouken and set it back to is original position */
		$('.hadouken').finish().show().animate({'left': '1020px'}, 500, function() {
			$(this).hide(); 
			$(this).css('left', '437px');
		}); 
	})
	.mouseup(function() {
		/* when mouse button is released, show .ryu-ready and hide .ryu-throwing */ 
		$('.ryu-throwing').hide(); 
		$('.ryu-still').show();
	});
	
	
	$('html').keydown(function(event) {
		// check to see whether the key pressed is "x"
		if (event.which === 88) { 
			// show .ryu-cool and hide .ryu-ready and .ryu-cool
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show(); 
		};
	})
	.keyup(function(event) {
		if(event.which === 88) {
			// show .ryu-still and hide .ryu-cool
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}

	});
	
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}