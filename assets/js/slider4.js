let root = document.querySelector(".slider4 .swiper .swiper-wrapper");

async function slider4() {
  try {
    

  let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
  let res = await data.json();
  let result = res
   .slider4.map((item) => {
      return `
         <div class="swiper-slide">
            <div class="image">
              <img
                src="${item.imgsrc}"
                alt=""
              />
              <div class="layer">
                <span class="add">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z"
                        fill="#ffffff"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                        fill="#ffffff"
                      ></path>
                    </g></svg
                ></span>
              </div>
            </div>
            <div class="content">
              <p>${item.titlelit}</p>
              <h2>${item.titlebig}</h2>
              <div>
    ${item.off ? `<div class="off">${item.off}</div>` : ""}
    ${item.before ? `<span class="before">${item.before}</span>` : ""}
    ${item.after ? `<span class="after">${item.after}</span>` : ""}
    ${item.val ? `<span class="after">${item.val}</span>` : ""}
             
                
              </div>
            </div>
          </div>`;
    })
    .join(" ");
  root.insertAdjacentHTML("afterbegin", result);
   
   
      var swiper = new Swiper(".mySwiper4", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: true,
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
            slidesPerView: 4,
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
export default slider4;
