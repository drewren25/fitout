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


def get_usapl_events():
    url = "https://www.usapowerlifting.com/calendar/"

    chrome_options = Options()
    #chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")

    driver = webdriver.Chrome(options=chrome_options)
    driver.get(url)
    print("here")
    wait = WebDriverWait(driver, 20)
    wait.until(EC.presence_of_element_located((By.CLASS_NAME, 'p-title')))
    page_source = driver.page_source
    soup = BeautifulSoup(page_source, 'html.parser')
    
    title = soup.find('h1', attrs={'class': 'p-title'})
    if title:
        print(title.get_text())
    else:
        print("Title not found")

    event_containers = soup.find_all('div', class_='vc_tta-panel')
    print(len(event_containers))

    events = []
    for event in event_containers[:10]:  # Limiting to first 10 events
        event_title_container = event.find('div', class_='event-title-container')
        if event_title_container:
            event_name = event_title_container.find('div', class_='event-name').text.strip()

            events.append({
                'name': event_name
            })

    driver.quit()

    for event in events:
        print(f"Name: {event['name']}")

if __name__ == '__main__':
    get_usapl_events()
