let root = document.querySelector(".slider10 .swiper .swiper-wrapper");

async function slider10() {
  try {
    

  let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
  let res = await data.json();
  let result = res
    .slider10.map((item) => {
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
             <div>
                  ${item.off ? `<div class="off">${item.off}</div>` : ""}
                  ${item.before ? `<span class="before">${item.before}</span>` : ""}
                  ${item.after ? `<span class="after">${item.after}</span>` : ""}
                  ${item.val ? `<span class="after2">${item.val}</span>` : ""}
                </div>
                ${item.button?
           `<div class="button">
              <a href=" ${item.href}"> ${item.button}</a>

              <svg
                aria-hidden="true"
                class="eds_5nt5ak0 eds_5nt5ak9"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15.25 4a.75.75 0 0 1 .75-.75h5.75V9a.75.75 0 0 1-1.5 0V5.81l-6.72 6.72a.75.75 0 1 1-1.06-1.06l6.72-6.72H16a.75.75 0 0 1-.75-.75M6.5 7.75a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75V16a.75.75 0 0 1 1.5 0v2.5a2.25 2.25 0 0 1-2.25 2.25h-10a2.25 2.25 0 0 1-2.25-2.25v-10A2.25 2.25 0 0 1 6.5 6.25H9a.75.75 0 0 1 0 1.5z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>`:""}`;
    })
    .join(" ");
  root.insertAdjacentHTML("afterbegin", result);
   
  //  swiper
     
      var swiper = new Swiper(".mySwiper10", {
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween:10,
          },
        },
      });
  


    } catch (error) {
      console.log(error.massege);
    
  }
}
export default slider10;
