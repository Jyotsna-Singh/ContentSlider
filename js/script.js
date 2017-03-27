$(document).ready(function(){
	//Set Options
	
	var speed = 500; //Speed of transition in millisec
	var autoswitch = true; //auto slider option
	var autoswitch_speed = 4000; //Auto slider speed
	
	//Add initial active class
	$('.slide').first().addClass('active');
	
	//Hide all slides
	$('.slide').hide();
	
	//Show First slide
	$('.active').show();
	
	//Next handler
	$('#next').on('click', nextSlide);
	
	//prev handler
	$('#prev').on('click',prevSlide);
	
	//Autoslide handler
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);
	}
	
	
	//Switch to next slide
	function nextSlide(){
		
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		}else{
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
					  
	//Switch to prev slide
	function prevSlide(){
			$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		}else{
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
		}
});