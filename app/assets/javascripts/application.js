// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .

var slides, slides_total, slide_current;

function changePicture(slide) {
	for(var i = 0; i < slides_total; i++) {
		slides[i].style.display = 'none';
	}
	slides[slide].style.display = 'block';	
}


document.addEventListener('DOMContentLoaded', function() {
	slides = document.getElementsByClassName('col-sm-12');	
	slides_total = slides.length;
	slide_current = 0;
	window.setInterval(function() {
		changePicture(slide_current);
		if(slide_current >= (slides_total)-1) {
			slide_current = 0;
		} 
		else {
			slide_current++;
		}

		console.log(slide_current);		
	}, 3000);

});

