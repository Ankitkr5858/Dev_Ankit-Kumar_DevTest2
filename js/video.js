// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const openModal1 = document.getElementById("openModal"); // Button with class play-btn1
    const openModal2 = document.getElementById("openModal2"); // Button with class play-btn
    const videoModal = document.getElementById("videoModal"); // Modal container
    const closeModal = document.getElementById("closeModal"); // Close button
    const popupVideo = document.getElementById("popupVideo"); // Video element

    // Function to open modal and play the video
    function openVideoModal() {
        videoModal.style.display = "block";
        popupVideo.play();
    }

    // Function to close modal and pause the video
    function closeVideoModal() {
        videoModal.style.display = "none";
        popupVideo.pause();
        popupVideo.currentTime = 0; // Reset the video playback
    }

    // Add click event listeners to open buttons
    openModal1.addEventListener("click", openVideoModal);
    openModal2.addEventListener("click", openVideoModal);

    // Add click event listener to close button
    closeModal.addEventListener("click", closeVideoModal);

    // Close modal when clicking outside the video
    window.addEventListener("click", function (event) {
        if (event.target === videoModal) {
            closeVideoModal();
        }
    });
});
