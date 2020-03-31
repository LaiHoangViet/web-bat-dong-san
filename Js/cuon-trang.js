$(window).scroll(function() {
	var height = 
	$(window).scrollTop();
  if(height > 150) {
		$('.menu-logo').addClass('active');
	} else {
		$('.menu-logo').removeClass('active');
	}
});