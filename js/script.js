// Call the welcomeMessage function when the script loads
welcomeMessage();

function welcomeMessage() {
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.id = 'welcome-modal';
    
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container-simple';
    
    // Create main heading
    const mainHeading = document.createElement('h2');
    mainHeading.className = 'modal-main-heading';
    mainHeading.textContent = 'Welcome to My Portfolio!';
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close-btn';
    closeBtn.innerHTML = '×';
    closeBtn.onclick = () => backdrop.remove();
    
    // Assemble modal
    modalContainer.appendChild(mainHeading);
    modalContainer.appendChild(closeBtn);
    backdrop.appendChild(modalContainer);
    
    // Add modal to page
    document.body.appendChild(backdrop);
    
    // Remove modal after 5 seconds or on click outside
    const autoCloseTimer = setTimeout(() => {
        backdrop.remove();
    }, 5000);
    
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            clearTimeout(autoCloseTimer);
            backdrop.remove();
        }
    });
}

// Scroll to Top functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Placeholder for form validation function
function validateForm() { }