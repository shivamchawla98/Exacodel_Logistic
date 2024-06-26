const truckName: Array<string> = [
  "TATA ACE",
  "ASHOK LEYLAND DOST",
  "MAHINDRA BOLERO PICK UP",
  "TATA 407",
  "EICHER 14 FEET",
  "EICHER 17 FEET",
  "EICHER 19 FEET",
  "TATA 22 FEET",
  "TATA TRUCK (6 TYRE)",
  "TAURUS 16 T (10 TYRE)",
  "TAURUS 21 T (12 TYRE)",
  "TAURUS 25 T (14 TYRE)",
  "CONTAINER 20 FT",
  "CONTAINER 32 FT SXL",
  "CONTAINER 32 FT MXL",
  "CONTAINER 32 FT SXL / MXL HQ",
  "20 FEET OPEN ALL SIDE (ODC)",
  "28-32 FEET OPEN-TRAILOR JCB ODC",
  "32 FEET OPEN-TRAILOR ODC",
  "40 FEET OPEN-TRAILOR ODC",
];

const maxPayLoad: Array<string> = [
  "MAX LOAD 850 KGS",
  "MAX LOAD 1 TON",
  "MAX LOAD 1.5 TON",
  "MAX LOAD 2.5 TON",
  "MAX LOAD 4 TON",
  "MAX LOAD 5 TON",
  "MAX LOAD 7/8/9 TON",
  "MAX LOAD 10 TON",
  "MAX LOAD 9 TON",
  "MAX LOAD 16 TON",
  "MAX LOAD 21 TON",
  "MAX LOAD 6.5 TON",
  "MAX LOAD 7 TON",
  "MAX LOAD 14 TON",
  "MAX LOAD 7 / 14 TON",
  "MAX LOAD 8 TON",
  "MAX LOAD 25 TON",
  "MAX LOAD 32 TON",
];

const vehicleDimension: Array<string> = [
  "7 L X 4.8 W X 4.8 H",
  "7 L X 4.8 W X 4.8 H",
  "8 L X 4.8 W X 4.8 H",
  "9 L X 5.5 W X 5 H",
  "14 L X 6 W X 6.5 H",
  "17 L X 6 W X 7 H",
  "19 L X 7 W X 7 H",
  "22 L X 7.5 W X 7 H",
  "17.5 L X 7 W X 6 H",
  "21 L X 7.2 W X 7 H",
  "24 L X 7.3 W X 7 H",
  "28 L X 7.8 W X 7 H",
  "20 L X 8 W X 8 H",
  "32 L X 8 W X 8 H",
  "32 L X 8 W X 8 H",
  "32 L X 8 W X 10 H",
  "20 L X 8 W X 8 H",
  "28-32 L X 8 W X 8 H",
  "32 L X 8 W X 8 H",
  "40 L X 8 W X 8 H",
];

const industryTypes: Array<string> = [
  "Apparels_and_garments",
  "Building_and_Construction",
  "Electronic_and_Electical",
  "Drugs_and_pharms",
  "Industrial_Machines",
  "Industrial_suppplies",
  "Food_and_Beverages",
  "Hospital_and_Medicalsupplies",
];

const companyTypes = [
  "MANUFACTURER",
  "MERCHANT_TRADER",
  "MANUFACTURER_EXPORTER",
  "MERCHANT_EXPORTER",
];

const typeOfCompanies: Array<string> = [
  "Partnership",
  "private_limited",
  "public_limited",
  "limited_liability_partnership",
  "Non_profit_cooperation",
  "Inc",
  "Cooperation",
  "LLC",
];

const documetForOverseas: Array<string> = [
  "IEC Code",
  "ISO Certificate",
  "Business Registration Certificate",
  "VAT/GST Registration Certificate",
  "PAN Card",
  "Start Export House",
  "MSME/UDYAM CERTIFICATE",
  "D-U-N-S",
  "AEO",
  "IATA",
  "FIATA",
];

const documetForForign: Array<string> = [
  "Incorporation Certificate",
  "A.E.O",
  "D-U-N-S",
  "IATA",
  "FIATA",
  "Network Certificates",
];

const countries: Array<string> = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Côte d'Ivoire",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  'Eswatini (fmr. "Swaziland")',
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const mainMarket: Array<string> = [
  "Asia",
  "Africa",
  "Australia",
  "Europe",
  "North America",
  "South America",
];

const storageType: Array<string> = [
  "General Warehouse",
  "Cold Storage Facility",
  "Refrigerated Warehouse",
  "Full Fulfillment Center",
  "Petroleum Warehouse",
  "Bonded Warehouse",
  "HAZ Cargo Warehouse",
];

const turnOver: Array<string> = [
  "UP_TO_10000",
  "FROM_10000_TO_50000",
  "FROM_50000_TO_100000",
  "FROM_100000_TO_500000",
  "FROM_500000_TO_1000000",
  "FROM_1000000_TO_1500000",
  "FROM_1500000_TO_2500000",
  "FROM_2500000_TO_5000000",
  "FROM_5000000_TO_10000000",
  "ABOVE_10000000",
];

const overseasAgent: Array<string> = [
  "WCA",
  "WWPC",
  "PLN",
  "CLN",
  "WPA",
  "W3LN",
  "FNC",
  "JC Trans",
  "BLING",
  "TWIG",
  "PARNITY",
  "PPL",
  "AMERICAS ALLIANCE",
  "LATAM",
  "OTHER",
];

const temperatureCapacity: Array<string> = [
  "-18 to +20 Deg Cel.",
  "-2 to -8 Deg Cel.",
  "-20 to +20 Deg Cel.",
  "+15 to 25 Deg Cel.",
];

const states: Array<string> = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

//   change it in future
const pincode: Array<string> = ["122001", "54321"];
const basisOfCharges = ["PER KGS", "PER VEHICLE"];
const shippingLines = [
  "Maersk Line",
  "Mediterranean Shipping Company",
  "China Ocean Shipping",
  "CMA-CGM",
  "Hapag-Lloyd",
  "Evergreen",
  "Orient Overseas Container Line",
  "Hamburg Süd",
  "Yang Ming",
  "United Arab Shipping Company",
  "Nippon Yusen Kaisha",
  "Mitsui Osaka Shosen Kaisha Lines",
  "Hyundai Merchant Marine",
  "Kawasaki Kisen Kaisha Limited",
  "Pacific International Lines",
  "Zim Integrated Shipping Services",
  "Wan Hai Lines",
  "X-Press Feeders",
  "Republic of Korea Marine Transport Company",
  "Shandong International Transportation Corporation",
  "Islamic Republic of Iran Shipping Lines",
  "Arkas Container Transport",
  "TS Lines",
  "Simatech Shipping",
  "Sinokor Merchant Marine",
  "Transworld Group of Companies",
  "Emirates Shipping Line",
  "Regional Container Lines",
  "China Merchants Group",
  "Unifeeder",
  "Heung-A Shipping",
  "SM Line",
  "Niledutch",
  "Matson",
  "Quanzhou Ansheng Shipping Company",
  "Zhonggu Shipping",
  "Samudera Indonesia",
  "Salam Pacific Indonesia Lines",
  "Seaboard Marine",
  "Temas Line",
  "Namsung Shipping Company",
  "Meratus Line",
  "Tanto Intim Line",
  "Shipping Corporation of India",
  "Swire Group",
  "National Transport and Overseas Services Company",
  "Far Eastern Shipping Company",
  "W.E.C. Lines",
  "Log-in Logistica Intermodal",
  "Far Shipping",
];
const airlines = [
  "ABSA Cargo Airline",
  "Adria Airways",
  "Aegean Airlines",
  "Aer Lingus",
  "Aero República",
  "Aeroflot",
  "Aerolineas Argentinas",
  "Aerolineas Galapagos S.A. Aerogal",
  "Aeromexico",
  "Afriqiyah Airways",
  "Aigle Azur",
  "Air Algérie",
  "Air Arabia",
  "Air Astana",
  "Air Austral",
  "Air Baltic",
  "Air Berlin",
  "Air Botswana",
  "Air Caledonie",
  "Air Canada",
  "Air China Limited",
  "Air Corsica",
  "Air Europa",
  "Air France",
  "Air India",
  "Air Koryo",
  "Air Macau",
  "Air Madagascar",
  "Air Malta",
  "Air Mauritius",
  "Air Moldova",
  "Air Namibia",
  "Air New Zealand",
  "Air Niugini",
  "Air Nostrum",
  "Air One S.p.A.",
  "Air SERBIA a.d. Beograd",
  "Air Seychelles",
  "Air Tahiti",
  "Air Tahiti Nui",
  "Air Transat",
  "Air Uganda",
  "Air Vanuatu",
  "AirBridgeCargo Airlines",
  "Aircalin",
  "Airlink",
  "Alaska Airlines",
  "Alitalia",
  "All Nippon Airways",
  "AlMasria Universal Airlines",
  "ALS",
  "American Airlines",
  "Arik Air",
  "Arkia Israeli Airlines",
  "Asia Pacific Airlines",
  "Asiana",
  "Atlas Air",
  "Atlasjet Airlines",
  "Austral",
  "Austrian",
  "AVIANCA",
  "Avianca Brasil",
  "Azerbaijan Airlines",
  "B&H Airlines",
  "Bangkok Air",
  "Belavia - Belarusian Airlines",
  "BH AIR",
  "Biman",
  "Binter Canarias",
  "Blue Panorama",
  "Blue1",
  "bmi Regional",
  "Boliviana de Aviación - BoA",
  "British Airways",
  "Brussels Airlines",
  "Bulgaria air",
  "C.A.L. Cargo Airlines",
  "Cargojet Airways",
  "Cargolux S.A.",
  "Caribbean Airlines",
  "Carpatair",
  "Cathay Pacific",
  "China Airlines",
  "China Cargo Airlines",
  "China Eastern",
  "China Postal Airlines",
  "China Southern Airlines",
  "CityJet",
  "Comair",
  "Condor",
  "COPA Airlines",
  "Corendon Airlines",
  "Corsair International",
  "Croatia Airlines",
  "Cubana",
  "Cyprus Airways",
  "Czech Airlines j.s.c",
  "Delta Air Lines",
  "DHL Air",
  "DHL Aviation EEMEA B.S.C.(c)",
  "Donavia",
  "Dragonair",
  "Egyptair",
  "EL AL",
  "Emirates",
  "Estonian Air",
  "Ethiopian Airlines",
  "Etihad Airways",
  "Euroatlantic Airways",
  "European Air Transport",
  "Eurowings",
  "EVA Air",
  "Federal Express",
  "Fiji Airways",
  "Finnair",
  "flybe",
  "Freebird Airlines",
  "Garuda",
  "Georgian Airways",
  "Germania",
  "Gulf Air",
  "Hahn Air",
  "Hainan Airlines",
  "Hawaiian Airlines",
  "Hi Fly",
  "Hong Kong Airlines",
  "Hong Kong Express Airways",
  "IBERIA",
  "Icelandair",
  "InselAir",
  "Interair",
  "InterSky",
  "Iran Air",
  "Iran Aseman Airlines",
  "Israir",
  "Japan Airlines",
  "Jazeera Airways",
  "Jet Airways",
  "Jet Lite (India) Limited",
  "JetBlue",
  "Jordan Aviation",
  "JSC Aircompany Yakutia",
  "JSC Nordavia-RA",
  "Juneyao Airlines",
  "Kenya Airways",
  "Kish Air",
  "KLM",
  "Korean Air",
  "Kuwait Airways",
  "LACSA",
  "LAM",
  "Lan Airlines",
  "Lan Argentina",
  "Lan Cargo",
  "Lan Perú",
  "LanEcuador",
  "LIAT Airlines",
  "Libyan Airlines",
  "LLC 'NORD WIND'",
  "LOT Polish Airlines",
  "Lufthansa",
  "Lufthansa Cargo",
  "Lufthansa CityLine",
  "Luxair",
  "Mahan Air",
  "Malaysia Airlines",
  "Malmö Aviation",
  "Martinair Cargo",
  "MAS AIR",
  "MEA",
  "Meridiana fly",
  "MIAT",
  "Montenegro Airlines",
  "Nesma Airlines",
  "NIKI",
  "Nile Air",
  "Nippon Cargo Airlines (NCA)",
  "Nouvelair",
  "Olympic Air",
  "Oman Air",
  "Onur Air",
  "PAL",
  "Pegasus Airlines",
  "PGA-Portugália Airlines",
  "PIA",
  "Precision Air",
  "PrivatAir",
  "Qantas",
  "Qatar Airways",
  "Rossiya Airlines",
  "Royal Air Maroc",
  "Royal Brunei",
  "Royal Jordanian",
  "SAA",
  "Safair",
  "Safi Airways",
  "SAS",
  "SATA Air Açores",
  "SATA Internacional",
  "Saudi Arabian Airlines",
  "Shandong Airlines",
  "Shanghai Airlines",
  "Shenzhen Airlines",
  "SIA",
  "SIA Cargo",
  "Siberia Airlines",
  "Sichuan Airlines",
  "Silkair",
  "South African Express Airways",
  "SriLankan",
  "Sudan Airways",
  "SunExpress",
  "Surinam Airways",
  "SWISS",
  "SYPHAX AIRLINES",
  "Syrianair",
  "TAAG - Angola Airlines",
  "TACA",
  "TACA Peru",
  "TACV Cabo Verde Airlines",
  "TAM - Transportes Aéreos del Mercosur Sociedad Anónima",
  "TAM Linhas Aéreas",
  "TAME - Linea Aérea del Ecuador",
  "TAP Portugal",
  "TAROM",
  "Tassili Airlines",
  "Thai Airways International",
  "THY - Turkish Airlines",
  "Tianjin Airlines",
  "TNT Airways S.A.",
  "Transaero",
  "TransAsia Airways",
  "TUIfly",
  "Tunisair",
  "Ukraine International Airlines",
  "United Airlines",
  "UPS Airlines",
  "US Airways",
  "UTair",
  "Uzbekistan Airways",
  "Vietnam Airlines",
  "Virgin Atlantic",
  "Virgin Australia",
  "VLM Airlines",
  "Volaris",
  "Volga-Dnepr Airlines",
  "VRG Linhas Aéreas S.A. - Grupo GOL",
  "White coloured by you",
  "Wideroe",
  "Xiamen Airlines",
  "Yemenia",
  "Silk Way Airlines",
  "Silk Way West Airlines Limited",
];

const ports = [
  "Shanghai, China",
  "Singapore",
  "Ningbo-Zhoushan, China",
  "Shenzhen, China",
  "Guangzhou Harbor, China",
  "Busan, South Korea",
  "Qingdao, China",
  "Hong Kong, S.A.R, China",
  "Tianjin, China",
  "Rotterdam, The Netherlands",
  "Jebel Ali, Dubai, United Arab Emirates",
  "Port Klang, Malaysia",
  "Xiamen, China",
  "Antwerp, Belgium",
  "Kaohsiung, Taiwan, China",
  "Dalian, China",
  "Los Angeles, U.S.A",
  "Hamburg, Germany",
  "Tanjung Pelepas, Malaysia",
  "Laem Chabang, Thailand",
  "Keihin Ports, Japan",
  "Long Beach, U.S.A.",
  "Tanjung Priok, Jakarta, Indonesia",
  "New York-New Jersey, U.S.A.",
  "Colombo, Sri Lanka",
  "Ho Chi Minh City, Vietnam",
  "Suzhou, China",
  "Piraeus, Greece",
  "Yingkou, China",
  "Valencia, Spain",
  "Manila, Philippines",
  "Taicang, China",
  "Hai Phong, Vietnam",
  "Algeciras, Spain",
  "Jawarharlal Nehru Port (Nhava Sheva), India",
  "Bremen/Bremerhaven, Germany",
  "Tanger Med, Morocco",
  "Lianyungang, China",
  "Mundra, India",
  "Savannah, U.S.A",
  "Tokyo, Japan",
  "Rizhao, China",
  "Foshan, China",
  "Jeddah, Saudi Arabia",
  "Colon, Panama",
  "Santos, Brazil",
  "Salalah, Oman",
  "Dongguan, China",
  "Guangxi Beibu, China",
  "Cai Mep, Vietnam",
  "Yingkou, China",
  "Port Said, Egypt",
  "Qinzhou, China",
  "NW Seaport Alliance, U.S.A.",
  "Felixstowe, U.K.",
  "Marsaxlokk, Malta",
  "Nanjing, China",
  "Fuzhou, China",
  "Barcelona, Spain",
  "Vancouver, Canada",
];

const containerTypes = [
  "20' Standard",
  "40' Standard",
  "40' Standard High Cube",
  "45' Standard High Cube",
  "20' Standard / Hardtop",
  "40' Standard / Hardtop",
  "40' Standard / Hardtop High Cube",
  "20' Flatrack",
  "40' Flatrack High Cube / 40' Platform",
  "20' Open Top",
  "20' Open Top High Cube",
  "40' Open Top",
  "40' Open Top High Cube",
  "20' Hardtop",
  "40' Hardtop",
  "40' Hardtop High Cube",
  "20' Reefer",
  "40' Reefer High Cube",
];

const truckTypes = [
  "Rigid truck",
  "Articulated truck",
  "Trailer",
  "Road train",
  "Tautliner truck",
  "Side Loader",
  "Refrigerated truck",
  "Tanker truck",
  "Open platform",
  "Closed truck",
  "Flatbed truck",
];

export {
  truckName,
  truckTypes,
  maxPayLoad,
  vehicleDimension,
  industryTypes,
  typeOfCompanies,
  documetForOverseas,
  documetForForign,
  countries,
  mainMarket,
  storageType,
  turnOver,
  overseasAgent,
  temperatureCapacity,
  states,
  pincode,
  basisOfCharges,
  shippingLines,
  airlines,
  ports,
  containerTypes,
  companyTypes,
};
