let root = document.querySelector(".slider1 .swiper .swiper-wrapper");

async function slider1() {
  try {
    

  let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
  let res = await data.json();
  let result = res
    .slider1.map((item) => {
      return `
           <div class="swiper-slide">
          
              <img
                src="${item.imgMain}"
                alt=""
              />
              <div class="layer">
                <div class="content">
                  <h2>${item.titlemain}</h2>
                  <p>${item.describ} </p>
                </div>
              </div>
            </div>`;
    })
    .join(" ");
  root.insertAdjacentHTML("afterbegin", result);
   
  //  swiper
     
      var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 1.15,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          }
         
        },
      });
  


    } catch (error) {
      console.log(error.massege);
    
  }
}
export default slider1;
