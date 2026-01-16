// Call the welcomeMessage function when the script loads
welcomeMessage();

function welcomeMessage() {
    // Check if we're on the portfolio page
    const portfolioPage = document.getElementById("portfolio-page");
    
    if (portfolioPage) {
        // Create modal backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';
        backdrop.id = 'welcome-modal';
        
        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        const heading = document.createElement('h2');
        heading.textContent = 'Selamat Datang di Halaman Portofolio Saya!';
        
        const message = document.createElement('p');
        message.textContent = 'Jelajahi karya-karya terbaik saya di sini!';
        
        modalContent.appendChild(heading);
        modalContent.appendChild(message);
        backdrop.appendChild(modalContent);
        
        // Add modal to page
        document.body.appendChild(backdrop);
        
        // Remove modal after 3 seconds
        setTimeout(() => {
            backdrop.remove();
        }, 3000);
    }
}

// Placeholder for form validation function
function validateForm() { }