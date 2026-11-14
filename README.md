# 🌌 SPACE HERITAGE
### *The Forgotten Machines of the Moon and Mars*
**NASA Space Apps Challenge 2026**

> *"The machines may be silent, but their stories live forever."*

An interactive, scientifically verified digital space museum created for the **NASA Space Apps Challenge 2026**, preserving the historical legacy, telemetry, and discoveries of human and robotic equipment left on the Moon and Mars.

---

## 🌟 Key Features

1. **🏛️ Interactive Space Museum:**
   - Searchable, filterable catalog of historical lunar and Martian hardware:
     - **Apollo Lunar Roving Vehicle (LRV-001, 002, 003)** (Apollo 15, 16, 17)
     - **Apollo 11 Lunar Module Descent Stage ("Eagle")**
     - **Apollo 11 Early Apollo Scientific Experiments Package (EASEP & LRRR)**
     - **Surveyor 3 & Apollo 12 Astronaut Inspection**
     - **Apollo 14 Modular Equipment Transporter (MET)**
     - **Apollo 16 LRV & Far UV Astronomical Camera**
     - **Apollo 17 LRV-003 & Shorty Crater Exploration**
     - **Sojourner Rover & Mars Pathfinder**
     - **Spirit Rover (MER-A)**
     - **Opportunity Rover ("Oppy" MER-B)**
     - **InSight Mars Geophysical Lander**
     - **Curiosity Rover (MSL)**
     - **Perseverance Rover & Three Forks Sample Depot (Mars 2020)**
     - **Viking 1 Lander (Thomas Mutch Memorial Station)**
     - **Phoenix Mars Arctic Lander**
   - Detailed specifications: coordinates, why equipment remains, last known status, scientific achievements, and verified NASA references.

2. **🗺️ 3D-Style Moon & Mars Exploration Maps:**
   - Dual planetary maps with major craters, maria, and geological landmarks.
   - Interactive pulsing telemetry beacons with zoom (+/-), pan, search, and fly-to information drawer.

3. **🎙️ "If This Machine Could Talk":**
   - Emotional first-person monologues told from the machine's own voice.
   - Machine Voice Narration: Immersive English storytelling powered by Web Speech API speech synthesis.
   - Integrated Web Speech API narrator with an animated audio spectrum visualizer.

4. **🌓 Before-and-After Historical Gallery:**
   - Horizontally draggable split-slider comparing pristine arrival states with decades of space weathering and orbital views from LROC and HiRISE.

5. **🚀 Apollo Surface Archive:**
   - Detailed breakdown of Apollo missions 11 through 17.
   - Interactive **Laser Retroreflector (LRRR) Simulator**: Fire a 532 nm laser pulse from Earth and calculate the 2.56-second round-trip light travel time.
   - Cultural relics: Apollo 11 plaque, Apollo 15 *Fallen Astronaut* statuette, Alan Shepard's golf balls, Charlie Duke family photo.

6. **🧠 Ten-Question Space Quiz:**
   - 10 educational multiple-choice questions with instant archival explanations.
   - Printable / exportable **Certificate of Planetary Stewardship** generated via HTML5 Canvas.

7. **🎴 Shareable Holographic Story Cards:**
   - Digital collectible cards with coordinates, stats, and quotes.
   - Client-side Canvas **Download PNG**, **Copy Link**, and native Web Share API trigger.

8. **📡 NASA Space Updates 2026:**
   - Categorized by Active (Perseverance, Curiosity, CLPS), Planned (Artemis III 2027 LEO demo, Artemis IV 2028 crewed south pole landing), and Completed (Artemis II crewed lunar flyby in April 2026, Lunar Trailblazer concluded July 31, 2025, and InSight legacy).

9. **⏳ Exploration Timeline:**
   - Visual chronological timeline from 1969 to 2026+ across 4 exploration eras.

10. **📜 Citations, References & AI Disclosure:**
    - Cites NASA NSSDCA, Apollo Lunar Surface Journal (ALSJ), Planetary Data System (PDS), JPL Photojournal, and US Public Law 116-275 (*One Small Step Act*).
    - Full compliance with NASA Space Apps Challenge 2026 guidelines.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 (Glassmorphism, Neon Cyan & Amber accents)
- **Icons:** Lucide React
- **Audio:** Web Audio API synthesizer + Web Speech API narration
- **Effects:** Canvas Confetti + Custom Starfield Animation Canvas

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/irfanp70/space-heritage.git

# Enter project directory
cd space-heritage

# Install dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📜 License & Disclosures

- **Photographic Imagery:** Verified public domain historical imagery courtesy of NASA, JPL-Caltech, ASU/LROC, and UA/HiRISE.
- **NASA Space Apps Challenge 2026:** Developed as an open-source educational preservation initiative.
