const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const generatePortfolio = require('./generate-portfolio');

app.post('/generate-portfolio', async (req, res) => {
    try {
        const pdf = await generatePortfolio(req.body);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Length': pdf.length,
            'Content-Disposition': 'attachment; filename=portfolio.pdf'
        });
        res.send(pdf);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating portfolio');
    }
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
