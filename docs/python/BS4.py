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

with open("prices.json", "w") as f:
    for item in data:
        f.write(json.dumps(item, separators=(",", ":"), ensure_ascii=False))
        f.write("\n")

        
    


#    for tr in tdsInBensin:
#        td = tr.find_all("td")
#
#        if len(td) >= 3:
#            station = td[0].get_text(strip = True)
#            address = td[1].get_text(strip = True)
#            price = td[2].get_text(strip = True)
#
#            data.append({
#               "station": station,
#               "address": address,
#               "price": price,
#               "type": "Bensín",
#               "id": str(station + address)
#            })
#
#    for trDisel in tdsInDisel:
#        tdDisel = trDisel.find_all("td")
#
#        if len(tdDisel) >= 3:
#            stationDisel = tdDisel[0].get_text(strip = True)
#            addressDisel = tdDisel[1].get_text(strip = True)
#            priceDisel = tdDisel[2].get_text(strip = True)
#
#            data.append({
#               "station": stationDisel,
#               "address": addressDisel,
#               "price": priceDisel,
#               "type": "Dísel",
#               "id": str(stationDisel + address)
#            })

#print(data)
#
#with open("test123", "w") as f:
#    json.dump(data, f, ensure_ascii=False, indent=4)

