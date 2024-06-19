from flask import Flask, jsonify
from flask_cors import CORS
from selenium import webdriver
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)

# (rest of the code remains the same)


@app.route('/events', methods=['GET'])
def get_events():
    # URL of the site to scrape
    url = "https://liftingcast.com/"
    
    # Set up the Selenium WebDriver
    driver = webdriver.Chrome()
    
    # Load the page
    driver.get(url)
    
    # Wait for the page to load
    driver.implicitly_wait(10)
    
    # Get the page source
    page_source = driver.page_source
    
    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(page_source, 'html.parser')
    
    # Find the tbody containing the event rows
    tbody = soup.find('tbody')
    
    event_names = []
    if tbody:
        # Find all tr elements within the tbody
        rows = tbody.find_all('tr')
        
        # Iterate through each row and extract the event names
        for row in rows:
            # Find the td containing the a tag
            event_link = row.find('a')
            if event_link:
                # Extract the event name from the a tag
                event_names.append(event_link.get_text())
    
    # Close the driver
    driver.quit()
    
    # Return the event names as JSON
    return jsonify(event_names)

if __name__ == '__main__':
    app.run(debug=True)
