const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/usapl', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.usapowerlifting.com/calendar', { waitUntil: 'networkidle2', timeout: 60000 });

    await page.waitForSelector('.event-name'); // Replace with actual selector for event items

    const events = await page.evaluate(() => {
      const eventElements = document.querySelectorAll('.event-name'); // Replace with actual selector
      return Array.from(eventElements).map(event => event.textContent.trim());
    });

    await browser.close();

    //console.log(events);
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while scraping');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
