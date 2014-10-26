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
	}, 3000);



     	// First we get the element with class .prev, we want to add an event listener
    	// to that element so we can perform a function every time teh element is clicked
    	document.getElementsByClassName('prev')[0].addEventListener('click', function () {
      	// the idea is to decrease slide_current by one, to show the previous image
      		if(slide_current > 0){
       	 		slide_current--;
      		}else{
        		// if the slide_current is less than 0 we want to move to the last image
        		slide_current = (slides_total - 1);
      		}
      		// then we call the function that changes the current image we had previously coded
      		changePicture(slide_current);
    	});

		document.getElementsByClassName('reset')[0].addEventListener('click', function () {
			slide_current = 0;
			changePicture(slide_current);
		});

    	document.getElementsByClassName('next')[0].addEventListener('click', function () {
      		if(slide_current < (slides_total - 1)){
       	 		slide_current++;
      		}else{
        		slide_current = 0;
      		}
      		changePicture(slide_current);
      		ga("send", "event", "slider", "clicknext", "click next button", 1);
      		mixpanel.track("click next button");
    	});

		changePicture(slide_current);
		console.log(slide_current);	

		document.getElementsByClassName('userinputtext')[0].addEventListener('keyup', function(e){
			document.getElementsByClassName('bigtitle')[0].innerHTML=e.target.value;
		});

});

function ajax() {
    var xmlhttp;
 
    xmlhttp = new XMLHttpRequest();
 
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 ) {
           if(xmlhttp.status == 200){
               document.getElementById("response").innerHTML = xmlhttp.responseText;
           }
           else if(xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    }
 
    xmlhttp.open("GET", "/pages/ajax", true);
    xmlhttp.send();
}


