// ==========================================
// Countdown bis Angebotsende
// ==========================================

// Angebotsende (31. Dezember 2025, 23:59 Uhr)
const endDate = new Date("December 31, 2025 23:59:59").getTime();

const timer = document.getElementById("timer");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = endDate - now;

    if(distance <= 0){

        timer.innerHTML = "Angebot beendet";

        clearInterval(countdown);

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML =
        days + " Tage " +
        hours + " Std " +
        minutes + " Min " +
        seconds + " Sek";

}

updateCountdown();

const countdown = setInterval(updateCountdown,1000);


// ==========================================
// Newsletter
// ==========================================

const form = document.getElementById("newsletterForm");

const email = document.getElementById("email");

const message = document.getElementById("message");

form.addEventListener("submit",function(e){

    e.preventDefault();

    if(email.value.trim()===""){

        message.style.color="red";

        message.innerHTML="Bitte geben Sie eine E-Mail-Adresse ein.";

        return;

    }

    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(email.value)){

        message.style.color="red";

        message.innerHTML="Bitte geben Sie eine gültige E-Mail-Adresse ein.";

        return;

    }

    message.style.color="green";

    message.innerHTML="Vielen Dank! Sie wurden erfolgreich angemeldet.";

    form.reset();

});


// ==========================================
// Karten beim Scrollen einblenden
// ==========================================

const cards = document.querySelectorAll(".offer-card, .benefit-grid div");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(function(card){

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition="all .6s ease";

    observer.observe(card);

});


// ==========================================
// Highlight-Angebot leicht schweben lassen
// ==========================================

const highlight = document.querySelector(".highlight");

if(highlight){

    highlight.addEventListener("mouseenter",function(){

        highlight.style.transform="translateY(-8px)";

        highlight.style.transition=".3s";

    });

    highlight.addEventListener("mouseleave",function(){

        highlight.style.transform="translateY(0px)";

    });

}


// ==========================================
// Button Ripple-Effekt
// ==========================================

const buttons = document.querySelectorAll(".button");

buttons.forEach(function(btn){

    btn.addEventListener("click",function(){

        btn.style.transform="scale(.96)";

        setTimeout(function(){

            btn.style.transform="scale(1)";

        },120);

    });

});


// ==========================================
// Header leicht transparent beim Scrollen
// ==========================================

window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    if(window.scrollY>80){

        header.style.background="rgba(236,230,226,.95)";
        header.style.backdropFilter="blur(10px)";

    }else{

        header.style.background="#ece6e2";
        header.style.backdropFilter="none";

    }

});