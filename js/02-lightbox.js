import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryUlEl = document.querySelector(".gallery");

galleryUlEl.innerHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  })
  .join("");

let lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
lightbox.on("show.simplelightbox");
