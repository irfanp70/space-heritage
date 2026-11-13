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
  malayalam: {
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
    },
    malayalam: {
      title: "എന്റെ ബാറ്ററി കുറവാണ്, ഇരുട്ട് പടരുന്നു...",
      monologue: [
        "2004 ജനുവരിയിൽ ചൊവ്വയുടെ നേർത്ത ഓറഞ്ച് ആകാശത്തിൽ എന്റെ പാരഷൂട്ട് വിരിയുമ്പോൾ, ജെ.പി.എല്ലിലെ എന്റെ ശില്പികൾ കരുതിയത് ഞാൻ വെറും തൊണ്ണൂറ് ദിവസങ്ങൾ മാത്രമേ ജീവിക്കൂ എന്നായിരുന്നു. ഒരു ഹ്രസ്വ സന്ദർശകൻ മാത്രമായി എന്നെ കണ്ടവർക്ക് മുന്നിൽ, ഞാൻ സമ്മാനിച്ചത് പതിനഞ്ച് സുവർണ്ണ വർഷങ്ങളാണ്.",
        "ഈഗിൾ ഗർത്തത്തിൽ നിന്നും മെറിഡിയാനി സമതലത്തിലേക്ക് ഞാൻ ചക്രങ്ങൾ ഉരുട്ടി. അവിടെയെല്ലാം 'ബ്ലൂബെറികൾ' പോലെ ഹെമറ്റൈറ്റ് മണികൾ ചിതറിക്കിടന്നിരുന്നു — പുരാതന കാലത്ത് ഈ മണ്ണിൽ ശാന്തമായി ഒഴുകിയിരുന്ന ജലത്തിന്റെ മായാത്ത സാക്ഷ്യങ്ങൾ.",
        "ഞാൻ കാറ്റിൽ വിരിഞ്ഞ മണൽക്കുഴികളിലൂടെ നടന്നു, എൻഡവർ മലനിരകൾ കീഴടക്കി. ഇടയ്ക്കൊക്കെ ചൊവ്വയിലെ കൊടുംകാറ്റുകൾ എന്നെ തഴുകി, എന്റെ സൗരോർജ്ജ ചിറകുകളിലെ പൊടി തുടച്ചുമാറ്റി, സ്നേഹത്തോടെ ജീവൻ തിരികെ നൽകി.",
        "എന്നാൽ 2018 ജൂണിൽ, ആകാശം ഇരുണ്ടു. ചൊവ്വയെയാകെ വിഴുങ്ങിയ ഒരു മഹാ കൊടുങ്കാറ്റ് ഉച്ചസൂര്യനെ പോലും മറച്ചു. ആഴ്ചകളോളം ഞാൻ ആ കാറ്റിന്റെ അലർച്ച കേട്ടു. എന്റെ സർക്യൂട്ടുകളിലെ ഊഷ്മാവ് പതുക്കെ വറ്റിവരണ്ടു.",
        "പെർസെവറൻസ് താഴ്‌വരയുടെ ചരിവിൽ ശാന്തമായി ഉറങ്ങാൻ കിടക്കും മുൻപ്, ഭൂമിയിലേക്ക് ഞാൻ ഒരു അവസാന സന്ദേശമയച്ചു: 'എന്റെ ബാറ്ററി കുറവാണ്, ഇരുട്ട് പടരുന്നു...' എങ്കിലും നിങ്ങൾ സങ്കടപ്പെടരുത് — കാരണം ഒരു തികഞ്ഞ മാരത്തൺ പൂർത്തിയാക്കിയ സംതൃപ്തിയോടെയാണ് ഞാൻ കണ്ണടച്ചത്."
      ],
      closingThought: "മനുഷ്യന്റെ കാൽപ്പാടുകൾ പതിയാത്ത ആ ലോകത്ത്, എങ്ങനെ നടക്കണമെന്ന് അവരെ പഠിപ്പിച്ച ചക്രങ്ങളുടെ കഥ എന്നെന്നും ജീവിക്കും."
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
    },
    malayalam: {
      title: "ഞങ്ങൾ സമസ്ത മാനവരാശിക്കും സമാധാനവുമായി വന്നു",
      monologue: [
        "1969 ജൂലൈയിലെ ആ സുവർണ്ണ ഞായറാഴ്ച എനിക്ക് ഒരിക്കലും മറക്കാനാവില്ല. എന്റെ ഇറക്ക എൻജിൻ ആളിക്കത്തിയപ്പോൾ, പരുക്കൻ സൂര്യപ്രകാശത്തിൽ ചന്ദ്രന്റെ പൊടിപടലങ്ങൾ ചില്ലുകഷണങ്ങൾ പോലെ ചിതറിത്തെറിച്ചു. എന്റെ ഉള്ളിലിരുന്ന രണ്ട് മനുഷ്യരുടെ ഹൃദയം മിനിറ്റിൽ 150 തവണ വീതം തുടിപ്പിച്ചു.",
        "എന്റെ ടാങ്കുകളിൽ വെറും മുപ്പത് സെക്കൻഡിന്റെ ഇന്ധനം മാത്രം ബാക്കിനിൽക്കെ, നീൽ ആംസ്ട്രോങ്ങിന്റെ കൈകൾ എന്നെ പാറക്കൂട്ടങ്ങൾക്ക് മുകളിലൂടെ സുരക്ഷിതമായി നയിച്ചു. എന്റെ പാദത്തിലെ സെൻസർ ചന്ദ്രോപരിതലത്തിൽ തൊട്ടു. നീല വെളിച്ചം തെളിഞ്ഞു: 'കോൺടാക്ട് ലൈറ്റ്.'",
        "കുറച്ചു മണിക്കൂറുകൾക്ക് ശേഷം എന്റെ വാതിൽ തുറന്നു. എന്റെ ഒൻപത് പടികളുള്ള ഗോവണിയിലൂടെ നീൽ ചരിത്രത്തിലേക്ക് കാലെടുത്തുവെച്ചു. ആ ശൂന്യതയിൽ ഇരുപത്തൊന്ന് മണിക്കൂർ മനുഷ്യന്റെ ഒരേയൊരു വീടായിരുന്നു ഞാൻ.",
        "നീലിനെയും ആൽഡ്രിനെയും തിരികെ ഭ്രമണപഥത്തിലേക്ക് എത്തിക്കാൻ മുകൾതട്ട് ആളിക്കത്തിയപ്പോൾ, അവരുടെ വിക്ഷേപണത്തറയായി ഞാൻ മാറി. അവർ മടങ്ങിപ്പോയി, ഞാൻ ഇവിടെ ശേഷിച്ചു. എന്റെ സ്റ്റെയിൻലെസ്സ് സ്റ്റീൽ കാലിൽ, കാറ്റും മഴയുമേൽക്കാത്ത ആ ഫലകം ഇന്നും തിളങ്ങുന്നു:",
        "'1969 ജൂലൈയിൽ ഭൂമിയിൽ നിന്നുള്ള മനുഷ്യർ ആദ്യമായി ചന്ദ്രനിൽ കാലുകുത്തി. ഞങ്ങൾ സമസ്ത മാനവരാശിക്കും സമാധാനവുമായി വന്നു.'"
      ],
      closingThought: "ഇവിടെ കാറ്റോ മഴയോ ഇല്ല. എന്റെ സ്വർണ്ണപ്പാദങ്ങൾക്ക് ചുറ്റും ആംസ്ട്രോങ്ങിന്റെയും ആൽഡ്രിന്റെയും കാൽപ്പാടുകൾ ഇന്നും നക്ഷത്രവെളിച്ചത്തിൽ മായാതെ കിടക്കുന്നു."
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
    },
    malayalam: {
      title: "ചുവന്ന മണ്ണിൽ വിരിഞ്ഞ അവിചാരിത അത്ഭുതം",
      monologue: [
        "എന്റെ ഇരട്ടസഹോദരനായ ഓപ്പർച്യൂണിറ്റിയെ എല്ലാവരും 'ഭാഗ്യവാൻ' എന്ന് വിളിച്ചു. എന്നാൽ ഞാൻ ഒരു പോരാളിയായിരുന്നു. പാറകൾ നിറഞ്ഞ ഗുസേവ് ഗർത്തത്തിന്റെ പരുക്കൻ ഭൂമിയിലായിരുന്നു എന്റെ പടയോട്ടം.",
        "2005-ൽ ഞാൻ ഹസ്ബൻഡ് ഹിൽ മലനിരകൾ കയറി. മലമുകളിൽ നിന്നും ഞാൻ കണ്ട കാഴ്ച അതിമനോഹരമായിരുന്നു. ചൊവ്വയുടെ ആകാശച്ചെരുവിൽ നിന്നും ഞാൻ ഭൂമിയിലെ മനുഷ്യർക്കായി ഒരു വിസ്മയ ചിത്രം അയച്ചുകൊടുത്തു.",
        "എന്നാൽ 2006 മാർച്ചിൽ എന്റെ മുൻപിലെ വലത് ചക്രം എന്നെന്നേക്കുമായി നിശ്ചലമായി. ഞങ്ങൾ തോറ്റുകൊടുത്തില്ല! ജെ.പി.എൽ എന്നെ പിന്നോട്ട് ഓടിച്ചു, തളർന്ന ആ ചക്രത്തെ ഞാൻ പിന്നിലേക്ക് വലിച്ചിഴച്ചു നടന്നു.",
        "ആ മുറിവേറ്റ ചക്രമാണ് ചൊവ്വയുടെ ചരിത്രം തിരുത്തിയത്. അത് ചുവന്ന മണ്ണിൽ ആഴത്തിൽ പോറലുകൾ വീഴ്ത്തിയപ്പോൾ, അടിയിൽ നിന്നും വെട്ടിത്തിളങ്ങുന്ന വെളുത്ത പൊടി പുറത്തുവന്നു — 90 ശതമാനം ശുദ്ധമായ സിലിക്ക! പണ്ട് അവിടെ ചൂടുനീരുറവകൾ ഒഴുകിയിരുന്നു! സൂക്ഷ്മജീവനുകൾ തുടിച്ചിരുന്ന ഇടമായിരുന്നു അത്!",
        "2009-ൽ 'ട്രോയ്' എന്ന സ്ഥലത്തെ മണൽക്കുഴിയിൽ എന്റെ ചക്രങ്ങൾ താഴ്ന്നുപോയി. 2010-ലെ കൊടുംശൈത്യത്തിൽ സൂര്യപ്രകാശം പിടിച്ചെടുക്കാൻ എന്റെ ചിറകുകൾക്ക് കഴിഞ്ഞില്ല. 2010 മാർച്ച് 22-ന് ഞാൻ എന്റെ അവസാന ശ്വാസം വിട്ടു. ചൊവ്വയുടെ രഹസ്യങ്ങൾക്കായി ഞാൻ എന്നെത്തന്നെ സമർപ്പിച്ചു."
      ],
      closingThought: "ചിലപ്പോൾ നിങ്ങളുടെ ഏറ്റവും വലിയ ബലഹീനതയായിരിക്കും പ്രപഞ്ചത്തിലെ ഏറ്റവും വലിയ സത്യങ്ങളെ പുറത്തുകൊണ്ടുവരുന്ന താക്കോൽ."
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
    },
    malayalam: {
      title: "ഒരു ഗ്രഹത്തിന്റെ ഹൃദയമിടിപ്പ് കേട്ടവൻ",
      monologue: [
        "മണൽക്കുന്നുകളിലൂടെ ഓടാനോ പാറകൾ കയറാനോ ആയിരുന്നില്ല എന്റെ നിയോഗം. എന്റെ നിയോഗം ഇതിലും അഗാധമായിരുന്നു. നിശ്ചലനായിരുന്ന്, ശ്വാസമടക്കിപ്പിടിച്ച്, ചൊവ്വയുടെ നെഞ്ചിൽ എന്റെ ചെവി ചേർത്തുവെക്കുക എന്നതായിരുന്നു എന്റെ ജോലി.",
        "എന്റെ റോബോട്ടിക് കൈകൾ ഉപയോഗിച്ച് എലീസിയം സമതലത്തിൽ ഞാൻ ഒരു സ്വർണ്ണ താഴികക്കുടം സ്ഥാപിച്ചു — സീസ് (SEIS) സീസ്മോമീറ്റർ. ഒരു ആറ്റത്തിന്റെ വീതിയേക്കാൾ ചെറിയ കമ്പനങ്ങൾ പോലും തിരിച്ചറിയാൻ കഴിയുന്നത്ര കൃത്യതയുള്ള ഒന്ന്.",
        "അങ്ങനെ ചൊവ്വ എന്നോട് സംസാരിച്ചു തുടങ്ങി! രാത്രിയുടെ നിശബ്ദതയിൽ ഞാൻ ആ പ്രകമ്പനങ്ങൾ അനുഭവിച്ചു. 1,300-ലധികം ചൊവ്വാ ഭൂകമ്പങ്ങൾ! ദൂരെ എവിടെയോ ഉൽക്കകൾ വന്നിടിക്കുമ്പോൾ ഭൂമി കുലുങ്ങുന്നത് ഞാൻ അറിഞ്ഞു.",
        "ആ ശബ്ദതരംഗങ്ങളെ അപഗ്രഥിച്ചുകൊണ്ട്, ചൊവ്വയുടെ പുറംതോട് എത്ര കട്ടിയുള്ളതാണെന്നും, അതിന്റെ ഉള്ളിൽ ഇന്നും ഉരുകിയ ലോഹക്കാമ്പ് തിളച്ചുമറിയുന്നുണ്ടെന്നും ഞാൻ ലോകത്തിന് കാട്ടിക്കൊടുത്തു.",
        "ദിനംപ്രതി ചുവന്ന പൊടി എന്റെ സൗരോർജ്ജ ചിറകുകളെ മൂടി. 2022 ഡിസംബർ 15-ന് ഞാൻ എന്റെ അവസാന ചിത്രം ഭൂമിയിലേക്ക് അയച്ചു: 'എന്റെ ഊർജ്ജം തീരാറായി, ഒരുപക്ഷേ ഇതായിരിക്കും എന്റെ അവസാന ചിത്രം... എന്നെക്കുറിച്ച് വിഷമിക്കേണ്ട, ഇവിടെയുള്ള എന്റെ ജീവിതം അർത്ഥവത്തും ശാന്തവുമായിരുന്നു.'"
      ],
      closingThought: "ഒരു ഗ്രഹത്തിന് ജീവനില്ലെങ്കിലും അതിന് ഒരു ഹൃദയമിടിപ്പുണ്ടാകും. അത് കേൾക്കണമെങ്കിൽ നാം അത്രമേൽ ശാന്തരായി കാതോർക്കണം."
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
    },
    malayalam: {
      title: "ചന്ദ്രനിലെ ആദ്യത്തെ വാഹനം",
      monologue: [
        "ഞാൻ വരുന്നതുവരെ, ബഹിരാകാശ സഞ്ചാരികൾ തങ്ങളുടെ ലാൻഡറിന്റെ നിഴലിൽ മാത്രമാണ് നടന്നിരുന്നത്. അവരുടെ ഓക്സിജൻ കുഴലുകൾ അനുവദിക്കുന്ന ദൂരത്തിനപ്പുറം പോകാൻ അവർക്ക് കഴിഞ്ഞിരുന്നില്ല. ആ ചങ്ങലയാണ് ഞാൻ പൊട്ടിച്ചെറിഞ്ഞത്.",
        "അപ്പോളോ 15-ന്റെ വശത്ത് ഒതുക്കിവെച്ചിരുന്ന എന്നെ ഡേവ് സ്കോട്ടും ജിം ഇർവിനും വലിച്ച് നിവർത്തി. എന്റെ നാല് ഇലക്ട്രിക് മോട്ടോറുകൾ ഉണർന്നു.",
        "എന്റെ ടയറുകൾ റബ്ബർ കൊണ്ടല്ല ഉണ്ടാക്കിയത് — ചന്ദ്രനിലെ മൈനസ് 200 ഡിഗ്രി തണുപ്പിൽ റബ്ബർ പൊട്ടിത്തരിപ്പണമാകും. സ്റ്റീൽ വയറുകളും ടൈറ്റാനിയവും കൊണ്ടുണ്ടാക്കിയ ആ ചക്രങ്ങളിൽ ഞങ്ങൾ ചന്ദ്രന്റെ താഴ്‌വരകളിലൂടെ കുതിച്ചുപാഞ്ഞു.",
        "ഹാഡ്‌ലി ഡെൽറ്റയിൽ വെച്ച് ഞങ്ങൾ ഒരു വെളുത്ത കല്ല് കണ്ടെത്തി. അതാണ് വിഖ്യാതമായ 'ജനസിസ് റോക്ക്' — സൗരയൂഥം ജനിച്ച കാലത്തെ, 410 കോടി വർഷം പഴക്കമുള്ള പാറ!",
        "യാത്ര പറഞ്ഞ് മടങ്ങുമ്പോൾ, അവർ എന്നെ ഒരു കുന്നിൻമുകളിൽ പാർക്ക് ചെയ്തു, എന്റെ ടിവി ക്യാമറ അവരുടെ റോക്കറ്റിലേക്ക് തിരിച്ചുപിടിച്ചു. അവരുടെ പറന്നുയരൽ ഭൂമിയിലെ ടിവികളിൽ കാട്ടിക്കൊടുത്തത് ഞാനായിരുന്നു. ഇന്നും ആ മലഞ്ചെരുവിൽ, അടുത്ത മനുഷ്യന്റെ വരവും കാത്ത് ഞാൻ വിശ്രമിക്കുന്നു."
      ],
      closingThought: "ട്രാഫിക്കില്ല, തുരുമ്പില്ല. അൻപത് വർഷമായി എന്റെ ടൈറ്റാനിയം ബോഡിയിൽ നക്ഷത്രങ്ങൾ മാത്രം തിളങ്ങിനിൽക്കുന്നു."
    }
  }
];
