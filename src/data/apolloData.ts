export interface ApolloMission {
  missionNumber: string;
  lunarModule: string;
  commander: string;
  lunarModulePilot: string;
  commandModulePilot: string;
  landingDate: string;
  returnDate: string;
  landingSite: string;
  coordinates: string;
  durationOnSurface: string;
  totalEVATime: string;
  samplesReturnedKg: number;
  equipmentLeftBehind: {
    name: string;
    description: string;
    status: string;
  }[];
  notableArtifacts: string[];
  historicalStory: string;
  imageUrl: string;
  imageCredit: string;
}

export const APOLLO_MISSIONS: ApolloMission[] = [
  {
    missionNumber: 'Apollo 11',
    lunarModule: 'LM-5 "Eagle"',
    commander: 'Neil A. Armstrong',
    lunarModulePilot: 'Edwin "Buzz" Aldrin Jr.',
    commandModulePilot: 'Michael Collins',
    landingDate: 'July 20, 1969',
    returnDate: 'July 24, 1969',
    landingSite: 'Tranquility Base, Mare Tranquillitatis',
    coordinates: '0.67408° N, 23.47297° E',
    durationOnSurface: '21 hours, 36 minutes',
    totalEVATime: '2 hours, 31 minutes',
    samplesReturnedKg: 21.55,
    equipmentLeftBehind: [
      {
        name: 'LM Descent Stage ("Eagle")',
        description: 'Heavy octagonal landing chassis, rocket engine bell, and landing gear with gold Kapton thermal foil.',
        status: 'Intact at Tranquility Base'
      },
      {
        name: 'Early Apollo Scientific Experiments Package (EASEP)',
        description: 'First lunar surface science package, deployed by Buzz Aldrin. Contained the PSEP solar seismometer and the passive LRRR optical array.',
        status: 'PSEP ceased Aug 1969; LRRR remains active via laser reflection'
      },
      {
        name: 'Laser Ranging Retroreflector (LRRR)',
        description: 'Passive array of 100 fused silica corner-cube prisms requiring zero electrical power; continues to reflect Earth lasers 57+ years later.',
        status: 'Actively pinged today from Earth observatories'
      },
      {
        name: 'Passive Seismic Experiment Package (PSEP)',
        description: 'Early solar-powered seismometer that recorded first extraterrestrial moonquakes and astronaut footstep vibrations.',
        status: 'Ceased transmission Aug 1969 after 21 days'
      },
      {
        name: 'Solar Wind Composition Experiment',
        description: 'Aluminum foil sheet exposed to solar wind; foil returned to Earth, mast stayed.',
        status: 'Mast remains standing'
      }
    ],
    notableArtifacts: [
      'Commemorative stainless steel plaque on the forward ladder leg ("We came in peace for all mankind")',
      'Silicon disc etched with goodwill messages from 73 world leaders',
      'Gold olive branch pin symbolizing universal peace',
      'Apollo 1 patch honoring Gus Grissom, Ed White, and Roger Chaffee',
      'Medals honoring Soviet cosmonauts Yuri Gagarin and Vladimir Komarov',
      'American flag mounted on telescoping pole (knocked down by ascent engine exhaust)'
    ],
    historicalStory: 'With alarms sounding in the cabin and computer overload warnings (1202 & 1201), Neil Armstrong assumed manual attitude control to fly over a boulder field surrounding West Crater. When Eagle settled onto Tranquility Base, barely 30 seconds of descent propellant remained. Armstrong\'s first words after touchdown: "Houston, Tranquility Base here. The Eagle has landed."',
    imageUrl: 'https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg',
    imageCredit: 'NASA / Neil Armstrong (AS11-40-5927)'
  },
  {
    missionNumber: 'Apollo 12',
    lunarModule: 'LM-6 "Intrepid"',
    commander: 'Charles "Pete" Conrad Jr.',
    lunarModulePilot: 'Alan L. Bean',
    commandModulePilot: 'Richard F. Gordon Jr.',
    landingDate: 'November 19, 1969',
    returnDate: 'November 24, 1969',
    landingSite: 'Ocean of Storms (Oceanus Procellarum)',
    coordinates: '3.01239° S, 23.42157° W',
    durationOnSurface: '31 hours, 31 minutes',
    totalEVATime: '7 hours, 45 minutes',
    samplesReturnedKg: 34.35,
    equipmentLeftBehind: [
      {
        name: 'LM Descent Stage ("Intrepid")',
        description: 'Base of Lunar Module Intrepid sitting 160 meters from Surveyor 3.',
        status: 'Intact in Ocean of Storms'
      },
      {
        name: 'ALSEP 12 Central Station',
        description: 'First long-duration nuclear-powered ALSEP with SNAP-27 RTG, passive seismometer, magnetometer, and solar wind spectrometer.',
        status: 'Transmitted data until Sept 30, 1977'
      },
      {
        name: 'Surveyor 3 Remnants',
        description: 'Robotic lander visited and sampled by Conrad and Bean.',
        status: 'Tripod chassis and radar intact'
      }
    ],
    notableArtifacts: [
      'Commemorative plaque on LM leg with crew signatures',
      'American flag erected in Oceanus Procellarum',
      'Retrieved Surveyor 3 TV camera, scoop, and cables brought to Earth for radiation analysis'
    ],
    historicalStory: 'Demonstrated pinpoint landing accuracy by setting Intrepid down within walking distance (160 meters) of the robotic Surveyor 3 lander, which had arrived two and a half years prior. Pete Conrad, stepping onto the surface, famously quipped: "Whoopee! Man, that may have been a small one for Neil, but that\'s a long one for me!"',
    imageUrl: 'https://images-assets.nasa.gov/image/AS12-48-7134/AS12-48-7134~medium.jpg',
    imageCredit: 'NASA / Alan Bean (Apollo 12 - AS12-48-7134)'
  },
  {
    missionNumber: 'Apollo 14',
    lunarModule: 'LM-8 "Antares"',
    commander: 'Alan B. Shepard Jr.',
    lunarModulePilot: 'Edgar D. Mitchell',
    commandModulePilot: 'Stuart A. Roosa',
    landingDate: 'February 5, 1971',
    returnDate: 'February 9, 1971',
    landingSite: 'Fra Mauro Highlands',
    coordinates: '3.64530° S, 17.47136° W',
    durationOnSurface: '33 hours, 31 minutes',
    totalEVATime: '9 hours, 22 minutes',
    samplesReturnedKg: 42.28,
    equipmentLeftBehind: [
      {
        name: 'LM Descent Stage ("Antares")',
        description: 'Landing platform standing in Fra Mauro.',
        status: 'Intact'
      },
      {
        name: 'Modular Equipment Transporter (MET)',
        description: 'Two-wheeled rickshaw-style handcart with pneumatic rubber tires used to carry geology tools.',
        status: 'Parked in Fra Mauro regolith'
      },
      {
        name: 'ALSEP 14',
        description: 'Active seismic experiment with mortar package, suprathermal ion detector, and cold cathode gauge.',
        status: 'Data collected until 1977'
      }
    ],
    notableArtifacts: [
      'Two golf balls struck by Alan Shepard with an improvised six-iron head attached to a sample retrieval handle',
      'Lunar flag assembly',
      'Hundreds of tree seeds carried in orbit by Stuart Roosa (later planted across Earth as "Moon Trees")'
    ],
    historicalStory: 'America\'s return to the Moon following the near-disaster of Apollo 13. Alan Shepard and Edgar Mitchell navigated the steep ridges of Cone Crater pulling the MET cart. Before re-entering the module, Shepard pulled out a makeshift six-iron golf club and struck two golf balls, declaring the second went "miles and miles and miles" in the one-sixth gravity.',
    imageUrl: 'https://images-assets.nasa.gov/image/as14-67-09362/as14-67-09362~medium.jpg',
    imageCredit: 'NASA / Edgar Mitchell (Apollo 14 - AS14-67-09362)'
  },
  {
    missionNumber: 'Apollo 15',
    lunarModule: 'LM-10 "Falcon"',
    commander: 'David R. Scott',
    lunarModulePilot: 'James B. Irwin',
    commandModulePilot: 'Alfred M. Worden',
    landingDate: 'July 30, 1971',
    returnDate: 'August 7, 1971',
    landingSite: 'Hadley-Apennine',
    coordinates: '26.13222° N, 3.63386° E',
    durationOnSurface: '66 hours, 55 minutes',
    totalEVATime: '18 hours, 35 minutes',
    samplesReturnedKg: 77.31,
    equipmentLeftBehind: [
      {
        name: 'Lunar Roving Vehicle (LRV-001)',
        description: 'First motorized crew vehicle on the Moon, left parked with TV camera aimed at LM.',
        status: 'Intact overlooking Hadley Rille'
      },
      {
        name: 'LM Descent Stage ("Falcon")',
        description: 'Heavy J-mission lander that supported 3 days of surface exploration.',
        status: 'Intact'
      },
      {
        name: 'ALSEP 15 & Laser Retroreflector',
        description: 'Advanced geophysics station and 300-prism LRRR (3x larger than Apollo 11).',
        status: 'LRRR 100% operational today'
      }
    ],
    notableArtifacts: [
      '"Fallen Astronaut" memorial: an 8.5 cm aluminum sculpture and plaque commemorating 14 US astronauts and Soviet cosmonauts who died in the pursuit of space exploration',
      'Falcon feather and aluminum geological hammer dropped simultaneously by Dave Scott to demonstrate Galileo\'s principle of gravitational acceleration in a vacuum',
      'Commemorative Bible left on the rover control console'
    ],
    historicalStory: 'The first "J-mission" equipped for extended scientific stays and featuring the first Lunar Roving Vehicle. Dave Scott and Jim Irwin explored the 1,000-foot-deep chasm of Hadley Rille and discovered the 4.1-billion-year-old "Genesis Rock". Scott also performed the famous Galileo hammer-and-feather drop on live television.',
    imageUrl: 'https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~medium.jpg',
    imageCredit: 'NASA / Dave Scott'
  },
  {
    missionNumber: 'Apollo 16',
    lunarModule: 'LM-11 "Orion"',
    commander: 'John W. Young',
    lunarModulePilot: 'Charles M. Duke Jr.',
    commandModulePilot: 'Thomas K. Mattingly II',
    landingDate: 'April 21, 1972',
    returnDate: 'April 27, 1972',
    landingSite: 'Descartes Highlands',
    coordinates: '8.97301° S, 15.49812° E',
    durationOnSurface: '71 hours, 2 minutes',
    totalEVATime: '20 hours, 14 minutes',
    samplesReturnedKg: 95.71,
    equipmentLeftBehind: [
      {
        name: 'Lunar Roving Vehicle (LRV-002)',
        description: 'Second lunar rover, achieved top surface speed of 18 km/h during "Grand Prix".',
        status: 'Parked in Descartes Highlands'
      },
      {
        name: 'Far Ultraviolet Camera/Spectrograph',
        description: 'Astronomical observatory operated on the Moon, returning first UV images of Earth\'s geocorona.',
        status: 'Resting in the shadow of LM Orion'
      },
      {
        name: 'LM Descent Stage ("Orion")',
        description: 'Lander chassis at Descartes.',
        status: 'Intact'
      }
    ],
    notableArtifacts: [
      'A plastic-encased family photograph of Charlie Duke, his wife Dorothy, and sons Charles and Thomas left on the lunar regolith',
      'Commemorative medallion honoring US Air Force 25th anniversary',
      'American flag mounted on Descartes Highlands'
    ],
    historicalStory: 'Targeted the rugged Descartes Highlands, which geologists believed were volcanic. Instead, Young and Duke discovered that the rocks were breccias formed by catastrophic meteorite impacts, revolutionizing lunar geologic models. Young also performed an exuberant lunar salute while leaping nearly three feet off the ground in one-sixth gravity.',
    imageUrl: 'https://images-assets.nasa.gov/image/as16-113-18339/as16-113-18339~medium.jpg',
    imageCredit: 'NASA / John Young & Charlie Duke'
  },
  {
    missionNumber: 'Apollo 17',
    lunarModule: 'LM-12 "Challenger"',
    commander: 'Eugene A. Cernan',
    lunarModulePilot: 'Harrison H. "Jack" Schmitt',
    commandModulePilot: 'Ronald E. Evans',
    landingDate: 'December 11, 1972',
    returnDate: 'December 19, 1972',
    landingSite: 'Taurus-Littrow Valley',
    coordinates: '20.19080° N, 30.77168° E',
    durationOnSurface: '75 hours, 0 minutes',
    totalEVATime: '22 hours, 4 minutes',
    samplesReturnedKg: 110.52,
    equipmentLeftBehind: [
      {
        name: 'Lunar Roving Vehicle (LRV-003)',
        description: 'Third rover; featured an improvised fender repair made of taped lunar maps and clamps.',
        status: 'Parked at "VIP Site" with camera pointing at LM'
      },
      {
        name: 'LM Descent Stage ("Challenger")',
        description: 'Final Apollo landing base in Taurus-Littrow.',
        status: 'Intact'
      },
      {
        name: 'ALSEP 17 Suite & Lunar Ejecta and Meteorites Experiment',
        description: 'Highest capacity lunar science installation of the program.',
        status: 'Transmitted until 1977 shutdown'
      }
    ],
    notableArtifacts: [
      'Apollo 17 commemorative plaque: "Here man completed his first exploration of the Moon, December 1972 A.D. May the spirit of peace in which we came be reflected in the lives of all mankind."',
      'Fender map repair on LRV (crafted from 4 chronological photo maps taped with duct tape)',
      'Apollo 17 sample 70215 (stored for 50 years and opened in 2022 as part of ANGSA)'
    ],
    historicalStory: 'Carried Harrison "Jack" Schmitt, the only professional geologist ever to set foot on the Moon. Schmitt discovered rich orange pyroclastic volcanic soil at Shorty Crater, proving ancient explosive volcanic eruptions. Gene Cernan, the last human to step off the Moon, said before climbing the ladder: "We leave as we came and, God willing, as we shall return: with peace and hope for all mankind."',
    imageUrl: 'https://images-assets.nasa.gov/image/as17-140-21497/as17-140-21497~medium.jpg',
    imageCredit: 'NASA / Gene Cernan & Harrison Schmitt'
  }
];
