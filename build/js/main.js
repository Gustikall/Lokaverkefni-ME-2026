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

const sameAsAbove = document.getElementById("places");
L.DomEvent.disableClickPropagation(sameAsAbove);

const aintNothingButGoddamnErrorsInThesePlacesOfTown = document.getElementById("routing");
L.DomEvent.disableClickPropagation(aintNothingButGoddamnErrorsInThesePlacesOfTown);

const theHolyBible = document.getElementById("theHolyBible");
L.DomEvent.disableClickPropagation(theHolyBible)

const genericVariableName = document.getElementById("place-control");
L.DomEvent.disableClickPropagation(genericVariableName)

const ImOutOfFunnyNamesForTheseVariables = document.getElementById("clearMarkersButton");
L.DomEvent.disableClickPropagation(ImOutOfFunnyNamesForTheseVariables)

const CantAWhiteBoyCatchAMoodInPeace = document.getElementById("clearLayers");
L.DomEvent.disableClickPropagation(CantAWhiteBoyCatchAMoodInPeace);
/////////////////////////////////////////////////


//Kortið sjálft --- Nota leaflet og ESRI
let map = L.map('kortið').setView([64.12895, -21.83516], 15);

let satallite = L.tileLayer('https://api.maptiler.com/maps/satellite-v4/256/{z}/{x}/{y}.jpg?key=XZxiehQLe57tQxNpZllB', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler &copy</a> <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>' 
})

let osm = L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=XZxiehQLe57tQxNpZllB', {
    attribution: '<a href="https://www.openstreetmap.org/copyright" target="_blank"> OpenStreetMap contributors</a>&copy; <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>'
})

let esri = L.esri.Vector.vectorBasemapLayer("arcgis/outdoor", {
    token: ARCGIStkn,
}).addTo(map);

//Þarf að fjarlæga zoomControlið og bæta því inn aftur einhverra hluta vegna
map.zoomControl.remove()
L.control.zoom({
    position: "bottomright"
}).addTo(map)
//////////////////////////////////////////////////////

//Layer Control
let baseLayers = {
    //position: bottomLeft,
    "Esri Map": esri,
    "OpenStreetMap": osm,
    "Satallite": satallite,
};
L.control.layers(baseLayers).addTo(map)


//Marker og function sem bætir við Markers
let markerIcon = L.icon({
    iconUrl: "img/push-pin.png",
    iconSize: [32,32],
})

let marker = L.marker({
    
})

//Setur takmark á hversu margir markerar geta verið á kortinu. Fjarlægir gömlu punktana þegar þröskuldnum er náð
const maxMarkers = 5;
const markersLimit = [];



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
        markersLimit.push(marker)
        if (markersLimit.length > maxMarkers){
            markerLayerGroup.removeLayer(markersLimit[0]);
            markersLimit.shift()
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

const addressSearchControl = L.control.addressSearch(key, {
  position: 'topleft',
  className: "searchBar",
    
  resultCallback: (address) => {
    console.log(address)

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

//Geoplaces
const layerGroup = L.layerGroup().addTo(map);

const control = document.getElementById("place-control");
const input = document.getElementById("search-input");
const placeKeywords = ["Restaurants", "Hotels", "Museums", "Gyms", "Gas"];

function showPlaces(text) {

    layerGroup.clearLayers();

    const bounds = map.getBounds();
    const topRight = bounds.getNorthEast();
    const bottomLeft = bounds.getSouthWest();

    arcgisRest.findPlacesWithinExtent({
        xmin: bottomLeft.lng,
        ymin: bottomLeft.lat,
        xmax: topRight.lng,
        ymax: topRight.lat,
        searchText: text,
        authentication
    })
    .then((response) => {
          response.results.forEach((result) => {
            const placesMarker = L.marker([result.location.y, result.location.x],{icon: markerIcon}).addTo(layerGroup);

            placesMarker.id = result.placeId;
            console.log(result)
            console.log(result.location.y, result.location.x, result.name)

            placesMarker.bindPopup(getDetails, {
                minWidth: 200,
            });            
        });
    });

    function getDetails(place) {
        const popup = document.createElement("div");

        arcgisRest.getPlaceDetails(({
        placeId: place.id,
        authentication,
        requestedFields: ["name", "address:streetAddress", "contactInfo:telephone"]
    }))
    .then((result) => {
        let popupContents = `<b>${result.placeDetails.name}</b><br>`;
        if (result.placeDetails.address.streetAddress) {popupContents += `${result.placeDetails.address.streetAddress}<br>`} else { popupContents += "Ekkert heimilisfang fannst <br>"};
        if (result.placeDetails.contactInfo.telephone) {popupContents += `${result.placeDetails.contactInfo.telephone}`} else{ popupContents += "Ekkert símanúmer fannst"}
        console.log(result.placeDetails.address.streetAddress)

        popup.innerHTML = popupContents;
    });

        return popup;
    };
};

document.getElementById("search-button").addEventListener("click", () => {
    showPlaces(input.value);
});

placeKeywords.forEach((category) => {
    const categoryButton = L.DomUtil.create("calcite-button", "category-button");
    categoryButton.setAttribute("round", true);
    categoryButton.setAttribute("scale", "s");
    categoryButton.setAttribute("kind", "inverse");
    categoryButton.setAttribute("margin", "2px")
    categoryButton.innerHTML = category;
    categoryButton.id = category;
    control.appendChild(categoryButton);

    categoryButton.addEventListener("click", function() {
        input.value = category;
        showPlaces(category);
    });

});

//Takki til að hreinsa út alla núverandi markera!
function clearMarkers() {
    markerLayerGroup.clearLayers();
}