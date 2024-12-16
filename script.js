// Function to enter full-screen mode
function enterFullscreen(image) {
    if (image.requestFullscreen) {
        image.requestFullscreen();
    } else if (image.webkitRequestFullscreen) { // Safari
        image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) { // IE/Edge
        image.msRequestFullscreen();
    }
}

// Optional: Add an event listener to exit full-screen mode (Esc key or swipe down on mobile)
document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        console.log("Exited full-screen mode");
    }
});
