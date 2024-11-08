document.addEventListener('DOMContentLoaded' , function() {
    const questions = document.querySelectorAll('[data-faq-question]');

    for (let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOufechaResposta);
    }
})

function abreOufechaResposta (elemento) {
    const classe = 'faq__section__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;  //pegando o elemento pai que no caso é o LI

    elementoPai.classList.toggle(classe);
}