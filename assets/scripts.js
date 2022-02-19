// //Testimonials
// const slides = document.querySelector(".slider").children;
// const indicatorImages = document.querySelector(".slider-indicator").children;

// for(let i = 0; i < indicatorImages.length; i++){
//     indicatorImages[i].addEventListener("click", function(){

//         for(let j=0; j<indicatorImages.length;j++){
//             indicatorImages[j].classList.remove("active")
//         }

//         if(indicatorImages[i] == 0){
//             indicatorImages[i] = 1;
//         }
//         this.classList.add("active");

//         const id = this.getAttribute("data-id");
//         for(let j = 0; j<slides.length; j++){
//             slides[j].classList.remove("active");
//         }

//         slides[id].classList.add("active");

//     })
// }

//Services We Offer
const servicesContainer = document.querySelectorAll('.services-item');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

servicesContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', function() {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', function() {
        item.scrollLeft -= containerWidth;
    })
})