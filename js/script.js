let doc = document
let a = doc.querySelectorAll('a')
console.log(a);


for (let i of a) {
  i.addEventListener('click', (event) => {
    event.preventDefault()
  })
}



let lifotronic_a = doc.querySelector('.lifotroniс')
let lifotronic_sec2 = doc.querySelector('.sec2')

lifotronic_a.addEventListener('click', jacor)

let pos_sec2 = lifotronic_sec2.offsetTop
console.log(pos_sec2);

function jacor(event) {
  event.preventDefault()
  window.scrollTo({
   
    top: pos_sec2,
    left: 0,
    behavior: "smooth",
  })
}


let news_a = doc.querySelector('.news')
let news = doc.querySelector('.sec4')
let news_pos = news.offsetTop

news_a.addEventListener("click", jaco)


function jaco(event) {
  event.preventDefault()
  window.scrollTo({
    top: news_pos,
    left: 0,
    behavior: "smooth",
  })
}





var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".sweep", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".sweep2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
