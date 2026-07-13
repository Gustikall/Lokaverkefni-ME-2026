'use strict'

//hendir inn markerum eftir að hafa sótt viðeigandi gögn í json skjalið
async function loadData() {
    //Fastir markerar
    const markerar = await fetch("./js/markerar.json");
    const markerarData = await markerar.json();

    //nýja verðið
    const newPrices = await fetch("./js/prices.json");
    const pricesData = await newPrices.json()

    for (let cords of markerarData) {
        const coordinates = cords.cords;

        const info = pricesData.find(p => p.id === cords.id);

        addMarker(info, coordinates);
    }
}
loadData();

function addMarker(info, coordinates) {

    const key = info.station
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    const icon = iconMap[key] || "N/A";
    const layer = layerMap[key] || map;
    const phone = phoneMap[key] || "N/A";
    const link = linkMap[key] || "N/A";

    const markerGas = L.marker(coordinates, { icon })
        .bindPopup(`
            <strong>${info.station} - ${info.address}</strong><br>
            <strong>Bensín: ${info.bensin_price || "N/A"}, Dísel: ${info.disel_price || "N/A"}</strong><br>
            <a href="${link}"target="_blank">Vefsíða</a><br>
            <strong>Símanúmer: ${phone}</strong>
        `)
        .addTo(layer);
        layer.addTo(map)

        markerGas.on("click", function(e) {
            const pos = markerGas.getLatLng();
            map.setView(pos, zoomlevel)
        })
}

const N1link = "https://n1.is/is";
const orkanLink = "https://orkan.is/";
const atlantsoliaLink = "https://www.atlantsolia.is/"
const OBLink = "https://www.ob.is/";
const olisLink = "https://www.olis.is/";
const costcoLink = "https://www.costco.is/"

const N1phone = "440-1000";
const orkanPhone = "464-6000";
const atlantsoliaPhone = "591-3100";
const OBPhone = "515-1141";
const olisPhone = "515-1000";
const costcoPhone = "532-5555"

const olisIcon = L.icon({
    iconUrl: "img/Olis.png",
    iconSize: [32,32],
})

const N1icon = L.icon({
    iconUrl: "img/N1_logo.png",
    iconSize: [32,32],
})

const OBicon = L.icon({
    iconUrl: "img/ob-logo-a-gulu.png",
    iconSize: [32,32],
})
const orkanIcon = L.icon({
    iconUrl: "img/OrkanLogo.png",
    iconSize: [32,32],
})
const atlantsoliaIcon = L.icon({
    iconUrl: "img/AO.png",
    iconSize: [32,32],
})
const costcoIcon = L.icon({
    iconUrl: "img/costco.png",
    iconSize: [32,32],
})

const phoneMap = {
    olis: olisPhone,
    n1: N1phone,
    ob: OBPhone,
    orkan: orkanPhone,
    atlantsolia: atlantsoliaPhone,
    costco: costcoPhone
}

const linkMap = {
    olis: olisLink,
    n1: N1link,
    ob: OBLink,
    orkan: orkanLink,
    atlantsolia: atlantsoliaLink,
    costco: costcoLink
}

const iconMap = {
    olis: olisIcon,
    n1: N1icon,
    ob: OBicon,
    orkan: orkanIcon,
    atlantsolia: atlantsoliaIcon,
    costco: costcoIcon
}

const olisLayer = L.layerGroup()
const N1Layer = L.layerGroup()
const OBLayer = L.layerGroup()
const orkanLayer = L.layerGroup()
const atlantsoliaLayer = L.layerGroup()
const costcoLayer = L.layerGroup()

const layerMap = {
    olis: olisLayer,
    n1: N1Layer,
    ob: OBLayer,
    orkan: orkanLayer,
    atlantsolia: atlantsoliaLayer,
    costco: costcoLayer
}

const zoomlevel = 14

const costcoMarker = L.marker([64.07545732729858, -21.915240883827213],{icon: costcoIcon})
    .bindPopup(`
        <strong>Costco - Kauptún 3</strong><br>
        <strong>Bensín: 185.3, Dísel: 219.6</strong><br>
        <a href="${costcoLink}"target="_blank">Vefsíða</a><br>
        <strong>Símanúmer: ${costcoPhone}</strong>`
    ).addTo(costcoLayer);
    costcoLayer.addTo(map)

costcoMarker.on("click", function(e) {
    const pos = costcoMarker.getLatLng();
    map.setView(pos, zoomlevel)
})


layerControl.addOverlay(olisLayer, "Olís")
layerControl.addOverlay(N1Layer, "N1")
layerControl.addOverlay(OBLayer, "ÓB")
layerControl.addOverlay(orkanLayer, "Orkan")
layerControl.addOverlay(atlantsoliaLayer, "AtlantsOlía")
layerControl.addOverlay(costcoLayer, "Costco")