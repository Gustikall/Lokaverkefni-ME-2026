// start og dest
const srchBtn = document.getElementById("searchBtn");

const startArr = [];
const destArr = [];

const startSet = new Set ([]);




srchBtn.addEventListener("click", function(){
    document.getElementById("recentSearches").style.removeProperty("visibility")
    document.getElementById("recentSearches").style.visibility = "visible";
    let startDest = document.getElementById("start").value;
    document.getElementById("start").value = "";

    let endDest = document.getElementById("dest").value;
    document.getElementById("dest").value = "";






    //höndlar að pota uppgefnum upplýsingum í <p> og passar að einungis fimm atriði komist fyrir
    startArr.length >= 5 ? startArr.shift() && startArr.push(startDest) : startArr.push(startDest);
    destArr.length >= 5 ? destArr.shift() && destArr.push(endDest) : destArr.push(endDest);

    document.getElementById("recentSearches1").textContent = startArr[4]
    document.getElementById("recentSearches2").textContent = startArr[3]
    document.getElementById("recentSearches3").textContent = startArr[2]
    document.getElementById("recentSearches4").textContent = startArr[1]
    document.getElementById("recentSearches5").textContent = startArr[0]

    document.getElementById("recentDest1").textContent = destArr[4]
    document.getElementById("recentDest2").textContent = destArr[3]
    document.getElementById("recentDest3").textContent = destArr[2]
    document.getElementById("recentDest4").textContent = destArr[1]
    document.getElementById("recentDest5").textContent = destArr[0]
})
