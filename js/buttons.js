function classToggle() {
    let elem = document.querySelector('#companyGroup');
    let but = document.querySelector('#company-group__button');
    let img = document.querySelector('#foo');
    let p = document.querySelector('#companyGroupP');
    elem.classList.toggle('copmanyGroupnoAuto');
    img.classList.toggle('rotate')
    if (p.innerHTML === 'Показать все') {
        p.innerHTML = 'Скрыть';
        p.style.marginLeft = "-4px";
    }
    else {
        p.innerHTML = 'Показать все';
        p.style.marginLeft = "17px";
    }
}
function ButtonRead() {
    let elem = document.querySelector('#content__block-text');
    let but = document.querySelector('#contentButton');
    let img = document.querySelector('#contentImg');
    let p = document.querySelector('#contentP');
    elem.classList.toggle('copmanyGroupnoAuto');
    img.classList.toggle('rotate')
    if (p.innerHTML === 'Читать далее') {
        p.innerHTML = 'Свернуть';
        p.style.marginLeft = "-4px";
    }
    else {
        p.innerHTML = 'Читать далее';
        p.style.marginLeft = "17px";
    }
}
