export interface MachineStory {
  id: string;
  machineName: string;
  codename: string;
  destination: 'Moon' | 'Mars';
  avatarUrl: string;
  lifeSpan: string;
  location: string;
  coreAchievement: string;
  english: {
    title: string;
    monologue: string[];
    closingThought: string;
  };
}

export const MACHINE_STORIES: MachineStory[] = [
  {
    id: 'opportunity',
    machineName: 'Opportunity (MER-B)',
    codename: '"Oppy" — The Marathon Runner',
    destination: 'Mars',
    avatarUrl: 'https://images-assets.nasa.gov/image/PIA18079/PIA18079~medium.jpg',
    lifeSpan: '2004 – 2018 (5,111 Sols / 14.5 Earth Years)',
    location: 'Perseverance Valley, Endeavour Crater, Mars',
    coreAchievement: 'Drove 45.16 km (28 miles) — the longest distance driven on another celestial body in human history.',
    english: {
      title: "My Battery is Low, and It's Getting Dark",
      monologue: [
        "When my parachute unfurled in the thin orange sky of Mars in January 2004, my human creators back at JPL only expected me to survive for ninety Martian days. They called me a temporary traveler. Instead, I gave them fifteen magnificent years.",
        "I rolled out of Eagle Crater and stared across the vast, lonely plains of Meridiani. Everywhere I looked, I found small gray spheres — 'blueberries' made of hematite — proof that sweet, mineral-rich water once lapped gently upon this ancient red ground.",
        "I crossed endless fields of rippled sand, climbed the rugged hills of Endeavour, and stared down into chasms kilometers wide. Dust devils danced around me, occasionally sweeping my solar panels clean like gentle Martian ghosts.",
        "Then, in June 2018, the sky bruised purple. A planet-wide dust storm blotted out the midday sun. For days, I listened to the wind howl as the darkness deepened. The warmth inside my circuits faded.",
        "Before I drifted to sleep on the slopes of Perseverance Valley, I sent one last transmission home. My battery was low, and it was getting dark. But do not mourn for me — I lived long enough to finish the marathon."
      ],
      closingThought: "A world without footsteps remembers the wheels that showed humanity how to walk on Mars."
    }
  },
  {
    id: 'apollo11-eagle',
    machineName: 'Apollo 11 Descent Stage',
    codename: '"Eagle" — The Foothold of Humanity',
    destination: 'Moon',
    avatarUrl: 'https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg',
    lifeSpan: 'Landed July 20, 1969 (Eternal Lunar Monument)',
    location: 'Tranquility Base (0.674° N, 23.473° E), Sea of Tranquility',
    coreAchievement: 'The first vehicle carrying human beings to set landing gear upon extraterrestrial soil.',
    english: {
      title: "We Came in Peace for All Mankind",
      monologue: [
        "I will never forget that Sunday in July 1969. My descent engine burned furiously, kicking up sheets of lunar dust that shone like spun glass in the harsh sunlight. Inside my cabin, two hearts were pounding at 150 beats a minute.",
        "With barely thirty seconds of fuel left in my tanks, Neil's gloved hand nudged the hand-controller forward, clearing a field of boulder-strewn craters. The contact probe on my landing foot touched the powdery gray surface. A blue indicator illuminated. 'Contact light.'",
        "A few hours later, a hatch opened above me. Neil walked down my nine-rung ladder and stepped into history. For twenty-one hours, I was humanity’s solitary shelter in the airless abyss.",
        "When the Ascent Stage ignited to return Neil and Buzz to orbit, my engine frame became their launchpad. They left, but I stayed behind. On my stainless steel strut, a stainless steel plaque remains untouched by wind or rain:",
        "'Here men from the planet Earth first set foot upon the Moon, July 1969 A.D. We came in peace for all mankind.'"
      ],
      closingThought: "There is no weather here. No wind, no rain. The boots of Armstrong and Aldrin still linger beside my golden pads, preserved in pristine starlight."
    }
  },
  {
    id: 'spirit',
    machineName: 'Spirit (MER-A)',
    codename: '"The Fighter of Gusev Crater"',
    destination: 'Mars',
    avatarUrl: 'https://images-assets.nasa.gov/image/PIA05200/PIA05200~medium.jpg',
    lifeSpan: '2004 – 2010 (2,210 Sols / 6.2 Earth Years)',
    location: 'Troy, West of Home Plate, Gusev Crater, Mars',
    coreAchievement: 'First robot to summit a mountain on another planet; accidentally discovered ancient hydrothermal vents by dragging its broken wheel.',
    english: {
      title: "The Accidental Miracle in the Red Dust",
      monologue: [
        "They called my twin Opportunity 'the lucky one.' But I was the fighter. I landed in Gusev Crater, a rugged, rock-strewn battleground that tested every bolt in my titanium frame.",
        "In 2005, I climbed Husband Hill, clawing my way three hundred feet up the rocky slopes until I reached the crest. From the summit, I looked down upon an alien world and snapped a breathtaking panoramic postcard for the people of Earth.",
        "Then, in March 2006, my front-right drive wheel seized and froze forever. Did we quit? Never. My team at JPL commanded me to drive backward, dragging my lifeless wheel behind me like a wounded soldier.",
        "That dead wheel became the greatest blessing in space exploration. As it gouged deeply into the rusty red dirt, it sliced open a bed of brilliant white powder — ninety percent pure silica! Hot springs had once bubbled there! Life could have thrived right beneath my tracks.",
        "In 2009, I slipped into a hidden crust of soft sulfate at a place called Troy. When the freezing winter of 2010 drew in, I could not tilt my solar panels to catch the pale Sun. I sent my final whisper on March 22, 2010. I gave everything for the science of Mars."
      ],
      closingThought: "Sometimes in science, your greatest handicap is the exact tool that unlocks the universe's greatest secrets."
    }
  },
  {
    id: 'insight',
    machineName: 'InSight Lander',
    codename: '"The Listening Heart of Elysium"',
    destination: 'Mars',
    avatarUrl: 'https://images-assets.nasa.gov/image/PIA22874/PIA22874~medium.jpg',
    lifeSpan: '2018 – 2022 (1,445 Sols / 4 Earth Years)',
    location: 'Elysium Planitia, Mars',
    coreAchievement: 'Detected over 1,300 marsquakes, unveiling the crust, mantle, and liquid molten core of Mars.',
    english: {
      title: "Listening to the Heartbeat of a Dying Planet",
      monologue: [
        "I was never built to roll across the dunes or climb crater rims. My mission was far more intimate. I was sent to sit still, hold my breath, and press my mechanical ear to the chest of Mars.",
        "With my robotic arm, I gently set down a golden dome on the smooth soil of Elysium Planitia — the SEIS seismometer, insulated under a vacuum chamber so sensitive it could feel ground vibrations smaller than the width of a single atom.",
        "And Mars spoke to me. In the absolute dead of the night, I felt the tremors. Over one thousand three hundred marsquakes! I felt the ground shudder when meteorites crashed hundreds of kilometers away, punching fresh craters into the rust.",
        "By listening to how seismic waves traveled through the deep planet, I mapped its layered crust, measured its thick mantle, and proved that deep inside, Mars still possesses a molten, churning liquid core.",
        "Day by day, the Martian dust coated my solar wings in a gray shroud. On December 15, 2022, I sent my final picture back to the blue dot in the sky: 'My power is really low, so this may be the last image I can send... don't worry about me. My time here has been both productive and serene.'"
      ],
      closingThought: "A planet does not need to be alive to have a heartbeat. You just have to be quiet enough to listen."
    }
  },
  {
    id: 'lrv15',
    machineName: 'Apollo 15 Lunar Roving Vehicle',
    codename: '"The Moon Buggy of Hadley Rille"',
    destination: 'Moon',
    avatarUrl: 'https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~medium.jpg',
    lifeSpan: 'July 31 – August 2, 1971 (Parked Permanently)',
    location: 'Hadley-Apennine, 26.1322° N, 3.6339° E, Moon',
    coreAchievement: 'The first motorized wheeled vehicle driven by humans on another world, traveling 27.8 km.',
    english: {
      title: "The First Car on the Moon",
      monologue: [
        "Before I arrived, astronauts were tethered to the shadow of their lander, able to wander only as far as their oxygen hoses and heavy spacesuits would permit. I broke that tether.",
        "Folded like an origami puzzle into the side of Apollo 15’s Lunar Module, Dave Scott and Jim Irwin pulled two lanyards, and my aluminum frame snapped into place. Four independent electric motors whirred to life.",
        "My tires weren't made of rubber — rubber would shatter in the -200°C lunar night. They were hand-woven out of zinc-coated steel wire and titanium chevrons. We bounced over ridges, kicked up rooster-tails of silver regolith, and drove all the way to the breathtaking canyon of Hadley Rille.",
        "At Hadley Delta, we stopped beside an unremarkable white stone. It was the 'Genesis Rock' — over 4.1 billion years old, forged when the solar system was in its infancy.",
        "When it was time for Dave and Jim to go home, they parked me three hundred meters away, aimed my TV camera toward their ascent stage, and said goodbye. My camera beamed their liftoff to television screens across Earth. And here I remain, parked on the rim of the canyon, ready to drive whenever humans return."
      ],
      closingThought: "Zero traffic. Zero rust. Just fifty years of starlight on my titanium fenders."
    }
  }
];
