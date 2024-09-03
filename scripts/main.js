// Function to load an HTML file into a div
function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); // Call the callback function if provided
        })
        .catch(err => console.error('Failed to load file:', err));
}

// Function to set the active tab
function setActiveTab() {
    const currentPage = window.location.pathname.split("/").pop();
    const tabs = document.querySelectorAll('#tabs ul li a');

    tabs.forEach(tab => {
        const href = tab.getAttribute('href');
        if (href === currentPage) {
            tab.classList.add('active');
        }
    });
}

// Load the components and then set the active tab
document.addEventListener("DOMContentLoaded", function() {
    loadComponent('header', 'static/header.html');
    loadComponent('navbar', 'static/navbar.html', setActiveTab); // Pass setActiveTab as a callback
    loadComponent('footer', 'static/footer.html');
});
