// Resume page functionality
const createFromPortfolioButton = document.getElementById('create-from-portfolio');
const uploadResumeButton = document.getElementById('upload-resume');
const resumeForm = document.getElementById('resume-form');

if (createFromPortfolioButton) {
    createFromPortfolioButton.addEventListener('click', () => {
        // In a real application, you would fetch the portfolio data and pre-fill the form
        resumeForm.style.display = 'block';
    });
}

if (uploadResumeButton) {
    uploadResumeButton.addEventListener('click', () => {
        resumeForm.style.display = 'block';
    });
}
