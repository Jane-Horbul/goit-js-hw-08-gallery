import galleryItems from "./gallery-items.js";

const galleryItem = document.createElement("li");

for (let el of galleryItems) document.querySelector('.js-gallery')
  .insertAdjacentHTML('beforeEnd', 
  `<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
  <img 
    class="gallery__image" 
    src="${el.preview}" 
    data-source="${el.original}"
    alt="${el.description}" 
    />
  </a>
  </li>`
  );

  const refs = {
gallery: document.querySelector('.js-gallery'),
largeImage: document.querySelector('.js-large-image')
  };

  refs.gallery.addEventListener('click', onGalleryClick);

  function onGalleryClick(event) {
      event.preventDefault();

      console.log(event.target);

      if (event.target.nodeName !== 'IMG') {
          return;
      }

      const imageRef = event.target;
const largeImageURL = imageRef.dataset.source;

      console.log(largeImageURL);

      refs.largeImage.src = largeImageURL;

  }