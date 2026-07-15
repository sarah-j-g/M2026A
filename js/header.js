const dropdownButton = document.querySelector(".dropbtn");
const dropdown = document.querySelector(".dropdown");


if(dropdownButton){

    dropdownButton.addEventListener("click", function(){

        dropdown.classList.toggle("active");

    });

}