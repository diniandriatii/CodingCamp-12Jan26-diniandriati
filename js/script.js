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
function validateForm() { 
    // Live Preview Logic
const form = document.getElementById('contactForm');
const inputs = ['name', 'email', 'subject', 'message'];

inputs.forEach(id => {
    const inputEl = document.getElementById(id);
    const previewEl = document.getElementById(`preview-${id}`);
    
    inputEl.addEventListener('input', () => {
        previewEl.textContent = inputEl.value || '-';
    });
});

// Form Validation
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name.length < 3) {
        alert('Nama harus minimal 3 karakter');
        return false;
    }
    
    // Basic Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Mohon masukkan format email yang valid');
        return false;
    }

    alert(`Terima kasih ${name}! Pesan Anda telah terkirim (Simulasi).`);
    form.reset();
    
    // Reset Previews
    inputs.forEach(id => {
        document.getElementById(`preview-${id}`).textContent = '-';
    });
    
    return true;
}
}

// Fungsi untuk sinkronisasi input dengan Live Preview
function initLivePreview() {
    const inputs = [
        { inputId: 'name', previewId: 'preview-name' },
        { inputId: 'email', previewId: 'preview-email' },
        { inputId: 'subject', previewId: 'preview-subject' },
        { inputId: 'message', previewId: 'preview-message' }
    ];

    inputs.forEach(item => {
        const inputElement = document.getElementById(item.inputId);
        const previewElement = document.getElementById(item.previewId);

        if (inputElement && previewElement) {
            inputElement.addEventListener('input', () => {
                previewElement.textContent = inputElement.value || "-";
            });
        }
    });
}

// Jalankan fungsi setelah DOM dimuat
document.addEventListener('DOMContentLoaded', initLivePreview);

// Fungsi Validasi Form (Sesuai permintaan sebelumnya)
function validateForm(event) {
    event.preventDefault();
    
    // Ambil Data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Tampilkan di Box Hasil Submit
    const submittedBox = document.getElementById('submitted-box');
    const displayResult = document.getElementById('display-result');
    
    submittedBox.classList.remove('hidden');
    displayResult.innerHTML = `
        <div class="result-text">
            <strong>Dari:</strong> ${name} (${email})<br>
            <strong>Hal:</strong> ${subject}<br>
            <strong>Pesan:</strong> ${message}
        </div>
    `;

    // Alert Sukses
    alert("Pesan Anda telah berhasil disimpan di bawah!");

    // Reset Form dan Preview
    event.target.reset();
    ['preview-name', 'preview-email', 'preview-subject', 'preview-message'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.textContent = "-";
    });
}