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

    await page.waitForSelector('.event-info'); // Update this selector to match your structure

    const events = await page.evaluate(() => {
      const eventElements = document.querySelectorAll('.event-info'); // Update this selector to match your structure
      return Array.from(eventElements).map(event => {
        const nameElement = event.querySelector('.event-name'); // Replace with actual selector for event name
        const locationElement = Array.from(event.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.includes('Location:'));

        let location = 'N/A';
        if (locationElement) {
          const textAfterLocation = locationElement.textContent.split('Location:')[1];
          location = textAfterLocation ? textAfterLocation.split('<br>')[0].trim() : 'N/A';
        }

        return { eventName: nameElement ? nameElement.textContent.trim() : 'Unknown', location };
      });
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
