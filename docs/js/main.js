'use strict'
//Sækir API lykil frá Geoapify
const key = "63bf8fb801294b10a0bbcfd1ef6013d3"
const ARCGIStkn = "AAPTabQVrqpvyHjnU0anNSfHQeg..e2RE0GIEdh28oDqlqr1B8EsgULZr9VU2eSUIc0wEZoAhHaKdcGaqgwKYCKcamEp8e7EjzlJiaxJ6Lv9wAW5AiRheK9wEaCQHxZMokxW0e8rTtw4b3q-jVr931CjYW8qUS3Xo-Q8-HarRzenfjTOynBRw_AAxaz4vNzu65mAuKYUw6csvKpTag_LwzGGBzIQAfNEbRDKuNTuIWrRHt0WZKSqo0wXAs6Gv5GkbZmhFu0hLWBHl_KloEPnyoTPaAT1_QorSi3bU"
const authentication = arcgisRest.ApiKeyManager.fromKey(ARCGIStkn);

const fromWaypoint = [0,0]
const toWaypoint = [0,0]
fetch(`https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(',')}|${toWaypoint.join(',')}&mode=drive&apiKey=${key}`).then(res => res.json()).then(result => {})


//Það á sér engin marker virkni á bakvið þessi html element. Veldur pöddufaraldri(bugs) ef þetta er ekki til staðar
const noMouseClickingAroundThesePartsOfTown = document.getElementById("questionMark");
L.DomEvent.disableClickPropagation(noMouseClickingAroundThesePartsOfTown);

const thereAintNothingButGoddamnedErrorsAround = document.getElementById("infobar");
L.DomEvent.disableClickPropagation(thereAintNothingButGoddamnedErrorsAround)

const anotherGenericAndLongVariableNameForDisablingClickPropagation = document.getElementById("gasPrices");
L.DomEvent.disableClickPropagation(anotherGenericAndLongVariableNameForDisablingClickPropagation)

//const genericVariableName = document.getElementById("place-control");
//L.DomEvent.disableClickPropagation(genericVariableName)

//const ImOutOfFunnyNamesForTheseVariables = document.getElementById("clearMarkersButton");
//L.DomEvent.disableClickPropagation(ImOutOfFunnyNamesForTheseVariables)
/////////////////////////////////////////////////


//Kortið sjálft --- Nota leaflet og ESRI
let map = L.map('kortið', {
    attributionControl: false,
    center: [64.12895, -21.83516],
    zoom: 13,
    minZoom: 7,
    maxZoom: 18,
});
L.control.attribution({position: "topleft"}).addTo(map)

let satallite = L.tileLayer('https://api.maptiler.com/maps/satellite-v4/256/{z}/{x}/{y}.jpg?key=XZxiehQLe57tQxNpZllB', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler &copy</a> <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>' 
}).addTo(map);

let osm = L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=XZxiehQLe57tQxNpZllB', {
    attribution: '<a href="https://www.openstreetmap.org/copyright" target="_blank"> OpenStreetMap contributors</a>&copy; <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>'
})

let esri = L.esri.Vector.vectorBasemapLayer("arcgis/outdoor", {
    token: ARCGIStkn,
})

//Þarf að fjarlæga zoomControlið og bæta því inn aftur einhverra hluta vegna til að færa það um stað
map.zoomControl.remove()
L.control.zoom({
    position: "topleft"
}).addTo(map)
//////////////////////////////////////////////////////

//Layer Control
let baseLayers = {
    "Esri Map": esri,
    "OpenStreetMap": osm,
    "Satallite": satallite,
};
const layerControl = L.control.layers(baseLayers).addTo(map)

//Marker og function sem bætir við Markers
let markerIcon = L.icon({
    iconUrl: "img/push-pin.png",
    iconSize: [32,32],
})

let marker = L.marker({
    
})

//Setur takmark á hversu margir markerar geta verið á kortinu. Fjarlægir gömlu punktana þegar þröskuldnum er náð
const maxMarkers = 1;
const markersArray = [];


//Basic Markerar
const markerLayerGroup = L.layerGroup().addTo(map);
const geocodeService = L.esri.Geocoding.geocodeService();

map.on("click", function(pos) {
    L.esri.Geocoding.reverseGeocode({
        apikey: ARCGIStkn
    }).latlng(pos.latlng).run(function(error, result){
        if (error){
            return;
        }

        let marker = L.marker(result.latlng,{draggable:true, icon:markerIcon}).addTo(map).bindPopup(`<b>${result.address.Match_addr}</b>`, {direction: "top", offset: [0,-15], riseOnHover: true}).openPopup().addTo(markerLayerGroup);
        markersArray.push(marker)
        if (markersArray.length > maxMarkers){
            markerLayerGroup.removeLayer(markersArray[0]);
            markersArray.shift()
        }
        map.setView(result.latlng)
        console.log(result.address.Match_addr, pos.latlng)
        
        marker.on("dragend", function() {
            let newPos = marker.getLatLng();

            L.esri.Geocoding.reverseGeocode({
                apikey: ARCGIStkn
            }).latlng(newPos).run(function(error, result){
                if (error){
                    return;
                }
                
                marker.bindPopup(`<b>${result.address.Match_addr}</b>`, {direction: "top", offset: [0,-15], riseOnHover: true}).openPopup()
                map.setView(newPos)
                console.log(newPos)
            })
        })
        
    })
})


//Address Searcher
const addressSearchControl = L.control.addressSearch(key, {
  position: 'topleft',
  className: "searchBar",
    
  resultCallback: (address) => {
    console.log(address.lat, ",", address.lon)

    if (marker) {
      marker.remove();
    }
    
    if (!address) {
      return;
    }

    marker = L.marker([address.lat, address.lon], {icon: markerIcon}).addTo(map);
    marker.bindTooltip(address.address_line1 + "<br>" + address.address_line2, {direction: "top", offset: [0,-15]}).openPopup();
    if (address.bbox && address.bbox.lat1 !== address.bbox.lat2 && address.bbox.lon1 !== address.bbox.lon2) {
      map.fitBounds([[address.bbox.lat1, address.bbox.lon1], [address.bbox.lat2, address.bbox.lon2]], { padding: [100, 100] })
    } else {
      map.setView([address.lat, address.lon], 15);
    }
  },
});
map.addControl(addressSearchControl);

//Verð sortari -----------------------------------------------
const gasPricesArr = [];
const dieselPricesArr = [];

async function priceSorter() {
    const getPrices = await fetch ("js/prices.json")
    const pricesFetched = await getPrices.json()

    for (let prices of pricesFetched){
        gasPricesArr.push({
            price: prices.bensin_price,
            station: prices.station,
            address: prices.address
        });

        dieselPricesArr.push({
            price: prices.disel_price,
            station: prices.station,
            address: prices.address
        });
    }

    const gasSorter = gasPricesArr.sort((a,b) => a - b)
    const dieselSorter = dieselPricesArr.sort((a,b) => a - b)

    /*
    const sorterGas = document.getElementById("sorterGas")
    const sorterDiesel = document.getElementById("sorterDiesel")
    sorterGas.innerHTML = `
        <span class="price">${price}</span>
        <span class="brand">${brand}</span>
        <span class="location">${location}</span>
    `;
    */
    document.getElementById("gas1").textContent =" " + `${gasPricesArr[0].price} kr. - ${gasPricesArr[0].station} - ${gasPricesArr[0].address}`;
    document.getElementById("gas2").textContent =" " + `${gasPricesArr[1].price} kr. - ${gasPricesArr[1].station} - ${gasPricesArr[1].address}`;
    document.getElementById("gas3").textContent =" " + `${gasPricesArr[2].price} kr. - ${gasPricesArr[2].station} - ${gasPricesArr[2].address}`;
    document.getElementById("gas4").textContent =" " + `${gasPricesArr[3].price} kr. - ${gasPricesArr[3].station} - ${gasPricesArr[3].address}`;
    document.getElementById("gas5").textContent =" " + `${gasPricesArr[4].price} kr. - ${gasPricesArr[4].station} - ${gasPricesArr[4].address}`;
    document.getElementById("gas6").textContent =" " + `${gasPricesArr[5].price} kr. - ${gasPricesArr[5].station} - ${gasPricesArr[5].address}`;
    document.getElementById("gas7").textContent =" " + `${gasPricesArr[6].price} kr. - ${gasPricesArr[6].station} - ${gasPricesArr[6].address}`;
    document.getElementById("gas8").textContent =" " + `${gasPricesArr[7].price} kr. - ${gasPricesArr[7].station} - ${gasPricesArr[7].address}`;
    document.getElementById("gas9").textContent =" " + `${gasPricesArr[8].price} kr. - ${gasPricesArr[8].station} - ${gasPricesArr[8].address}`;
    document.getElementById("gas10").textContent =" " + `${gasPricesArr[9].price} kr. - ${gasPricesArr[9].station} - ${gasPricesArr[9].address}`;

    //-------------------------------------------------------------------------------------------------------------------------------------------------------

    document.getElementById("diesel1").textContent =" " + `${dieselPricesArr[0].price} kr. - ${dieselPricesArr[0].station} - ${dieselPricesArr[0].address}`;
    document.getElementById("diesel2").textContent =" " + `${dieselPricesArr[1].price} kr. - ${dieselPricesArr[1].station} - ${dieselPricesArr[1].address}`;
    document.getElementById("diesel3").textContent =" " + `${dieselPricesArr[2].price} kr. - ${dieselPricesArr[2].station} - ${dieselPricesArr[2].address}`;
    document.getElementById("diesel4").textContent =" " + `${dieselPricesArr[3].price} kr. - ${dieselPricesArr[3].station} - ${dieselPricesArr[3].address}`;
    document.getElementById("diesel5").textContent =" " + `${dieselPricesArr[4].price} kr. - ${dieselPricesArr[4].station} - ${dieselPricesArr[4].address}`;
    document.getElementById("diesel6").textContent =" " + `${dieselPricesArr[5].price} kr. - ${dieselPricesArr[5].station} - ${dieselPricesArr[5].address}`;
    document.getElementById("diesel7").textContent =" " + `${dieselPricesArr[6].price} kr. - ${dieselPricesArr[6].station} - ${dieselPricesArr[6].address}`;
    document.getElementById("diesel8").textContent =" " + `${dieselPricesArr[7].price} kr. - ${dieselPricesArr[7].station} - ${dieselPricesArr[7].address}`;
    document.getElementById("diesel9").textContent =" " + `${dieselPricesArr[8].price} kr. - ${dieselPricesArr[8].station} - ${dieselPricesArr[8].address}`;
    document.getElementById("diesel10").textContent =" " + `${dieselPricesArr[9].price} kr. - ${dieselPricesArr[9].station} - ${dieselPricesArr[9].address}`;
    
}
priceSorter();

const hamburgerButton = document.getElementById("hamburgerMenu");
const priceASC = document.getElementById("gasPrices");
let burgerMenuCounter = 1;

hamburgerButton.addEventListener("click", function(){
    burgerMenuCounter % 2 === 0 ? priceASC.classList.add("sudoInvisible") : priceASC.classList.remove("sudoInvisible")
    burgerMenuCounter ++
    console.log(burgerMenuCounter)
})


//-------------------------------------------------------------


//Takki til að hreinsa út alla núverandi markera!
function clearMarkers() {
    markerLayerGroup.clearLayers();
}

//Navigator GeolocationAPI
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude
        const lng = pos.coords.longitude

        map.setView([lat,lng], zoomlevel)

        L.marker([lat,lng],{icon:markerIcon}).addTo(map).bindPopup("Þú ert hér!").openPopup();

        L.circle([lat,lng], {
            color: "blue",
            radius: 2000,
        }).addTo(map)
    })
}

//Decluttering! - Kemur seinna
map.on("zoomstart", function(){
    console.log(map.getZoom());
    
    const bounds = map.getBounds();
    //North
    const NW = bounds.getNorthWest();
    const NWLat = NW.lat;
    const NWLng = NW.lng;

    const NE = bounds.getNorthEast();
    const NELat = NE.lat;
    const NELng = NE.lng;
    //South
    const SW = bounds.getSouthWest();
    const SWLat = SW.lat;
    const SWLng = SW.lng;

    const SE = bounds.getSouthEast();
    const SELat = SE.lat;
    const SELng = SE.lng;

    const testMarkerCordsLat = 64.12120610627507;
    const testMarkerCordsLng = -21.87060356140137;
    console.log(bounds)
    const testMarker = L.marker([testMarkerCordsLat, testMarkerCordsLng], {icon:markerIcon, iconSize:[128,128]})

    if (testMarkerCordsLat  <= NWLat && testMarkerCordsLat >= SELat /*&& testMarkerCordsLng <= NWLng && testMarkerCordsLat <= NELat && testMarkerCordsLng <= NELng && testMarkerCordsLat >= SWLat && testMarkerCordsLng >= SWLng && testMarkerCordsLat >= SELat && testMarkerCordsLng >= SELng*/){
        testMarker.addTo(map).bindPopup("Þetta virkaði!")
    }else{
        console.log("Virkaði ekki!")
    }

    if (testMarkerCordsLat >= NWLat && testMarkerCordsLat <= SELat){
        testMarker.remove()
        console.log("Marker fjarlæðgur")
    }
})
