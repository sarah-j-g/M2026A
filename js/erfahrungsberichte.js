// ==========================================
// ALGARVEHOLI-DAY
// Erfahrungsberichte JavaScript
// ==========================================


// Formular auswählen
const reviewForm = document.getElementById("reviewForm");
const message = document.getElementById("message");


// Formular absenden
reviewForm.addEventListener("submit", function(e){

    e.preventDefault();


    // Eingaben holen
    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("review").value;


    // Neue Bewertung erstellen
    const reviewGrid = document.querySelector(".review-grid");


    const newReview = document.createElement("article");

    newReview.classList.add("review-card");


    newReview.innerHTML = `

        <div class="review-header">

            <img 
            src="images/avatars/default.jpg" 
            alt="Gast">

            <div>

                <h3>${name}</h3>

                <span>${rating}</span>

            </div>

        </div>


        <p>
            „${reviewText}“
        </p>

    `;


    // Neue Bewertung hinzufügen
    reviewGrid.prepend(newReview);



    // Nachricht anzeigen
    message.textContent =
        "Vielen Dank für Ihre Bewertung! ❤️";


    message.style.color = "#8a2be2";



    // Formular zurücksetzen
    reviewForm.reset();



    // Nachricht nach einigen Sekunden entfernen
    setTimeout(()=>{

        message.textContent="";

    },4000);


});