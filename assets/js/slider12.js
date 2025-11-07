let root = document.querySelector(".slider12 .swiper .swiper-wrapper");

async function slider12() {
  try {
    let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
    let res = await data.json();

    let result = res
      .slider12.map((item) => {
        // ساخت HTML برای هر محصول
        const productHTML = item.product
          .map(
            (prod) => `
            <div class="contente">
              <div class="image">
                <img src="${prod.imgsrc}" alt="${prod.alt}" />
                <span class="add">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#ffffff"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#ffffff"></path>
                  </svg>
                </span>
              </div>
              <div class="content">
                <h2>${prod.titlebig}</h2>
                <p>${prod.titlelit}</p>
                <div>
                  ${prod.off ? `<div class="off">${prod.off}</div>` : ""}
                  ${prod.before ? `<span class="before">${prod.before}</span>` : ""}
                  ${prod.after ? `<span class="after">${prod.after}</span>` : ""}
                  ${prod.val ? `<span class="after2">${prod.val}</span>` : ""}
                </div>
                ${prod.button ? `<div class="button"><a href="${prod.href}">${prod.button}</a></div>` : ""}
              </div>
            </div>
          `
          )
          .join("");

        // هر sliderData یک swiper-slide می‌شود
        return `
          <div class="swiper-slide">
            <h2 class="caption">
              <a href="#">${item.title}</a>
               <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(270)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </h2>
            ${productHTML}
          </div>
        `;
      })
      .join("");

    root.insertAdjacentHTML("afterbegin", result);

    // راه‌اندازی Swiper
    var swiper = new Swiper(".mySwiper12", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.3,
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
    console.log(error.message);
  }
}

export default slider12;
