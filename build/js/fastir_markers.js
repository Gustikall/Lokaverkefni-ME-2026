'use strict'

const N1link = "https://n1.is/is";
const orkanLink = "https://orkan.is/";
const atlantsoliaLink = "https://www.atlantsolia.is/"
const OBLink = "https://www.ob.is/";
const olisLink = "https://www.olis.is/";

const N1phone = "440-1000";
const orkanPhone = "464-6000";
const atlantsoliaPhone = "591-3100";
const OBPhone = "515-1141";
const olisPhone = "515-1000";


//Fyrirfram gerðir markerar
const data = {
    capitalRegion: {
        atlantsolia: [
            {
                cords: [64.125383, -21.81289], titill: `Atlantsolía Bíldshöfða`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "",
            },
        ],
        OB:[
            {
                cords: [64.127955, -21.848207], titill: `ÓB Knarravogi`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [64.12500828173154, -21.832022666931156], titill: `ÓB Bílalundi`, website: OBLink, phone: OBPhone ,price: "",
            },
        ],
        orkan: [
            {
                cords: [64.108794, -21.842934], titill: `Orkan Hæðarsmára`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.03995806475639, -21.990337371826172], titill: `Orkan Einhellu`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.108794, -21.842934], titill: `Orkan Stekkjarbakka`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.108794, -21.842934], titill: `Orkan Vatnagörðum`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.108794, -21.842934], titill: `Orkan Salavegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.108794, -21.842934], titill: `Orkan Vesturlandsvegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.108794, -21.842934], titill: `Orkan Fellsmúla`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.14207420123279, -21.953102946281437], titill: `Orkan Birkimelum`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.131365, -21.918476], titill: `Orkan Bústaðarvegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.105243, -21.866913], titill: `Orkan Dalvegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.089999, -21.926201], titill: `Orkan Litlatúni`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.144569, -21.804538], titill: `Orkan Gylfaflöt`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.117703, -21.797228], titill: `Orkan Hraunbæ`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.149755, -21.984094], titill: `Orkan Eiðistorgi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.077609, -21.950058], titill: `Orkan Reykjavíkurvegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.110677, -21.851925], titill: `Orkan Skemmuvegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.145743, -21.858587], titill: `Orkan Kleppsvegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.153195, -21.867363], titill: `Orkan Klettagörðum`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.06356786935876, -21.965403556823734], titill: `Orkan Kænunni`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.140253, -21.895313], titill: `Orkan Laugavegi(Næturvaktinn)`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.132057, -21.891827], titill: `Orkan Kringlan`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.132676, -21.89288], titill: `Orkan v/Miklubraut Norður`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.132041, -21.916873], titill: `Orkan Skógarhlíð`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.10212, -21.884301], titill: `Orkan Hagasmára`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.14982435728615, -21.787307560443878], titill: `Orkan Spöng`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.101744, -21.830757], titill: `Orkan Suðurfelli`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.15151539566514, -21.98490858078003], titill: `Orkan Austurströnd`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.14164838291373, -21.75914168357849], titill: `Orkan Lambhagavegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
        ],
        olis: [
            {
                cords: [64.132618, -21.867195], titill: `Olís Álfheimar`, website: olisLink, phone: olisPhone ,price: "",
            },
            {
                cords: [64.110243, -21.84265], titill: `Olís Álfheimar`, website: olisLink, phone: olisPhone ,price: "",
            },
        ],
        N1: [
            {
                cords: [64.12427785489147, -21.829233169555668], titill: `N1 - Bíldshöfða`, website: N1link, phone: N1phone ,price: "",
            },
            {
                cords: [64.109962, -21.855982], titill: `N1 Engihjalla`, website: N1link, phone: N1phone ,price: "",
            },
            {
                cords: [64.13079249059253, -21.876166462898258], titill: `N1 Fellsmúla`, website: N1link, phone: N1phone ,price: "",
            },
        ]

    },
    Reykjanes: {
        atlantsolia: [
            {
                cords: [63.987555, -22.549058], titill: `Atlantsolía Hólagötu`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "",
            },
            {
                cords: [63.9701, -22.51169], titill: `Atlantsolía Reykjanesbraut`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "",
            },
        ],
        OB: [
            {
                cords: [63.83972, -22.433827], titill: `ÓB Grindavík`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [63.998082, -22.588236], titill: `ÓB Aðalgata`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [663.97686, -22.5799], titill: `ÓB Arnarvöllum`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [63.979988, -22.547062], titill: `ÓB Reykjanesbæ`, website: OBLink, phone: OBPhone ,price: "",
            },
        ],
        orkan: [
            {
                cords: [63.841232, -22.42487], titill: `Orkan Grindavík`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.994072, -22.635491], titill: `Orkan Keflavíkurflugvelli`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.994072, -22.635491], titill: `Orkan Fitjum`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.03611842323767, -22.7047598361969], titill: `Orkan Sandgerði`, website: orkanLink, phone: orkanPhone ,price: "",
            },
        ],
        olis:[
            {
                cords: [63.997375, -22.631897], titill: `Olís Keflavíkurflugvelli`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [63.980009, -22.54679], titill: `Olís Reykjanesbæ`, website: OBLink, phone: OBPhone ,price: "",
            },
        ],
        N1:[
            {
                cords: [63.84371, -22.436232], titill: `N1 Grindavík`, website: N1link, phone: N1phone ,price: "",
            },
        ],
    },

    West: {
        atlantsolia: [
            {
                cords: [664.567844, -21.893211], titill: `Atlantsolía Sólbakka`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "",
            },
        ],
        OB: [
            {
                cords: [64.127955, -21.848207], titill: `ÓB Knarravogi`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [66.06985, -23.1507], titill: `ÓB Ísafirði`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [64.324469, -22.067839], titill: `ÓB Akranesi`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [64.675286, -21.66429], titill: `ÓB Borgarbyggð`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [65.071987, -22.733383], titill: `ÓB Stykkishólmi`, website: OBLink, phone: OBPhone ,price: "",
            },
        ],
        orkan: [
            {
                cords: [64.543505, -21.9086], titill: `Orkan Borgarnesi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [66.025806, -22.991053], titill: `Orkan Súðavík`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [66.060702, -23.174706], titill: `Orkan Ísafirði`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.321829, -22.065332], titill: `Orkan Skagabraut`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.319998, -22.069645], titill: `Orkan Smiðjuvöllum`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.675286, -21.66429], titill: `Orkan að Baulu`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.685444, -23.601528], titill: `Orkan Bíldudal`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [66.153047, -23.248914], titill: `Orkan Bolungarvík`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.921801, -23.235842], titill: `Orkan Grundarfirði`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.768189, -21.541318], titill: `Orkan Hreðavatnsskála`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.6992, -20.868618], titill: `Orkan Húsafelli`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.89430340127764, -23.704419136047367], titill: `Orkan Ólafsvík`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.072722, -22.733148], titill: `Orkan Stykkishólmi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
        ],
        olis:[
            {
                cords: [64.544523, -21.90807], titill: `Olís Borgarnesi Esjuvegi`, website: olisLink, phone: olisPhone ,price: "",
            },
            {
                cords: [64.314033, -22.088111], titill: `Olís Borgarnesi Suðurgötu`, website: olisLink, phone: olisPhone ,price: "",
            },
            {
                cords: [64.324723, -22.067466], titill: `Olís Akranesi`, website: olisLink, phone: olisPhone ,price: "",
            },
            {
                cords: [66.149568, -18.902899], titill: `Olís Siglufirði`, website: olisLink, phone: olisPhone ,price: "",
            },
            {
                cords: [65.072009, -22.733327], titill: `Olís Stykkishólmi`, website: olisLink, phone: olisPhone ,price: "",
            },
        ],
        N1:[
            {
                cords: [64.543738, -21.910708], titill: `N1 Borgarnesi`, website: N1link, phone: N1phone ,price: "",
            },
            {
                cords: [66.074597, -23.123339], titill: `N1 Ísafirði`, website: N1link, phone: N1phone ,price: "",
            },
            {
                cords: [64.92513, -23.260583], titill: `N1 Grundarfirði`, website: N1link, phone: N1phone ,price: "",
            },
        ],
    },

    North: {
        atlantsolia: [
            {
                cords: [65.699097, -18.135201], titill: `Atlantsolía Hörgárbraut`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "",
            },
            {
                cords: [65.687765, -18.099884], titill: `Atlantsolía Glerártorgi`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "",
            },
        ],
        OB: [
            {
                cords: [64.127955, -21.848207], titill: `ÓB Knarravogi`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [66.039059, -17.343403], titill: `ÓB Húsavík`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [65.683516, -18.089635], titill: `ÓB Strandargötu`, website: OBLink, phone: OBPhone ,price: "",
            },
        ],
        orkan: [
            {
                cords: [65.689079, -18.100905], titill: `Orkan Furuvöllum`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [66.048885, -17.344404], titill: `Orkan Húsavík`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.94429394654365, -18.354892730712894], titill: `Orkan Árskógssandi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.39209, -20.937033], titill: `Orkan Hvammstanga`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.695686, -18.122026], titill: `Orkan Hörgárbraut`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.679519, -18.108414], titill: `Orkan Mýrarvegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.566921, -17.033563], titill: `Orkan Mývatni`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.746983, -19.645951], titill: `Orkan Sauðárkróki`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.43763361293294, -15.912333726882936], titill: `Orkan Möðrudal`, website: orkanLink, phone: orkanPhone ,price: "",
            },
        ],
        olis:[
            {
                cords: [65.689079, -18.100905], titill: `Olís Tryggvabraut`, website: olisLink, phone: olisPhone ,price: "",
            },
            {
                cords: [66.03919, -17.343033], titill: `Olís Húsavík`, website: olisLink, phone: olisPhone ,price: "",
            },
            {
                cords: [65.751837, -19.651065], titill: `Olís Sauðárkróki`, website: olisLink, phone: olisPhone ,price: "",
            },
        ],
        N1:[
            {
                cords: [66.047504, -17.343719], titill: `N1 Húsavík`, website: N1link, phone: N1phone ,price: "",
            },
            {
                cords: [65.740317, -19.636242], titill: `N1 Sauðárkróki`, website: N1link, phone: N1phone ,price: "",
            },
        ],
    },

    East: {
        atlantsolia: [
            {
                cords: [64.125383, -21.81289], titill: `Atlantsolía Bíldshöfða`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "",
            },
        ],
        OB: [
            {
                cords: [65.147678, -13.694875], titill: `ÓB Neskaupstað`, website: OBLink, phone: OBPhone ,price: "",
            },
        ],
        orkan: [
            {
                cords: [65.260782, -14.39792], titill: `Orkan Fagradalsbraut`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.2631, -14.405606], titill: `Orkan Miðvangi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.07593835157174, -14.021570874561652], titill: `Orkan Eskifirði`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [64.932749, -14.028239], titill: `Orkan Fáskrúðsfirði`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.09665, -14.742518], titill: `Orkan Hallormstað`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.147359410098, -13.707665205001833], titill: `Orkan Neskaupstað`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.03452609760487, -14.228469729423523], titill: `Orkan Reyðarfirði`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.261741, -13.999139], titill: `Orkan Seyðisfirði`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [65.314983, -15.12977], titill: `Orkan Skjöldólfsstöðum`, website: orkanLink, phone: orkanPhone ,price: "",
            },
        ],
        olis:[
            {
                cords: [64.132618, -21.867195], titill: `Olís Álfheimar`, website: olisLink, phone: olisPhone ,price: "",
            },
        ],
        N1:[
            {
                cords: [64.13079249059253, -21.876166462898258], titill: `N1`, website: N1link, phone: N1phone ,price: "",
            },
        ],
    },

    South: {
        atlantsolia: [
            {
                cords: [64.125383, -21.81289], titill: `Atlantsolía Bíldshöfða`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "",
            },
        ],
        OB: [
            {
                cords: [63.943736, -21.007356], titill: `ÓB Selfossi`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [63.856183, -21.373918], titill: `ÓB Þorlákshöfn`, website: OBLink, phone: OBPhone ,price: "",
            },
            {
                cords: [63.417854, -19.001716], titill: `ÓB Vík`, website: OBLink, phone: OBPhone ,price: "",
            },
        ],
        orkan: [
            {
                cords: [63.990426, -16.895983], titill: `Orkan Freysnesi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.417475, -18.99374], titill: `Orkan Vík`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.995493, -21.191335], titill: `Orkan Sunnumörk`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.995706, -21.185134], titill: `Orkan Austurmörk`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.751799, -20.235753], titill: `Orkan Hvolsvelli`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.944919, -21.01064], titill: `Orkan Suðurlandsvegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.83122812529062, -21.037268042564396], titill: `Orkan Stokkseyri`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.621678007629164, -20.031026601791385], titill: `Orkan Landeyjahafnarvegur`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.93297183706088, -21.0164594650268], titill: `Orkan Eyrarvegi`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.830440303463725, -20.390582084655765], titill: `Orkan Hellu`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.858851, -21.3783015], titill: `Orkan Þorlákshöfn`, website: orkanLink, phone: orkanPhone ,price: "",
            },
            {
                cords: [63.44047, -20.277314], titill: `Orkan Vestmannaeyjum`, website: orkanLink, phone: orkanPhone ,price: "",
            },
        ],
        olis:[
            {
                cords: [63.943731, -21.008236], titill: `Olís Selfossi`, website: olisLink, phone: olisPhone ,price: "",
            },
            {
                cords: [63.441805, -20.276794], titill: `Olís Vestmannaeyjum`, website: olisLink, phone: olisPhone ,price: "",
            },
        ],
        N1:[
            {
                cords: [63.417777, -19.001301], titill: `N1 Vík`, website: N1link, phone: N1phone ,price: "",
            },
            {
                cords: [63.996149, -21.192347], titill: `N1 Hveragerði`, website: N1link, phone: N1phone ,price: "",
            },
            {
                cords: [63.749656, -20.233994], titill: `N1 Hvolsvelli`, website: N1link, phone: N1phone ,price: "",
            },
            {
                cords: [63.444222, -20.283485], titill: `N1 Vestmannaeyjum`, website: N1link, phone: N1phone ,price: "",
            },
        ],
    },
    
}

for (let region in data) {
    const companies = data[region];

    for (let company in companies) {
        const stations = companies[company];

        for (let station of stations) {
            addMarker(station);
        }
    }
}

function addMarker(loc) {
    L.marker(loc.cords, {
        title: loc.titill,
        icon: markerIcon,
    })
    .bindPopup(`
        <span class="popup">
            <strong>${loc.titill}</strong><br>
            <a href="${loc.website}" target ="_blank">Heimasíða</a><br>
            Hafa Samband:<br>
            <a href="tel:${loc.phone}">${loc.phone}</a>
        </span>`
    ).addTo(map)    
}