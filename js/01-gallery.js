import { galleryItems } from './gallery-items.js';


// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector("div.gallery");

const galleryItem = galleryItems.map((item) => 
`<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>`
).join("");
console.log(galleryItem)
gallery.innerHTML = galleryItem;

gallery.addEventListener("click", (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute("data-source")}" width="800" height="600">
`)

instance.show()
})


