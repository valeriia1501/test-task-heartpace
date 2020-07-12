let formSubmit = document.querySelector('.form-content__button');
let formInputs = document.querySelectorAll('.form-content__input');
let formErrorLast = document.querySelector('.form-content__error--last');
let formEmailInput = document.querySelector('.form-content__input--email');

formSubmit.addEventListener('click', () => {
    let checkedFields = 0;
    console.log(formSubmit)
    for (let item of formInputs) {
        console.log(item.value)
        if (item.value === '') {
            formErrorLast.style.visibility = 'visible';
            item.nextElementSibling.style.visibility = 'visible';
            item.classList.add('form-content__input--error');
            item.classList.remove('form-content__input--checked');
            console.log(item.nextElementSibling);
        } else {
            checkedFields++;
            item.nextElementSibling.style.visibility = 'hidden';
            item.classList.add('form-content__input--checked');
            item.classList.remove('form-content__input--error');
            console.log(checkedFields);
            if (checkedFields === 4) {
                formErrorLast.style.visibility = 'hidden';
            }
        }
    }

    if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(formEmailInput.value)) {
        console.log('adlakd')
        formEmailInput.classList.add('form-content__input--checked');
        formEmailInput.classList.remove('form-content__input--error');
    } else {
        formErrorLast.style.visibility = 'visible';
        formEmailInput.nextElementSibling.style.visibility = 'visible';
        formEmailInput.classList.remove('form-content__input--checked');
        formEmailInput.classList.add('form-content__input--error');
    }
})
