let audioCtx = null;
let isMuted = localStorage.getItem("audio_muted") === "true";

function initAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

export const soundManager = {
  isMuted: () => isMuted,
  
  toggleMute: () => {
    isMuted = !isMuted;
    localStorage.setItem("audio_muted", isMuted.toString());
    return isMuted;
  },

  playTick: () => {
    if (isMuted) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, audioCtx.currentTime); // high freq
      
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime); // extremely quiet
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  },

  playClick: () => {
    if (isMuted) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(600, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.1);
      
      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  },

  playThemeChange: () => {
    if (isMuted) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(300, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, audioCtx.currentTime + 0.3);
      
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  },

  playSuccess: () => {
    if (isMuted) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (chord arpeggio)
      
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.setValueAtTime(0.04, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.3);
      });
    } catch (e) {
      console.warn("Audio error:", e);
    }
  },

  playError: () => {
    if (isMuted) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(120, audioCtx.currentTime);
      
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }
};
