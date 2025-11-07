let root = document.querySelector(".slider13 .swiper .swiper-wrapper");

async function slider13() {
  try {
    let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
    let res = await data.json();
    let result = res
      .slider13.map((item) => {
        return `
         <div class="swiper-slide">
              <img
                src="${item.imgsrc}"
                alt="${item.alt}"
              />
              <div class="describe">
                <span>${item.titlelit}</span>
                <div>${item.titlebig}</div>
                <div class="first">
               ${
                 item.firstrun
                   ? `<div class="free">
              <a href="${item.href}">
                  <svg
                    width="14px"
                    height="14px"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.3602 2.0818C6.4185 1.97273 6.58139 1.97273 6.6397 2.0818L8.70321 5.94205C8.7474 6.0247 8.85857 6.04959 8.93649 5.99428L11.7492 3.99743C11.8662 3.91436 12.0281 4.01539 11.9958 4.15134L10.7776 9.28015C10.7614 9.34853 10.6978 9.39706 10.6246 9.39706H2.3754C2.30211 9.39706 2.23858 9.34853 2.22233 9.28014L1.00418 4.15134C0.971887 4.01539 1.13376 3.91436 1.25077 3.99743L4.06348 5.99427C4.1414 6.04959 4.25258 6.0247 4.29676 5.94205L6.3602 2.0818Z"
                      fill="#FFD15C"
                    />
                    <path
                      d="M2.40753 10.1564H10.5933C10.68 10.1564 10.7503 10.2236 10.7503 10.3066L10.7503 10.8498C10.7503 10.9328 10.68 11 10.5933 11H2.40754C2.32085 11 2.25057 10.9328 2.25057 10.8498L2.25056 10.3066C2.25056 10.2236 2.32084 10.1564 2.40753 10.1564Z"
                      fill="#FFD15C"
                    />
                  </svg>
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
       var swiper = new Swiper(".mySwiper13", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 1.5,
            spaceBetween:10,
          },
          768: {
            slidesPerView:3.9 ,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4.9,
            spaceBetween: 10,
          },
        },
      });
  } catch (error) {
    console.log(error.massege);
  }
}
export default slider13;
