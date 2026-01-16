// Call the welcomeMessage function when the script loads
welcomeMessage();

function welcomeMessage() {
    // Create modal backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.id = 'welcome-modal';
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const heading = document.createElement('h2');
    heading.textContent = 'Selamat Datang!';
    
    const message = document.createElement('p');
    message.textContent = 'Selamat datang di website portofolio saya. Semoga Anda menikmati kunjungan Anda!';
    
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