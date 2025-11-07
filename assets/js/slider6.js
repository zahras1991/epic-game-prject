let root = document.querySelector(".slider6 .swiper .swiper-wrapper");

async function slider6() {
  try {
    

  let data = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
  let res = await data.json();
  let result = res
    .slider6.map((item) => {
      return `
         <div class="swiper-slide">
            <div class="image">
              <img
                src="${item.imgsrc}"
                alt="${item.alt}"
              />
            ${item.free ?  `<div class="layer1">Free Now</div>`:""};
             ${item.Soon ?  `<div class="layer2">comming Soon</div>`:""};
            </div>
            <div class="content">
              <h2>Fear the Spotlight</h2>
              <p>Free Now - Oct 30 at 06:30 PM</p>
            </div>
          </div>`;
    })
    .join(" ");
  root.insertAdjacentHTML("afterbegin", result);
   
  


    } catch (error) {
      console.log(error.massege);
    
  }
}
export default slider6;
