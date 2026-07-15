// ================================
// Bilder
// ================================

const images = [
    "images/villa-maria/1.jpg",
    "images/villa-maria/2.jpg",
    "images/villa-maria/3.jpg",
    "images/villa-maria/4.jpg",
    "images/villa-maria/5.jpg"
];

// ================================
// Elemente
// ================================

let currentIndex = 0;

const sliderImage = document.getElementById("slider-image");
const current = document.getElementById("current");
const total = document.getElementById("total");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// Gesamtanzahl anzeigen
total.textContent = images.length;

// ================================
// Bild anzeigen
// ================================

function updateSlider(){

    sliderImage.style.opacity = 0;

    setTimeout(() => {

        sliderImage.src = images[currentIndex];
        current.textContent = currentIndex + 1;

        sliderImage.style.opacity = 1;

    },200);

}

// ================================
// Nächstes Bild
// ================================

function nextSlide(){

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    updateSlider();

}

// ================================
// Vorheriges Bild
// ================================

function prevSlide(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    updateSlider();

}

// ================================
// Thumbnail anklicken
// ================================

function showSlide(index){

    currentIndex = index;

    updateSlider();

}

// Funktion global machen
window.showSlide = showSlide;

// ================================
// Buttons
// ================================

next.addEventListener("click", nextSlide);

prev.addEventListener("click", prevSlide);

// ================================
// Tastatur
// ================================

document.addEventListener("keydown",function(e){

    if(e.key==="ArrowRight"){

        nextSlide();

    }

    if(e.key==="ArrowLeft"){

        prevSlide();

    }

});

// ================================
// Automatischer Slider
// ================================

let autoSlide = setInterval(nextSlide,5000);

// Stoppen wenn Maus darüber
sliderImage.addEventListener("mouseenter",function(){

    clearInterval(autoSlide);

});

// Neu starten wenn Maus weg
sliderImage.addEventListener("mouseleave",function(){

    autoSlide = setInterval(nextSlide,5000);

});

// ================================
// Swipe für Handy
// ================================

let touchStartX = 0;
let touchEndX = 0;

sliderImage.addEventListener("touchstart",function(e){

    touchStartX = e.changedTouches[0].screenX;

});

sliderImage.addEventListener("touchend",function(e){

    touchEndX = e.changedTouches[0].screenX;

    if(touchStartX - touchEndX > 50){

        nextSlide();

    }

    if(touchEndX - touchStartX > 50){

        prevSlide();

    }

});