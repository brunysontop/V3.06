// Function to load saved title and favicon from localStorage
function loadSavedSettings() {
    const savedTitle = localStorage.getItem('customTitle');
    const savedFavicon = localStorage.getItem('customFavicon');

    if (savedTitle) {
        document.title = savedTitle;
        document.getElementById('customTitle').value = savedTitle; // Pre-fill input
    }

    if (savedFavicon) {
        document.getElementById('favicon').href = savedFavicon;
        document.getElementById('customFavicon').value = savedFavicon; // Pre-fill input
    }
}

// Function to change the favicon and title and save them to localStorage
function changeFaviconAndTitle() {
    // Get values from input fields
    const newTitle = document.getElementById('customTitle').value;
    const newFavicon = document.getElementById('customFavicon').value;

    // Change the title if it's not empty
    if (newTitle) {
        document.title = newTitle;
        localStorage.setItem('customTitle', newTitle); // Save to localStorage
    }

    // Change the favicon if it's a valid URL
    if (newFavicon) {
        const favicon = document.getElementById('favicon');
        favicon.href = newFavicon;
        localStorage.setItem('customFavicon', newFavicon); // Save to localStorage
    }
}

// Load saved settings when the page loads
window.onload = loadSavedSettings;