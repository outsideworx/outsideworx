function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function updateLogoSize() {
    if (isMobileDevice()) {
        document.getElementById('toggleImage').width = 360;
    }
}

updateLogoSize();
