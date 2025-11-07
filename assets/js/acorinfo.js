let root = document.querySelector(".acorinfo");

async function acorinfo() {
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
        <div class="card">
            <h2>${item.title}</h2>
            <div class="body">
             ${bodyItems}
            </div>
          </div>`;
    }})
    .join(" ");
  root.insertAdjacentHTML("afterbegin", result);
   
 


    } catch (error) {
      console.log(error.massege);
    
  }
}
export default acorinfo;
