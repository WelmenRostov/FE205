function classToggle() {
    let elem = document.querySelector('#companyGroup');
    let but = document.querySelector('#company-group__button');
        elem.classList.toggle('copmanyGroupnoAuto');
        but.innerHTML="Скрыть";
}