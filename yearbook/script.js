// Initialize slider
const sliderImages = [
    "./gallery/gallery 7.png",
];

const slidesContainer = document.querySelector('.slides');

// Add images to the slider
sliderImages.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = "Slider Image";
    slidesContainer.appendChild(img);
});

let currentIndex = 0;

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 5000);

// Popup Logic
function openPopup(src) {
    console.log("Popup triggered with src:", src); // Debugging
    if (!src) return; // Do not open the popup if src is empty or invalid

    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    popup.style.display = 'flex';
    popupImage.src = src;
}

// Close the popup
function closePopup() {
    const popup = document.getElementById('imagePopup');
    popup.style.display = 'none';
}

// Ensure popup is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('imagePopup');
    popup.style.display = 'none'; // Explicitly hide the popup
});
