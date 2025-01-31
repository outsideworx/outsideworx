const images = ['assets/img/logo/logo1.webp', 'assets/img/logo/logo2.webp', 'assets/img/logo/logo3.webp'];

const imageElement = document.getElementById('toggleImage');

let currentIndex = 0;

function toggleImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

toggleImage();
setInterval(toggleImage, 250);
