import requests
import json
from bs4 import BeautifulSoup
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
outputFile = BASE_DIR.parent / "js" / "prices.json"

# Hleður inn gögnin frá gsm bensín
urls = [
    "https://www.gsmbensin.is/gsmbensin_web.php?region=city",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=sv",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=s",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=a",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=n",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=vf",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=v"
]

soups = []

for url in urls:
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html5lib")
    soups.append(soup)

stations = {}

for soup in soups:
    fuel_types = [
        ("okt95", "bensin_price"),
        ("disel", "disel_price")
    ]

    for div_id, price_key in fuel_types:
        section = soup.find("div", {"id": div_id})
        if not section:
            continue

        for tr in section.find_all("tr"):
            tds = tr.find_all("td")

            if len(tds) >= 3:
                station = tds[0].get_text(strip=True)
                address = tds[1].get_text(strip=True)
                price = tds[2].get_text(strip=True)

                unique_id = station + address

                if unique_id not in stations:
                    stations[unique_id] = {
                        "station": station, "address": address,
                        "bensin_price": None,
                        "disel_price": None,
                        "id": unique_id
                    }

                stations[unique_id][price_key] = price

data = list(stations.values())

with open(outputFile, "w") as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
    print("123")


