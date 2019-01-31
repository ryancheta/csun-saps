function openModal(){
    document.getElementById('my-modal').style.display = "inline-flex";
}
function closeModal(){
  document.getElementById('my-modal').style.display = "none";
}

var slideIndexJS = 1;
showSlides( slideIndexJS );

function changeSlides(n){
  showSlides(slideIndexJS += n);
}

function currentSlide(n){
  showSlides(slideIndexJS = n);
}

function showSlides(n){
  var i;
  var slidesJS = document.getElementsByClassName("my-slides");

  if(n > slidesJS.length){ slideIndexJS = 1; }
  if(n < 1 ){ slideIndexJS = slideJS.length; }

  for(i = 0; i < slidesJS.length; i++){
    slidesJS[i].style.display = "none";
  }
  slidesJS[slideIndexJS -1].style.display = "block";
}