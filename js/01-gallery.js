import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryUlEl = document.querySelector(".gallery");

galleryUlEl.innerHTML = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");

galleryUlEl.addEventListener("click", onImg);

function onImg(event) {
  event.preventDefault();

  if (event.target.classList.value !== "gallery__image") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="1280" height="auto">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = event.code === ESC_KEY_CODE;
    if (event.code !== "Escape") return;
    instance.close();
  }
}
