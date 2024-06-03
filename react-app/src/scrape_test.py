import requests
from bs4 import BeautifulSoup

page_to_scrape = requests.get("https://liftingcast.com/")
soup = BeautifulSoup(page_to_scrape.text, "html.parser")
event_names = soup.findAll("div", attrs={"class":"table-title"})

for name in event_names:
    print(name.text)