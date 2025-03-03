let slideshows_names = 
["main_slider","about_us_slider","room_kama-slider",
"room_relax-slider","room_jacuzzi-slider","room_double-slider",
"room_premium-slider", /* "rooms_slider" */];

/* const rooms = document.getElementsByClassName("room");
for(let i = 0; i < rooms.length; i++){
    if(window.matchMedia("(max-width: 400px)").matches){
        rooms[i].classList.add("slides");
        rooms[i].classList.add("fade");
    }else{
        rooms[i].classList.remove("slides");
        rooms[i].classList.remove("fade");
    }
} */

slideshows_names.forEach((slideshow_name) => {
    var slideshow = document.getElementById(slideshow_name);
    let animationSeconds = 5000;
    slideshow.currentSlideIndex = 0;
/*     if(slideshow_name == "rooms_slider"){
        animationSeconds = 25000
    } */
    showSlides(slideshow.currentSlideIndex, slideshow, animationSeconds);
});

function showSlides(slideIndex, slideshow, animateTime){
    let slides = slideshow.getElementsByClassName("slides");
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
/*     if(slideshow.id == "rooms_slider")
    slides[slideIndex-1].style.display = "block"; */
    setTimeout(()=>{showSlides(slideIndex, slideshow, animateTime)},animateTime);
}