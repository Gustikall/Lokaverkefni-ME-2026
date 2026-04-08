'use strict'

const N1link = "https://n1.is/is";
const orkanLink = "https://orkan.is/";
const atlantsLink = "https://www.atlantsolia.is/"
const OBLink = "https://www.ob.is/";
const olisLink = "https://www.olis.is/";

const N1phone = "440-1000";
const orkanPhone = "464-6000";
const atlantsPhone = "591-3100";
const OBPhone = "515-1141";
const olisPhone = "515-1000";


//Fyrirfram gerðir markerar
const data = {
    mjódd: {
        cords: [64.108794, -21.842934],
        title: "Mjódd",
        address: `
        <b>Mjódd</b><br>
        Álfabakki<br>
        `,
        website: "https://https://mjodd.is/",
        phone: "",
    },
    vestmannaeyjar: {
        cords: [63.431782, -20.27132],
        title: "Vestmannaeyjabær",
        address:  `
        <b>Vestmannaeyjar</b><br>
        Heimaey<br>
        `,
        website: "https://www.vestmannaeyjar.is/",
        phone: "4882000"
    },
    höfuðborgarsvæðið: {
        atlants: {
            coords: [],
            titill: ``,
            address: 0,
            website: atlantsLink,
            phone: 
        },
        OB: {
            coords: [],
            titill: ``,
            address: 0,
            website: OBLink,
        },
        orkan: {
            coords: [],
            titill: ``,
            address: 0,
            website: orkanLink,
        },
        olis: {
            coords: [],
            titill: ``,
            address: 0,
            website: olisLink,
        },
        N1: {
            coords: [],
            titill: `N1 Bensín`,
            address: 0,
            website: N1link,
        }

    },
    suðurland: {
        atlants: {

        },
        OB: {

        },
        orkan: {

        },
        olis: {

        },
        N1: {
            
        }
    },
    austurland: {
        atlants: {

        },
        OB: {

        },
        orkan: {

        },
        olis: {

        },
        N1: {
            
        }

    },
    norðurland: {
        atlants: {

        },
        OB: {

        },
        orkan: {

        },
        olis: {

        },
        N1: {
            
        }

    },
    vesturland: {
        atlants: {

        },
        OB: {

        },
        orkan: {

        },
        olis: {

        },
        N1: {
            
        }
    }
    
}

/*for (let key in data) {

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
}*/

console.log(data.höfuðborgarsvæðið.N1)