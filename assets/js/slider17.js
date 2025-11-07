let root = document.querySelector(".slider17 .swiper .swiper-wrapper");

async function slider17() {
  try {
    let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
    let res = await data.json();
    let result = res
      .slider17.map((item) => {
        return `
         <div class="swiper-slide">
            <div class="image">
              <img
                src="${item.imgsrc}"
                alt="${item.alt}"
              />
              </div>
              <div class="describe">
                <span>${item.titlelit}</span>
                <div>${item.titlebig}</div>
                <div class="first">
               ${
                 item.firstrun
                   ? `<div class="free">
              <a href="${item.href}">
                 
                  ${item.firstrun}
                  </a>
                </div>`
                   : ""
               }
                 ${item.soon ? `<span class="after2">${item.soon}</span>` : ""}
                 </div>
                <div class="content">
                  <div>
      ${
        item.off
       ? `<div class="off">${item.off}</div>`
       : ""
      }
    ${item.before ? `<span class="before">${item.before}</span>` : ""}
    ${item.after ? `<span class="after">${item.after}</span>` : ""}
   
                  </div>
                </div>
              </div>
            </div>`;
      })
      .join(" ");
    root.insertAdjacentHTML("afterbegin", result);
    // slider
       var swiper = new Swiper(".mySwiper17", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3.9,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        },
      });

  } catch (error) {
    console.log(error.massege);
  }
}
export default slider17;
