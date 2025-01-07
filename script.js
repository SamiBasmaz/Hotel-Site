//! Header Scroll
let nav = document.querySelector(".navbar");
window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("header-scrolled")
    }else{
        nav.classList.remove("header-scrolled")
    }
})



// ! Swiper.Js kodları
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    
    speed: 800,
});

// ! Counter Design

// document.addEventListener("DOMContentLoaded", ()=>{
//     function counter(id,start,end,duration){
//         let obj = document.getElementById(id);
//         let current = start;
//         let range = end - start;
//         let increment = end > start ? 1 : -1;
//         let step = Math.abs(Math.floor(duration / range))
//         let timer = setInterval(()=>{
//             current += increment;
//             obj.textContent = current

//             if(current == end){
//                 clearInterval(timer)
//             }
//         },step)
//     }
//     counter("count1",0,100,3000)
//     counter("count2",0,200,4000)
//     counter("count3",0,300,4500)
//     counter("count4",0,400,5000)
// })


// window.addEventListener("scroll", () =>{
//     console.log(scrollY)
//     if(scrollY > 2000 && scrollY < 2200){
        
//         function counter(id,start,end,duration){
//             let obj = document.getElementById(id);
//             let current = start;
//             let range = end - start;
//             let increment = end > start ? 1 : -1;
//             let step = Math.abs(Math.floor(duration / range))
//             let timer = setInterval(()=>{
//                 current += increment;
//                 obj.textContent = current
    
//                 if(current == end){
//                     clearInterval(timer)
//                 }
//             },step)
//         }
//         counter("count1",0,100,3000)
//         counter("count2",0,200,4000)
//         counter("count3",0,300,4500)
//         counter("count4",0,400,5000)
//     }

// })


let hasCounted = false;
window.addEventListener("scroll", () => {
    if(scrollY > 2000 && !hasCounted){
        hasCounted = true;
        function counter(id,start,end,duration){
            let obj = document.getElementById(id);
            let current = start;
            let range = end - start;
            let increment = end > start ? 1 : -1;
            let step = Math.abs(Math.floor(duration / range));
            let timer = setInterval(()=>{
                current += increment
                obj.textContent = current;
    
                if(current == end){
                    clearInterval(timer)
                }
            },step)
        }
        counter("count1", 50, 200, 3000)
        counter("count2", 50, 300, 3000)
        counter("count3", 50, 200, 3000)
        counter("count4", 50, 250, 3000)
    }
})



//! Our Partner
var ourPartnerSwiper = new Swiper(".our-partner", {
    slidesPerView : 5,
    spaceBeetwen : 30,
    loop : true,
    autoplay : {
        delay: 2000,
    },

    breakpoints : {
        '991': {
            slidesPerView : 5,
            spaceBeetwen : 10,
        },
        '767' : {
            slidesPerView : 3,
            spaceBeetwen : 10,
        },
        '320' : {
            slidesPerView : 2,
            spaceBeetwen : 10,
        }
    }
})






