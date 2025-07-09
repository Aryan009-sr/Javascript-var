document.addEventListener('DOMContentLoaded', () => {
    const strings = [
        "image1",
        "image2",
        "image3",
        "image4",
        "image5"
    ];

    let currentIndex = 0;
    const stringElement = document.getElementById('stringDisplay');
    const stopButton = document.getElementById('stopButton');
    const delay = 2000;
    let intervalId;

    function displayNextString() {
        stringElement.textContent = strings[currentIndex];
        currentIndex++;
        if (currentIndex > strings.length) {
            currentIndex = 0;
        }
    }

    function startSlideshow() {
        displayNextString(); // Display initial string
        intervalId = setInterval(displayNextString, delay);
    }

    function stopSlideshow() {
        clearInterval(intervalId);
        console.log("Slideshow stopped by button.");
    }

    startSlideshow(); // Start automatically when the page loads

    stopButton.addEventListener('click', stopSlideshow);
});