import requests
from bs4 import BeautifulSoup

page_to_scrape = requests.get("https://feverup.com/en/san-francisco/candlelight")
soup = BeautifulSoup(page_to_scrape.text, "html.parser")
event_names = soup.findAll("h3", attrs={"class":"fv-plan-card-v2__title"})
prices = soup.findAll("span", attrs={"class":"fv-plan-card-v2__price-info"})

for name, price in zip(event_names, prices):
    print(name.text + ": " + price.text)