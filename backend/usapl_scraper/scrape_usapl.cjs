const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// Function to convert date format from "Month abr DD, YYYY" to "MM/DD/YYYY"
function convertDateFormat(dateStr) {
  const months = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04',
    May: '05', Jun: '06', Jul: '07', Aug: '08',
    Sep: '09', Oct: '10', Nov: '11', Dec: '12'
  };

  const [monthAbr, day, year] = dateStr.split(' ');
  const month = months[monthAbr];
  const formattedDay = day.replace(',', '').padStart(2, '0');

  return `${month}/${formattedDay}/${year}`;
}

app.get('/usapl', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.usapowerlifting.com/calendar', { waitUntil: 'networkidle2', timeout: 60000 });

    await page.waitForSelector('.event-name');
    await page.waitForSelector('.event-info');
    await page.waitForSelector('.event-date');
    await page.waitForSelector('.event-button');

    const events = await page.evaluate(() => {
      const eventNames = document.querySelectorAll('.event-name');
      const eventInfos = document.querySelectorAll('.event-info');
      const eventDates = document.querySelectorAll('.event-date');
      const eventButtons = document.querySelectorAll('.event-button');

      const months = {
        Jan: '01', Feb: '02', Mar: '03', Apr: '04',
        May: '05', Jun: '06', Jul: '07', Aug: '08',
        Sep: '09', Oct: '10', Nov: '11', Dec: '12'
      };

      const convertDateFormat = (dateStr) => {
        const [monthAbr, day, year] = dateStr.split(' ');
        const month = months[monthAbr];
        const formattedDay = day.replace(',', '').padStart(2, '0');
        return `${month}/${formattedDay}/${year}`;
      };

      const eventList = [];

      eventNames.forEach((eventName, index) => {
        const name = eventName.textContent.trim();
        const info = eventInfos[index];
        const dateElement = eventDates[index];
        const buttonElement = eventButtons[index];

        // Find the registration link within the event-button
        const registrationLinkElement = buttonElement.querySelector('a');
        if (!registrationLinkElement || !registrationLinkElement.href) {
          return; // Skip this event if there's no registration link
        }

        const registrationLink = registrationLinkElement.href;

        // Extract location
        const locationElement = Array.from(info.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.includes('Location:'));
        let location = 'N/A';
        if (locationElement) {
          const textAfterLocation = locationElement.textContent.split('Location:')[1];
          location = textAfterLocation ? textAfterLocation.split('<br>')[0].trim() : 'N/A';
        }

        // Extract date
        const dateText = dateElement ? dateElement.textContent.trim() : 'N/A';
        const formattedDate = dateText !== 'N/A' ? convertDateFormat(dateText) : 'N/A';

        // Combine location and date
        const locationAndDate = `${location} | ${formattedDate}`;

        eventList.push({
          name,
          location: locationAndDate,
          registrationLink
        });
      });

      return eventList;
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
