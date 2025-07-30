const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/generate-portfolio', (req, res) => {
    const { name, email, phone, linkedin, github, skills, education, experience, achievements } = req.body;
    // In a real application, you would use a library like Puppeteer or PDFKit to generate a PDF portfolio
    // For this example, we'll just send back a simple HTML page
    res.send(`
        <h1>${name}'s Portfolio</h1>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>LinkedIn: ${linkedin}</p>
        <p>GitHub: ${github}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Experience</h2>
        <p>${experience}</p>
        <h2>Achievements</h2>
        <p>${achievements}</p>
    `);
});

app.post('/create-resume', (req, res) => {
    const { 'resume-file': resumeFile, 'resume-text': resumeText } = req.body;
    // In a real application, you would use a library like Multer to handle file uploads and a library like pdf-parse or docx to parse the resume
    // For this example, we'll just send back a simple confirmation message
    res.send('Resume created/updated successfully!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
