// Sidebar Navigation Toggle
document.querySelectorAll('.nav-links li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.nav-links li.active').classList.remove('active');
        this.classList.add('active');
        
        // Optional: Smooth scroll to section if everything is on one page
        const sectionId = this.getAttribute('data-section');
        const element = document.getElementById(sectionId);
        if(element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Portfolio Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Switch active button
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        projects.forEach(project => {
            const category = project.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                project.style.display = 'block';
                project.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                project.style.display = 'none';
            }
        });
    });
    const contactForm = document.getElementById("contact-form");
const statusDiv = document.getElementById("form-status");
const submitBtn = document.getElementById("submit-btn");

async function handleContactSubmit(event) {
    event.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    const data = new FormData(event.target);

    fetch(event.target.action, {
        method: contactForm.method,
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            statusDiv.innerHTML = "✨ Message sent! I'll get back to you soon.";
            statusDiv.style.color = "#a21caf"; // Match your purple/pink theme
            contactForm.reset();
            submitBtn.innerHTML = "Message Sent";
        } else {
            statusDiv.innerHTML = "Oops! There was a problem. Please try again.";
            submitBtn.disabled = false;
            submitBtn.innerHTML = "Send Message";
        }
    }).catch(error => {
        statusDiv.innerHTML = "Connection error. Please try again later.";
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Send Message";
    });
}

contactForm.addEventListener("submit", handleContactSubmit);
});