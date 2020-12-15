/* To DOWN */
const more = document.querySelector('.btn-more')
more.addEventListener('click', listDown)

function listDown(){
  window.scrollTo(0, 600)
}

/* To TOP */
const up = document.querySelector('.up')

up.addEventListener('click', listUp)
function listUp(){
  window.scrollTo(0, 0)
}

/****Появление кнопки на 500px****/
window.addEventListener('scroll', showUp)
function showUp() {
  if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
    up.classList.add('active')
  } else{ 
    up.classList.remove('active')
  }
}