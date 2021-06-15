// **************Menu bar humbargam*************
$(function() {
  $(".bar-toggler").click(function() {
    $(this).toggleClass("change");
    $('.navbar-mobile').toggleClass("open");
  });
});

// **************Menu bar humbargam*************
// *****************Tabs*******************
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// *****************Tabs*******************

// ********************owlCarousel****************
    $('.owl-carousel').owlCarousel({
      loop: true,
  		margin: 15,
  		autoplay: true,
  		dots: false,
  		nav: true,
  		autoplayTimeout: 15000,
  		smartSpeed: 1500,
  		responsive: {
  			0: {
  				items: 1
  			},
  			768: {
  				items: 2
  			},
  			992: {
  				items: 3
  			},
  			1170: {
  				items: 4
  			}
  		}
  	});
// ********************owlCarousel****************

// ****************comparison- image section***********

var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
  handle.style.left = slider.value+"%";
	divisor.style.width = slider.value+"%";
}

window.onload = function() {
	moveDivisor();
};
// ****************comparison- image section***********

// ****************book appoinment*********************
function openBookAppmt(ref) {
  document.getElementById('appoinment-form').classList.toggle('active');
}
// ****************book appoinment*********************
// ******************Up Arrow***************************
function scrollFunction() {
 if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80) {
   document.getElementById("gouparrow").style.display = "block";
 } else {
   document.getElementById("gouparrow").style.display = "none";
    }
 }
// ******************Up Arrow***************************

// Add active class to the current button (highlight it)
var header = document.getElementById("mynav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
