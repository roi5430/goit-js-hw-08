// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';



let items = galleryItems; 
const gallery = document.querySelector('.gallery');

const markup = items.reduce((acc, item) => acc + `
    <a class="gallery__item" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>`, '');


gallery.insertAdjacentHTML('beforeend', markup);
gallery.addEventListener('click', onClick);

function onClick(evt) {
       evt.preventDefault();
    if (evt.target === evt.currentTarget) return;

}

  let click = new SimpleLightbox(".gallery a", {
        captions: true,
        captionsData: "alt",
        captionDelay: 250,
    });

console.log(galleryItems);