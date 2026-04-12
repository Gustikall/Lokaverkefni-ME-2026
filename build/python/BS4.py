import requests
import json
from bs4 import BeautifulSoup

# Hleður inn gögnin frá gsm bensín
urls = [
    "https://www.gsmbensin.is/gsmbensin_web.php?region=city",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=sv",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=v",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=vf",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=n",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=a",
    "https://www.gsmbensin.is/gsmbensin_web.php?region=s"
]

soups = []

for url in urls:
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html5lib")
    soups.append(soup)


data = []

for soup in soups:
    bensin = soup.find("div", {"id": "okt95"})
    disel = soup.find("div", {"id": "disel"})

    tdsInBensin = bensin.find_all("tr")
    tdsInDisel = disel.find_all("tr")

    for tr in tdsInBensin:
        td = tr.find_all("td")

        if len(td) >= 3:
            station = td[0].get_text(strip = True)
            address = td[1].get_text(strip = True)
            price = td[2].get_text(strip = True)

            data.append({
               "station": station,
               "address": address,
               "price": price,
               "type": "Bensín",
               "id": str(station + address)
            })

    for trDisel in tdsInDisel:
        tdDisel = trDisel.find_all("td")

        if len(tdDisel) >= 3:
            stationDisel = tdDisel[0].get_text(strip = True)
            addressDisel = tdDisel[1].get_text(strip = True)
            priceDisel = tdDisel[2].get_text(strip = True)

            data.append({
               "station": stationDisel,
               "address": addressDisel,
               "price": priceDisel,
               "type": "Dísel",
               "id": str(stationDisel + address)
            })

print(data)

with open("prices.json", "w") as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

