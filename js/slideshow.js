let slideshows_names = 
["main_slider","about_us_slider","room_kama-slider",
"room_relax-slider","room_jacuzzi-slider","room_double-slider",
"room_premium-slider", "services_slider"];

slideshows_names.forEach((slideshow_name) => {
    var slideshow = document.getElementById(slideshow_name);
    let animationSeconds = 5000;
    slideshow.currentSlideIndex = 0;
    if(slideshow_name == "services_slider"){
        animationSeconds = 4000;
    }
    showSlides(slideshow.currentSlideIndex, slideshow, animationSeconds);
});

function showSlides(slideIndex, slideshow, animateTime){
    let slides = slideshow.getElementsByClassName("slides");
    if(slides.length == 0) return;
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(()=>{showSlides(slideIndex, slideshow, animateTime)},animateTime);
}