import Tone, {
  CtrlMarkov,
  DuoSynth,
  Event,
  Reverb,
  Time,
  Transport,
  Gain,
} from 'tone'

const melody = ['G#4', 'D#5', 'C#5', 'C5', 'C6']
const drone = ['G#2', 'G#3', 'C4', 'C#4', 'D#4']
const voices = {}
const volume = new Gain()
const ambient = new Reverb(30).chain(volume, Tone.Master)
ambient.wet.value = 0.63

const melodyVoice = {
  envelope: {
    attack: 0.07,
    decay: 0.3,
    sustain: 0.4,
    release: 10,
  },
}

const melodySynth = {
  vibratoAmount: 0.3,
  vibratoRate: 0.2,
  harmonicity: 1.005,
  voice0: melodyVoice,
  voice1: melodyVoice,
}

melody.forEach((item) => {
  voices[item] = new DuoSynth(melodySynth)
  voices[item].voice0.detune.value = 10
  voices[item].voice1.detune.value = -12
  voices[item].connect(ambient)
})

const droneVoice = {
  envelope: {
    attack: 3,
    decay: 1,
    sustain: 1,
    release: 20,
  },
  filterEnvelope: {
    attack: 1,
    decay: 0,
    sustain: 1,
    release: 2,
    baseFrequency: 100,
    octaves: 2.2,
    exponent: 2,
  },
  filter: {
    Q: 8,
    type: 'lowpass',
    rolloff: -24,
  },
  oscillator: {
    type: 'fatsquare',
  },
}

const droneSynth = {
  vibratoAmount: 0.001,
  vibratoRate: 1,
  harmonicity: 1.01,
  voice0: droneVoice,
  voice1: droneVoice,
}

drone.forEach((item, index) => {
  voices[item] = new DuoSynth(droneSynth)
  voices[item].volume.value = -27 + index * 1.6
  voices[item].connect(ambient)
})

const chain = new CtrlMarkov({
  [melody[0]]: [
    { value: melody[1], probability: 0.5 },
    { value: melody[2], probability: 0.4 },
    { value: melody[3], probability: 0.3 },
    { value: melody[4], probability: 0.2 },
  ],
  [melody[1]]: [
    { value: melody[0], probability: 0.4 },
    { value: melody[2], probability: 0.5 },
    { value: melody[3], probability: 0.3 },
    { value: melody[4], probability: 0.2 },
  ],
  [melody[2]]: [
    { value: melody[0], probability: 0.3 },
    { value: melody[1], probability: 0.2 },
    { value: melody[3], probability: 0.5 },
    { value: melody[4], probability: 0.4 },
  ],
  [melody[3]]: [
    { value: melody[0], probability: 0.4 },
    { value: melody[1], probability: 0.3 },
    { value: melody[2], probability: 0.2 },
    { value: melody[4], probability: 0.5 },
  ],
  [melody[4]]: melody.slice(0, 4),
})

chain.value = melody[0]

const playMelody = () => {
  voices[chain.value].triggerAttackRelease(
    chain.value,
    Math.random() * 0.6 + 0.1
  )
  chain.value = chain.next()
  new Event(playMelody).start(Tone.now() + Math.random() * 5 + 2)
}

const playDroneMelody = () => {
  const release = 5 + Math.random() * 8
  const voice = drone[Math.random() < 0.5 ? 3 : 4]
  voices[voice].triggerAttackRelease(voice, release)
  new Event(playDroneMelody).start(Tone.now() + release + Math.random() * 5)
}

const fader2Gain = (value, velocity) =>
  Math.pow(Math.E, velocity * (value - 1)) * value

window.onload = () =>
  (document.getElementById('play').onclick = async () => {
    await Tone.start()
    document.getElementById('controls').innerHTML =
      '<input type="range" id="volume" min="0" max="1" step="0.01" value="1" />'
    document.getElementById('volume').oninput = (e) => {
      volume.gain.value = fader2Gain(e.target.value, -1)
    }
    await ambient.generate()
    Transport.start()
    new Event(playMelody).start(Tone.now() + 5)
    new Event(playDroneMelody).start(Tone.now() + 2)
    drone.slice(0, 3).forEach((voice) => {
      voices[voice].triggerAttack(voice)
    })
  })
