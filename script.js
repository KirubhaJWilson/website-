// Portfolio Generation
const portfolioForm = document.getElementById('portfolio-form');
if (portfolioForm) {
    portfolioForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const portfolioData = Object.fromEntries(formData.entries());

        // In a real application, you would generate a more complex portfolio page
        // For now, we'll just display the data in a new window
        const portfolioWindow = window.open('', '_blank');
        portfolioWindow.document.write('<html><head><title>Your Portfolio</title></head><body>');
        portfolioWindow.document.write('<h1>' + portfolioData.name + '</h1>');
        portfolioWindow.document.write('<p>Email: ' + portfolioData.email + '</p>');
        portfolioWindow.document.write('<p>Phone: ' + portfolioData.phone + '</p>');
        portfolioWindow.document.write('<p>LinkedIn: <a href="' + portfolioData.linkedin + '">' + portfolioData.linkedin + '</a></p>');
        portfolioWindow.document.write('<p>GitHub: <a href="' + portfolioData.github + '">' + portfolioData.github + '</a></p>');
        portfolioWindow.document.write('<h2>Skills</h2><p>' + portfolioData.skills + '</p>');
        portfolioWindow.document.write('<h2>Education</h2><p>' + portfolioData.education + '</p>');
        portfolioWindow.document.write('<h2>Experience</h2><p>' + portfolioData.experience + '</p>');
        portfolioWindow.document.write('<h2>Achievements</h2><p>' + portfolioData.achievements + '</p>');
        portfolioWindow.document.write('</body></html>');
    });
}

// Resume Generation
const resumeForm = document.getElementById('resume-form');
if (resumeForm) {
    resumeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real application, you would use a library like jsPDF and pdf-parse
        // to create and parse resumes. For now, we'll just show a success message.
        alert('Resume created/updated successfully!');
    });
}

// Admin Login
const adminLoginForm = document.getElementById('admin-login-form');
if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('admin-email').value;
        const password = document.getElementById('admin-password').value;

        // In a real application, you would validate the credentials against a database
        if (email === 'admin@example.com' && password === 'password') {
            window.location.href = 'admin.html';
        } else {
            alert('Invalid admin credentials.');
        }
    });
}
