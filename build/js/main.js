'use strict'

//Sækir API lykil frá Geoapify
const key = "63bf8fb801294b10a0bbcfd1ef6013d3"

var requestOptions = {
  method: 'GET',
};

fetch("https://api.geoapify.com/v1/geocode/search?text=38%20Upper%20Montagu%20Street%2C%20Westminster%20W1H%201LJ%2C%20United%20Kingdom&apiKey=63bf8fb801294b10a0bbcfd1ef6013d3", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

const fromWaypoint = [0,0]
const toWaypoint = [0,0]
fetch(`https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(',')}|${toWaypoint.join(',')}&mode=drive&apiKey=${key}`).then(res => res.json()).then(result => {

  })


/*
const noMouseClickingAroundThesePartsOfTown = document.getElementById("srchDiv")
L.DomEvent.disableClickPropagation(noMouseClickingAroundThesePartsOfTown)
const sameAsAbove = document.getElementById("autoCompleteResults")
L.DomEvent.disableClickPropagation(sameAsAbove)
*/
/////////////////////////////////////////////////


//Kortið sjálft --- Nota leaflet
let map = L.map('kortið').setView([64.12895, -21.83516], 14);

let streets = L.tileLayer('https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=XZxiehQLe57tQxNpZllB', {
    minZoom: 5,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler &copy</a> <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>'

})

let satallite = L.tileLayer('https://api.maptiler.com/maps/satellite-v4/256/{z}/{x}/{y}.jpg?key=XZxiehQLe57tQxNpZllB', {
    minZoom: 5,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">MapTiler &copy</a> <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>' 
})
satallite.addTo(map)

let osm = L.tileLayer('https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=XZxiehQLe57tQxNpZllB', {
    minZoom: 5,
    attribution: '<a href="https://www.openstreetmap.org/copyright" target="_blank"> OpenStreetMap contributors</a>&copy; <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>'
})
//////////////////////////////////////////////////////

let markerIcon = L.icon({
    iconUrl: "img/push-pin.png",
    iconSize: [32,32],
})

let marker = L.marker([], {
    draggable: true,
    autoPan: true,
    icon: markerIcon
});

let marker2 = L.marker([], {
    draggable: true,
    autoPan: true,
    icon: markerIcon
});

let markerSearch = L.marker([], {
    draggable: false,
    autoPan: true,
    icon: markerIcon
});

const markerArr = [];


map.addEventListener("click", function(pos) {
    markerArr.push(pos.latlng)

    marker.setLatLng(pos.latlng)
    marker.addTo(map)
    map.setView(marker.getLatLng())
    marker.bindTooltip("You clicked on " + marker.getLatLng(), {direction: "top", offset: [0,-15], riseOnHover: true});
    
    markerArr.length >= 2 ? marker2.setLatLng(markerArr.at(-2)) : marker2.setLatLng(markerArr.at(-1))

    marker2.addTo(map);
    marker2.bindTooltip("You clicked on " + marker2.getLatLng(), {direction: "top", offset: [0,-15], riseOnHover: true});

    map.setView(markerArr.at(-1))
    
})

marker.on("dragend", function(){
    let markerNewLatLng = marker.getLatLng();
    marker.setLatLng(markerNewLatLng)
    map.setView(markerNewLatLng)
    marker.bindTooltip("You moved the marker to " + markerNewLatLng, {direction: "top", offset: [0,-15]})
})

/*marker2.on("dragend", function(){
    let marker2NewLatLng = marker2.getLatLng();
    marker2.setLatLng(marker2NewLatLng)
    map.setView(marker2NewLatLng)
    marker2.bindTooltip("You moved the marker to " + marker2NewLatLng, {direction: "top", offset: [0,-15]})
})*/

//Layer Control
let baseLayers = {
    "OpenStreetMap": osm,
    "Streets": streets,
    "Satallite": satallite,
};
L.control.layers(baseLayers).addTo(map)


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

    markerSearch = L.marker([address.lat, address.lon], {icon: markerIcon}).addTo(map);
    markerSearch.bindTooltip(address.address_line1 + "<br>" + address.address_line2, {direction: "top", offset: [0,-15]});
    if (address.bbox && address.bbox.lat1 !== address.bbox.lat2 && address.bbox.lon1 !== address.bbox.lon2) {
      map.fitBounds([[address.bbox.lat1, address.bbox.lon1], [address.bbox.lat2, address.bbox.lon2]], { padding: [100, 100] })
    } else {
      map.setView([address.lat, address.lon], 15);
    }
  },
});
map.addControl(addressSearchControl);
