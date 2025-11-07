let root = document.querySelector(".accordion");

async function acordion() {
  try {
    

  let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
  let res = await data.json();
  let result = res
    .acordion.map((item) => {
       if (item.body) {
       
          const bodyItems = item.body
            .map(
              (bod) => `
              
                 <a href="${bod.href}">${bod.title}</a>
                
              `
            )
            .join("");
          
      return `
       <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#item1"
              >
                <h2>${item.title}</h2>
              </button>
            </h2>
            <div
              id="item1"
              class="accordion-collapse collapse"
              data-bs-parent="#myAccordion"
            >
              <div class="accordion-body">
               ${bodyItems}
               
              </div>
            </div>
          </div>
       `;
    }})
    .join(" ");
  root.insertAdjacentHTML("afterbegin", result);
   
  //  swiper
     
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
  


    } catch (error) {
      console.log(error.massege);
    
  }
}
export default acordion;
