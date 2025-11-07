let nav = document.querySelector("ul.navbar-nav");

async function getData() {
  try {
    let response = await fetch("https://zahras1991.github.io/epic-game-db/db.json");
    let menuData = await response.json();

    let result = menuData
      .menu.map((item) => {
        
        // اگر زیرمنو داشت
        if (item.submenu && item.submenu.length > 0) {
       
          const subItems = item.submenu
            .map(
              (sub) => `
                <li><a class="dropdown-item" href="${sub.href}">${sub.title}</a></li>
              `
            )
            .join("");
         

          return `
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="${item.href}"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ${item.title}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                ${subItems}
              </ul>
            </li>
          `;
        } 
        // اگر زیرمنو نداشت
        else {
          return `
            <li class="nav-item">
              <a class="nav-link" href="${item.href}">${item.title}</a>
            </li>
          `;
        }
      })
      .join("");

    // درج در منو
    nav.insertAdjacentHTML("afterbegin", result);
  } catch (err) {
    console.error("Error fetching menu:", err.message);
  }
}


export default getData;
