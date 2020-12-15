menu.onclick = function burgerClick() {
    let x = document.querySelector('#topnav')

    if(x.className === 'header-nav'){
        x.className += ' responsive'
    } else {
        x.className = 'header-nav'
    }
}

let btn2 = document.querySelector('#btn2')

btn2.onclick = function exploreClick() {
    window.scrollTo(0, 900)
}

let btn1 = document.querySelector('#btn1')

btn1.onclick = function bookClick() {
    window.scrollTo(0, 2000)
}