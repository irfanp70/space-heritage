export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  historicalContext: string;
  relatedMachineId: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Which Mars rover made one of the greatest water-related discoveries in history by dragging its seized right-front wheel through the soil?",
    options: [
      "Curiosity",
      "Spirit (MER-A)",
      "Sojourner",
      "Perseverance"
    ],
    correctIndex: 1,
    explanation: "In March 2006, Spirit's right-front wheel jammed. As NASA engineers commanded it to drive backward dragging the wheel, it carved a trench that exposed bright white soil consisting of 90% pure silica — proof of ancient hydrothermal hot springs or steam vents.",
    historicalContext: "The discovery at Home Plate in Gusev Crater showed that Mars once possessed localized hydrothermal environments where microbial life could have thrived.",
    relatedMachineId: 'spirit-mer-a',
    difficulty: 'Intermediate'
  },
  {
    id: 2,
    question: "Which piece of Apollo lunar hardware requires ZERO electrical power and continues to be pinged by Earth lasers today?",
    options: [
      "Lunar Roving Vehicle TV camera",
      "SNAP-27 Radioisotope Thermoelectric Generator",
      "Lunar Laser Ranging Retroreflector (LRRR)",
      "Apollo Passive Seismic Experiment"
    ],
    correctIndex: 2,
    explanation: "The Laser Ranging Retroreflectors (LRRR) left by Apollo 11, 14, and 15 use corner-cube optical quartz prisms to reflect laser beams fired from Earth back to their source. They measure the Moon's orbital drift (3.8 cm/year) with millimeter accuracy.",
    historicalContext: "This is the only Apollo experiment still collecting fresh scientific data 50+ years after astronauts left the lunar surface.",
    relatedMachineId: 'alsep-instrument-suite',
    difficulty: 'Beginner'
  },
  {
    id: 3,
    question: "What was the name of the first mobile wheeled robot to ever drive on the red surface of Mars in 1997?",
    options: [
      "Opportunity",
      "Sojourner",
      "Beagle 2",
      "Viking 1"
    ],
    correctIndex: 1,
    explanation: "Sojourner, delivered by the Mars Pathfinder lander on July 4, 1997, was a 10.5-kilogram microwave-sized rover that spent 83 sols roaming Ares Vallis and analyzing rocks like 'Barnacle Bill'.",
    historicalContext: "Sojourner paved the way for all subsequent NASA rovers (Spirit, Opportunity, Curiosity, and Perseverance).",
    relatedMachineId: 'sojourner-pathfinder',
    difficulty: 'Beginner'
  },
  {
    id: 4,
    question: "Why was the InSight Mars Lander mission officially retired in December 2022 after 4 years of operations?",
    options: [
      "Its computer memory was corrupted by cosmic radiation",
      "Thick Martian dust accumulated on its solar arrays, starving it of electrical power",
      "It sank into an undetected underground volcanic lava tube",
      "Its seismometer froze during an unexpected winter storm"
    ],
    correctIndex: 1,
    explanation: "Over its 1,445 Martian sols, fine atmospheric ferric oxide dust slowly choked InSight's two 2.15-meter solar arrays. Power dropped from ~5,000 watt-hours/day to less than 285 watt-hours/day, causing terminal power depletion.",
    historicalContext: "Despite dust starvation, InSight detected 1,319 marsquakes and mapped Mars' crust, mantle, and liquid core before going silent.",
    relatedMachineId: 'insight-lander',
    difficulty: 'Beginner'
  },
  {
    id: 5,
    question: "Which Apollo mission was the first to deploy and drive the motorized Lunar Roving Vehicle (LRV) across the Moon?",
    options: [
      "Apollo 11",
      "Apollo 13",
      "Apollo 15",
      "Apollo 17"
    ],
    correctIndex: 2,
    explanation: "Apollo 15 (July 1971), crewed by Dave Scott and Jim Irwin, was the first 'J-series' mission equipped with the Boeing/GM Lunar Roving Vehicle, allowing astronauts to explore 27.8 kilometers of Hadley Rille.",
    historicalContext: "The LRV's woven wire mesh wheels allowed astronauts to venture miles from the lander and retrieve the famous 4.1-billion-year-old Genesis Rock.",
    relatedMachineId: 'apollo-lrv',
    difficulty: 'Intermediate'
  },
  {
    id: 6,
    question: "What historic driving record did NASA's Opportunity rover establish across the plains of Mars over its 14.5-year lifespan?",
    options: [
      "10.2 kilometers (6.3 miles)",
      "25.0 kilometers (15.5 miles)",
      "45.16 kilometers (28.06 miles)",
      "100.5 kilometers (62.4 miles)"
    ],
    correctIndex: 2,
    explanation: "Opportunity drove an astounding 45.16 kilometers (28.06 miles) on Mars, breaking the off-world driving record previously held by the Soviet Union's Lunokhod 2 rover (39 km).",
    historicalContext: "Opportunity arrived in 2004 with a 90-sol design lifespan and operated until June 2018 when a planet-encircling dust storm blocked all sunlight.",
    relatedMachineId: 'opportunity-mer-b',
    difficulty: 'Intermediate'
  },
  {
    id: 7,
    question: "What small memorial artwork was placed on the lunar surface during Apollo 15 to honor human spacefarers who lost their lives?",
    options: [
      "The Golden Record",
      "The Fallen Astronaut figurine and plaque",
      "The Cosmic Beacon",
      "The Pioneer Plaque"
    ],
    correctIndex: 1,
    explanation: "Commander Dave Scott placed an 8.5-centimeter aluminum statuette titled 'Fallen Astronaut' (sculpted by Paul Van Hoeydonck) alongside a plaque listing 14 American astronauts and Soviet cosmonauts who died in service of space exploration.",
    historicalContext: "It rests undisturbed at Hadley-Apennine, the only formal memorial artwork permanently situated on an extraterrestrial body.",
    relatedMachineId: 'apollo-lrv',
    difficulty: 'Advanced'
  },
  {
    id: 8,
    question: "Why were the Apollo Lunar Module Descent Stages left behind on the lunar surface rather than returned to Earth?",
    options: [
      "They were contaminated with hazardous lunar bacteria",
      "They were welded to bedrock anchor bolts",
      "They served as the launch pad and leaving them behind minimized ascent weight and fuel needs",
      "NASA intended to reuse their propellant tanks for solar fuel stations"
    ],
    correctIndex: 2,
    explanation: "The Lunar Module was a two-stage craft. The descent stage carried the heavy descent rocket engine, landing gear, and consumables, serving as a launch platform for the ascent stage to lift the astronauts into lunar orbit.",
    historicalContext: "Discarding the descent stage allowed the ascent module to remain light enough to achieve lunar orbit rendezvous using a compact hypergolic engine.",
    relatedMachineId: 'apollo-11-lm',
    difficulty: 'Intermediate'
  },
  {
    id: 9,
    question: "Which pre-Apollo robotic lander was visited on foot by Apollo 12 astronauts Pete Conrad and Alan Bean in November 1969?",
    options: [
      "Luna 9",
      "Surveyor 3",
      "Ranger 7",
      "Lunar Orbiter 1"
    ],
    correctIndex: 1,
    explanation: "Surveyor 3, which had touched down inside a crater in Oceanus Procellarum in April 1967, was visited by Pete Conrad and Alan Bean after they executed a pinpoint landing only 160 meters away.",
    historicalContext: "Astronauts retrieved its television camera and scoop to examine the effects of two years of harsh space vacuum and thermal cycling on human-made materials.",
    relatedMachineId: 'surveyor-3',
    difficulty: 'Intermediate'
  },
  {
    id: 10,
    question: "What landmark US legislation was signed into law in 2020 to legally safeguard Apollo landing sites and historical artifacts on the Moon?",
    options: [
      "The Outer Space Artifact Preservation Treaty",
      "The One Small Step to Protect Human Heritage in Space Act",
      "The Artemis Planetary Antiquities Act",
      "The Tranquility Base National Historic Park Order"
    ],
    correctIndex: 1,
    explanation: "The 'One Small Step to Protect Human Heritage in Space Act' (enacted December 2020) requires companies and entities licensed by the US government to adhere to NASA recommendations to protect Apollo landing sites and historic lunar hardware from disturbance.",
    historicalContext: "This legislation reinforces the international commitment to treat early extraterrestrial landing sites as precious human heritage analogous to UNESCO sites on Earth.",
    relatedMachineId: 'apollo-11-lm',
    difficulty: 'Advanced'
  }
];
