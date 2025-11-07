let root = document.querySelector(".slider11 .swiper .swiper-wrapper");

async function slider11() {
  try {
    

  let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
  let res = await data.json();
  let result = res
    .slider11.map((item) => {
      return `
         <div class="swiper-slide">
            <div class="image">
              <img
                src="${item.imgsrc}"
                alt="${item.alt}"
              />
            ${item.free ?  `<div class="layer">Free Now</div>`:""};
             ${item.Soon ?  `<div class="layer2">comming Soon</div>`:""};
            </div>
            <div class="content">
            <p>Base Game</p>
              <h2>${item.titlebig}</h2>
              <p>${item.titlelit}</p>
            </div>
          </div>`;
    })
    .join(" ");
  root.insertAdjacentHTML("afterbegin", result);
   
  


    } catch (error) {
      console.log(error.massege);
    
  }
}
export default slider11;
