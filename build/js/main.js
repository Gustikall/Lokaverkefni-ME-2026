'use strict'

//Kortið sjálft --- Nota leaflet

let map = L.map('kortið').setView([64.12895, -21.83516], 14);
L.tileLayer('https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=XZxiehQLe57tQxNpZllB', {
    minZoom: 6,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank"> MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">| OpenStreetMap contributors</a>&copy; <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>'

}).addTo(map);

//Setur inn einn popup pinna og sækir staðsetningu hans og loggar

let marker = L.marker();
let tooltip = L.tooltip({
    direction: top,
})
let icon = L.icon({
    iconUrl: "img/push-pin.png",
    iconSize: [32,32],
})


function markerClick(x){
    marker.getLatLng(x.latlng)
    marker.setLatLng(x.latlng)
    marker.setIcon(icon)
    marker.addTo(map)
    marker.bindTooltip(x.latlng.toString(), {direction: "top", offset: [0,-20], draggable: true}).openTooltip();
}

map.on("click", markerClick)



//Tekur input frá startDest og endDest
const srchBtn = document.getElementById("searchBtn");

const recentSearch = [];


srchBtn.addEventListener("click", function(){
    document.getElementById("recentSearches").style.removeProperty("visibility")
    document.getElementById("recentSearches").style.visibility = "visible";
    
    let startDest = document.getElementById("start").value;
    document.getElementById("start").value = "";

    /*let endDest = document.getElementById("dest").value;
    document.getElementById("dest").value = "";*/

    //höndlar að pota uppgefnum upplýsingum í <p> og passar að einungis fimm atriði komist fyrir
    recentSearch.length >= 5 ? recentSearch.shift() && recentSearch.push(startDest) : recentSearch.push(startDest);
    //recentSearch.length >= 5 ? recentSearch.shift() && recentSearch.push(endDest) : recentSearch.push(endDest);
    console.log(recentSearch)
    

    document.getElementById("recentSearches1").textContent = recentSearch[4]
    document.getElementById("recentSearches2").textContent = recentSearch[3]
    document.getElementById("recentSearches3").textContent = recentSearch[2]
    document.getElementById("recentSearches4").textContent = recentSearch[1]
    document.getElementById("recentSearches5").textContent = recentSearch[0]
})
