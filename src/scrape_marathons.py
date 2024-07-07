from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import time
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def scrape_marathons():
    options = Options()
    # Comment out headless mode for debugging
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

    try:
        driver.get("https://findmymarathon.com/calendar-all.php")
        print("Page title:", driver.title)  # Debug: Print page title

        # Ensure the page is fully loaded
        time.sleep(5)

        # Parse the page source with BeautifulSoup
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        race_name_spans = soup.find_all('span', itemprop='name')
        events = []

        # Extract the text from each name span and print it
        race_names = [span.get_text() for span in race_name_spans]

        for race_name in race_names:
            print("Event found:", race_name)  # Debug: Print each event name found
            events.append(race_name)

        return events
    except Exception as e:
        print(f"Error occurred during scraping: {e}")
        return []
    finally:
        driver.quit()

@app.route('/marathons', methods=['GET'])
def get_events():
    races = scrape_marathons()
    return jsonify(races)

if __name__ == '__main__':
    app.run(port=5001, debug=True)
