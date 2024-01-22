$(document).ready(function(){
  $("#bun").on("mouseenter",function (){
    $(this).css({
      "background-color":"black",
      "font-weight" : "900",
      "color" : "white"
    });
  })
  .on("mouseleave",function (){
    $(this).css({
      "background-color":"white",
      "font-weight" : "bold",
      "color" : "black"
    });
  })
  
})


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function subscribe() {
    const emailInput = document.getElementById('emailInput');
    const userEmail = emailInput.value.trim();

    if (isValidEmail(userEmail)) {
      alert('Thanks for subscribing!');
    } else {
      alert('Please fill out a valid email.');
    }
  }



  let slideIndex = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
  }  
  let links = document.getElementsByClassName("shop-now-link");
  for (let i = 0; i < links.length; i++) {
  links[i].style.display = "none";
  }   
  slideIndex++;
  if (slideIndex > slides.length) {
        slideIndex = 1;
  }    
  slides[slideIndex - 1].style.display = "block";
  links[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 5000);
  }
  document.addEventListener("DOMContentLoaded", function () {
      showSlides();
  });





  
  
 
 