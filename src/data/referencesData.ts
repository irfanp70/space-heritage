export interface ReferenceSource {
  title: string;
  category: 'NASA Official Catalog' | 'Photographic Archive' | 'Lunar Science' | 'Mars Science' | 'Space Law & Heritage';
  organization: string;
  url: string;
  description: string;
  datasetOrIdentifier: string;
}

export const OFFICIAL_DATA_SOURCES: ReferenceSource[] = [
  {
    title: 'NASA Space Science Data Coordinated Archive (NSSDCA)',
    category: 'NASA Official Catalog',
    organization: 'NASA Goddard Space Flight Center',
    url: 'https://nssdc.gsfc.nasa.gov/',
    description: 'The master archive for all NASA robotic and human spaceflight missions, providing canonical spacecraft catalog IDs, launch parameters, orbital trajectories, and surface coordinates.',
    datasetOrIdentifier: 'Master Spacecraft Catalog (NSSDCA ID 1969-059C, 1971-063C, 2003-032A, etc.)'
  },
  {
    title: 'Apollo Lunar Surface Journal (ALSJ)',
    category: 'Lunar Science',
    organization: 'NASA History Program / Eric M. Jones',
    url: 'https://www.hq.nasa.gov/alsj/',
    description: 'Comprehensive, annotated transcripts and telemetry logs of all Apollo lunar EVAs, rover operations, equipment deployments, and audio recordings.',
    datasetOrIdentifier: 'NASA SP-4029 / MSC Technical Reports'
  },
  {
    title: 'NASA Planetary Data System (PDS)',
    category: 'Mars Science',
    organization: 'NASA Jet Propulsion Laboratory & Planetary Science Division',
    url: 'https://pds.nasa.gov/',
    description: 'Federated data system archiving all raw and calibrated scientific telemetry, APXS chemistry, and environmental readings from Viking, Pathfinder, Spirit, Opportunity, and InSight.',
    datasetOrIdentifier: 'PDS Geosciences & Imaging Nodes'
  },
  {
    title: 'NASA Photojournal & Public Image Archive',
    category: 'Photographic Archive',
    organization: 'NASA Jet Propulsion Laboratory & Johnson Space Center',
    url: 'https://photojournal.jpl.nasa.gov/',
    description: 'Official repository of high-resolution calibrated public domain planetary imagery, mission patches, and orbital verifications.',
    datasetOrIdentifier: 'JPL Planetary Image Access (PIA series) & Apollo Hasselblad Film Scans'
  },
  {
    title: 'Lunar Reconnaissance Orbiter Camera (LROC) Science Operations',
    category: 'Photographic Archive',
    organization: 'Arizona State University / NASA GSFC',
    url: 'https://www.lroc.asu.edu/',
    description: 'Sub-meter orbital verification imagery of Apollo landing sites, Lunar Module descent stages, rover tracks, and ALSEP instruments from lunar orbit.',
    datasetOrIdentifier: 'LROC Narrow Angle Camera (NAC) M175124932LR & M168000580LR'
  },
  {
    title: 'High Resolution Imaging Science Experiment (HiRISE)',
    category: 'Photographic Archive',
    organization: 'University of Arizona / NASA JPL',
    url: 'https://hirise.lpl.arizona.edu/',
    description: 'Meter-scale orbital photography of Mars exploration hardware, including Opportunity on the rim of Endeavour, Spirit at Troy, InSight on Elysium, and Phoenix in Vastitas Borealis.',
    datasetOrIdentifier: 'HiRISE MRO Observations (PSP_001890_9015 & ESP_076949_1845)'
  },
  {
    title: 'One Small Step to Protect Human Heritage in Space Act (Public Law 116-275)',
    category: 'Space Law & Heritage',
    organization: 'United States Congress & National Aeronautics and Space Administration',
    url: 'https://www.congress.gov/bill/116th-congress/senate-bill/1694',
    description: 'Statutory framework requiring US space exploration entities to protect the landing sites and artifacts of the Apollo program as historic heritage.',
    datasetOrIdentifier: '134 Stat. 3357 (Enacted December 31, 2020)'
  },
  {
    title: 'NASA Recommendations to Protect and Preserve the Historic and Scientific Value of Lunar Artifacts',
    category: 'Space Law & Heritage',
    organization: 'NASA Lunar Historic Sites Working Group',
    url: 'https://www.nasa.gov/pdf/617743main_NASA-USG_LUNAR_HISTORIC_SITES_RevA-508.pdf',
    description: 'Guidelines establishing exclusion zones (keep-out buffers), dust-mitigation standards, and preservation protocols for robotic and crewed lunar artifacts.',
    datasetOrIdentifier: 'NASA Historic Sites Technical Document Rev A'
  }
];

export const SPACE_APPS_COMPLIANCE = {
  challengeTitle: 'NASA Space Apps Challenge 2026',
  projectTitle: 'SPACE HERITAGE: The Forgotten Machines of the Moon and Mars',
  aiAssistedDisclosure: 'In compliance with NASA Space Apps Challenge regulations, artificial intelligence was utilized to facilitate front-end code scaffolding, interface accessibility optimization, and language translation synthesis into Malayalam. All mission facts, orbital coordinates, NSSDCA catalog identifiers, photographic credits, scientific discoveries, and equipment statuses have been thoroughly cross-verified against official NASA, JPL-Caltech, and partner academic institution documentation. Zero fictional missions, fabricated photographs, or simulated claims are presented.',
  authenticityGuarantee: 'All photographs featured in this application are authentic public domain images captured by NASA astronauts, robotic landers, rovers, or orbital reconnaissance cameras (LROC & HiRISE). No generative AI synthetic imagery is used in place of genuine historical space hardware.'
};
