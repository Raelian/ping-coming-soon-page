const email = document.querySelector('#email');
const errorText = document.querySelectorAll('.main__error-text');

email.oninvalid = function(event) {
    event.preventDefault();

    if(email.value === "") {
        errorText[0].classList.add('main__error-text--hide');
        errorText[1].classList.remove('main__error-text--hide');
        email.classList.add('main__email--red-border');
    } else {
        errorText[0].classList.remove('main__error-text--hide');
        errorText[1].classList.add('main__error-text--hide');
        email.classList.add('main__email--red-border'); 
    }
}

email.addEventListener('focus', function() {
    errorText[0].classList.add('main__error-text--hide');
    errorText[1].classList.add('main__error-text--hide');
    email.classList.remove('main__email--red-border');
});
