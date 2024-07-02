from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

# URL of the site to scrape
url = "https://findmymarathon.com/calendar-all.php"

# Set up the Selenium WebDriver with headless Chrome
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--disable-gpu")
chrome_options.add_argument("--no-sandbox")
chrome_options.add_argument("--disable-dev-shm-usage")

driver = webdriver.Chrome(options=chrome_options)

# Set up the Selenium WebDriver (make sure to have the appropriate WebDriver installed, e.g., ChromeDriver)
driver = webdriver.Chrome()

# Load the page
driver.get(url)

# Wait for the page to load (you may need to add more sophisticated waits)
driver.implicitly_wait(10)

# Get the page source
page_source = driver.page_source

# Parse the HTML content with BeautifulSoup
soup = BeautifulSoup(page_source, 'html.parser')

# Find all spans with the itemprop "name"
race_spans = soup.find_all('span', itemprop='name')

# Extract the text from each span and print it
race_names = [span.get_text() for span in race_spans]

# Print the race names
for race in race_names:
    print(race)

# Close the driver
driver.quit()
