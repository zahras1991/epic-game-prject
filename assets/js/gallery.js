const mainContainer = document.querySelector('.main-image');
const thumbsContainer = document.querySelector('.thumbnails');
let images = [];
let current = 0;
let interval;

async function fetchImages() {
  try {
    const res = await fetch('https://zahras1991.github.io/epic-game-db/db.json');
    images = await res.json();
    
    renderGallery();
    startAutoPlay();
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}

function renderGallery() {
  mainContainer.innerHTML = '';
  thumbsContainer.innerHTML = '';

  images.slider1.forEach((img, i) => {
    mainContainer.insertAdjacentHTML('beforeend', `
      <div class="image ${i === 0 ? 'active' : ''}">
        <img src="${img.imgMain}" alt="${img.title}">
        <div class="layer">
          <div class="content">
            ${img.titlemain ? `<h2>${img.titlemain}</h2>` : ''}
            ${img.describ ? `<p>${img.describ}</p>` : ''}
            <div class="btns">
              ${img.button1 ? `<button class="button1"><a href="#">${img.button1}</a></button>` : ''}
              ${img.button2 ? `<button class="button2"><a href="#"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9L11.25 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H11.25V15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15L12.75 12.75H15C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H12.75V9Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#ffffff"></path> </g></svg>${img.button2}</a></button>` : ''}
            </div>
          </div>
        </div>
      </div>
    `);

    thumbsContainer.insertAdjacentHTML('beforeend', `
      <div class="thumb ${i === 0 ? 'active' : ''}" tabindex="0">
        <img src="${img.imgThumb}" alt="${img.title}">
        ${img.title ? `<p>${img.title}</p>` : ''}
      </div>
    `);
  });

  const thumbs = thumbsContainer.querySelectorAll('.thumb');
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      showImage(i);
      startAutoPlay();
    });
    thumb.addEventListener('focus', () => showImage(i));
  });
}

function showImage(index) {
  const slides = mainContainer.querySelectorAll('.image');
  const thumbs = thumbsContainer.querySelectorAll('.thumb');

  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  thumbs.forEach((t, i) => t.classList.toggle('active', i === index));

  current = index;
}

function startAutoPlay() {
  clearInterval(interval);
  interval = setInterval(() => {
    current = (current + 1) % images.slider1.length;
    showImage(current);
  }, 5000);
}


export default fetchImages;
