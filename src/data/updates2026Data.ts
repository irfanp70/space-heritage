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
  // 1. Artemis II - Completed in April 2026
  {
    id: 'artemis-ii-crewed-flyby',
    title: 'Artemis II: Crewed Lunar Flyby Completed in April 2026',
    status: 'Completed',
    destination: 'Moon',
    publicationDate: 'April 2026',
    summary: 'NASA and the Canadian Space Agency successfully completed humanity\'s first crewed lunar flyby in over 50 years with the Artemis II mission in April 2026.',
    detailedUpdate: 'Commander Reid Wiseman, Pilot Victor Glover, Mission Specialist Christina Koch (NASA), and Mission Specialist Jeremy Hansen (CSA) flew on a 10-day lunar free-return trajectory aboard the Orion spacecraft launched by the Space Launch System (SLS) rocket. The mission verified Orion life support systems, crew handling, deep-space optical communications, and high-velocity atmospheric re-entry thermal performance, laying the operational bedrock for subsequent lunar missions.',
    officialSourceUrl: 'https://www.nasa.gov/mission/artemis-ii/',
    sourceAgency: 'NASA Johnson Space Center / KSC',
    categoryTag: 'Human Spaceflight'
  },

  // 2. Artemis III - Planned 2027 Low-Earth-Orbit Demonstration
  {
    id: 'artemis-iii-leo-demo',
    title: 'Artemis III: Planned 2027 Low-Earth-Orbit Demonstration Mission',
    status: 'Planned',
    destination: 'Moon',
    publicationDate: 'Planned 2027',
    summary: 'Artemis III is planned as a 2027 low-Earth-orbit demonstration mission to test critical rendezvous, docking, and life-support operations before lunar landing.',
    detailedUpdate: 'Under updated mission architecture, Artemis III is planned as a low-Earth-orbit demonstration flight targeting 2027. The mission will evaluate integrated operations between the Orion spacecraft, crew transfer protocols, spacesuit performance, and docking interfaces, providing rigorous risk mitigation ahead of lunar surface touchdown flights.',
    officialSourceUrl: 'https://www.nasa.gov/mission/artemis-iii/',
    sourceAgency: 'NASA Johnson Space Center',
    categoryTag: 'Human Spaceflight'
  },

  // 3. Artemis IV - NASA's Currently Targeted First Crewed Lunar Landing in Early 2028
  {
    id: 'artemis-iv-lunar-landing',
    title: 'Artemis IV: Targeted First Crewed Lunar Landing in Early 2028',
    status: 'Planned',
    destination: 'Moon',
    publicationDate: 'Targeted Early 2028',
    summary: 'NASA is targeting Artemis IV as the campaign\'s first crewed lunar landing at the lunar south pole in early 2028.',
    detailedUpdate: 'Artemis IV is targeted for launch in early 2028 as the first mission of the Artemis campaign to touch down human astronauts on the Moon. Exploration will center on permanently shadowed regions at the lunar south pole to investigate water-ice volatiles, test long-duration surface exploration hardware, and initiate sustainable lunar infrastructure in coordination with the Lunar Gateway.',
    officialSourceUrl: 'https://www.nasa.gov/artemis/',
    sourceAgency: 'NASA Headquarters / JSC',
    categoryTag: 'Lunar Surface Landing'
  },

  // 4. Lunar Trailblazer - Ended July 31, 2025
  {
    id: 'lunar-trailblazer-mission',
    title: 'Lunar Trailblazer: Mission Ended on July 31, 2025',
    status: 'Completed',
    destination: 'Moon',
    publicationDate: 'July 31, 2025',
    summary: 'The Lunar Trailblazer mission concluded on July 31, 2025 following completion of its operational phase investigating lunar surface hydration.',
    detailedUpdate: 'Selected under NASA\'s SIMPLEx program and managed by Caltech and JPL, Lunar Trailblazer concluded on July 31, 2025. The mission contributed pioneering infrared spectroscopy data utilizing the High-resolution Volatiles and Minerals Moon Mapper (HVM³) and Lunar Thermal Mapper (LTM) to characterize the form, abundance, and thermal stability of hydroxyl and water molecules trapped in lunar regolith.',
    officialSourceUrl: 'https://www.jpl.nasa.gov/missions/lunar-trailblazer',
    sourceAgency: 'Caltech / NASA JPL',
    categoryTag: 'Planetary Science'
  },

  // 5. Perseverance Rover - Active Jezero Rim Exploration & Sample Caching
  {
    id: 'perseverance-sample-cache-2026',
    title: 'Perseverance Rover: Jezero Rim Ascent & Sample Depot Stewardship',
    status: 'Active',
    destination: 'Mars',
    publicationDate: 'September 2026',
    summary: 'Perseverance continues exploring ancient crustal units on the Jezero Crater rim while safeguarding the 10-tube sample cache deposited at Three Forks.',
    detailedUpdate: 'Perseverance has sealed 24 core samples and environmental witness tubes, having deposited a backup depot of 10 tubes at the Three Forks area of Jezero Crater. The rover is scaling the western crater rim to study ancient Noachian bedrock that predates the impact basin, while NASA continues evaluating optimized Mars Sample Return (MSR) architectures to retrieve these scientifically invaluable specimens.',
    officialSourceUrl: 'https://mars.nasa.gov/mars2020/',
    sourceAgency: 'NASA JPL-Caltech',
    categoryTag: 'Planetary Exploration'
  },

  // 6. CLPS Commercial Lunar Deliveries
  {
    id: 'clps-lunar-deliveries',
    title: 'CLPS Initiative: Commercial Lunar Landers Expand South Pole Science Infrastructure',
    status: 'Active',
    destination: 'Moon',
    publicationDate: 'August 2026',
    summary: 'Commercial Lunar Payload Services (CLPS) missions deploy autonomous drills, retroreflectors, and spectrometers to characterize water-ice volatiles at the lunar south pole.',
    detailedUpdate: 'Following Intuitive Machines\' historic IM-1 touchdown and subsequent commercial missions, NASA\'s CLPS program continues sending regular scientific and technology payloads to high-interest lunar destinations. Active payloads include the PRIME-1 polar resource ice drill, laser retroreflectors, and autonomous lunar rovers mapping shadowed permafrost in south polar craters.',
    officialSourceUrl: 'https://www.nasa.gov/commercial-lunar-payload-services/',
    sourceAgency: 'NASA Science Mission Directorate',
    categoryTag: 'Commercial Space'
  },

  // 7. Curiosity Rover - Active Gale Crater Exploration
  {
    id: 'curiosity-gediz-vallis',
    title: 'Curiosity Rover: Over 4,300 Sols of Exploration along Gediz Vallis Ridge',
    status: 'Active',
    destination: 'Mars',
    publicationDate: 'June 2026',
    summary: 'Curiosity analyzes debris flows and ancient liquid water torrents on Mount Sharp in Gale Crater, proving multiple wet-dry cycles on late Mars.',
    detailedUpdate: 'Having surpassed 13 Earth years and 32 kilometers of traverse inside Gale Crater, Curiosity is investigating the Gediz Vallis ridge. Using its ChemCam laser, APXS, and MAHLI hand lens imager, the rover revealed rocks carried by catastrophic mudslides and water surges late in Mars\' transition to an arid desert, showing that liquid water remained episodic far later than previously understood.',
    officialSourceUrl: 'https://mars.nasa.gov/msl/',
    sourceAgency: 'NASA Jet Propulsion Laboratory',
    categoryTag: 'Mars Surface Rover'
  },

  // 8. InSight Legacy
  {
    id: 'insight-legacy-completed',
    title: 'InSight Seismic Data Release: Definitive Global Interior Model of Mars',
    status: 'Completed',
    destination: 'Mars',
    publicationDate: 'May 2026',
    summary: 'Planetary scientists publish the synthesized global seismic atlas of Mars based on 1,319 marsquakes recorded by InSight before its 2022 retirement.',
    detailedUpdate: 'Following InSight\'s formal retirement due to solar panel dust accumulation in Elysium Planitia, an international consortium led by IPGP, CNES, and NASA published the definitive Martian Interior Model. The data confirms that Mars possesses a liquid iron-sulfur core with an average radius of 1,830 km, surrounded by a 500-km-thick mantle and a layered crust measuring up to 72 km beneath ancient cratered terrains.',
    officialSourceUrl: 'https://www.nasa.gov/mission_pages/insight/main/index.html',
    sourceAgency: 'NASA / CNES / IPGP',
    categoryTag: 'Geophysics & Legacy'
  }
];
