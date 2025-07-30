const puppeteer = require('puppeteer');

async function generatePortfolio(data) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const content = `
        <h1>${data.name}'s Portfolio</h1>
        <p>Email: ${data.email}</p>
        <p>Phone: ${data.phone}</p>
        <p>LinkedIn: ${data.linkedin}</p>
        <p>GitHub: ${data.github}</p>
        <h2>Skills</h2>
        <p>${data.skills}</p>
        <h2>Education</h2>
        <p>${data.education}</p>
        <h2>Experience</h2>
        <p>${data.experience}</p>
        <h2>Achievements</h2>
        <p>${data.achievements}</p>
    `;
    await page.setContent(content);
    const pdf = await page.pdf({ format: 'A4' });
    await browser.close();
    return pdf;
}

module.exports = generatePortfolio;
