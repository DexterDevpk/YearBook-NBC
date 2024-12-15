
document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.querySelector(".gallery-container");

    // Array of gallery images (can be fetched dynamically via backend, if available)
    const imagePaths = [
        "./gallery/gallery 2.png",
        "./gallery/gallery 3.jpeg",
        "./gallery/gallery 4.jpeg",
        "./gallery/gallery 7.png",
        "./gallery/gallery 6.jpeg",
        "./gallery/gallery 5.jpeg"
    ];

    // Loop through the images and add them to the container
    imagePaths.forEach((path) => {
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";

        const img = document.createElement("img");
        img.src = path;
        img.alt = "Gallery Image";
        img.onclick = () => openPopup(path); // Popup functionality

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
});

// Popup functionality
function openPopup(imageSrc) {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
        <span class="close-btn" onclick="closePopup()">&times;</span>
        <img src="${imageSrc}" alt="Popup Image">
    `;
    document.body.appendChild(popup);
}

function closePopup() {
    const popup = document.querySelector(".popup");
    if (popup) popup.remove();
}
