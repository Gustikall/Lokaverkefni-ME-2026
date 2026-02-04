'use strict'

//Kortið sjálft --- Nota leaflet

let map = L.map('kortið').setView([64.12895, -21.83516], 14);
L.tileLayer('https://api.maptiler.com/maps/streets-v4/{z}/{x}/{y}.png?key=XZxiehQLe57tQxNpZllB', {
    minZoom: 6,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank"> MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">| OpenStreetMap contributors</a>&copy; <a href="https://www.flaticon.com/free-icons/push-pin" target="_blank">Smashicons - Flaticon</a>'

}).addTo(map);




const data = {
    mjódd: {
        cords: [64.108794, -21.842934],
        title: "Mjódd",
        address: `
        <b>Mjódd</b><br>
        Álfabakki<br>
        Ísland<br>
        `,
        website: "https://https://mjodd.is/",
        phone: "",
    },
    mosó: {
        cords: [64.165169, -21.683536],
        title: "Mosfellsbær",
        address: `
        <b>Mosfellsbær</b><br>
        Merkjateigur 7<br>
        Ísland<br>
        `,
        website: "https://https://mos.is/",
        phone: "7751368"
    },
    vestmannaeyjar: {
        cords: [63.431782, -20.27132],
        title: "Vestmannaeyjabær",
        address:  `
        <b>Vestmannaeyjar</b><br>
        Heimaey<br>
        Ísland<br>
        `,
        website: "https://www.vestmannaeyjar.is/",
        phone: "4882000"
    }
}

let markerIcon = L.icon({
    iconUrl: "img/push-pin.png",
    iconSize: [32,32],
})

for (let key in data) {

    const loc = data[key];

    L.marker(loc.cords, {
        title: loc.title,
        icon: markerIcon,
    })
    .bindPopup(`
        <span class="popup">
            ${loc.address}
            <a href="${loc.website} target ="_blank">Vefsíða</a><br>
            Hafa Samband:<br>
            <a href="tel:${loc.phone}">${loc.phone}</a>
        </span>`
    ).addTo(map)
}

let marker = L.marker()

function markerClick(x){
    marker.getLatLng(x.latlng)
    marker.setLatLng(x.latlng)
    marker.setIcon(markerIcon)
    marker.addTo(map)
    marker.bindTooltip(x.latlng.toString(), {direction: "top", offset: [0,-15], draggable: true, riseOnHover: true}).openTooltip();
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
