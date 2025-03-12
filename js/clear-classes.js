function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

window.addEventListener('resize', debounce(clear_services_slider(), 250), false);

function clear_services_slider(){
    const services = document.getElementsByClassName("service");
    for(let i = 0; i < services.length; i++){
        if(window.matchMedia("(max-width:480px)").matches){
            services[i].classList.add("slides");
        }else{
            services[i].classList.remove("slides");
        }
    }
}