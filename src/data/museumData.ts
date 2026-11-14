export interface SpaceEquipment {
  id: string;
  name: string;
  shortName: string;
  destination: 'Moon' | 'Mars';
  category: 'Rover' | 'Lander' | 'Scientific Instrument' | 'Descent Stage' | 'Probe';
  mission: string;
  launchYear: number;
  landingYear: number;
  lastContact: string;
  imageUrl: string;
  imageCredit: string;
  nasaCatalogId: string; // NSSDCA / NASA ID
  coordinates: {
    latitude: string;
    longitude: string;
    region: string;
    latNum: number;
    lngNum: number;
  };
  purpose: string;
  scientificAchievements: string[];
  whyItRemains: string;
  lastKnownStatus: string;
  hardwareSpecs: {
    mass: string;
    powerSource: string;
    dimensions: string;
    distanceTraveled?: string;
    operationalDuration: string;
  };
  verifiedReferences: {
    title: string;
    url: string;
    archiveSource: string;
  }[];
  audioQuote?: string;
  audioQuoteMalayalam?: string;
}

export const MUSEUM_ITEMS: SpaceEquipment[] = [
  // 1. Apollo 11 Lunar Module Eagle descent stage
  {
    id: 'apollo-11-lm',
    name: 'Apollo 11 Lunar Module Descent Stage ("Eagle")',
    shortName: 'Apollo 11 LM Eagle',
    destination: 'Moon',
    category: 'Descent Stage',
    mission: 'Apollo 11',
    launchYear: 1969,
    landingYear: 1969,
    lastContact: 'July 21, 1969 (Ascent Stage Liftoff)',
    imageUrl: 'https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg',
    imageCredit: 'NASA / Neil Armstrong (Apollo 11 - AS11-40-5927)',
    nasaCatalogId: '1969-059C (LM-5 Eagle)',
    coordinates: {
      latitude: '0.67408° N',
      longitude: '23.47297° E',
      region: 'Tranquility Base, Mare Tranquillitatis',
      latNum: 0.67408,
      lngNum: 23.47297
    },
    purpose: 'Served as the powered descent vehicle, propellant reservoir, landing gear, and launch pad for humanity\'s first crewed landing on an extraterrestrial body.',
    scientificAchievements: [
      'Successfully executed humanity\'s first crewed touchdown on another celestial world on July 20, 1969.',
      'Provided shelter and communications during the historic 21-hour, 36-minute surface stay of Neil Armstrong and Buzz Aldrin.',
      'Served as the launch platform that propelled the Ascent Stage back into lunar orbit to rendezvous with Columbia.'
    ],
    whyItRemains: 'By design, the Apollo Lunar Module consisted of two independent stages. The Descent Stage acted as the launch pad; its engine, landing legs, and heavy depleted tanks remained behind on the lunar surface to minimize ascent mass for orbital rendezvous.',
    lastKnownStatus: 'Stationary at Tranquility Base. Imaged at sub-meter resolution by NASA\'s Lunar Reconnaissance Orbiter (LROC) in 2012, showing the gold foil-wrapped descent stage, astronaut footpaths, and deployed scientific experiments undisturbed.',
    hardwareSpecs: {
      mass: '2,034 kg dry (10,149 kg with descent propellants at launch)',
      powerSource: 'Four silver-zinc batteries (400 Ah each)',
      dimensions: '4.22 m height × 9.4 m diagonal landing gear span',
      operationalDuration: 'Active touchdown to ascent liftoff (21 hours, 36 minutes)'
    },
    verifiedReferences: [
      {
        title: 'NASA Apollo 11 Mission Report (MSC-00171)',
        url: 'https://www.nasa.gov/history/alsj/a11/A11_MissionReport.pdf',
        archiveSource: 'NASA Johnson Space Center'
      },
      {
        title: 'LROC Featured Site: Tranquility Base (M175124932LR)',
        url: 'https://www.lroc.asu.edu/posts/542',
        archiveSource: 'Arizona State University / LROC'
      },
      {
        title: 'NSSDCA Master Catalog: Apollo 11 Lunar Module',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C',
        archiveSource: 'NASA Goddard Space Flight Center'
      }
    ],
    audioQuote: "On my stainless steel leg, a plaque still bears the words: 'Here men from the planet Earth first set foot upon the Moon, July 1969 A.D. We came in peace for all mankind.' I stand guard over Neil and Buzz's footprints in eternal silence.",
    audioQuoteMalayalam: "എന്റെ കാലിൽ ഘടിപ്പിച്ച ഫലകത്തിൽ ഇന്നും ഈ വാക്കുകൾ കൊത്തിവെച്ചിട്ടുണ്ട്: '1969 ജൂലൈയിൽ ഭൂമിയിൽ നിന്നുള്ള മനുഷ്യർ ആദ്യമായി ചന്ദ്രനിൽ കാലുകുത്തി. ഞങ്ങൾ സമസ്ത മാനവരാശിക്കും സമാധാനവുമായി വന്നു.' ശാന്തതയുടെ സമുദ്രത്തിൽ ഞാൻ ആ ചരിത്ര കാൽപ്പാടുകൾക്ക് കാവൽ നിൽക്കുന്നു."
  },

  // 2. Apollo 15 Lunar Roving Vehicle
  {
    id: 'apollo-lrv',
    name: 'Apollo 15 Lunar Roving Vehicle (LRV-001)',
    shortName: 'Apollo 15 Lunar Rover',
    destination: 'Moon',
    category: 'Rover',
    mission: 'Apollo 15',
    launchYear: 1971,
    landingYear: 1971,
    lastContact: 'August 2, 1971 (EVA-3 Conclusion)',
    imageUrl: 'https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~medium.jpg',
    imageCredit: 'NASA / Dave Scott (Apollo 15 - AS15-88-11901)',
    nasaCatalogId: '1971-063C (Apollo 15 LRV)',
    coordinates: {
      latitude: '26.1322° N',
      longitude: '3.6339° E',
      region: 'Hadley-Apennine, Moon',
      latNum: 26.1322,
      lngNum: 3.6339
    },
    purpose: 'To radically expand astronaut mobility across the lunar surface, enabling exploration up to 7.6 km away from the Lunar Module and collection of core geologic samples from deep craters and rilles.',
    scientificAchievements: [
      'Expanded astronaut exploration radius from hundreds of meters to over 27.8 kilometers total traverse across Hadley Rille.',
      'Aided discovery of the famous "Genesis Rock" (anorthosite dated to 4.1 billion years) at Hadley Delta.',
      'Mounted a ground-commanded color TV camera that captured the first live broadcast of an Apollo Lunar Module ascent liftoff.',
      'Carried 77 kg of lunar rock and core samples back to Lunar Module Falcon.'
    ],
    whyItRemains: 'Left deliberately parked 300 meters away from Lunar Module Falcon so its ground-controlled color television camera could broadcast the ascent stage liftoff back to Earth. Returning the 210 kg vehicle into lunar orbit was impossible under strict mass and propellant budgets.',
    lastKnownStatus: 'Parked in pristine lunar vacuum overlooking Hadley Rille. Structurally intact; woven zinc-coated steel wire chevron tires remain resting in the regolith.',
    hardwareSpecs: {
      mass: '210 kg on Earth (34 kg on Moon)',
      powerSource: 'Two 36-volt silver-zinc potassium hydroxide non-rechargeable batteries (121 Ah capacity)',
      dimensions: '3.1 m length × 1.8 m width × 1.14 m height',
      distanceTraveled: '27.8 km (Apollo 15 traverse)',
      operationalDuration: 'Active during crewed lunar surface stays (66 hours, 55 minutes)'
    },
    verifiedReferences: [
      {
        title: 'NASA Apollo 15 Lunar Surface Journal - LRV Operations',
        url: 'https://www.hq.nasa.gov/alsj/a15/a15.rover.html',
        archiveSource: 'NASA History Division'
      },
      {
        title: 'NSSDCA Master Catalog: Apollo 15 Lunar Roving Vehicle',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C',
        archiveSource: 'NASA GSFC'
      }
    ],
    audioQuote: "I was humankind's first automobile driven on another world. Today, parked on the rim of Hadley Rille, my wire mesh wheels rest in absolute silence beneath the black sky, waiting for human boots to walk beside me once more.",
    audioQuoteMalayalam: "മറ്റൊരു ലോകത്ത് മനുഷ്യൻ ഓടിച്ച ആദ്യത്തെ വാഹനമായിരുന്നു ഞാൻ. ഇന്ന് ഹാഡ്‌ലി റിഷിന്റെ വക്കിൽ, എൻ്റെ വയർ മെഷ് ചക്രങ്ങൾ കറുത്ത ആകാശത്തിന് കീഴിൽ ശാന്തമായി വിശ്രമിക്കുന്നു, വീണ്ടും മനുഷ്യൻ്റെ കാലൊച്ച കേൾക്കാൻ കാത്തിരിക്കുന്നു."
  },

  // 3. Apollo 11 EASEP equipment
  {
    id: 'apollo-11-easep',
    name: 'Apollo 11 Early Apollo Scientific Experiments Package (EASEP & LRRR)',
    shortName: 'Apollo 11 EASEP & Laser Retroreflector',
    destination: 'Moon',
    category: 'Scientific Instrument',
    mission: 'Apollo 11',
    launchYear: 1969,
    landingYear: 1969,
    lastContact: 'Active today via passive laser reflection (LRRR: 57+ years operational)',
    imageUrl: 'https://images-assets.nasa.gov/image/as11-40-5948/as11-40-5948~medium.jpg',
    imageCredit: 'NASA / Neil Armstrong (Apollo 11 - AS11-40-5948)',
    nasaCatalogId: '1969-059D (PSEP) & 1969-059E (LRRR)',
    coordinates: {
      latitude: '0.6734° N',
      longitude: '23.4731° E',
      region: 'Tranquility Base, Mare Tranquillitatis',
      latNum: 0.6734,
      lngNum: 23.4731
    },
    purpose: 'To deploy humanity\'s first extraterrestrial geophysical science station (EASEP), consisting of the Passive Seismic Experiment Package (PSEP) and the passive optical Laser Ranging Retroreflector (LRRR).',
    scientificAchievements: [
      'Deployed by Buzz Aldrin on July 20, 1969; recorded the first extraterrestrial moonquakes and astronaut footstep reverberations.',
      'The 100-prism Laser Ranging Retroreflector (LRRR) requires zero electrical power and continues to bounce laser pulses from Earth observatories today (57+ years operational).',
      'Validated Einstein\'s General Theory of Relativity, mapped lunar core fluid boundaries, and verified that the Moon is spiraling away from Earth at 3.8 cm per year.'
    ],
    whyItRemains: 'Designed strictly as a permanent surface geophysical station. While the solar-powered passive seismometer ceased transmission after 21 days due to the extreme cold of lunar night, the passive optical quartz retroreflector requires zero electrical power and continues to return laser signals to Earth observatories today, although micrometeoroid erosion and lunar dust accumulation slowly degrade its optical efficiency over geological time.',
    lastKnownStatus: 'The quartz corner-cube retroreflector array is still actively pinged by McDonald Observatory (Texas) and Observatoire de la Côte d\'Azur (France), measuring the Earth-Moon distance with sub-centimeter precision after more than 57 years.',
    hardwareSpecs: {
      mass: 'EASEP total: 48 kg (LRRR prism array: 15.4 kg)',
      powerSource: 'Passive optical quartz corner-cubes (Zero electrical power required)',
      dimensions: '0.46 m × 0.46 m × 0.2 m',
      operationalDuration: 'Continuous passive operation from July 1969 to present (57+ years)'
    },
    verifiedReferences: [
      {
        title: 'Lunar Laser Ranging: 50 Years of Precision Orbit Determination',
        url: 'https://www.lpi.usra.edu/lunar/missions/apollo/apollo_11/experiments/lrr/',
        archiveSource: 'Lunar and Planetary Institute'
      },
      {
        title: 'NSSDCA Master Catalog: Apollo 11 Laser Ranging Retroreflector',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059E',
        archiveSource: 'NASA Goddard'
      },
      {
        title: 'NSSDCA Master Catalog: Apollo 11 Passive Seismic Experiment',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059D',
        archiveSource: 'NASA Goddard'
      }
    ],
    audioQuote: "Even after the seismic radio fell silent, my crystal prisms never stopped working. When Earth fires a burst of emerald laser light into the night, I catch it and fling it straight back home, measuring the space between worlds with millimeter precision.",
    audioQuoteMalayalam: "സീസ്മിക് റേഡിയോ നിശ്ചലമായ ശേഷവും, എൻ്റെ ക്രിസ്റ്റൽ പ്രിസങ്ങൾ പ്രവർത്തിച്ചുകൊണ്ടേയിരുന്നു. ഭൂമിയിൽ നിന്ന് വരുന്ന പച്ച ലേസർ രശ്മികളെ ഞാൻ സ്വീകരിച്ച് തിരിച്ചയക്കുന്നു, രണ്ട് ലോകങ്ങൾ തമ്മിലുള്ള അകലം മില്ലിമീറ്റർ കൃത്യതയോടെ അളക്കുന്നു."
  },

  // 4. Apollo 12 & Surveyor 3 (Other Documented Apollo Surface Equipment)
  {
    id: 'surveyor-3',
    name: 'Surveyor 3 & Apollo 12 Human Inspection Site',
    shortName: 'Surveyor 3 / Apollo 12',
    destination: 'Moon',
    category: 'Lander',
    mission: 'Surveyor 3 & Apollo 12',
    launchYear: 1967,
    landingYear: 1967,
    lastContact: 'November 20, 1969 (Inspected by Pete Conrad & Alan Bean)',
    imageUrl: 'https://images-assets.nasa.gov/image/AS12-48-7134/AS12-48-7134~medium.jpg',
    imageCredit: 'NASA / Alan Bean (Apollo 12 - AS12-48-7134)',
    nasaCatalogId: '1967-035A',
    coordinates: {
      latitude: '3.016° S',
      longitude: '23.418° W',
      region: 'Oceanus Procellarum (Ocean of Storms)',
      latNum: -3.016,
      lngNum: -23.418
    },
    purpose: 'To demonstrate pinpoint lunar landing by touching down within 160 meters of the Surveyor 3 robotic probe, allowing astronauts to inspect and retrieve hardware exposed to lunar vacuum for 31 months.',
    scientificAchievements: [
      'Only robotic spacecraft on another celestial body ever visited, inspected, and sampled on foot by human beings.',
      'Pete Conrad and Alan Bean retrieved its television camera, robotic scoop, and tubing for Earth laboratory analysis.',
      'Provided groundbreaking insights into cosmic radiation, micrometeoroid bombardment, and biological survival in space.'
    ],
    whyItRemains: 'Pre-Apollo robotic spacecraft whose tripod chassis, landing radar, and solar panel mast remain in Surveyor Crater as an invaluable space archaeology site.',
    lastKnownStatus: 'Resting in Surveyor Crater. The returned camera is on display at the Smithsonian National Air and Space Museum in Washington, D.C.',
    hardwareSpecs: {
      mass: '286 kg landed dry mass',
      powerSource: 'Single solar array and rechargeable silver-zinc battery',
      dimensions: '3.0 m height, 4.2 m landing gear triangle',
      operationalDuration: 'Robotic telemetry: 2 weeks; Human visitation: 31 months later'
    },
    verifiedReferences: [
      {
        title: 'Analysis of Surveyor 3 Material and Photographs Returned by Apollo 12',
        url: 'https://www.hq.nasa.gov/alsj/a12/surveyor3.html',
        archiveSource: 'NASA Lunar Science Institute'
      }
    ],
    audioQuote: "I thought I was abandoned forever on the slopes of my little crater. But two years later, two men in white suits walked down from a thunderous golden ship, patted my metal head, and smiled. I am the only robot whose hands have been held by human explorers on another world.",
    audioQuoteMalayalam: "എന്റെ ചെറിയ ഗർത്തത്തിൽ ഞാൻ എന്നെന്നേക്കുമായി ഉപേക്ഷിക്കപ്പെട്ടുവെന്നാണ് ഞാൻ കരുതിയത്. എന്നാൽ രണ്ട് വർഷത്തിന് ശേഷം, വെള്ളക്കുപ്പായമിട്ട രണ്ട് മനുഷ്യർ എന്റെ അരികിലേക്ക് നടന്നെത്തി, എന്റെ ക്യാമറയെ തൊട്ടുതലോടി. മറ്റൊരു ലോകത്ത് വെച്ച് മനുഷ്യന്റെ കരസ്പർശമേറ്റ ഏക റോബോട്ടാണ് ഞാൻ."
  },

  // 5. Apollo 14 Modular Equipment Transporter (Other Documented Apollo Surface Equipment)
  {
    id: 'apollo-14-met',
    name: 'Apollo 14 Modular Equipment Transporter (MET "Lunar Rickshaw")',
    shortName: 'Apollo 14 MET',
    destination: 'Moon',
    category: 'Scientific Instrument',
    mission: 'Apollo 14',
    launchYear: 1971,
    landingYear: 1971,
    lastContact: 'February 6, 1971 (EVA-2 Conclusion)',
    imageUrl: 'https://images-assets.nasa.gov/image/as14-67-09362/as14-67-09362~medium.jpg',
    imageCredit: 'NASA / Edgar Mitchell (Apollo 14 - AS14-67-09362)',
    nasaCatalogId: '1971-008C (Apollo 14 Surface Equipment)',
    coordinates: {
      latitude: '3.6453° S',
      longitude: '17.4714° W',
      region: 'Fra Mauro Highlands, Moon',
      latNum: -3.6453,
      lngNum: -17.4714
    },
    purpose: 'A two-wheeled handcart equipped with pneumatic rubber tires designed to carry geologic tools, sample return containers, and cameras across the Fra Mauro crater slopes.',
    scientificAchievements: [
      'Allowed Alan Shepard and Edgar Mitchell to transport 42.28 kg of geologic samples up the steep slopes of Cone Crater.',
      'Featured specially designed Goodyear pneumatic tires pressurized to 1.5 psi with nitrogen gas.',
      'Paved the way for the motorized Lunar Roving Vehicle deployed on subsequent Apollo missions.'
    ],
    whyItRemains: 'Left parked beside the Apollo 14 LM Antares descent stage in Fra Mauro regolith to save ascent mass.',
    lastKnownStatus: 'Intact at Fra Mauro. Photographed at high resolution by the LROC spacecraft in 2011 alongside astronaut footpaths.',
    hardwareSpecs: {
      mass: '11.3 kg empty (up to 68 kg loaded payload)',
      powerSource: 'Human powered (pulled via handle)',
      dimensions: '2.18 m length × 0.99 m width × 0.76 m height',
      operationalDuration: 'Active during Apollo 14 EVAs (33 hours on surface)'
    },
    verifiedReferences: [
      {
        title: 'Apollo 14 Modular Equipment Transporter Overview',
        url: 'https://www.hq.nasa.gov/alsj/a14/a14.met.html',
        archiveSource: 'Apollo Lunar Surface Journal'
      }
    ],
    audioQuote: "They called me the 'lunar rickshaw.' Alan Shepard and Edgar Mitchell pulled me through the thick dust of Cone Crater, loading my trays with ancient rocks that told the story of the Moon's birth.",
    audioQuoteMalayalam: "ചന്ദ്രനിലെ കൈവണ്ടി എന്നാണ് എന്നെ വിളിച്ചത്. അപ്പോളോ 14-ൽ അലൻ ഷെപ്പാർഡും എഡ്ഗാർ മിച്ചലും എന്നെ വലിച്ച് കോൺ ഗർത്തം വരെ കൊണ്ടുപോയി, ചന്ദ്രന്റെ ജനനരഹസ്യങ്ങൾ പറയുന്ന പാറക്കല്ലുകൾ എന്നിൽ നിറച്ചു."
  },

  // 6. Apollo 16 Lunar Rover & Far UV Camera (Other Documented Apollo Surface Equipment)
  {
    id: 'apollo-16-lrv',
    name: 'Apollo 16 Lunar Roving Vehicle (LRV-002) & Far UV Camera',
    shortName: 'Apollo 16 LRV & UV Camera',
    destination: 'Moon',
    category: 'Rover',
    mission: 'Apollo 16',
    launchYear: 1972,
    landingYear: 1972,
    lastContact: 'April 24, 1972 (EVA-3 Conclusion)',
    imageUrl: 'https://images-assets.nasa.gov/image/as16-113-18339/as16-113-18339~medium.jpg',
    imageCredit: 'NASA / Charles Duke (Apollo 16 - AS16-113-18339)',
    nasaCatalogId: '1972-031C',
    coordinates: {
      latitude: '8.9730° S',
      longitude: '15.4981° E',
      region: 'Descartes Highlands, Moon',
      latNum: -8.9730,
      lngNum: 15.4981
    },
    purpose: 'To explore the Descartes Highlands and operate humanity\'s first astronomical observatory on the lunar surface (the Far UV Camera/Spectrograph).',
    scientificAchievements: [
      'John Young and Charlie Duke traversed 26.6 kilometers across Stone Mountain and North Ray Crater.',
      'Operated the Far Ultraviolet Camera, capturing the first astronomical images of Earth\'s geocorona and deep space stars from the Moon.',
      'Proved that Descartes Highlands were formed by impact breccias rather than volcanism, revolutionizing lunar geology.'
    ],
    whyItRemains: 'Parked at the "VIP Site" in Descartes Highlands with its high-gain antenna pointed toward Earth to broadcast LM Orion liftoff.',
    lastKnownStatus: 'Parked intact in Descartes Highlands. The gold-plated Far UV Camera remains resting in the shadow of the LM Orion descent stage.',
    hardwareSpecs: {
      mass: '210 kg rover',
      powerSource: 'Two 36-volt silver-zinc batteries',
      dimensions: '3.1 m × 1.8 m × 1.14 m',
      distanceTraveled: '26.6 km',
      operationalDuration: '71 hours surface stay'
    },
    verifiedReferences: [
      {
        title: 'Apollo 16 Lunar Surface Journal - Descartes Exploration',
        url: 'https://www.hq.nasa.gov/alsj/a16/a16.html',
        archiveSource: 'NASA History'
      }
    ],
    audioQuote: "In the shadow of our lander, we aimed an ultraviolet telescope toward Earth. For the first time, humanity looked back from the Moon and saw the luminous magnetic corona of their home planet shining in the cosmic dark.",
    audioQuoteMalayalam: "ഞങ്ങളുടെ ലാൻഡറിന്റെ നിഴലിൽ ഞങ്ങൾ ഒരു അൾട്രാവയലറ്റ് ദൂരദർശിനി ഭൂമിയിലേക്ക് തിരിച്ചുപിടിച്ചു. ചന്ദ്രനിൽ നിന്ന് തിരിഞ്ഞുനോക്കിയ മനുഷ്യൻ, തങ്ങളുടെ ഭൂമി ബഹിരാകാശത്ത് തിളങ്ങിനിൽക്കുന്നത് ആദ്യമായി കണ്ടു."
  },

  // 7. Apollo 17 Lunar Rover (Other Documented Apollo Surface Equipment)
  {
    id: 'apollo-17-lrv',
    name: 'Apollo 17 Lunar Roving Vehicle (LRV-003) & Shorty Crater Site',
    shortName: 'Apollo 17 LRV-003',
    destination: 'Moon',
    category: 'Rover',
    mission: 'Apollo 17',
    launchYear: 1972,
    landingYear: 1972,
    lastContact: 'December 14, 1972 (Final Apollo EVA)',
    imageUrl: 'https://images-assets.nasa.gov/image/as17-140-21497/as17-140-21497~medium.jpg',
    imageCredit: 'NASA / Gene Cernan (Apollo 17 - AS17-140-21497)',
    nasaCatalogId: '1972-096C',
    coordinates: {
      latitude: '20.1908° N',
      longitude: '30.7717° E',
      region: 'Taurus-Littrow Valley, Moon',
      latNum: 20.1908,
      lngNum: 30.7717
    },
    purpose: 'To explore the deep valley of Taurus-Littrow, driven by Commander Gene Cernan and geologist Harrison "Jack" Schmitt.',
    scientificAchievements: [
      'Completed a program-record 35.7 kilometers of driving, carrying geologist Harrison Schmitt to Shorty Crater.',
      'Discovered brilliant orange volcanic pyroclastic glass beads, proving ancient explosive lunar volcanism.',
      'Featured an improvised fender repair crafted by the astronauts from taped photo maps and clamps, which held for the entire mission.'
    ],
    whyItRemains: 'Parked at the final "VIP Site" with its camera broadcasting Gene Cernan and Jack Schmitt\'s ascent into lunar orbit.',
    lastKnownStatus: 'Parked in Taurus-Littrow. Imaged intact by LROC Narrow Angle Camera, showing the rover and the nearby LM Challenger descent stage.',
    hardwareSpecs: {
      mass: '210 kg rover',
      powerSource: 'Two 36-volt silver-zinc batteries',
      dimensions: '3.1 m × 1.8 m × 1.14 m',
      distanceTraveled: '35.7 km (Program record)',
      operationalDuration: '75 hours surface stay'
    },
    verifiedReferences: [
      {
        title: 'Apollo 17 Taurus-Littrow Valley Geologic Results',
        url: 'https://www.hq.nasa.gov/alsj/a17/a17.html',
        archiveSource: 'NASA History'
      }
    ],
    audioQuote: "Harrison Schmitt was the only professional geologist to ever walk on the Moon. Together, we drove 35 kilometers across Taurus-Littrow and dug into the orange soil of Shorty Crater, sealing the golden age of Apollo.",
    audioQuoteMalayalam: "ചന്ദ്രനിൽ കാലുകുത്തിയ ഒരേയൊരു ഭൂഗർഭ ശാസ്ത്രജ്ഞൻ ഹാരിസൺ ഷ്മിറ്റ് ആയിരുന്നു. ഞങ്ങൾ 35 കിലോമീറ്റർ ദൂരം താണ്ടി, ഷോർട്ടി ഗർത്തത്തിലെ ഓറഞ്ച് മണ്ണ് കുഴിച്ചെടുത്തു, അപ്പോളോയുടെ സുവർണ്ണ കാലഘട്ടത്തിന് പൂർണ്ണവിരാമമിട്ടു."
  },

  // 8. Sojourner Rover (Mars)
  {
    id: 'sojourner-pathfinder',
    name: 'Mars Pathfinder & Sojourner Rover',
    shortName: 'Sojourner Rover',
    destination: 'Mars',
    category: 'Rover',
    mission: 'Mars Pathfinder',
    launchYear: 1996,
    landingYear: 1997,
    lastContact: 'September 27, 1997 (Sol 83)',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA01120/PIA01120~medium.jpg',
    imageCredit: 'NASA / JPL-Caltech (PIA01120)',
    nasaCatalogId: '1996-068B (Sojourner Rover)',
    coordinates: {
      latitude: '19.33° N',
      longitude: '33.55° W',
      region: 'Ares Vallis (Chryse Planitia), Mars',
      latNum: 19.33,
      lngNum: -33.55
    },
    purpose: 'To demonstrate the viability of low-cost robotic planetary surface exploration and deploy the first autonomous wheeled mobile robot on Mars.',
    scientificAchievements: [
      'Humanity\'s first successful wheeled mobile rover on the surface of Mars (July 4, 1997).',
      'Traveled approximately 100 meters, taking 550 chemical and mineralogical measurements of rocks such as "Barnacle Bill" and "Yogi".',
      'Confirmed through its Alpha Proton X-ray Spectrometer (APXS) that Martian rocks were rich in silica, resembling terrestrial andesite and indicating past volcanic processing.',
      'Returned 16,500 images via the Carl Sagan Memorial Base station.'
    ],
    whyItRemains: 'Designed as a 7-day technology demonstration that exceeded its lifespan by a factor of 12. Left stationary on the red sands of Ares Vallis when the primary Pathfinder communications lander battery suffered thermal failure in cold Martian nights.',
    lastKnownStatus: 'Resting beside the Carl Sagan Memorial Base in Ares Vallis. Automated contingency protocols dictated that Sojourner would circle the stationary base awaiting communications after contact was lost, until its solar panels failed.',
    hardwareSpecs: {
      mass: '10.5 kg (23 lbs) rover',
      powerSource: '0.22 m² GaAs solar array (16 Watts peak) + 150 Wh lithium thionyl chloride battery',
      dimensions: '65 cm length × 48 cm width × 30 cm height',
      distanceTraveled: 'Approx 100 meters',
      operationalDuration: '83 sols (planned for 7 sols)'
    },
    verifiedReferences: [
      {
        title: 'JPL Mars Pathfinder & Sojourner Science Results',
        url: 'https://www.jpl.nasa.gov/missions/mars-pathfinder-sojourner',
        archiveSource: 'NASA Jet Propulsion Laboratory'
      },
      {
        title: 'NSSDCA ID: Mars Pathfinder / Sojourner Rover',
        url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1996-068B',
        archiveSource: 'NASA Goddard Space Flight Center'
      }
    ],
    audioQuote: "I was smaller than a microwave oven, weighing barely ten kilograms. But when my six little titanium wheels rolled down the ramp and touched the Martian soil in July 1997, I proved that humanity could roam freely on Mars. Every rover that came after me followed in my tiny tracks.",
    audioQuoteMalayalam: "ഒരു മൈക്രോവേവ് അവനേക്കാൾ ചെറുതായിരുന്നു ഞാൻ, വെറും പത്ത് കിലോഗ്രാം ഭാരം. പക്ഷേ, 1997 ജൂലൈയിൽ എന്റെ ആറ് ചെറിയ ചക്രങ്ങൾ ചൊവ്വയുടെ മണ്ണിൽ തൊട്ടപ്പോൾ, മനുഷ്യന് ചൊവ്വയിൽ വിഹരിക്കാനാകും എന്ന് ഞാൻ തെളിയിച്ചു. എനിക്ക് ശേഷം വന്ന എല്ലാ റോവറുകളും എന്റെ ചെറിയ കാൽപ്പാടുകളെയാണ് പിന്തുടർന്നത്."
  },

  // 9. Spirit Rover (Mars)
  {
    id: 'spirit-mer-a',
    name: 'Mars Exploration Rover A: Spirit (MER-A)',
    shortName: 'Spirit Rover',
    destination: 'Mars',
    category: 'Rover',
    mission: 'Mars Exploration Rover',
    launchYear: 2003,
    landingYear: 2004,
    lastContact: 'March 22, 2010 (Sol 2210)',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA05200/PIA05200~medium.jpg',
    imageCredit: 'NASA / JPL-Caltech / Cornell (PIA05200)',
    nasaCatalogId: '2003-027A (Spirit MER-A)',
    coordinates: {
      latitude: '14.5684° S',
      longitude: '175.47263° E',
      region: 'Gusev Crater (Home Plate / Troy), Mars',
      latNum: -14.5684,
      lngNum: 175.47263
    },
    purpose: 'To search for and characterize rocks and soils that hold clues to past water activity inside the ancient impact basin of Gusev Crater.',
    scientificAchievements: [
      'Survived 2,210 Martian sols (more than 24 times its original 90-sol design lifetime).',
      'Summited Husband Hill, becoming the first robot to climb a mountain on another planet.',
      'In March 2006, its right front wheel seized. While dragging the immobilized wheel backward, it scraped open bright white soil consisting of 90% pure silica — conclusive proof of past hot springs or hydrothermal steam vents where microbial life could have thrived.',
      'Returned 128,224 raw images of Mars.'
    ],
    whyItRemains: 'In April 2009, Spirit broke through a crusty sulfur-rich surface into soft soil ("Troy") and became trapped. Unable to position its dust-coated solar arrays to face the winter sun, the rover entered low-power hibernation and succumbed to sub-zero temperatures.',
    lastKnownStatus: 'Permanently located at "Troy" on the western side of Home Plate in Gusev Crater. Imaged by HiRISE on MRO as a bright reflective speck surrounded by its tracks.',
    hardwareSpecs: {
      mass: '185 kg',
      powerSource: 'Triple-junction GaAs solar arrays (140 Watts peak) and rechargeable Li-ion batteries',
      dimensions: '1.5 m length × 2.3 m width × 1.6 m height',
      distanceTraveled: '7.73 km (4.80 miles)',
      operationalDuration: '6 years, 2 months, 19 days (2,210 sols)'
    },
    verifiedReferences: [
      {
        title: 'NASA MER Spirit Final Mission Status and Science Archive',
        url: 'https://mars.nasa.gov/mer/mission/status_spirit.html',
        archiveSource: 'NASA Mars Exploration Program'
      }
    ],
    audioQuote: "My broken wheel was my greatest gift. For four years I dragged it behind me, carving a deep wound into the red crust — until one afternoon, the trench sparkled with dazzling pure white silica. I had found the fossilized breath of ancient Martian hot springs.",
    audioQuoteMalayalam: "എന്റെ തകർന്ന ചക്രമായിരുന്നു എനിക്ക് ലഭിച്ച ഏറ്റവും വലിയ സമ്മാനം. നാല് വർഷത്തോളം ഞാൻ അതിനെ വലിച്ചിഴച്ചു നടന്നു. ഒടുവിൽ ആ മുറിവിൽ നിന്നും വെട്ടിത്തിളങ്ങുന്ന ശുദ്ധമായ വെളുത്ത സിലിക്ക പുറത്തുവന്നു. പുരാതന ചൊവ്വയിലെ ചൂടുനീരുറവകളുടെ ജീവന്റെ അടയാളമായിരുന്നു ഞാൻ കണ്ടെത്തിയത്."
  },

  // 10. Opportunity Rover (Mars)
  {
    id: 'opportunity-mer-b',
    name: 'Mars Exploration Rover B: Opportunity ("Oppy")',
    shortName: 'Opportunity Rover',
    destination: 'Mars',
    category: 'Rover',
    mission: 'Mars Exploration Rover',
    launchYear: 2003,
    landingYear: 2004,
    lastContact: 'June 10, 2018 (Sol 5111)',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA18079/PIA18079~medium.jpg',
    imageCredit: 'NASA / JPL-Caltech / Cornell / ASU (PIA18079)',
    nasaCatalogId: '2003-032A (Opportunity MER-B)',
    coordinates: {
      latitude: '1.9462° S',
      longitude: '354.4734° E',
      region: 'Perseverance Valley (Endeavour Crater), Mars',
      latNum: -1.9462,
      lngNum: -5.5266
    },
    purpose: 'To explore the iron-rich hematite deposits of Meridiani Planum and determine whether sustained liquid water existed in the ancient Martian environment.',
    scientificAchievements: [
      'Completed an unprecedented 14 years and 138 days on Mars, driving 45.16 kilometers (28.06 miles) — the longest distance driven by any off-Earth vehicle in history.',
      'Discovered hematite-rich spherical concretions ("blueberries"), proving Meridiani Planum was once an acidic, soaked shallow lake system.',
      'Explored Victoria Crater and the rim of 22-km Endeavour Crater, discovering clay minerals (smectite) indicating neutral-pH, potable water in Mars\' early Noachian era.',
      'Returned 217,594 raw images to Earth.'
    ],
    whyItRemains: 'In June 2018, a massive planet-encircling dust storm blotted out the Sun over Endeavour Crater, reducing atmospheric transparency (tau) to unprecedented darkness (>10.8). Deprived of sunlight, its batteries drained completely, freezing the rover\'s critical systems.',
    lastKnownStatus: 'Resting on the upper slope of Perseverance Valley on the western rim of Endeavour Crater. Over 1,000 recovery signals were sent until the mission was formally concluded in 2019.',
    hardwareSpecs: {
      mass: '185 kg',
      powerSource: 'Triple-junction GaAs solar arrays with Li-ion batteries',
      dimensions: '1.5 m length × 2.3 m width × 1.6 m height',
      distanceTraveled: '45.16 km (World Record for off-world driving)',
      operationalDuration: '14 years, 138 days (5,111 sols)'
    },
    verifiedReferences: [
      {
        title: 'NASA Opportunity Rover Mission Archive and Record Drive',
        url: 'https://mars.nasa.gov/mer/mission/status_opportunity.html',
        archiveSource: 'NASA / JPL-Caltech'
      }
    ],
    audioQuote: "For fifteen years I raced across the Meridiani plains. I was only built to survive ninety days, but together we ran a full marathon and climbed the walls of giant craters. On Sol 5111, the great storm swallowed the Sun. My battery was low, and it was getting dark... but our journey was complete.",
    audioQuoteMalayalam: "വെറും 90 ദിവസത്തേക്ക് മാത്രം നിർമ്മിക്കപ്പെട്ട ഞാൻ 15 വർഷം മെറിഡിയാനി സമതലങ്ങളിൽ കുതിച്ചുപാഞ്ഞു. ഒരു പൂർണ്ണ മാരത്തൺ ദൂരം താണ്ടി. ഒടുവിൽ 5111-ാം സോളിൽ ഒരു ഭീമാകാരമായ കൊടുങ്കാറ്റ് സൂര്യനെ മറച്ചു. 'എന്റെ ബാറ്ററി കുറവാണ്, ഇരുട്ട് പടരുന്നു...' എന്ന് പറഞ്ഞുകൊണ്ട് ഞാൻ ശാന്തമായി കണ്ണടച്ചു."
  },

  // 11. InSight Lander (Mars)
  {
    id: 'insight-lander',
    name: 'Interior Exploration using Seismic Investigations, Geodesy and Heat Transport (InSight)',
    shortName: 'InSight Lander',
    destination: 'Mars',
    category: 'Lander',
    mission: 'InSight',
    launchYear: 2018,
    landingYear: 2018,
    lastContact: 'December 15, 2022 (Sol 1445)',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA22874/PIA22874~medium.jpg',
    imageCredit: 'NASA / JPL-Caltech / CNES / IPGP (PIA22874)',
    nasaCatalogId: '2018-042A (InSight Lander)',
    coordinates: {
      latitude: '4.5024° N',
      longitude: '135.6234° E',
      region: 'Elysium Planitia, Mars',
      latNum: 4.5024,
      lngNum: 135.6234
    },
    purpose: 'To probe the deep interior structure of Mars — crust, mantle, and metallic liquid core — using ultra-sensitive seismometers, heat flow probes, and precision radio tracking.',
    scientificAchievements: [
      'Detected 1,319 marsquakes using the SEIS seismometer, including a monster magnitude 4.7 quake that reverberated through the entire planet for hours.',
      'Measured the thickness of Mars’ crust (24 to 72 km) and discovered that Mars possesses a molten liquid metal core with a radius of approximately 1,830 km.',
      'Recorded the first seismic signals from high-velocity meteorite impacts creating fresh craters on Mars, confirmed by MRO orbital photography.'
    ],
    whyItRemains: 'Stationary lander reliant on two 2.15-meter circular solar panels. Over four years, fine ferric oxide Martian dust accumulated heavily across the panels, reducing power generation from 5,000 watt-hours per sol to under 285 watt-hours, leading to gradual power starvation.',
    lastKnownStatus: 'Resting in Elysium Planitia. Its final message stated: "My power is really low, so this may be the last image I can send... don\'t worry about me: my time here has been both productive and serene."',
    hardwareSpecs: {
      mass: '358 kg lander structure',
      powerSource: 'Two UltraFlex solar arrays (total area 2.15 m diameter each)',
      dimensions: '6.0 m span with solar panels deployed; deck height 0.83 to 1.08 m',
      operationalDuration: '4 years, 19 days (1,445 sols)'
    },
    verifiedReferences: [
      {
        title: 'NASA Retires InSight Mars Lander After Historic Science Mission',
        url: 'https://www.nasa.gov/press-release/nasa-retires-insight-mars-lander-after-historic-science-mission',
        archiveSource: 'NASA Headquarters'
      }
    ],
    audioQuote: "While other rovers looked at the dirt, I pressed my ear directly to the chest of Mars. I heard thirteen hundred quakes, the rumble of falling meteorites, and the liquid pulse of its molten heart deep below. As the red dust veiled my eyes, I left Mars knowing its inner soul.",
    audioQuoteMalayalam: "മറ്റ് റോവറുകൾ ചൊവ്വയുടെ ഉപരിതലത്തിൽ നോക്കിയപ്പോൾ, ഞാൻ എന്റെ കാതുകൾ ചൊവ്വയുടെ നെഞ്ചോട് ചേർത്തുവെച്ചു. 1300-ലധികം ഭൂകമ്പങ്ങളും, ഉൽക്കകളുടെ പ്രകമ്പനങ്ങളും, ഉള്ളിലെ ഉരുകിയ കാമ്പിന്റെ തുടിപ്പും ഞാൻ കേട്ടു. ചുവന്ന പൊടി എന്നെ മൂടുമ്പോഴും സംതൃപ്തിയോടെ ഞാൻ തലചായ്ച്ചു."
  },

  // 12. Curiosity Rover (Mars) - Explicitly requested
  {
    id: 'curiosity-msl',
    name: 'Mars Science Laboratory: Curiosity Rover',
    shortName: 'Curiosity Rover',
    destination: 'Mars',
    category: 'Rover',
    mission: 'Mars Science Laboratory',
    launchYear: 2011,
    landingYear: 2012,
    lastContact: 'Active Today (Over 4,300 sols and active)',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA19808/PIA19808~medium.jpg',
    imageCredit: 'NASA / JPL-Caltech / MSSS (PIA19808)',
    nasaCatalogId: '2011-070A (MSL Curiosity)',
    coordinates: {
      latitude: '4.5895° S',
      longitude: '137.4417° E',
      region: 'Gale Crater (Mount Sharp / Aeolis Mons), Mars',
      latNum: -4.5895,
      lngNum: 137.4417
    },
    purpose: 'To investigate whether Mars ever had an environment capable of supporting microbial life, analyzing the layered sedimentary rocks of Mount Sharp in Gale Crater.',
    scientificAchievements: [
      'Executed the revolutionary rocket-powered "Sky Crane" touchdown system inside Gale Crater on August 6, 2012.',
      'Discovered ancient freshwater lakebeds at Yellowknife Bay with essential chemical ingredients for life (carbon, hydrogen, oxygen, nitrogen, phosphorus, sulfur).',
      'Traversed over 32 kilometers, climbed 800+ meters up Mount Sharp, and analyzed organic carbon molecules in 3.5-billion-year-old mudstones.',
      'Powered by an MMRTG nuclear battery, enabling over 13 continuous Earth years of active robotic science.'
    ],
    whyItRemains: 'Active robotic surface explorer. Upon eventual mission completion decades from now, Curiosity will permanently remain on the slopes of Mount Sharp as a monument to deep robotic geology.',
    lastKnownStatus: 'Active surface explorer climbing the Gediz Vallis ridge in Gale Crater.',
    hardwareSpecs: {
      mass: '899 kg (1,982 lbs)',
      powerSource: 'Multi-Mission Radioisotope Thermoelectric Generator (MMRTG) using plutonium-238',
      dimensions: '3.0 m length × 2.7 m width × 2.2 m height',
      distanceTraveled: 'Over 32.5 km',
      operationalDuration: 'Active for over 13 Earth years (4,300+ sols)'
    },
    verifiedReferences: [
      {
        title: 'NASA Mars Science Laboratory Mission Portal',
        url: 'https://mars.nasa.gov/msl/',
        archiveSource: 'NASA / JPL-Caltech'
      }
    ],
    audioQuote: "Driven by the quiet warmth of a nuclear heart, I have spent over a decade climbing the colossal mountain inside Gale Crater. Beneath my wheels, I found ancient riverbeds where sweet water once quenched the thirst of Mars.",
    audioQuoteMalayalam: "ഒരു ആണവ ഹൃദയത്തിന്റെ ചൂടിൽ, പത്ത് വർഷത്തിലേറെയായി ഞാൻ ഗെയ്ൽ ഗർത്തത്തിലെ പടുകൂറ്റൻ പർവ്വതം കയറുകയാണ്. എന്റെ ചക്രങ്ങൾക്കടിയിൽ, പുരാതന ചൊവ്വയിൽ ശുദ്ധജലം ഒഴുകിയിരുന്ന നദീതടങ്ങൾ ഞാൻ കണ്ടെത്തി."
  },

  // 13. Perseverance Rover (Mars) - Explicitly requested
  {
    id: 'perseverance-mars2020',
    name: 'Mars 2020: Perseverance Rover & Sample Caching Depot',
    shortName: 'Perseverance Rover',
    destination: 'Mars',
    category: 'Rover',
    mission: 'Mars 2020',
    launchYear: 2020,
    landingYear: 2021,
    lastContact: 'Active Today (Jezero Crater Exploration)',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA25681/PIA25681~medium.jpg',
    imageCredit: 'NASA / JPL-Caltech / MSSS (PIA25681)',
    nasaCatalogId: '2020-052A (Perseverance Rover)',
    coordinates: {
      latitude: '18.4447° N',
      longitude: '77.4508° E',
      region: 'Jezero Crater (Three Forks Sample Depot), Mars',
      latNum: 18.4447,
      lngNum: 77.4508
    },
    purpose: 'To seek signs of ancient microbial life, characterize Mars\' habitability, cache hermetically sealed core rock samples for return to Earth, and test technology for future human missions (MOXIE oxygen generator).',
    scientificAchievements: [
      'Successfully deployed Ingenuity, the first powered, controlled heavier-than-air aircraft on another world (completed 72 historic flights).',
      'Successfully converted Martian carbon dioxide atmospheric gas into breathable oxygen using MOXIE.',
      'Created humanity\'s first sample depot on another planet at "Three Forks," depositing 10 sealed titanium tubes containing rock cores and Martian atmosphere.',
      'Currently ascending the western crater rim of Jezero to explore rocks over 4 billion years old.'
    ],
    whyItRemains: 'Active robotic flagship. The 10 cached titanium sample tubes at Three Forks will remain on the Martian surface until collected by the international Mars Sample Return (MSR) campaign.',
    lastKnownStatus: 'Active surface exploration scaling the western Jezero Crater rim.',
    hardwareSpecs: {
      mass: '1,025 kg (2,260 lbs)',
      powerSource: 'Multi-Mission Radioisotope Thermoelectric Generator (MMRTG)',
      dimensions: '3.0 m length × 2.7 m width × 2.2 m height',
      distanceTraveled: 'Over 29 km',
      operationalDuration: 'Active since February 18, 2021'
    },
    verifiedReferences: [
      {
        title: 'NASA Mars 2020 Perseverance Mission Overview',
        url: 'https://mars.nasa.gov/mars2020/',
        archiveSource: 'NASA / JPL-Caltech'
      }
    ],
    audioQuote: "At Three Forks, I laid down ten gleaming titanium cylinders on the red dirt — humanity's first sample depot on an alien world. Each tube holds a sealed secret from the ancient lake of Jezero, waiting for a future ship to carry them home to Earth.",
    audioQuoteMalayalam: "ത്രീ ഫോർക്സിൽ വെച്ച്, ഞാൻ തിളങ്ങുന്ന പത്ത് ടൈറ്റാനിയം കുഴലുകൾ ചൊവ്വയുടെ മണ്ണിൽ നിക്ഷേപിച്ചു — മറ്റൊരു ലോകത്തെ മനുഷ്യന്റെ ആദ്യ സാമ്പിൾ ശേഖരം. ഓരോ കുഴലിലും ജെസെറോ തടാകത്തിന്റെ രഹസ്യങ്ങൾ അടങ്ങിയിരിക്കുന്നു, അവയെ ഭൂമിയിലേക്ക് തിരികെ കൊണ്ടുപോകാൻ ഒരു പേടകം വന്നെത്തുന്നതും കാത്ത്."
  },

  // 14. Viking 1 Lander (Mars)
  {
    id: 'viking-1-lander',
    name: 'Viking 1 Lander (Thomas Mutch Memorial Station)',
    shortName: 'Viking 1 Lander',
    destination: 'Mars',
    category: 'Lander',
    mission: 'Viking 1',
    launchYear: 1975,
    landingYear: 1976,
    lastContact: 'November 13, 1982',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00563/PIA00563~orig.jpg',
    imageCredit: 'NASA / Langley Research Center / JPL (PIA00563)',
    nasaCatalogId: '1975-075C (Viking 1 Lander)',
    coordinates: {
      latitude: '22.48° N',
      longitude: '49.97° W',
      region: 'Chryse Planitia ("Plains of Gold"), Mars',
      latNum: 22.48,
      lngNum: -49.97
    },
    purpose: 'To execute humanity\'s first successful long-duration operational touchdown on Mars, photograph the alien surface, and conduct the first biological experiments searching for extraterrestrial life.',
    scientificAchievements: [
      'Humanity\'s first successful operational landing and extended surface mission on Mars (July 20, 1976).',
      'Transmitted the first color photographs and weather telemetry from the Martian surface.',
      'Conducted three biological experiments (Gas Exchange, Labeled Release, Pyrolytic Release), returning intriguing yet complex chemical responses in perchlorate soil.',
      'Operated for over 6 years (2,245 sols), powered by dual SNAP-19 nuclear RTGs.'
    ],
    whyItRemains: 'A heavy stationary lander built without mobility. Mission contact was accidentally terminated when a ground software update inadvertently overwrote antenna pointing instructions, breaking the radio link.',
    lastKnownStatus: 'Named the Thomas Mutch Memorial Station in 1982. Imaged intact by MRO in December 2006, standing solitary in the rock-strewn plains of Chryse Planitia.',
    hardwareSpecs: {
      mass: '572 kg landed mass',
      powerSource: 'Two SNAP-19 Radioisotope Thermoelectric Generators (RTGs)',
      dimensions: '3.0 m across landing leg footprint, 2.0 m height',
      operationalDuration: '6 years, 116 days (2,245 sols)'
    },
    verifiedReferences: [
      {
        title: 'NASA Viking Mission to Mars Overview',
        url: 'https://www.nasa.gov/mission_pages/viking/',
        archiveSource: 'NASA History'
      }
    ],
    audioQuote: "In July 1976, on the bicentennial of the United States, I touched down in the Plains of Gold. I showed humankind the first red sky and the first boulder-strewn horizons of another world. My nuclear warmth still lingers in the cold Martian night.",
    audioQuoteMalayalam: "1976 ജൂലൈയിൽ ഞാൻ ചൊവ്വയുടെ സ്വർണ്ണ സമതലങ്ങളിൽ ഇറങ്ങി. മറ്റൊരു ലോകത്തിന്റെ ചുവന്ന ആകാശവും പാറക്കൂട്ടങ്ങളും ആദ്യമായി മനുഷ്യന് കാട്ടിക്കൊടുത്തത് ഞാനായിരുന്നു. എന്റെ ആണവ ചൂട് ഇന്നും ആ തണുത്ത ചൊവ്വാ രാത്രികളിൽ തങ്ങിനിൽക്കുന്നു."
  },

  // 15. Phoenix Mars Lander (Mars)
  {
    id: 'phoenix-lander',
    name: 'Phoenix Mars Lander',
    shortName: 'Phoenix Lander',
    destination: 'Mars',
    category: 'Lander',
    mission: 'Mars Scout Program',
    launchYear: 2007,
    landingYear: 2008,
    lastContact: 'November 2, 2008 (Sol 157)',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA10741/PIA10741~orig.jpg',
    imageCredit: 'NASA / JPL-Caltech / University of Arizona (PIA10741)',
    nasaCatalogId: '2007-034A (Phoenix Mars Lander)',
    coordinates: {
      latitude: '68.22° N',
      longitude: '125.75° W',
      region: 'Green Valley (Vastitas Borealis arctic plains), Mars',
      latNum: 68.22,
      lngNum: -125.75
    },
    purpose: 'To touch and chemically analyze water-ice buried beneath the Martian polar permafrost and assess the habitability of Mars\' arctic environment.',
    scientificAchievements: [
      'First spacecraft to physically touch, scrape, and verify water-ice just inches below the Martian soil surface in the "Snow White" trench.',
      'Observed snow falling from Martian cirrus clouds using a LIDAR laser instrument.',
      'Discovered calcium carbonate and perchlorate salts in the arctic regolith, unlocking key insights into Mars\' geochemical water history.'
    ],
    whyItRemains: 'Landed near the Martian north pole where solar power is completely extinguished during the brutal Martian polar winter, burying the lander under thick carbon dioxide dry ice.',
    lastKnownStatus: 'In 2010, orbital images from MRO confirmed the severe weight of hundreds of kilograms of winter CO₂ dry ice had fractured and collapsed Phoenix\'s solar arrays.',
    hardwareSpecs: {
      mass: '350 kg',
      powerSource: 'Dual circular solar arrays (410 Watts peak)',
      dimensions: '5.52 m width across deployed panels',
      operationalDuration: '157 sols (planned for 90 sols)'
    },
    verifiedReferences: [
      {
        title: 'NASA Phoenix Mars Mission Summary',
        url: 'https://www.nasa.gov/mission_pages/phoenix/main/index.html',
        archiveSource: 'NASA Science Mission Directorate'
      }
    ],
    audioQuote: "I reached beneath the frozen permafrost and touched real ice on Mars. As the dark polar winter closed in, blankets of carbon dioxide frost encased my solar wings. I gave everything to confirm that water runs deep in the story of Mars.",
    audioQuoteMalayalam: "ചൊവ്വയുടെ മഞ്ഞുമൂടിയ ഉപരിതലത്തിനടിയിലേക്ക് ഞാൻ കൈനീട്ടി യഥാർത്ഥ ജല-ഹിമത്തെ തൊട്ടു. ധ്രുവ ശൈത്യം കനത്തപ്പോൾ, കാർബൺ ഡയോക്സൈഡ് മഞ്ഞ് എന്റെ ചിറകുകളെ മൂടി. ചൊവ്വയുടെ കഥയിൽ ജലം ഉണ്ടായിരുന്നുവെന്ന് തെളിയിക്കാൻ ഞാൻ എന്നെത്തന്നെ സമർപ്പിച്ചു."
  }
];
