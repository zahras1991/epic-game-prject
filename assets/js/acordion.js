let root = document.querySelector(".accordion");

async function acordion() {
  try {
    // گرفتن داده‌ها از JSON
    let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
    let res = await data.json();

    // ساخت آکاردیون‌ها
    let result = res.acordion
      .map((item, index) => {
        if (item.body && item.body.length > 0) {
          const bodyItems = item.body
            .map(
              (bod) => `
                <a href="${bod.href}" class="accordion-link">${bod.title}</a>
              `
            )
            .join("");

          return `
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading${index}">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#item${index}"
                  aria-expanded="false"
                  aria-controls="item${index}"
                >
                  ${item.title}
                </button>
              </h2>
              <div
                id="item${index}"
                class="accordion-collapse collapse"
                aria-labelledby="heading${index}"
                data-bs-parent="#myAccordion"
              >
                <div class="accordion-body">
                  ${bodyItems}
                </div>
              </div>
            </div>
          `;
        }
      })
      .join("");

    // افزودن به HTML
    root.insertAdjacentHTML("afterbegin", result);

    // راه‌اندازی Swiper (در صورت وجود در صفحه)
    if (document.querySelector(".mySwiper19")) {
      var swiper = new Swiper(".mySwiper19", {
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      });
    }
  } catch (error) {
    console.log("خطا در بارگذاری آکاردیون:", error.message);
  }
}

export default acordion;
