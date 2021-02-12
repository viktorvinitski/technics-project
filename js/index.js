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