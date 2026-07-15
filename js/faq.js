const questions = document.querySelectorAll(".question");


questions.forEach(question => {


    question.addEventListener("click", ()=>{


        const card = question.parentElement;


        card.classList.toggle("active");



        const icon = question.querySelector("span");


        if(card.classList.contains("active")){

            icon.textContent="−";

        }else{

            icon.textContent="+";

        }


    });


});