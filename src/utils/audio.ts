// Web Audio API Sound Generator & Web Speech API Narrator
// Zero external mp3 dependencies; 100% reliable in any browser.

class SpaceAudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private ambientGain: GainNode | null = null;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.ambientGain) {
      this.ambientGain.gain.setValueAtTime(this.isMuted ? 0 : 0.05, this.ctx?.currentTime || 0);
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  // Sci-fi click chime
  public playClick() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1320, this.ctx.currentTime + 0.06);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {
      // AudioContext unavailable
    }
  }

  // Radio beep / telemetry ping
  public playTelemetryPing() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1760, this.ctx.currentTime);
      osc.frequency.setValueAtTime(2200, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch {
      // AudioContext error
    }
  }

  // Quiz correct celebration chord
  public playSuccess() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const freqs = [523.25, 659.25, 783.99, 1046.50]; // C Major
      freqs.forEach((f, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, this.ctx!.currentTime + i * 0.05);
        gain.gain.setValueAtTime(0.06, this.ctx!.currentTime + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx!.currentTime + i * 0.05 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx!.destination);
        osc.start(this.ctx!.currentTime + i * 0.05);
        osc.stop(this.ctx!.currentTime + i * 0.05 + 0.3);
      });
    } catch {}
  }

  // Laser beam retroreflector pulse
  public playLaserPulse() {
    if (this.isMuted) return;
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(2400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch {}
  }

  // Ambient deep space background hum toggle
  public startAmbientHum() {
    if (this.ambientOsc1) return; // already running
    try {
      this.initCtx();
      if (!this.ctx) return;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(this.isMuted ? 0 : 0.03, this.ctx.currentTime);

      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc1.type = 'sine';
      this.ambientOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // 55Hz low A

      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientOsc2.type = 'triangle';
      this.ambientOsc2.frequency.setValueAtTime(110.5, this.ctx.currentTime); // gentle binaural beat

      this.ambientOsc1.connect(this.ambientGain);
      this.ambientOsc2.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc1.start();
      this.ambientOsc2.start();
    } catch {}
  }

  public stopAmbientHum() {
    try {
      if (this.ambientOsc1) {
        this.ambientOsc1.stop();
        this.ambientOsc1.disconnect();
        this.ambientOsc1 = null;
      }
      if (this.ambientOsc2) {
        this.ambientOsc2.stop();
        this.ambientOsc2.disconnect();
        this.ambientOsc2 = null;
      }
    } catch {}
  }
}

export const spaceAudio = new SpaceAudioEngine();

// =========================================================================
// Advanced Space Narrator: Natural Documentary Voice & Sentence Pacing Engine
// =========================================================================

export type NarratorState = 'idle' | 'playing' | 'paused';

export interface NarratorSettings {
  rate: number;
  pitch: number;
  voiceURI: string | null;
  cloudProvider: 'none' | 'openai' | 'elevenlabs';
  cloudApiKey: string;
  cloudVoice: string;
}

export interface NarratorSentence {
  text: string;
  speechText: string;
  paragraphIndex: number;
  isHeader?: boolean;
  isEpilogue?: boolean;
}

/**
 * Phonetically normalizes space jargon, acronyms, and units so speech synthesis
 * sounds like a polished human documentary narrator instead of reading mechanical symbols.
 */
export function normalizeSpaceSpeechText(text: string): string {
  return text
    // Strip markdown formatting and curly quotes
    .replace(/\*+/g, '')
    .replace(/[“”]/g, '')
    .replace(/[‘’]/g, "'")
    // Units & Measurements
    .replace(/\b(\d+(\.\d+)?)\s*km\b/gi, '$1 kilometers')
    .replace(/\b(\d+(\.\d+)?)\s*kg\b/gi, '$1 kilograms')
    .replace(/\b(\d+(\.\d+)?)\s*lbs\b/gi, '$1 pounds')
    .replace(/\b(\d+(\.\d+)?)\s*psi\b/gi, '$1 P-S-I')
    .replace(/-?(\d+)\s*°C\b/gi, '$1 degrees Celsius')
    .replace(/\b(\d+)\s*cm\b/gi, '$1 centimeters')
    .replace(/\b(\d+)\s*m\b/gi, '$1 meters')
    // Space missions & instruments
    .replace(/\bsols\b/gi, 'Martian sols')
    .replace(/\bSol\s+(\d+)\b/gi, 'Sol $1')
    .replace(/\bLRV-(\d+)\b/gi, 'L-R-V $1')
    .replace(/\bLRV\b/gi, 'L-R-V')
    .replace(/\bLM\b/gi, 'Lunar Module')
    .replace(/\bEVA-(\d+)\b/gi, 'E-V-A $1')
    .replace(/\bEVA\b/gi, 'E-V-A')
    .replace(/\bMER-A\b/gi, 'M-E-R A')
    .replace(/\bMER-B\b/gi, 'M-E-R B')
    .replace(/\bMSL\b/gi, 'M-S-L')
    .replace(/\bSEIS\b/gi, 'S-E-I-S')
    .replace(/\bAPXS\b/gi, 'A-P-X-S')
    .replace(/\bJPL\b/gi, 'J-P-L')
    .replace(/\bNSSDCA\b/gi, 'N-S-S-D-C-A')
    .replace(/\bRTG\b/gi, 'R-T-G')
    .replace(/\bRTGs\b/gi, 'R-T-Gs')
    .replace(/\bMMRTG\b/gi, 'M-M-R-T-G')
    .replace(/\bHVM³\b/gi, 'H-V-M 3')
    .replace(/\bLTM\b/gi, 'L-T-M')
    .replace(/\bLROC\b/gi, 'L-ROC')
    .replace(/\bHiRISE\b/gi, 'High-Rise')
    .replace(/\bOppy\b/gi, 'Ah-py')
    .replace(/\bEASEP\b/gi, 'E-A-S-E-P')
    .replace(/\bALSEP\b/gi, 'A-L-S-E-P')
    .replace(/\bLRRR\b/gi, 'L-R-R-R')
    .replace(/\bPSEP\b/gi, 'P-S-E-P')
    // Prosodic breathing punctuation
    .replace(/—/g, ', ')
    .replace(/\.\.\./g, '... ');
}

/**
 * Ranks available browser voices to select warm, expressive English documentary narrators.
 */
export function rankEnglishVoices(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice[] {
  const englishVoices = voices.filter(v => v.lang.startsWith('en'));

  return [...englishVoices].sort((a, b) => {
    const scoreVoice = (v: SpeechSynthesisVoice) => {
      let score = 0;
      const name = v.name.toLowerCase();

      // Premium neural / natural voices
      if (name.includes('natural')) score += 120;
      if (name.includes('neural')) score += 110;
      if (name.includes('online')) score += 90;
      if (name.includes('enhanced')) score += 80;

      // Documentary narrator character profiles
      if (name.includes('christopher')) score += 75; // Microsoft Christopher Online (Natural)
      if (name.includes('guy')) score += 70;         // Microsoft Guy Online (Natural)
      if (name.includes('ryan')) score += 65;
      if (name.includes('daniel')) score += 60;       // UK Daniel (warm, refined)
      if (name.includes('oliver')) score += 55;
      if (name.includes('david')) score += 50;        // Windows David
      if (name.includes('google uk english male')) score += 65;
      if (name.includes('google us english')) score += 55;
      if (name.includes('aria')) score += 45;
      if (name.includes('jenny')) score += 45;

      // Dialect priorities
      if (v.lang === 'en-US' || v.lang === 'en-GB') score += 15;

      // Discourage robotic/compact synthesis
      if (name.includes('compact')) score -= 50;

      return score;
    };

    return scoreVoice(b) - scoreVoice(a);
  });
}

class SpaceNarratorEngine {
  private state: NarratorState = 'idle';
  private sentences: NarratorSentence[] = [];
  private currentSentenceIndex: number = 0;
  private currentParagraphIndex: number = -1;
  private timerId: ReturnType<typeof setTimeout> | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private currentAudioElement: HTMLAudioElement | null = null;
  private listeners: Set<() => void> = new Set();
  private settings: NarratorSettings;

  constructor() {
    this.settings = this.loadSettings();

    // Cache voices when browser initializes them asynchronously
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        this.notifyListeners();
      };
    }
  }

  private loadSettings(): NarratorSettings {
    const defaultSettings: NarratorSettings = {
      rate: 0.90,
      pitch: 0.96,
      voiceURI: null,
      cloudProvider: 'none',
      cloudApiKey: '',
      cloudVoice: 'onyx'
    };

    try {
      const stored = localStorage.getItem('space_heritage_narrator_settings');
      if (stored) {
        return { ...defaultSettings, ...JSON.parse(stored) };
      }
    } catch {}

    return defaultSettings;
  }

  public getSettings(): NarratorSettings {
    return { ...this.settings };
  }

  public updateSettings(partial: Partial<NarratorSettings>) {
    this.settings = { ...this.settings, ...partial };
    try {
      localStorage.setItem('space_heritage_narrator_settings', JSON.stringify(this.settings));
    } catch {}
    this.notifyListeners();
  }

  public getState(): NarratorState {
    return this.state;
  }

  public getCurrentParagraphIndex(): number {
    return this.currentParagraphIndex;
  }

  public getCurrentSentenceIndex(): number {
    return this.currentSentenceIndex;
  }

  public getTotalSentences(): number {
    return this.sentences.length;
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners() {
    this.listeners.forEach(cb => {
      try { cb(); } catch {}
    });
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
    return rankEnglishVoices(window.speechSynthesis.getVoices());
  }

  public getSelectedVoice(): SpeechSynthesisVoice | null {
    const voices = this.getVoices();
    if (voices.length === 0) return null;

    if (this.settings.voiceURI) {
      const found = voices.find(v => v.voiceURI === this.settings.voiceURI);
      if (found) return found;
    }
    return voices[0] || null;
  }

  /**
   * Starts playing a machine's monologue with natural sentence pacing, breath pauses,
   * and paragraph transition intervals.
   */
  public playStory(paragraphs: string[], title?: string, closingThought?: string) {
    this.stop();

    const preparedSentences: NarratorSentence[] = [];

    // 1. Title intro
    if (title) {
      preparedSentences.push({
        text: title,
        speechText: normalizeSpaceSpeechText(title),
        paragraphIndex: -1,
        isHeader: true
      });
    }

    // 2. Main monologue broken into sentences
    paragraphs.forEach((para, pIdx) => {
      const sentenceRegex = /[^.!?]+[.!?]+(\s+|$)|[^.!?]+$/g;
      const rawSentences = para.match(sentenceRegex) || [para];

      rawSentences.forEach(s => {
        const trimmed = s.trim();
        if (trimmed) {
          preparedSentences.push({
            text: trimmed,
            speechText: normalizeSpaceSpeechText(trimmed),
            paragraphIndex: pIdx
          });
        }
      });
    });

    // 3. Epilogue closing thought
    if (closingThought) {
      preparedSentences.push({
        text: closingThought,
        speechText: normalizeSpaceSpeechText(closingThought),
        paragraphIndex: 999,
        isEpilogue: true
      });
    }

    this.sentences = preparedSentences;
    this.currentSentenceIndex = 0;
    this.state = 'playing';
    this.notifyListeners();

    this.speakCurrentSentence();
  }

  private speakCurrentSentence() {
    if (this.state !== 'playing') return;

    if (this.currentSentenceIndex >= this.sentences.length) {
      this.state = 'idle';
      this.currentParagraphIndex = -1;
      this.notifyListeners();
      return;
    }

    const sentence = this.sentences[this.currentSentenceIndex];
    this.currentParagraphIndex = sentence.paragraphIndex;
    this.notifyListeners();

    // Check optional Cloud TTS (OpenAI or ElevenLabs)
    if (this.settings.cloudProvider === 'openai' && this.settings.cloudApiKey.trim()) {
      this.speakWithOpenAITTS(sentence.speechText);
      return;
    }

    if (this.settings.cloudProvider === 'elevenlabs' && this.settings.cloudApiKey.trim()) {
      this.speakWithElevenLabsTTS(sentence.speechText);
      return;
    }

    // Default: Browser High-Quality Neural Synthesis
    this.speakWithBrowserSpeech(sentence);
  }

  private speakWithBrowserSpeech(sentence: NarratorSentence) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      this.state = 'idle';
      this.notifyListeners();
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(sentence.speechText);
    utterance.lang = 'en-US';
    utterance.rate = this.settings.rate;
    utterance.pitch = this.settings.pitch;

    const chosenVoice = this.getSelectedVoice();
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    utterance.onend = () => {
      this.currentUtterance = null;
      if (this.state !== 'playing') return;

      const nextIndex = this.currentSentenceIndex + 1;
      if (nextIndex < this.sentences.length) {
        const currentP = sentence.paragraphIndex;
        const nextP = this.sentences[nextIndex].paragraphIndex;

        // Realistic breath pauses:
        // Longer reflection pause between paragraphs (650ms), micro breath between sentences (300ms)
        const pauseMs = (currentP !== nextP) ? 650 : 300;

        this.currentSentenceIndex = nextIndex;
        this.timerId = setTimeout(() => {
          this.speakCurrentSentence();
        }, pauseMs);
      } else {
        this.state = 'idle';
        this.currentParagraphIndex = -1;
        this.notifyListeners();
      }
    };

    utterance.onerror = (e) => {
      // If paused or canceled deliberately, ignore
      if (e.error === 'canceled' || e.error === 'interrupted') return;
      this.currentUtterance = null;
      this.state = 'idle';
      this.notifyListeners();
    };

    this.currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  // Optional: OpenAI TTS cloud integration (Audio streamed client-side, zero keys exposed in repo)
  private async speakWithOpenAITTS(text: string) {
    try {
      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.settings.cloudApiKey.trim()}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'tts-1',
          voice: this.settings.cloudVoice || 'onyx', // 'onyx' is a deep, warm documentary voice
          input: text,
          speed: this.settings.rate
        })
      });

      if (!response.ok) {
        // Fall back to neural browser speech if API rejected
        const sentence = this.sentences[this.currentSentenceIndex];
        this.speakWithBrowserSpeech(sentence);
        return;
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      this.currentAudioElement = audio;

      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        this.currentAudioElement = null;
        if (this.state !== 'playing') return;

        const nextIndex = this.currentSentenceIndex + 1;
        if (nextIndex < this.sentences.length) {
          const currentP = this.sentences[this.currentSentenceIndex].paragraphIndex;
          const nextP = this.sentences[nextIndex].paragraphIndex;
          const pauseMs = (currentP !== nextP) ? 650 : 300;

          this.currentSentenceIndex = nextIndex;
          this.timerId = setTimeout(() => {
            this.speakCurrentSentence();
          }, pauseMs);
        } else {
          this.state = 'idle';
          this.currentParagraphIndex = -1;
          this.notifyListeners();
        }
      };

      audio.onerror = () => {
        URL.revokeObjectURL(audioUrl);
        this.currentAudioElement = null;
        // Fall back to browser speech on playback error
        const sentence = this.sentences[this.currentSentenceIndex];
        this.speakWithBrowserSpeech(sentence);
      };

      await audio.play();
    } catch {
      // Fall back safely to browser speech
      const sentence = this.sentences[this.currentSentenceIndex];
      this.speakWithBrowserSpeech(sentence);
    }
  }

  // Optional: ElevenLabs TTS client-side integration
  private async speakWithElevenLabsTTS(text: string) {
    try {
      const voiceId = this.settings.cloudVoice || '21m00Tcm4TlvDq8ikWAM'; // Rachel or custom narrator
      const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: 'POST',
        headers: {
          'xi-api-key': this.settings.cloudApiKey.trim(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: { stability: 0.75, similarity_boost: 0.85 }
        })
      });

      if (!response.ok) {
        const sentence = this.sentences[this.currentSentenceIndex];
        this.speakWithBrowserSpeech(sentence);
        return;
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      this.currentAudioElement = audio;

      audio.onended = () => {
        URL.revokeObjectURL(audioUrl);
        this.currentAudioElement = null;
        if (this.state !== 'playing') return;

        const nextIndex = this.currentSentenceIndex + 1;
        if (nextIndex < this.sentences.length) {
          const currentP = this.sentences[this.currentSentenceIndex].paragraphIndex;
          const nextP = this.sentences[nextIndex].paragraphIndex;
          const pauseMs = (currentP !== nextP) ? 650 : 300;

          this.currentSentenceIndex = nextIndex;
          this.timerId = setTimeout(() => {
            this.speakCurrentSentence();
          }, pauseMs);
        } else {
          this.state = 'idle';
          this.currentParagraphIndex = -1;
          this.notifyListeners();
        }
      };

      audio.onerror = () => {
        URL.revokeObjectURL(audioUrl);
        this.currentAudioElement = null;
        const sentence = this.sentences[this.currentSentenceIndex];
        this.speakWithBrowserSpeech(sentence);
      };

      await audio.play();
    } catch {
      const sentence = this.sentences[this.currentSentenceIndex];
      this.speakWithBrowserSpeech(sentence);
    }
  }

  /**
   * Pauses the current narration utterance cleanly.
   */
  public pause() {
    if (this.state !== 'playing') return;

    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    if (this.currentAudioElement) {
      this.currentAudioElement.pause();
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }

    this.state = 'paused';
    this.notifyListeners();
  }

  /**
   * Resumes playback seamlessly from the exact sentence paused.
   */
  public resume() {
    if (this.state !== 'paused') return;

    this.state = 'playing';
    this.notifyListeners();

    if (this.currentAudioElement) {
      this.currentAudioElement.play();
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else {
        // Fallback if browser canceled during background pause
        this.speakCurrentSentence();
      }
    }
  }

  /**
   * Stops narration and resets the queue back to idle.
   */
  public stop() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    if (this.currentAudioElement) {
      this.currentAudioElement.pause();
      this.currentAudioElement = null;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    this.currentUtterance = null;
    this.state = 'idle';
    this.currentSentenceIndex = 0;
    this.currentParagraphIndex = -1;
    this.notifyListeners();
  }

  /**
   * Single sentence / short phrase reader with natural prosody (e.g. for museum modal quotes).
   */
  public speakSimple(text: string, onEnd?: () => void) {
    this.stop();

    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onEnd) onEnd();
      return;
    }

    const normalized = normalizeSpaceSpeechText(text);
    const utterance = new SpeechSynthesisUtterance(normalized);
    utterance.lang = 'en-US';
    utterance.rate = this.settings.rate;
    utterance.pitch = this.settings.pitch;

    const chosenVoice = this.getSelectedVoice();
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    utterance.onend = () => {
      this.state = 'idle';
      this.notifyListeners();
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.state = 'idle';
      this.notifyListeners();
      if (onEnd) onEnd();
    };

    this.state = 'playing';
    this.notifyListeners();
    window.speechSynthesis.speak(utterance);
  }
}

export const spaceNarrator = new SpaceNarratorEngine();

// Backward compatibility helper functions
export function speakNarration(text: string, onEndOrLang?: string | (() => void), onEnd?: () => void) {
  const callback = typeof onEndOrLang === 'function' ? onEndOrLang : onEnd;
  spaceNarrator.speakSimple(text, callback);
}

export function stopNarration() {
  spaceNarrator.stop();
}
