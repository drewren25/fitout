const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/marathons', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://findmymarathon.com/calendar-all.php', { waitUntil: 'networkidle2', timeout: 60000 });

    await page.waitForSelector('[itemprop="name"]');
    await page.waitForSelector('[itemprop="addressLocality"]');

    const events = await page.evaluate(() => {
      const eventElements = document.querySelectorAll('[itemprop="name"]');
      const locationElements = document.querySelectorAll('[itemprop="addressLocality"]');
      
      const eventList = [];
      eventElements.forEach((event, index) => {
        eventList.push({
          name: event.textContent.trim(),
          location: locationElements[index] ? locationElements[index].textContent.trim() : 'Location not found'
        });
      });
      
      return eventList;
    });

    await browser.close();

    console.log(events);
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while scraping');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
