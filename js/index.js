let isOpenBurger = false

function openBurgerMenu(){
    if(isOpenBurger === false){
        document.getElementById('burgerMenu').style.display = 'block'
        isOpenBurger = !isOpenBurger
    }
    else{
        document.getElementById('burgerMenu').style.display = 'none'
        isOpenBurger = !isOpenBurger
    }
    
}

function openModal(){
    document.getElementById('modal').style.display = 'block'
}
function closeModal(){
    document.getElementById('modal').style.display = 'none'
}

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};
select();



let isOpenSelect1 = false
let isOpenSelect2 = false
function addLine1(num){
    if(isOpenSelect1){
        document.getElementById(`select${num}`).style.borderBottom = '1px solid #D0D0D0'
        document.getElementById(`container${num}`).style.borderBottom = 'none'
        isOpenSelect1 = !isOpenSelect1
        console.log(isOpenSelect1)
    }
    else{
        document.getElementById(`select${num}`).style.borderBottom = 'none'
        document.getElementById(`container${num}`).style.borderBottom = '1px solid #D0D0D0'
        isOpenSelect1 = !isOpenSelect1
        console.log(isOpenSelect1)
    }
}
function addLine2(num){
    if(isOpenSelect2){
        document.getElementById(`select${num}`).style.borderBottom = '1px solid #D0D0D0'
        document.getElementById(`container${num}`).style.borderBottom = 'none'
        isOpenSelect2 = !isOpenSelect2
        console.log(isOpenSelect2)
    }
    else{
        document.getElementById(`select${num}`).style.borderBottom = 'none'
        document.getElementById(`container${num}`).style.borderBottom = '1px solid #D0D0D0'
        isOpenSelect2 = !isOpenSelect2
        console.log(isOpenSelect2)
    }
}

let isOpenModalSelect = false
function addModalLine(num){
    if(!isOpenModalSelect){
        document.getElementById(`select${num}`).style.borderBottom = 'none'
        isOpenModalSelect = !isOpenModalSelect
    }
    else{
        document.getElementById(`select${num}`).style.borderBottom = '1px solid #D0D0D0'
        isOpenModalSelect = !isOpenModalSelect
    }
}