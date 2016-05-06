$(document).ready(function(){
  $('.slider2').bxSlider({
	    slideWidth: 200,
	    minSlides: 4,
	    maxSlides: 1,
	    slideMargin: 50,
	    pager: false,
	    auto: true,
  	});
	$('.bxslider').bxSlider({
		  mode: 'fade',
		  captions: true,
		  auto: true,
		  controls: false,
	});
	$('.div_box, .content').on('inview', function(event, isInView) {
		if(isInView && $(this).hasClass('div_box')){
			$('.div_1').animate({
				opacity: 1
			},800, function(){
				$('.div_2').animate({
					opacity: 1
				},800, function(){
					$('.div_3').animate({
						opacity: 1
					},800, function(){
						$('.div_4').animate({
							opacity: 1
						},800);
					});
				});
			});
		}
		if(isInView && $(this).hasClass('content')){
			$('.cont_1').animate({
				opacity: 1
			},800, function(){
				$('.link-1').animate({
					opacity: 1
				},800, function(){
					$('.link-2').animate({
					opacity: 1
					},800, function(){
						$('.link-3').animate({
							opacity: 1
						},800, function(){
							$('.link-4').animate({
								opacity: 1
							},800, function(){
								$('.link-5').animate({
								opacity: 1
								},800, function(){
									$('.link-6').animate({
										opacity: 1
									},800);
								});
							});
						});
					});
				});
			});
			
		}
	});
	
});
