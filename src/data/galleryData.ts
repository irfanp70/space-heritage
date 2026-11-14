export interface GalleryItem {
  id: string;
  title: string;
  destination: 'Moon' | 'Mars';
  era: string;
  mission: string;
  description: string;
  before: {
    imageUrl: string;
    caption: string;
    year: string;
    credit: string;
  };
  after: {
    imageUrl: string;
    caption: string;
    year: string;
    credit: string;
  };
  historicalContext: string;
  nasaRefId: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'opportunity-dust',
    title: 'Opportunity: The 14-Year Dust Accumulation',
    destination: 'Mars',
    era: '2004 – 2014',
    mission: 'Mars Exploration Rover (MER-B)',
    description: 'A direct comparison of Opportunity\'s solar panels: freshly deployed in pristine condition on Meridiani Planum versus heavily coated with Martian ferric oxide dust 10 years later.',
    before: {
      imageUrl: 'https://images-assets.nasa.gov/image/PIA18079/PIA18079~medium.jpg',
      caption: 'Self-portrait mosaic of Opportunity showing pristine, dark reflective solar arrays shortly after rollout in 2004.',
      year: '2004 (Sol 10)',
      credit: 'NASA / JPL-Caltech / Cornell (PIA18079)'
    },
    after: {
      imageUrl: 'https://images-assets.nasa.gov/image/PIA18080/PIA18080~medium.jpg',
      caption: 'Opportunity self-portrait from Sol 3631 (2014) showing heavy blankets of red atmospheric dust covering almost the entire panel area.',
      year: '2014 (Sol 3631)',
      credit: 'NASA / JPL-Caltech / Cornell / ASU (PIA18080)'
    },
    historicalContext: 'Martian dust was originally anticipated to choke the rovers within 90 sols. Unexpected atmospheric "cleaning events" — dust devils passing directly overhead — intermittently swept panels clean, extending the mission by 5,000 extra sols.',
    nasaRefId: 'PIA18079 & PIA18080'
  },
  {
    id: 'insight-dust-choke',
    title: 'InSight Lander: Pristine Landing vs. Terminal Dust',
    destination: 'Mars',
    era: 'Dec 10, 2018 – Apr 24, 2022',
    mission: 'InSight Mars Geophysical Lander',
    description: 'InSight\'s Instrument Deployment Camera capturing its pristine solar array on Sol 14 (December 10, 2018) versus the thick blanket of Martian dust from the exact same camera angle on Sol 1211 (April 24, 2022).',
    before: {
      imageUrl: '/Before%20Insight.jpg',
      caption: 'InSight\'s Instrument Deployment Camera view of its pristine, dark solar array on Elysium Planitia shortly after deployment, generating over 4,500 watt-hours per sol.',
      year: 'December 10, 2018 (Sol 14)',
      credit: 'NASA / JPL-Caltech (PIA25288)'
    },
    after: {
      imageUrl: '/After%20Insight.jpg',
      caption: 'InSight photographed from the exact same robotic arm camera angle over three Earth years later, completely blanketed in Martian dust that cut power output below 10%.',
      year: 'April 24, 2022 (Sol 1211)',
      credit: 'NASA / JPL-Caltech (PIA25287)'
    },
    historicalContext: 'Unlike rovers that can reposition to chase the wind, stationary landers depend on fortunate wind gusts. InSight recorded thousands of dust devils, but none passed close enough to clean its solar wings before mission end in December 2022.',
    nasaRefId: 'PIA25288 & PIA25287'
  },
    historicalContext: 'Unlike rovers that can reposition to chase the wind, stationary landers depend on fortunate wind gusts. InSight recorded thousands of dust devils, but none passed close enough to clean its solar wings.',
    nasaRefId: 'PIA22874 & PIA25287'
  },
  {
    id: 'apollo11-tranquility-orbital',
    title: 'Apollo 11 Tranquility Base: 1969 Surface vs. LROC Orbital View',
    destination: 'Moon',
    era: '1969 – 2012',
    mission: 'Apollo 11 & Lunar Reconnaissance Orbiter',
    description: 'Neil Armstrong\'s surface photograph of the Apollo 11 Lunar Module Descent Stage in 1969 compared with an ultra-high resolution orbital image from NASA\'s Lunar Reconnaissance Orbiter 40+ years later.',
    before: {
      imageUrl: 'https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg',
      caption: 'LM Eagle standing in Mare Tranquillitatis during EVA-1 photographed by Neil Armstrong.',
      year: 'July 20, 1969',
      credit: 'NASA / Neil Armstrong (AS11-40-5927)'
    },
    after: {
      imageUrl: 'https://images-assets.nasa.gov/image/PIA12909/PIA12909~orig.jpg',
      caption: 'LROC Narrow Angle Camera view showing the descent stage casting its shadow with astronaut tracks preserved in the regolith.',
      year: 'July 2009 (LROC NAC)',
      credit: 'NASA / GSFC / Arizona State University (PIA12909)'
    },
    historicalContext: 'Because the Moon lacks an atmosphere, liquid water, and tectonic plate activity, Neil Armstrong and Buzz Aldrin\'s bootprints and the descent stage are preserved virtually unchanged for millions of years.',
    nasaRefId: 'AS11-40-5927 & PIA12909'
  },
  {
    id: 'surveyor3-apollo12',
    title: 'Surveyor 3: Robotic Solitude vs. Astronaut Rendezvous',
    destination: 'Moon',
    era: '1967 – 1969',
    mission: 'Surveyor 3 & Apollo 12',
    description: 'Surveyor 3 photographed resting alone in its crater compared to Apollo 12 astronaut Pete Conrad examining it 31 months later with LM Intrepid in the backdrop.',
    before: {
      imageUrl: 'https://images-assets.nasa.gov/image/as12-48-7121/as12-48-7121~medium.jpg',
      caption: 'Surveyor 3 sitting on the crater slope in Oceanus Procellarum, approached by Apollo 12 astronauts.',
      year: 'November 1969 Approach',
      credit: 'NASA / Apollo 12 Crew (AS12-48-7121)'
    },
    after: {
      imageUrl: 'https://images-assets.nasa.gov/image/AS12-48-7134/AS12-48-7134~medium.jpg',
      caption: 'Apollo 12 astronaut Pete Conrad examines Surveyor 3; the LM Intrepid is visible in the background 160 meters away.',
      year: 'November 1969 Examination',
      credit: 'NASA / Alan Bean (AS12-48-7134)'
    },
    historicalContext: 'This represents the only time in human history that astronauts visited a pre-existing robotic probe on another celestial world. The returned camera revealed terrestrial bacteria (Streptococcus mitis) had survived two years on the Moon.',
    nasaRefId: 'AS12-48-7121 & AS12-48-7134'
  },
  {
    id: 'curiosity-solitude-ascent',
    title: 'Curiosity Rover: Buckskin Outcrop (2015) vs. Central Butte (2019)',
    destination: 'Mars',
    era: '2015 – 2019',
    mission: 'Mars Science Laboratory (MSL)',
    description: 'Curiosity selfie taken at the "Buckskin" mudstone outcrop on lower Mount Sharp compared with its panoramic portrait at Central Butte four years and 10 kilometers later.',
    before: {
      imageUrl: 'https://images-assets.nasa.gov/image/PIA19808/PIA19808~medium.jpg',
      caption: 'Curiosity at Buckskin drill hole, showing relatively fresh chassis and clean Mastcam head.',
      year: 'August 2015 (Sol 1065)',
      credit: 'NASA / JPL-Caltech / MSSS (PIA19808)'
    },
    after: {
      imageUrl: 'https://images-assets.nasa.gov/image/PIA23378/PIA23378~medium.jpg',
      caption: 'Curiosity at Central Butte in Gale Crater, showing wheel wear and reddish dust accumulation on upper deck.',
      year: 'November 2019 (Sol 2553)',
      credit: 'NASA / JPL-Caltech / MSSS (PIA23378)'
    },
    historicalContext: 'Driving across jagged caprock and sharp ventifacts punctured Curiosity\'s thin aluminum wheel treads in 2013-2014, prompting NASA to invent new traction algorithms to preserve the rover\'s mobility.',
    nasaRefId: 'PIA19808 & PIA23378'
  }
];
