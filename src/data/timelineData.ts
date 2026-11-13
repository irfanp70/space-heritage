export interface TimelineMilestone {
  year: number;
  dateStr: string;
  title: string;
  destination: 'Moon' | 'Mars' | 'Both';
  era: 'Apollo Era' | 'Pioneer Robotics' | 'Rover Renaissance' | 'Modern & Artemis';
  description: string;
  machineId?: string;
  significance: string;
  iconType: 'rocket' | 'flag' | 'rover' | 'lander' | 'satellite';
}

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: 1969,
    dateStr: 'July 20, 1969',
    title: 'Apollo 11: Humanity Steps Upon the Moon',
    destination: 'Moon',
    era: 'Apollo Era',
    description: 'Neil Armstrong and Buzz Aldrin set the Lunar Module Eagle down in the Sea of Tranquility, leaving behind the descent stage, plaque, and laser retroreflector.',
    machineId: 'apollo-11-lm',
    significance: 'First human extraterrestrial landing; established the baseline for off-Earth surface heritage.',
    iconType: 'flag'
  },
  {
    year: 1969,
    dateStr: 'November 19, 1969',
    title: 'Apollo 12: First Human Visitation of Robotic Spacecraft',
    destination: 'Moon',
    era: 'Apollo Era',
    description: 'Pete Conrad and Alan Bean touch down within 160 meters of the Surveyor 3 robotic probe, retrieving components to study long-term space weathering.',
    machineId: 'surveyor-3',
    significance: 'First and only human on-site inspection and partial recovery of a robotic probe on another world.',
    iconType: 'lander'
  },
  {
    year: 1971,
    dateStr: 'July 31, 1971',
    title: 'Apollo 15: First Wheels on Another World',
    destination: 'Moon',
    era: 'Apollo Era',
    description: 'Dave Scott and Jim Irwin deploy the Lunar Roving Vehicle (LRV-001) at Hadley Rille, transforming human lunar mobility from hundreds of meters to tens of kilometers.',
    machineId: 'apollo-lrv',
    significance: 'First motorized automobile driven off Earth; left parked overlooking Hadley canyon.',
    iconType: 'rover'
  },
  {
    year: 1972,
    dateStr: 'December 14, 1972',
    title: 'Apollo 17: Final Apollo Lunar Surface Mission',
    destination: 'Moon',
    era: 'Apollo Era',
    description: 'Gene Cernan and Harrison Schmitt conclude the Apollo program in Taurus-Littrow. LRV-003 is parked at the VIP site to televise the final ascent liftoff.',
    significance: 'End of 20th-century crewed lunar exploration; 382 kg of lunar rocks cataloged.',
    iconType: 'flag'
  },
  {
    year: 1976,
    dateStr: 'July 20, 1976',
    title: 'Viking 1: First Successful Operational Mars Touchdown',
    destination: 'Mars',
    era: 'Pioneer Robotics',
    description: 'Viking 1 lands in Chryse Planitia on Mars, transmitting the first color surface panorama and operating for over 6 years.',
    machineId: 'viking-1-lander',
    significance: 'First continuous robotic outpost on Mars; conducted foundational biological soil tests.',
    iconType: 'lander'
  },
  {
    year: 1997,
    dateStr: 'July 4, 1997',
    title: 'Mars Pathfinder & Sojourner: First Mobile Mars Rover',
    destination: 'Mars',
    era: 'Pioneer Robotics',
    description: 'The 10.5 kg Sojourner rover rolls off the Pathfinder lander into Ares Vallis, validating the rocker-bogie mobility suspension system.',
    machineId: 'sojourner-pathfinder',
    significance: 'First mobile wheeled rover on Mars, sparking the modern robotic exploration era.',
    iconType: 'rover'
  },
  {
    year: 2004,
    dateStr: 'January 2004',
    title: 'Spirit & Opportunity: Twin Rovers Land on Mars',
    destination: 'Mars',
    era: 'Rover Renaissance',
    description: 'Spirit lands in Gusev Crater and Opportunity lands in Meridiani Planum, embarking on historic multi-year endurance treks.',
    machineId: 'opportunity-mer-b',
    significance: 'Discovered indisputable evidence of ancient liquid water, hematite blueberries, and hydrothermal vents.',
    iconType: 'rover'
  },
  {
    year: 2008,
    dateStr: 'May 25, 2008',
    title: 'Phoenix Lander: Touching Martian Arctic Water-Ice',
    destination: 'Mars',
    era: 'Rover Renaissance',
    description: 'Phoenix digs into Vastitas Borealis, scraping and exposing white water-ice permafrost inches below the surface.',
    machineId: 'phoenix-lander',
    significance: 'First physical confirmation and chemical sampling of subterranean water-ice on Mars.',
    iconType: 'lander'
  },
  {
    year: 2012,
    dateStr: 'August 6, 2012',
    title: 'Curiosity Rover: The Sky Crane Descent in Gale Crater',
    destination: 'Mars',
    era: 'Rover Renaissance',
    description: 'A 1-ton nuclear-powered rover lands via a rocket-powered sky crane, discovering ancient habitable freshwater lakes on Mount Sharp.',
    significance: 'Broke open long-duration nuclear rover operations on Mars (active for over 13 years).',
    iconType: 'rover'
  },
  {
    year: 2018,
    dateStr: 'November 26, 2018',
    title: 'InSight Lander: Probing the Martian Interior',
    destination: 'Mars',
    era: 'Modern & Artemis',
    description: 'Touches down in Elysium Planitia, deploying ultra-sensitive seismometers to record over 1,300 marsquakes before retiring in late 2022.',
    machineId: 'insight-lander',
    significance: 'First comprehensive seismic sounding of an alien terrestrial planet\'s interior.',
    iconType: 'lander'
  },
  {
    year: 2021,
    dateStr: 'February 18, 2021',
    title: 'Perseverance & Ingenuity: Sample Caching & Powered Aerial Flight',
    destination: 'Mars',
    era: 'Modern & Artemis',
    description: 'Perseverance lands in Jezero Crater to cache core rock samples, accompanied by Ingenuity, the first powered aircraft on another planet (72 flights).',
    significance: 'First extraterrestrial aerial flight and first deliberate sample depot caching for future return.',
    iconType: 'rover'
  },
  {
    year: 2024,
    dateStr: 'February 22, 2024',
    title: 'Intuitive Machines IM-1: First Commercial Lunar Touchdown',
    destination: 'Moon',
    era: 'Modern & Artemis',
    description: 'The Odysseus Nova-C lander touches down near Malapert A crater at the lunar south pole under NASA\'s CLPS program.',
    significance: 'First American lunar surface landing since Apollo 17; inaugurated commercial lunar delivery services.',
    iconType: 'lander'
  },
  {
    year: 2026,
    dateStr: '2026',
    title: 'Artemis Program: Returning Humanity to the Moon',
    destination: 'Moon',
    era: 'Modern & Artemis',
    description: 'Artemis II prepares to launch four astronauts on a lunar flyby, paving the way for Artemis III to establish humanity\'s sustainable presence at the Lunar South Pole.',
    significance: 'The dawn of permanent, sustainable lunar bases and stewardship of lunar historical sites.',
    iconType: 'rocket'
  }
];
