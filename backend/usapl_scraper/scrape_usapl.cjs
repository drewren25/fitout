const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/usapl', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.usapowerlifting.com/calendar', { waitUntil: 'networkidle2' , timeout: 60000});

    // Wait for the content to load
    await page.waitForSelector('.p-title'); // Replace with actual selector for event items

    // Extract content
    const events = await page.evaluate(() => {
      const eventElements = document.querySelectorAll('.p-title'); // Replace with actual selector
      return Array.from(eventElements).map(event => event.textContent.trim());
    });

    await browser.close();

    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while scraping');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
