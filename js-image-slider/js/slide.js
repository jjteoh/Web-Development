/*
	
	Created by: J.J Teoh
    Created On: 22 Feb 2016
    Last Modified: 23 Feb 2016
    Last Review: 23 Feb 2016 
    Remark: future improvement: click on the dots to show certain slide

*/



var images = document.getElementsByClassName('slide-img');
var dots = document.getElementsByClassName('dots');
var elPrev = document.getElementById('arrow-lt');
var elNext = document.getElementById('arrow-gt');

var i = 1;
var k = images.length - 1;
var isPaused = false;

//set the first slide to be fixed and first to show
images[0].style.left = '0';
dots[0].style.backgroundColor = "#999999";

//reset the slide
function resetSlide(){
	//highlight the first dot and remove highlight from last dot
	dots[0].style.backgroundColor = "#999999";
	dots[k].style.backgroundColor = "#fff";

	//reposition all slide to the right except first slide
	for(var j = 1; j < images.length; j++){
		images[j].style.left = '-1170px';
	}
}

//make all the slides stack at the center
function reverseSlide() {
	dots[0].style.backgroundColor = "#fff";
	dots[k].style.backgroundColor = "999999";

	//reposition all slides to the center
	for(var j = 1; j < images.length; j++){
		images[j].style.left = '0';
		images[j].style.transition = 'left 2s';
	}
}

//clear the shadow in the dots
function clearDots() {
	for(var j = 0; j < images.length; j++){
		dots[j].style.backgroundColor = "#fff";
	}
}

//slide the image from right to left
function slideRight(){
	if(i <= k){
		images[i].style.left = '0';
	    images[i].style.transition = 'left 2s';
	    dots[i].style.backgroundColor = "#999999";
	    dots[i-1].style.backgroundColor = "#fff";
	}else{ //run when i=4
		resetSlide();
		i = 0;
	}
	 i++;
}

//slide the image from right to left
function slideLeft(){
	if(i==1){
	    i = 4;
		reverseSlide();

	}else if(i > 1 && i  <= 4){
		i--;
		images[i].style.left = '-1170px';
		images[i].style.transition = 'left 2s';
	    dots[i].style.backgroundColor = "#fff";
	    dots[i-1].style.backgroundColor = "#999999";
	}
	
}

//next slide button function
function event1(){
	isPaused = true; //pause the default auto-sliding
		window.setTimeout(function(){
			isPaused = false;
		}, 5000);
		slideRight();
}

//previous slide button function
function event2(){
	isPaused = true; //pause the default auto-sliding
		window.setTimeout(function(){
			isPaused = false;
		}, 5000);
		slideLeft();
}


//infinite loop
window.setInterval(function(){
	if(!isPaused){
		slideRight();
	}
}, 7000);


//add Event Listener to next button
if(elNext.addEventListener){
	elNext.addEventListener('click',function(e){
		event1();
	},false);
}else{ //fallback for IE
	elNext.attachEvent('onclick',function(e){
		event1();
	});
}

//add Event Listener to prev button
if(elPrev.addEventListener){
	elPrev.addEventListener('click',function(e){
		event2();
	},false);
}else{ //fallback for IE
	elPrev.attachEvent('onclick',function(e){
		event2();
	});
}


//var h = document.createElement("H1");                
//var t = document.createTextNode("Hello World");
//h.appendChild(t);
//document.getElementById('first').appendChild(h);


