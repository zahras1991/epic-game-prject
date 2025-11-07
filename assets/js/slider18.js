let root = document.querySelector(".slider18 .swiper .swiper-wrapper");

async function slider18() {
  try {
    

  let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
  let res = await data.json();
  let result = res
    .slider18.map((item) => {
      return `
        <div class="swiper-slide">
            <img
              src="${item.imgsrc}"
              alt="${item.alt}"
            />
            <h2>${item.titlebig}</h2>
            <p>
             ${item.titlelit}
            </p>
            <div class="content">
            <div>
               ${item.off ? `<div class="off">${item.off}</div>` : ""}
    ${item.before ? `<span class="before">${item.before}</span>` : ""}
    ${item.after ? `<span class="after">${item.after}</span>` : ""}
    ${item.val ? `<span class="after2">${item.val}</span>` : ""}
    </div>
    </div>
           
            ${item.button ? ` <div class="button"><a href=" ${item.href}"> ${item.button}</a>
            </div>` : ""}
              

        
            
          </div>`;
    })
    .join(" ");
  root.insertAdjacentHTML("afterbegin", result);
   
  //  swiper
     
      var swiper = new Swiper(".mySwiper18", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 1.15,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      });
  


    } catch (error) {
      console.log(error.massege);
    
  }
}
export default slider18;
