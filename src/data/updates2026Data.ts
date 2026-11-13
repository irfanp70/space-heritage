export interface MissionUpdate {
  id: string;
  title: string;
  status: 'Active' | 'Planned' | 'Completed';
  destination: 'Moon' | 'Mars' | 'Deep Space';
  publicationDate: string;
  summary: string;
  detailedUpdate: string;
  officialSourceUrl: string;
  sourceAgency: string;
  categoryTag: string;
}

export const NASA_UPDATES_2026: MissionUpdate[] = [
  {
    id: 'artemis-ii-crewed-flyby',
    title: 'Artemis II: Crewed Lunar Flyby Preparations and Orion Systems Readiness',
    status: 'Planned',
    destination: 'Moon',
    publicationDate: 'October 2026',
    summary: 'NASA and international partners finalize integration testing of the Space Launch System (SLS) rocket and Orion spacecraft for humanity\'s first crewed lunar mission in over 50 years.',
    detailedUpdate: 'The Artemis II crew — Commander Reid Wiseman, Pilot Victor Glover, Mission Specialist Christina Koch (NASA), and Mission Specialist Jeremy Hansen (CSA) — have completed vacuum chamber altitude simulation runs inside the Neil Armstrong Operations and Checkout Building at Kennedy Space Center. The 10-day mission will perform a lunar free-return trajectory, testing Orion\'s life support, manual handling, and radiation shielding beyond low Earth orbit.',
    officialSourceUrl: 'https://www.nasa.gov/mission/artemis-ii/',
    sourceAgency: 'NASA Johnson Space Center / KSC',
    categoryTag: 'Human Spaceflight'
  },
  {
    id: 'perseverance-sample-cache-2026',
    title: 'Perseverance Rover: Jezero Rim Ascent & Mars Sample Return Architecture',
    status: 'Active',
    destination: 'Mars',
    publicationDate: 'September 2026',
    summary: 'Perseverance completes sample caching in Jezero Crater and ascends toward the crater rim, while NASA reviews alternative architectures for the Mars Sample Return (MSR) campaign.',
    detailedUpdate: 'Perseverance has successfully sealed 24 core samples and environmental witness tubes, having deposited a backup depot of 10 tubes at the "Three Forks" region of Jezero. The rover is currently scaling the steep western crater rim to study ancient Noachian crustal rocks pre-dating the Jezero lake impact. Concurrently, NASA is evaluating industry and center proposals for streamlined, lower-cost sample retrieval architectures to bring these tubes to Earth.',
    officialSourceUrl: 'https://mars.nasa.gov/mars2020/',
    sourceAgency: 'NASA JPL-Caltech',
    categoryTag: 'Planetary Exploration'
  },
  {
    id: 'clps-lunar-deliveries',
    title: 'CLPS Initiative: Commercial Lunar Landers Expand South Pole Science Infrastructure',
    status: 'Active',
    destination: 'Moon',
    publicationDate: 'August 2026',
    summary: 'Commercial Lunar Payload Services (CLPS) landers deploy autonomous drills, mass spectrometers, and rovers to characterize water-ice volatiles at the lunar south pole.',
    detailedUpdate: 'Building on Intuitive Machines\' historic IM-1 landing and subsequent commercial missions, NASA\'s CLPS program continues sending regular scientific and technology payloads to high-interest lunar destinations. Active payloads include the PRIME-1 polar resource ice drill, laser retroreflectors, and autonomous lunar rovers mapping shadowed permafrost in Shackleton and Malapert craters.',
    officialSourceUrl: 'https://www.nasa.gov/commercial-lunar-payload-services/',
    sourceAgency: 'NASA Science Mission Directorate',
    categoryTag: 'Commercial Space'
  },
  {
    id: 'artemis-iii-south-pole',
    title: 'Artemis III: Human Landing System (HLS) and Axiom Spacesuit Validation',
    status: 'Planned',
    destination: 'Moon',
    publicationDate: 'July 2026',
    summary: 'NASA, SpaceX, and Axiom Space advance cryogenic propellant transfer demonstrations and thermal testing of lunar surface exploration suits for the Artemis III south pole landing.',
    detailedUpdate: 'Artemis III will mark the first human footsteps in the Moon\'s south pole region, targeting permanently shadowed craters that harbor millions of tons of water-ice. Testing of Axiom Space\'s AxEMU spacesuits has verified extreme cold durability down to -200°C. SpaceX is conducting Starship uncrewed lunar test flights and orbital cryogenic propellant transfer tests in support of the Human Landing System contract.',
    officialSourceUrl: 'https://www.nasa.gov/mission/artemis-iii/',
    sourceAgency: 'NASA Marshall / Axiom / SpaceX',
    categoryTag: 'Lunar Surface'
  },
  {
    id: 'curiosity-gediz-vallis',
    title: 'Curiosity Rover: Over 4,300 Sols of Exploration along Gediz Vallis Ridge',
    status: 'Active',
    destination: 'Mars',
    publicationDate: 'June 2026',
    summary: 'Curiosity analyzes debris flows and ancient liquid water torrents on Mount Sharp in Gale Crater, proving multiple wet-dry cycles on late Mars.',
    detailedUpdate: 'Having surpassed 13 Earth years and 32 kilometers of traverse inside Gale Crater, Curiosity reached the Gediz Vallis ridge. Using its ChemCam laser and MAHLI hand lens imager, the rover revealed rocks carried by catastrophic mudslides and water surges late in Mars\' transition to an arid desert, showing that water remained active far later than previously believed.',
    officialSourceUrl: 'https://mars.nasa.gov/msl/',
    sourceAgency: 'NASA Jet Propulsion Laboratory',
    categoryTag: 'Mars Surface Rover'
  },
  {
    id: 'insight-legacy-completed',
    title: 'InSight Seismic Data Release: Final Global Interior Model of Mars',
    status: 'Completed',
    destination: 'Mars',
    publicationDate: 'May 2026',
    summary: 'Planetary scientists publish the synthesized global seismic atlas of Mars based on 1,319 marsquakes recorded by InSight before its 2022 retirement.',
    detailedUpdate: 'Four years after InSight was retired due to dust accumulation in Elysium Planitia, an international consortium led by IPGP and NASA released the definitive Martian Interior Model. The data confirms that Mars possesses a liquid iron-sulfur core with an average radius of 1,830 km, covered by a 500-km-thick mantle and a two-to-three-layer crust measuring up to 72 km beneath ancient cratered terrains.',
    officialSourceUrl: 'https://www.nasa.gov/mission_pages/insight/main/index.html',
    sourceAgency: 'NASA / CNES / IPGP',
    categoryTag: 'Geophysics & Legacy'
  },
  {
    id: 'lunar-trailblazer-launch',
    title: 'Lunar Trailblazer: High-Resolution Hydroxide and Ice Mapping Mission',
    status: 'Planned',
    destination: 'Moon',
    publicationDate: 'April 2026',
    summary: 'A compact satellite designed to map the form, abundance, and distribution of water molecules across the lunar surface from a 100-km polar orbit.',
    detailedUpdate: 'Selected under NASA\'s SIMPLEx program and led by Caltech, Lunar Trailblazer utilizes the High-resolution Volatiles and Minerals Moon Mapper (HVM³) infrared spectrometer to distinguish between bound water (H₂O), hydroxyl (OH), and locked ice in lunar cold traps.',
    officialSourceUrl: 'https://www.jpl.nasa.gov/missions/lunar-trailblazer',
    sourceAgency: 'Caltech / NASA JPL',
    categoryTag: 'Planetary Science'
  }
];
