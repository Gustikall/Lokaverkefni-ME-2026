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
                cords: [64.125383, -21.81289], titill: `Atlantsolía Bíldshöfða`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "", id: "AObildshofda"
            },
        ],
        OB: [
            {
                cords: [64.127955, -21.848207], titill: `ÓB Knarravogi`, website: OBLink, phone: OBPhone ,price: "", id: "OBknarrvogi",
            },
            {
                cords: [64.12500828173154, -21.832022666931156], titill: `ÓB Bílalundi`, website: OBLink, phone: OBPhone ,price: "", id:"OBbilalundi",
            },
        ],
        orkan: [
            {
                cords: [64.108794, -21.842934], titill: `Orkan Hæðarsmára`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhaedarsmara",
            },
            {
                cords: [64.03995806475639, -21.990337371826172], titill: `Orkan Einhellu`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANeinhellu",
            },
            {
                cords: [64.108794, -21.842934], titill: `Orkan Stekkjarbakka`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANstekkjarbakka",
            },
            {
                cords: [64.108794, -21.842934], titill: `Orkan Vatnagörðum`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANvatnagordum",
            },
            {
                cords: [64.108794, -21.842934], titill: `Orkan Salavegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANsalavegi",
            },
            {
                cords: [64.108794, -21.842934], titill: `Orkan Vesturlandsvegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANvesturlandsvegi",
            },
            {
                cords: [64.108794, -21.842934], titill: `Orkan Fellsmúla`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANfellsmula",
            },
            {
                cords: [64.14207420123279, -21.953102946281437], titill: `Orkan Birkimelum`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANbirkimelum",
            },
            {
                cords: [64.131365, -21.918476], titill: `Orkan Bústaðarvegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANbustadarvegi",
            },
            {
                cords: [64.105243, -21.866913], titill: `Orkan Dalvegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANdalvegi",
            },
            {
                cords: [64.089999, -21.926201], titill: `Orkan Litlatúni`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANlitlatuni",
            },
            {
                cords: [64.144569, -21.804538], titill: `Orkan Gylfaflöt`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANgylfaflot",
            },
            {
                cords: [64.117703, -21.797228], titill: `Orkan Hraunbæ`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhraunbae",
            },
            {
                cords: [64.149755, -21.984094], titill: `Orkan Eiðistorgi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANeidistorgi",
            },
            {
                cords: [64.077609, -21.950058], titill: `Orkan Reykjavíkurvegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANreykjavikurvegi",
            },
            {
                cords: [64.110677, -21.851925], titill: `Orkan Skemmuvegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANskemmuvegi",
            },
            {
                cords: [64.145743, -21.858587], titill: `Orkan Kleppsvegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANkleppsvegi",
            },
            {
                cords: [64.153195, -21.867363], titill: `Orkan Klettagörðum`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANklettagordum",
            },
            {
                cords: [64.06356786935876, -21.965403556823734], titill: `Orkan Kænunni`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANkaenunni",
            },
            {
                cords: [64.140253, -21.895313], titill: `Orkan Laugavegi(Næturvaktinn)`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANlaugavegi",
            },
            {
                cords: [64.132057, -21.891827], titill: `Orkan Kringlan`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANkringlan",
            },
            {
                cords: [64.132676, -21.89288], titill: `Orkan v/Miklubraut Norður`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANmiklubraut",
            },
            {
                cords: [64.132041, -21.916873], titill: `Orkan Skógarhlíð`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANskogarhlid",
            },
            {
                cords: [64.10212, -21.884301], titill: `Orkan Hagasmára`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhagasmara",
            },
            {
                cords: [64.14982435728615, -21.787307560443878], titill: `Orkan Spöng`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANspong",
            },
            {
                cords: [64.101744, -21.830757], titill: `Orkan Suðurfelli`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANsudurfelli",
            },
            {
                cords: [64.15151539566514, -21.98490858078003], titill: `Orkan Austurströnd`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANausturstrond",
            },
            {
                cords: [64.14164838291373, -21.75914168357849], titill: `Orkan Lambhagavegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANlambhagavegi",
            },
        ],
        olis: [
            {
                cords: [64.132618, -21.867195], titill: `Olís Álfheimar`, website: olisLink, phone: olisPhone ,price: "", id:"OLISalfheimar",
            },
        ],
        N1: [
            {
                cords: [64.12427785489147, -21.829233169555668], titill: `N1 Bíldshöfða`, website: N1link, phone: N1phone ,price: "", id:"N1bildshofda",
            },
            {
                cords: [64.12362700967422, -21.825842857360843], titill: `N1 Ártúnshöfða`, website: N1link, phone: N1phone ,price: "", id:"N1artunshofda",
            },
            {
                cords: [64.109962, -21.855982], titill: `N1 Stórahjalla`, website: N1link, phone: N1phone ,price: "", id:"N1storahjalla",
            },
            {
                cords: [64.13079249059253, -21.876166462898258], titill: `N1 Fellsmúla`, website: N1link, phone: N1phone ,price: "", id:"N1fellsmula",
            },
            {
                cords: [64.05340555817403, -21.96924984455109], titill: `N1 Ásvöllum`, website: N1link, phone: N1phone ,price: "", id:"N1asvollum",
            },
            {
                cords: [64.1465472386488, -21.89426064491272], titill: `N1 Borgartúni`, website: N1link, phone: N1phone ,price: "", id:"N1borgartuni",
            },
            {
                cords: [64.15546075128039, -21.951901316642765], titill: `N1 Fiskislóð`, website: N1link, phone: N1phone ,price: "", id:"N1fiskislóð",
            },
            {
                cords: [64.11771251615909, -21.899131536483768], titill: `N1 Fossvogi`, website: N1link, phone: N1phone ,price: "", id:"N1fossvogi",
            },
            {
                cords: [64.13851303602841, -21.772300601005554], titill: `N1 Gagnvegi`, website: N1link, phone: N1phone ,price: "", id:"N1gagnvegi",
            },
            {
                cords: [64.16598558137548, -21.695508956909184], titill: `N1 Háholti`, website: N1link, phone: N1phone ,price: "", id:"N1haholti",
            },
            {
                cords: [64.13881488705947, -21.938077211380005], titill: `N1 Hringbraut`, website: N1link, phone: N1phone ,price: "", id:"N1hringbraut",
            },
            {
                cords: [64.06668938722416, -21.938704848289493], titill: `N1 Lækjargötu`, website: N1link, phone: N1phone ,price: "", id:"N1laekjargötu",
            },
            {
                cords: [64.10011144692854, -21.779440641403202], titill: `N1 Norðlingaholti`, website: N1link, phone: N1phone ,price: "", id:"N1nordlingaholti",
            },
            {
                cords: [64.04641029017769, -21.98372840881348], titill: `N1 Norðurhellu`, website: N1link, phone: N1phone ,price: "", id:"N1nordurhellu",
            },
            {
                cords: [64.07667214249201, -21.949771642684937], titill: `N1 Reykjavíkurvegi`, website: N1link, phone: N1phone ,price: "", id:"N1reykjavikurvegi",
            },
            {
                cords: [64.10211947800673, -21.87440156936646], titill: `N1 Skógarlind`, website: N1link, phone: N1phone ,price: "", id:"N1skogarlind",
            },
        ]

    },
    Reykjanes: {
        atlantsolia: [
            {
                cords: [63.987555, -22.549058], titill: `Atlantsolía Hólagötu`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "", id:"AOholagotu",
            },
            {
                cords: [63.9701, -22.51169], titill: `Atlantsolía Reykjanesbraut`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "", id:"AOreykjanesbae",
            },
        ],
        OB: [
            {
                cords: [63.83972, -22.433827], titill: `ÓB Grindavík`, website: OBLink, phone: OBPhone ,price: "", id:"OBgrindavik",
            },
            {
                cords: [63.998082, -22.588236], titill: `ÓB Aðalgata`, website: OBLink, phone: OBPhone ,price: "", id:"OBadalgata",
            },
            {
                cords: [63.97686, -22.5799], titill: `ÓB Arnarvöllum`, website: OBLink, phone: OBPhone ,price: "", id:"OBarnarvollum",
            },
            {
                cords: [63.979988, -22.547062], titill: `ÓB Reykjanesbæ`, website: OBLink, phone: OBPhone ,price: "", id:"OBreykjanesbae",
            },
        ],
        orkan: [
            {
                cords: [63.841232, -22.42487], titill: `Orkan Grindavík`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANgrindavik",
            },
            {
                cords: [63.994072, -22.635491], titill: `Orkan Keflavíkurflugvelli`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANkeflavikurflugvelli",
            },
            {
                cords: [63.994072, -22.635491], titill: `Orkan Fitjum`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANfitjum",
            },
            {
                cords: [64.03611842323767, -22.7047598361969], titill: `Orkan Sandgerði`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANsandgerdi",
            },
        ],
        olis:[
            {
                cords: [63.997375, -22.631897], titill: `Olís Keflavíkurflugvelli`, website: OBLink, phone: OBPhone ,price: "", id:"OLISkeflavikurflugvelli",
            },
            {
                cords: [63.980009, -22.54679], titill: `Olís Reykjanesbæ`, website: OBLink, phone: OBPhone ,price: "", id:"OLISreykjanesbae",
            },
        ],
        N1:[
            {
                cords: [63.84371, -22.436232], titill: `N1 Grindavík`, website: N1link, phone: N1phone ,price: "", id:"N1grindavik",
            },
            {
                cords: [64.06752102915434, -22.648767381906513], titill: `N1 Garði`, website: N1link, phone: N1phone ,price: "", id:"N1garði",
            },
            {
                cords: [63.99658050862652, -22.549701333045963], titill: `N1 Hafnargötu`, website: N1link, phone: N1phone ,price: "", id:"N1hafnargotu",
            },
            {
                cords: [64.0402645087839, -22.713375091552738], titill: `N1 Sandgerði`, website: N1link, phone: N1phone ,price: "", id:"N1sandgerdi",
            },
            {
                cords: [63.98051481019963, -22.379504442214966], titill: `N1 Vogum`, website: N1link, phone: N1phone ,price: "", id:"N1vogum",
            },
        ],
    },

    West: {
        atlantsolia: [
            {
                cords: [64.567844, -21.893211], titill: `Atlantsolía Sólbakka`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "", id:"AOsolbakka",
            },
        ],
        OB: [
            {
                cords: [64.127955, -21.848207], titill: `ÓB Knarravogi`, website: OBLink, phone: OBPhone ,price: "", id:"OBknarrvogi",
            },
            {
                cords: [66.06985, -23.1507], titill: `ÓB Ísafirði`, website: OBLink, phone: OBPhone ,price: "", id:"OBisafirdi",
            },
            {
                cords: [64.324469, -22.067839], titill: `ÓB Akranesi`, website: OBLink, phone: OBPhone ,price: "", id:"OBakranesi",
            },
            {
                cords: [64.675286, -21.66429], titill: `ÓB Borgarbyggð`, website: OBLink, phone: OBPhone ,price: "", id:"OBborgarbyggd",
            },
            {
                cords: [65.071987, -22.733383], titill: `ÓB Stykkishólmi`, website: OBLink, phone: OBPhone ,price: "", id:"OBstykkisholmi",
            },
        ],
        orkan: [
            {
                cords: [64.543505, -21.9086], titill: `Orkan Borgarnesi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANborgarnesi",
            },
            {
                cords: [66.025806, -22.991053], titill: `Orkan Súðavík`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANsudavik",
            },
            {
                cords: [66.060702, -23.174706], titill: `Orkan Ísafirði`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANisafirdi",
            },
            {
                cords: [64.319998, -22.069645], titill: `Orkan Smiðjuvöllum`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANsmidjuvollum",
            },
            {
                cords: [64.675286, -21.66429], titill: `Orkan að Baulu`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANbaula",
            },
            {
                cords: [65.685444, -23.601528], titill: `Orkan Bíldudal`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANbildudal",
            },
            {
                cords: [66.153047, -23.248914], titill: `Orkan Bolungarvík`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANbolungarvik",
            },
            {
                cords: [64.921801, -23.235842], titill: `Orkan Grundarfirði`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANgrundarfirdi",
            },
            {
                cords: [64.768189, -21.541318], titill: `Orkan Hreðavatnsskála`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhredavatnsskala",
            },
            {
                cords: [64.6992, -20.868618], titill: `Orkan Húsafelli`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhusafelli",
            },
            {
                cords: [64.89430340127764, -23.704419136047367], titill: `Orkan Ólafsvík`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANolafsvik",
            },
            {
                cords: [65.072722, -22.733148], titill: `Orkan Stykkishólmi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANstykkisholmi",
            },
            {
                cords: [64.321829, -22.065332], titill: `Orkan Akranesi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANakranesi",
            },
        ],
        olis:[
            {
                cords: [64.544523, -21.90807], titill: `Olís Borgarnesi Esjuvegi`, website: olisLink, phone: olisPhone ,price: "", id:"OLISborgarnesiEsjuvegi",
            },
            {
                cords: [64.314033, -22.088111], titill: `Olís Borgarnesi Suðurgötu`, website: olisLink, phone: olisPhone ,price: "", id:"OLISborgarnesSudurgotu",
            },
            {
                cords: [64.324723, -22.067466], titill: `Olís Akranesi`, website: olisLink, phone: olisPhone ,price: "", id:"OLISakranesi",
            },
            {
                cords: [66.149568, -18.902899], titill: `Olís Siglufirði`, website: olisLink, phone: olisPhone ,price: "", id:"OLISsiglufirdi",
            },
            {
                cords: [65.072009, -22.733327], titill: `Olís Stykkishólmi`, website: olisLink, phone: olisPhone ,price: "", id:"OLISstykkisholmi",
            },
        ],
        N1:[
            {
                cords: [64.543738, -21.910708], titill: `N1 Borgarnesi`, website: N1link, phone: N1phone ,price: "", id:"N1borgarnesi",
            },
            {
                cords: [64.32280090347365, -22.06539630889893], titill: `N1 Dalbraut`, website: N1link, phone: N1phone ,price: "", id:"N1dalbraut",
            },
            {
                cords: [66.074597, -23.123339], titill: `N1 Ísafirði`, website: N1link, phone: N1phone ,price: "", id:"N1isafirdi",
            },
            {
                cords: [64.92513, -23.260583], titill: `N1 Grundarfirði`, website: N1link, phone: N1phone ,price: "", id:"N1grundarfirdi",
            },
            {
                cords: [65.55624674079719, -22.10457801818848], titill: `N1 Bjarkarlundi`, website: N1link, phone: N1phone ,price: "", id:"N1bjarkarlundi",
            },
            {
                cords: [65.10805877606832, -21.762805581092834], titill: `N1 Búðardal`, website: N1link, phone: N1phone ,price: "", id:"N1budardal",
            },
            {
                cords: [65.68935271176734, -21.442254781723022], titill: `N1 Drangsnesi`, website: N1link, phone: N1phone ,price: "", id:"N1drangsnesi",
            },
            {
                cords: [64.32800126834047, -22.052256166934967], titill: `N1 Elínarvegi`, website: N1link, phone: N1phone ,price: "", id:"N1elinarvegi",
            },
            {
                cords: [66.05188939205568, -23.510436415672302], titill: `N1 Flateyri`, website: N1link, phone: N1phone ,price: "", id:"N1flateyri",
            },
            {
                cords: [65.57597102335625, -23.167693018913273], titill: `N1 Flókalundi`, website: N1link, phone: N1phone ,price: "", id:"N1flokalundi",
            },
            {
                cords: [64.91509403737132, -23.884293437004093], titill: `N1 Hellisandi`, website: N1link, phone: N1phone ,price: "", id:"N1hellisandi",
            },
            {
                cords: [65.70124244852855, -21.685198545455936], titill: `N1 Hólmavík`, website: N1link, phone: N1phone ,price: "", id:"N1holmavik",
            },
            {
                cords: [66.0514887351083, -21.548389792442325], titill: `N1 Norðurfirði`, website: N1link, phone: N1phone ,price: "", id:"N1nordurfirdi",
            },
            {
                cords: [64.8936888564214, -23.702659606933597], titill: `N1 Ólafsvík`, website: N1link, phone: N1phone ,price: "", id:"N1olafsvik",
            },
            {
                cords: [65.59547534422002, -23.984701931476593], titill: `N1 Patreksfirði`, website: N1link, phone: N1phone ,price: "", id:"N1patreksfirdi",
            },
            {
                cords: [64.66295107491287, -21.28298252820969], titill: `N1 Reykholti`, website: N1link, phone: N1phone ,price: "", id:"N1reykholti",
            },
            {
                cords: [65.45168713000014, -22.201598882675174], titill: `N1 Reykhólar`, website: N1link, phone: N1phone ,price: "", id:"N1reykholar",
            },
            {
                cords: [65.92765235724632, -22.428894639015198], titill: `N1 Reykjanes`, website: N1link, phone: N1phone ,price: "", id:"N1reykjanes",
            },
            {
                cords: [65.62687787304542, -23.825510144233707], titill: `N1 Tálknafirði`, website: N1link, phone: N1phone ,price: "", id:"N1talknafirdi",
            },
            {
                cords: [65.87668479414447, -23.48910212516785], titill: `N1 Þingeyri`, website: N1link, phone: N1phone ,price: "", id:"N1thingeyri",
            },
        ],
    },

    North: {
        atlantsolia: [
            {
                cords: [65.699097, -18.135201], titill: `Atlantsolía Hörgárbraut`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "", id:"AOhorgarbraut",
            },
            {
                cords: [65.687765, -18.099884], titill: `Atlantsolía Glerártorgi`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "", id:"AOglerartorgi",
            },
        ],
        OB: [
            {
                cords: [66.039059, -17.343403], titill: `ÓB Húsavík`, website: OBLink, phone: OBPhone ,price: "", id:"OBhusavik",
            },
            {
                cords: [65.683516, -18.089635], titill: `ÓB Strandargötu`, website: OBLink, phone: OBPhone ,price: "", id:"OBstrandargotu",
            },
        ],
        orkan: [
            {
                cords: [65.689079, -18.100905], titill: `Orkan Furuvöllum`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANfuruvollum",
            },
            {
                cords: [66.048885, -17.344404], titill: `Orkan Húsavík`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhusavik",
            },
            {
                cords: [65.94429394654365, -18.354892730712894], titill: `Orkan Árskógssandi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANarskogarssandi",
            },
            {
                cords: [65.39209, -20.937033], titill: `Orkan Hvammstanga`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhvammstanga",
            },
            {
                cords: [65.695686, -18.122026], titill: `Orkan Hörgárbraut`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhorgarbraut",
            },
            {
                cords: [65.679519, -18.108414], titill: `Orkan Mýrarvegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANmyrarvegi",
            },
            {
                cords: [65.566921, -17.033563], titill: `Orkan Mývatni`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANmyvatni",
            },
            {
                cords: [65.746983, -19.645951], titill: `Orkan Sauðárkróki`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANsaudarkroki",
            },
            {
                cords: [65.43763361293294, -15.912333726882936], titill: `Orkan Möðrudal`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANmodrudal",
            },
        ],
        olis:[
            {
                cords: [65.689079, -18.100905], titill: `Olís Tryggvabraut`, website: olisLink, phone: olisPhone ,price: "", id:"OLIStryggvabraut",
            },
            {
                cords: [66.03919, -17.343033], titill: `Olís Húsavík`, website: olisLink, phone: olisPhone ,price: "", id:"OLIShusavik",
            },
            {
                cords: [65.751837, -19.651065], titill: `Olís Sauðárkróki`, website: olisLink, phone: olisPhone ,price: "", id:"OLISsaudarkroki",
            },
        ],
        N1:[
            {
                cords: [66.047504, -17.343719], titill: `N1 Húsavík`, website: N1link, phone: N1phone ,price: "", id:"N1Husavik",
            },
            {
                cords: [65.69023938666808, -18.0964806675911], titill: `N1 Tryggvagötu`, website: N1link, phone: N1phone ,price: "", id:"N1tryggvagotu",
            },
            {
                cords: [65.14505511969173, -21.08363270759583], titill: `N1 Staðarskála`, website: N1link, phone: N1phone ,price: "", id:"N1stadarskala",
            },
            {
                cords: [65.64167825810878, -16.91104888916016], titill: `N1 Reykjahlíð`, website: N1link, phone: N1phone ,price: "", id:"N1reykjahlid",
            },
            {
                cords: [66.04519498037777, -17.33827114105225], titill: `N1 Fosshóli`, website: N1link, phone: N1phone ,price: "", id:"N1fossholi",
            },
            {
                cords: [66.03063934158124, -16.483767628669742], titill: `N1 Ásbyrgi`, website: N1link, phone: N1phone ,price: "", id:"N1Husavik",
            },
            {
                cords: [65.740317, -19.636242], titill: `N1 Sauðárkróki`, website: N1link, phone: N1phone ,price: "", id:"N1saudarkroki",
            },
            {
                cords: [65.6600875542913, -20.275611877447627], titill: `N1 Blönduós`, website: N1link, phone: N1phone ,price: "", id:"N1blonduos",
            },
            {
                cords: [65.9702452788141, -18.528203666210178], titill: `N1 Dalvík`, website: N1link, phone: N1phone ,price: "", id:"N1dalvik",
            },
            {
                cords: [65.94683035682608, -18.18050086498261], titill: `N1 Grenivík`, website: N1link, phone: N1phone ,price: "", id:"N1grenivik",
            },
            {
                cords: [66.53927812892522, -18.014488220214847], titill: `N1 Grímsey`, website: N1link, phone: N1phone ,price: "", id:"N1grimsey",
            },
            {
                cords: [65.89732057886472, -19.41280961036682], titill: `N1 Hofsós`, website: N1link, phone: N1phone ,price: "", id:"N1hofsos",
            },
            {
                cords: [65.9785896071807, -18.3812427520752], titill: `N1 Hrísey`, website: N1link, phone: N1phone ,price: "", id:"N1hrisey",
            },
            {
                cords: [65.39673433317566, -20.947086811065677], titill: `N1 Hvammstanga`, website: N1link, phone: N1phone ,price: "", id:"N1hvammstanga",
            },
            {
                cords: [65.69090961764832, -18.108435273170475], titill: `N1 Hörgárbraut`, website: N1link, phone: N1phone ,price: "", id:"N1horgarbraut",
            },
            {
                cords: [66.30034367792486, -16.448177397251133], titill: `N1 Kópasker`, website: N1link, phone: N1phone ,price: "", id:"N1kopasker",
            },
            {
                cords: [65.72079067209235, -17.372313737869266], titill: `N1 Laugum`, website: N1link, phone: N1phone ,price: "", id:"N1laugum",
            },
            {
                cords: [65.66976082342659, -18.080749511718754], titill: `N1 Leiruvegi`, website: N1link, phone: N1phone ,price: "", id:"N1leiruvegi",
            },
            {
                cords: [66.45360532229242, -15.949710309505464], titill: `N1 Raufarhöfn`, website: N1link, phone: N1phone ,price: "", id:"N1raufarhofn",
            },
        ],
    },

    East: {
        atlantsolia: [
            {
                cords: [64.125383, -21.81289], titill: `Atlantsolía Bíldshöfða`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "", id:"AO-",
            },
        ],
        OB: [
            {
                cords: [65.147678, -13.694875], titill: `ÓB Neskaupstað`, website: OBLink, phone: OBPhone ,price: "", id:"OBneskaupstad",
            },
        ],
        orkan: [
            {
                cords: [65.260782, -14.39792], titill: `Orkan Fagradalsbraut`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANfagradalsbraut",
            },
            {
                cords: [65.2631, -14.405606], titill: `Orkan Miðvangi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANmidvangi",
            },
            {
                cords: [65.07593835157174, -14.021570874561652], titill: `Orkan Eskifirði`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANeskifirdi",
            },
            {
                cords: [64.932749, -14.028239], titill: `Orkan Fáskrúðsfirði`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANfaskrudsfirdi",
            },
            {
                cords: [65.09665, -14.742518], titill: `Orkan Hallormstað`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhallormstad",
            },
            {
                cords: [65.147359410098, -13.707665205001833], titill: `Orkan Neskaupstað`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANneskaupstad",
            },
            {
                cords: [65.03452609760487, -14.228469729423523], titill: `Orkan Reyðarfirði`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANreydarfirdi",
            },
            {
                cords: [65.261741, -13.999139], titill: `Orkan Seyðisfirði`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANseydisfirdi",
            },
            {
                cords: [65.314983, -15.12977], titill: `Orkan Skjöldólfsstöðum`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANskjoldolfsstodum",
            },
        ],
        olis:[
            {
                cords: [64.132618, -21.867195], titill: `Olís Álfheimar`, website: olisLink, phone: olisPhone ,price: "", id:"",
            },
        ],
        N1:[
            {
                cords: [66.03795197023075, -14.80462431907654], titill: `N1 Bakkafirði`, website: N1link, phone: N1phone ,price: "", id:"N1bakkafirdi",
            },
            {
                cords: [65.52809563905872, -13.817120790481567], titill: `N1 Borgarfirði Eystri`, website: N1link, phone: N1phone ,price: "", id:"N1borgarfirdiE",
            },
            {
                cords: [64.79370222637438, -14.007729291915895], titill: `N1 Breiðdalsvík`, website: N1link, phone: N1phone ,price: "", id:"N1breiddalsvik",
            },
            {
                cords: [64.65607928898447, -14.286198914051058], titill: `N1 Djúpavogi`, website: N1link, phone: N1phone ,price: "", id:"N1djupavogi",
            },
            {
                cords: [65.26073873643416, -14.407909512519838], titill: `N1 Egilsstöðum`, website: N1link, phone: N1phone ,price: "", id:"N1egilsstodum",
            },
            {
                cords: [65.0766448772134, -14.036619365215302], titill: `N1 Eskifirði`, website: N1link, phone: N1phone ,price: "", id:"N1eskifirdi",
            },
            {
                cords: [65.20259339312584, -13.794477581977844], titill: `N1 Mjóafirði`, website: N1link, phone: N1phone ,price: "", id:"N1mjoafirdi",
            },
            {
                cords: [65.03191085201294, -14.221951961517336], titill: `N1 Reyðarfirði`, website: N1link, phone: N1phone ,price: "", id:"N1reydarfirdi",
            },
            {
                cords: [64.83342483491543, -13.875356912612917], titill: `N1 Stöðvarfirði`, website: N1link, phone: N1phone ,price: "", id:"N1stodvarfirdi",
            },
            {
                cords: [65.7496732952695, -14.833409786224365], titill: `N1 Vopnafirði`, website: N1link, phone: N1phone ,price: "", id:"N1vopnafirdi",
            },
            {
                cords: [66.19780806963699, -15.335535407066345], titill: `N1 Þórshöfn`, website: N1link, phone: N1phone ,price: "", id:"N1thorshofn",
            },
        ],
    },

    South: {
        atlantsolia: [
            {
                cords: [64.125383, -21.81289], titill: `Atlantsolía Bíldshöfða`, website: atlantsoliaLink, phone: atlantsoliaPhone ,price: "", id:"",
            },
        ],
        OB: [
            {
                cords: [63.943736, -21.007356], titill: `ÓB Selfossi`, website: OBLink, phone: OBPhone ,price: "", id:"OBselfossi",
            },
            {
                cords: [63.856183, -21.373918], titill: `ÓB Þorlákshöfn`, website: OBLink, phone: OBPhone ,price: "", id:"OBthorlakshofn",
            },
            {
                cords: [63.417854, -19.001716], titill: `ÓB Vík`, website: OBLink, phone: OBPhone ,price: "", id:"OBvik",
            },
        ],
        orkan: [
            {
                cords: [63.990426, -16.895983], titill: `Orkan Freysnesi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANfreysnesi",
            },
            {
                cords: [63.417475, -18.99374], titill: `Orkan Vík`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANvik",
            },
            {
                cords: [63.995493, -21.191335], titill: `Orkan Sunnumörk`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANsunnumork",
            },
            {
                cords: [63.995706, -21.185134], titill: `Orkan Austurmörk`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANausturmork",
            },
            {
                cords: [63.751799, -20.235753], titill: `Orkan Hvolsvelli`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhvolsvelli",
            },
            {
                cords: [63.944919, -21.01064], titill: `Orkan Suðurlandsvegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANsudurlandsvegi",
            },
            {
                cords: [63.83122812529062, -21.037268042564396], titill: `Orkan Stokkseyri`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANstokkseyri",
            },
            {
                cords: [63.621678007629164, -20.031026601791385], titill: `Orkan Landeyjahafnarvegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANlandeyjahafnarvegi",
            },
            {
                cords: [63.93297183706088, -21.0164594650268], titill: `Orkan Eyrarvegi`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANeryarvegi",
            },
            {
                cords: [63.830440303463725, -20.390582084655765], titill: `Orkan Hellu`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANhellu",
            },
            {
                cords: [63.858851, -21.3783015], titill: `Orkan Þorlákshöfn`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANthorlakshofn",
            },
            {
                cords: [63.44047, -20.277314], titill: `Orkan Vestmannaeyjum`, website: orkanLink, phone: orkanPhone ,price: "", id:"ORKANvestmannaeyjum",
            },
        ],
        olis:[
            {
                cords: [63.943731, -21.008236], titill: `Olís Selfossi`, website: olisLink, phone: olisPhone ,price: "", id:"OLISselfossi",
            },
            {
                cords: [63.441805, -20.276794], titill: `Olís Vestmannaeyjum`, website: olisLink, phone: olisPhone ,price: "", id:"OLISvestmannaeyjum",
            },
        ],
        N1:[
            {
                cords: [63.417777, -19.001301], titill: `N1 Vík`, website: N1link, phone: N1phone ,price: "", id:"N1vik",
            },
            {
                cords: [63.93674553218967, -20.987534523010257], titill: `N1 Selfossi`, website: N1link, phone: N1phone ,price: "", id:"N1selfossi",
            },
            {
                cords: [63.996149, -21.192347], titill: `N1 Hveragerði`, website: N1link, phone: N1phone ,price: "", id:"N1hveragerdi",
            },
            {
                cords: [63.749656, -20.233994], titill: `N1 Hvolsvelli`, website: N1link, phone: N1phone ,price: "", id:"N1hvolsvelli",
            },
            {
                cords: [63.444222, -20.283485], titill: `N1 Vestmannaeyjum`, website: N1link, phone: N1phone ,price: "", id:"N1vestmannaeyjum",
            },
            {
                cords: [64.04134584184432, -20.251091122627262], titill: `N1 Árnes`, website: N1link, phone: N1phone ,price: "", id:"N1arnes",
            },
            {
                cords: [64.17711279758437, -20.453937202692035], titill: `N1 Brautarhóli`, website: N1link, phone: N1phone ,price: "", id:"N1brautarholi",
            },
            {
                cords: [63.88157218976113, -16.645778417587284], titill: `N1 Fagurhólsmýri`, website: N1link, phone: N1phone ,price: "", id:"N1fagurholsmyri",
            },
            {
                cords: [64.1316315807359, -20.32168418169022], titill: `N1 Flúðum`, website: N1link, phone: N1phone ,price: "", id:"N1fludum",
            },
            {
                cords: [64.30990906302517, -20.301750004291538], titill: `N1 Geysi`, website: N1link, phone: N1phone ,price: "", id:"N1geysi",
            },
            {
                cords: [64.25915969051056, -15.206333398818972], titill: `N1 Höfn í Hornafirði`, website: N1link, phone: N1phone ,price: "", id:"N1hofnihornafirdi",
            },
            {
                cords: [63.79391607980962, -18.039958477020267], titill: `N1 Kirkjubæjarklaustri`, website: N1link, phone: N1phone ,price: "", id:"N1kirkjubaejarklaustri",
            },
            {
                cords: [64.2169679257231, -20.733915567398075], titill: `N1 Laugarvatni`, website: N1link, phone: N1phone ,price: "", id:"N1laugarvatni",
            },
            {
                cords: [64.31351915384093, -15.229859054088594], titill: `N1 Nesjum`, website: N1link, phone: N1phone ,price: "", id:"N1nesjum",
            },
            {
                cords: [63.85589613552598, -21.37210965156555], titill: `N1 Þorlákshöfn`, website: N1link, phone: N1phone ,price: "", id:"N1thorlakshofn",
            },
        ],
    },
    
}

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
const atlantsoliaIcon= L.icon({
    iconUrl: "img/AO.png",
    iconSize: [32,32],
})

const iconMap = {
    olis: olisIcon,
    N1: N1icon,
    OB: OBicon,
    orkan: orkanIcon,
    atlantsolia: atlantsoliaIcon,
}

const olisLayer = L.layerGroup()
const N1Layer = L.layerGroup()
const OBLayer = L.layerGroup()
const orkanLayer = L.layerGroup()
const atlantisoliaLayer = L.layerGroup()

const layerMap = {
    olis: olisLayer,
    N1: N1Layer,
    OB: OBLayer,
    orkan: orkanLayer,
    atlantsolia: atlantisoliaLayer,
}

for (let region in data) {
    const companies = data[region];

    for (let company in companies) {
        const stations = companies[company];

        for (let station of stations) {
            addMarker(station, company);
        }
    }
}

function addMarker(loc, company) {
    const icon = iconMap[company] || markerIcon;
    const layers = layerMap[company] || map;

    L.marker(loc.cords, {
        title: loc.titill,
        icon: icon,
    }).bindPopup(`
        <span class="popup">
            <strong>${loc.titill}</strong><br>
            <a href="${loc.website}" target ="_blank">Heimasíða</a><br>
            Hafa Samband:<br>
            <a href="tel:${loc.phone}">${loc.phone}</a>
        </span>`
    ).addTo(layers).addTo(map)
}

map.addLayer(olisLayer)
map.addLayer(N1Layer)
map.addLayer(OBLayer)
map.addLayer(orkanLayer)
map.addLayer(atlantisoliaLayer)


function clearOlis(){
    olisLayer.clearLayers()
}
function clearN1(){
    N1Layer.clearLayers()
}
function clearOB(){
    OBLayer.clearLayers()
}
function clearOrkan(){
    orkanLayer.clearLayers()
}
function clearAO(){
    atlantisoliaLayer.clearLayers()
}

function addOlis(){
    map.addLayer(olisLayer)
}
function addN1(){
    map.addLayer(N1Layer)
}
function addOB(){
    map.addLayer(OBLayer)
}
function addOrkan(){
    map.addLayer(orkanLayer)
}
function addAO(){
    map.addLayer(atlantisoliaLayer)
}