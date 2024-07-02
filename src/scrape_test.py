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

def scrape_events():
    options = Options()
    # Comment out headless mode for debugging
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

    try:
        driver.get('https://liftingcast.com/')
        print("Page title:", driver.title)  # Debug: Print page title

        # Wait for the table rows to be present
        wait = WebDriverWait(driver, 10)
        rows = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, 'tbody tr')))
        print("Rows found:", len(rows))  # Debug: Print the number of rows found

        # Ensure the page is fully loaded
        time.sleep(5)

        # Parse the page source with BeautifulSoup
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        tbody = soup.find('tbody')
        events = []

        for row in tbody.find_all('tr'):
            event_name = row.find('td').find('a').text.strip()
            print("Event found:", event_name)  # Debug: Print each event name found
            events.append(event_name)

        return events
    except Exception as e:
        print(f"Error occurred during scraping: {e}")
        return []
    finally:
        driver.quit()

@app.route('/events', methods=['GET'])
def get_events():
    events = scrape_events()
    return jsonify(events)

if __name__ == '__main__':
    app.run(debug=True)
