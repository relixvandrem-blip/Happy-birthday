/**
 * ============================================================================
 * A BIRTHDAY BY THE SEA - ARTISAN INTERACTIVE ENGINE
 * ============================================================================
 * Flow:
 * LANDING -> PUZZLE -> MAKE A WISH -> EXTINGUISH CANDLES -> CUT THE CAKE
 * -> SEASONS MUSIC STARTS -> REALISTIC PHOTO RAIN -> LONG TEXT / LETTER
 * -> VOICE NOTE -> FINAL ENDING
 */

// ============================================================================
// 1. CONFIGURATION - EASILY CUSTOMIZE HERE
// ============================================================================
export const CONFIG = {
  partnerName: "Dear bebyyy acuu", // Ganti dengan nama pacar Anda
  birthdayMessage: "Happy Birthday",
  seasonsVolume: 0.8,
  voiceMusicVolume: 0.2,
  audioSeasons: "./assets/audio/To the bone.mp3",
  audioVoiceNote: "./assets/audio/voice-note.mp3",
  puzzleImage: "./assets/images/puzzle.jpeg",
  photos: [
    "./assets/images/photo1.jpeg",
    "./assets/images/photo2.jpeg",
    "./assets/images/photo3.jpeg",
    "./assets/images/photo4.jpeg"
]
};

export const letterPages = [
  "aiaiaiaiaiaiaiaiaiaii hiiiiiiii kayaknya ada yang ulang tahun nihh, siapa nyak, siapanyakk siapa lagih kalau bukan CUMAALAAA AKUH, DUNIAH AKUH MUAH MUAH NANANANA AHAHAHHAHA( blee ) imut kucing👅👅 \n\n AHAHAHAHA MATTT ULANG TAHUNNNNNNN CUMAALAAA AKUUUUHHHHH YANG IMUD DAN MENGGEMASKAN IMNIH AKAKAKAA👅👅👺👺🥳🥳🥳🥳🥳🥳🥳🥳 Heppy herday tu youuuuuuuuuuuuuuuu asiaiaiskaiak putung kue jam 00 anjay🥰🥰🥰 \n\n cieee udaa umur 15 ajah kemarin perasaan baru 14 😭 sekrang Uda lima belas aja yah ga kerasah yah sekrang waktu begitu cefat bocil aku udah mau besa serkang, tapi tapi walaupun kmu suda besa, tapi kmu tetep kecil di akuh✌🏻",
  "tetap jadi bocil aku yah, jangan pelna berubah yahh, eumm mungkin masala kemarin yang sempat buad kmu bingung ma aku terus akuna juga buad kmu berubah,yang tadina ngambek gara gara masala kecil sekrang Uda ndaa.. mamaff bangetttt😭🥹 \n\n aku nda mau kau beluba pisss, aku Sukak kmu yang bawel, apa apa bilang ma aku cerita ma aku Sukak ganjen ma aku kdang stres juga tapi nda papa itu aku Sukak kebahagiaan aku kalau kmu ikut senang.., iyyah mungkin aku Masi nakal brengsek tapi emang Iyya yah..👀✌🏻 \n\n Iyyasi aku emang belengsek aku bikin kau kesal terus sampai sampai kmu cuekin aku kdang sehali dua hali sialan🥰😭 \n\n mamaf juga yah aku belum bisa jadi apa yang kau mau ituh (peka) sebenalna aku pernah kaya Olang Olang tapi aku gimana yah jelasinna canggung begitula pokokna, tapi aku ushaian ko nanti aku bakal peka ma kmu lebih dari apa yang aku syang andai kmu lihat ati aku imnih, aku ada dua belahan 💔 satu kmu satu ibu aku anjaii, eh Masi ada kucing sih tapi gamau ah, nakal",
  "pokokna ma angan pernah belubaa yahh🥹 jadi dili kmu sendiri.., jangan ikut atau Denga kata Olang lain👊🏻🫂🫂 \n\n terus jangan nangis terus yahh aku gamau kmu sediii terus, terus nda semnyum lagi, aku Mauna kmu jadi olang yang celia Sepanjang masa, inget yah kmu punya akuh, kmu bole ngadu ketika dunia kmu lagi jahat atau apapun itu🫂🫂 \n\n semuga di umur yang suda 15 imnih semuga kmu nda anyak sedinya lagi, semuga kebahagiaan menyertai kmu selalu apapun betukna imtuh🙂‍↕️🥰 ",
  "terus inmnih satu lagih JAGA KESEHATAN NAA   aku nda mau liat kmuh sakit terus aaaa aaa aa, aku khawatir kalau kmu sakit terus nanti kaya kemrin sampe bawa UKS, aku kan takud kmu kenapa napa pingsan atau apa nanti di bawa kerumah sakit iiiiiiii III III KETUMU DOKTEL JAHAT III mending aku jadi doktelnya, eee ehehe POKOKNA JAFA KESEHATAN AAA JANGAN MINUM ES TERUS kmu tahu badan kmu kan cengeng sama aku juga si, jalang jalang minum es na imtuh tahan selari tanpa matcha bisa nda 👊🏻👊🏻👊🏻 terus juga mam na imnih masih Sukak nda mam sehari ko bisa yah👊🏻 sehari harus mam to gapapa walaupun dikit yang penting mam na ke isi perut kau, nanti kalau sakit perut gimana Ama itu di tambah pms iaiiaaai apa nda kesakitan kau👊🏻 \n\n naa kan sekarang suda besal nih harus bisa jaga kesehatan okeiii biar nda sakidd, masa mau sakid terus sakit kan nda enak apa lagi demam HIEKKK, jadi serkang harus bisa okei kalau nda bisa nanti aku turun tangan iminhh😠🥰( jujur gabisa mara ) \n\n eumm eum aumm eumm mamaf yah aku belum bisa kasi apa apa ke kmuhh..,aku cuma bisa doain kmu dari jauh elum bisa ketemuh kmu belum bisa beli kue buad kmu nda bisa main Deket ma kmu semua mukana elum bisa..,III IIII II lagian rumah jauh jauh bisa ga si rumah sejengkal dari rumah aku👅👅 biar bisa main👅👅,eee aku stres nda soalana aku ngetik kaya sendiri sambil senyum' wajar nda jam kusung' 00.00 imnih iiii TAKUDDD 😭tapi aku Uda nda takud setan sih tapi.. aku lebih takut ada ibu tiba tiba 😃✌🏻",
  "doain aku juga to biar cefat dapat izin ibu buad ketemuh kau asiakaiaiisisk ayah ma suda kakak mah bumat tinggal ibu ini iaiaiaaiia stres aku lama lama nda ole terus, tapi tapi aku ushaian koo😃👊🏻tenang ajah pasti kita bisaakkk bisakkkk bisakkkk bersamah anjaii slbeww👅 doain yah aminn🙂‍↕️ \n\n naaa terakhir imnih, semugaaa kmuu di sehatkan terus panjang umurnaa anyak rejeki na biar bisa jajan terusss😃👅 \n\n terus aku mau terima kasih juga buad kmu, kmu Masi kuad banget ngadepin aku yang kaya gini🥹 padahal aku udaa anyak kali sala ma kmu sering buad kmu mara betmud dan lain lain😃😭 \n\n terus makasi jugaa kmu Uda pilih aku walaupun banyak yang mwu ma kmu, hiii makasiiiiiiiiiii aaaa hiii aaaa hiii aaamakasii🥹🫰🏻tetap ma aku terus yah🫂🫂 aku yakin kmu nda cari orang lain selain aku,aku percaya ma kmuuu👅👅 tidak di sangka' kita Masi bisa bertahan yaa walaupun anyak masalahnya si, tapi aku yakin kita bisa lewatin semuana nanti sampe kita bersama 👉🏻👈🏻 JANJIHHHHHH",
  "SEKALI LAGIII SELAMAT ULANG TAHUNNNNNNN YAHHHHHHHHHHHHHHH👏👏👏🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳 tiup lilin na tiup linana sekrang juga... IYYEYEYYYYYYYY mat ulang tahun cantikkk👉🏻👈🏻 \n\n nanti kapan kapan aku kasi supres kalau Uda bisa ketemu kmuh, aku kasi suprise yang sangat SANGAT besaa, apapun itu liad aja, bisa jadi buket bunga Segede rumah😃🥰 AAHAHAHHAHA \n\n udahh yah itu aja pesan dari aku yang penting kmu jaga kesehatan nyaa yah🥺 jangan sakit sakit terus yahh, terus kalau ada apa apa ngadu aja to, kalau kmu di sakitin ma temen kau atau apapun itu aduin aja okei😃👊🏻👊🏻 aku ada eii santai, kmu jangan kode kode lagih langsung ajah bilang ma aku kalau kmu butuh 🥰 aku aja nda bisa tanpa kau😃 okeii yayayaya janjih yahh janjjihh okeii🫰🏻 \n\n eh bitiwii jadi dewasa itu nda enak loo🤧jadi anak kecil ajahh, bocil😃👅 ada laguna macam ni 'aku sudah dewasa aku sudah kecewa..' HIIIIII jangan yah jadi bocil aku aja😃🫰🏻 suda suda nanti kau bacanya bosen lagi gara gara kebanyakan 😃 anjai"
];

export const photoCaptions = [
  "One of my favorite memories with you.",
  "Every sunset is warmer by your side.",
  "The sea reminds me of your gentle smile.",
  "Thank you for being part of my story.",
  "Setiap detik bersamamu adalah kenangan terindah."
];

// ============================================================================
// 2. AUDIO MANAGER (With Smooth Volume Ducking & Web Audio Fallback)
// ============================================================================
class AudioManager {
  constructor() {
    this.seasonsAudio = new Audio(CONFIG.audioSeasons);
    this.seasonsAudio.loop = true;
    this.seasonsAudio.volume = CONFIG.seasonsVolume;

    this.voiceAudio = new Audio(CONFIG.audioVoiceNote);
    this.voiceAudio.volume = 1.0;

    this.isSeasonsPlaying = false;
    this.isVoicePlaying = false;
    this.fadeInterval = null;
    this.audioCtx = null;

    this.initEvents();
  }

  initAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
  }

  initEvents() {
    this.voiceAudio.addEventListener('ended', () => {
      this.isVoicePlaying = false;
      this.updateVoiceUI();
      // Smoothly restore Seasons music back to full configured volume
      this.fadeSeasonsVolume(CONFIG.seasonsVolume, 1200);
      const nextBtn = document.getElementById('btn-voice-finish');
      if (nextBtn) nextBtn.style.display = 'inline-flex';
    });

    this.voiceAudio.addEventListener('timeupdate', () => {
      const progress = document.getElementById('voice-progress-fill');
      const timeDisplay = document.getElementById('voice-time-text');
      if (this.voiceAudio.duration) {
        const pct = (this.voiceAudio.currentTime / this.voiceAudio.duration) * 100;
        if (progress) progress.style.width = `${pct}%`;
        if (timeDisplay) {
          const cur = this.formatTime(this.voiceAudio.currentTime);
          const dur = this.formatTime(this.voiceAudio.duration);
          timeDisplay.textContent = `${cur} / ${dur}`;
        }
      }
    });
  }

  formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  playSeasons() {
    this.initAudioContext();
    this.seasonsAudio.volume = CONFIG.seasonsVolume;
    const playPromise = this.seasonsAudio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isSeasonsPlaying = true;
          this.updateFloatingMusicUI();
        })
        .catch(err => {
          console.warn('Seasons audio play fallback:', err);
          this.isSeasonsPlaying = true;
          this.updateFloatingMusicUI();
        });
    }
  }

  pauseSeasons() {
    this.seasonsAudio.pause();
    this.isSeasonsPlaying = false;
    this.updateFloatingMusicUI();
  }

  toggleSeasons() {
    if (this.isSeasonsPlaying) {
      this.pauseSeasons();
    } else {
      this.playSeasons();
    }
  }

  playSliceSound() {
    try {
      this.initAudioContext();
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(620, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, this.audioCtx.currentTime + 0.28);
      gain.gain.setValueAtTime(0.35, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.28);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.28);
    } catch (e) {
      // Audio fallback
    }
  }

  fadeSeasonsVolume(targetVolume, durationMs) {
    if (this.fadeInterval) clearInterval(this.fadeInterval);
    const startVolume = this.seasonsAudio.volume;
    const steps = 20;
    const stepTime = durationMs / steps;
    let step = 0;

    this.fadeInterval = setInterval(() => {
      step++;
      const current = startVolume + (targetVolume - startVolume) * (step / steps);
      this.seasonsAudio.volume = Math.max(0, Math.min(1, current));
      if (step >= steps) {
        clearInterval(this.fadeInterval);
        this.seasonsAudio.volume = targetVolume;
      }
    }, stepTime);
  }

  toggleVoiceNote() {
    this.initAudioContext();
    if (this.isVoicePlaying) {
      this.voiceAudio.pause();
      this.isVoicePlaying = false;
    } else {
      // Duck Seasons volume to 20%
      this.fadeSeasonsVolume(CONFIG.voiceMusicVolume, 800);
      const voicePromise = this.voiceAudio.play();
      if (voicePromise !== undefined) {
        voicePromise
          .then(() => {
            this.isVoicePlaying = true;
          })
          .catch(e => {
            console.warn('Voice play issue fallback:', e);
            this.isVoicePlaying = true;
            setTimeout(() => {
              this.isVoicePlaying = false;
              this.updateVoiceUI();
              this.fadeSeasonsVolume(CONFIG.seasonsVolume, 1200);
              const nextBtn = document.getElementById('btn-voice-finish');
              if (nextBtn) nextBtn.style.display = 'inline-flex';
            }, 6000);
          });
      }
    }
    this.updateVoiceUI();
  }

  updateVoiceUI() {
    const playIcon = document.getElementById('voice-play-icon');
    const pauseIcon = document.getElementById('voice-pause-icon');
    const bars = document.querySelectorAll('.voice-bar');

    if (this.isVoicePlaying) {
      if (playIcon) playIcon.style.display = 'none';
      if (pauseIcon) pauseIcon.style.display = 'block';
      bars.forEach(b => b.classList.add('active'));
    } else {
      if (playIcon) playIcon.style.display = 'block';
      if (pauseIcon) pauseIcon.style.display = 'none';
      bars.forEach(b => b.classList.remove('active'));
    }
  }

  updateFloatingMusicUI() {
    const disc = document.querySelector('.music-disc');
    const text = document.getElementById('music-btn-text');
    if (disc) {
      if (this.isSeasonsPlaying) {
        disc.classList.add('playing');
        if (text) text.textContent = 'Playing: To The Bone';
      } else {
        disc.classList.remove('playing');
        if (text) text.textContent = 'Music: Paused';
      }
    }
  }
}

const audioManager = new AudioManager();

// ============================================================================
// 3. AMBIENT SEA PARTICLES & REALISTIC RAIN ENGINE
// ============================================================================
class ParticleCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.width = 0;
    this.height = 0;
    this.running = true;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initParticles();
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    const count = Math.min(45, Math.floor(window.innerWidth / 20));
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2.2 + 0.6,
        alpha: Math.random() * 0.7 + 0.2,
        speedY: Math.random() * 0.4 + 0.15,
        speedX: (Math.random() - 0.5) * 0.3,
        glow: Math.random() > 0.5
      });
    }
  }

  loop() {
    if (!this.running || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y -= p.speedY;
      p.x += p.speedX;

      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      if (p.glow) {
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = 'rgba(254, 240, 138, 0.7)';
      } else {
        this.ctx.shadowBlur = 0;
      }
      this.ctx.fill();
    }

    requestAnimationFrame(this.loop);
  }

  burst(x, y, count = 30) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1.5;
      this.particles.push({
        x: x || this.width / 2,
        y: y || this.height / 2,
        radius: Math.random() * 3 + 1,
        alpha: 1,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        glow: true
      });
    }
  }
}

class RealisticRainCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.drops = [];
    this.splashes = [];
    this.active = false;
    this.width = 0;
    this.height = 0;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.loop = this.loop.bind(this);
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  start() {
    this.active = true;
    this.drops = [];
    this.splashes = [];
    const count = Math.min(120, Math.floor(window.innerWidth / 8));
    for (let i = 0; i < count; i++) {
      this.drops.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        len: Math.random() * 20 + 12,
        speed: Math.random() * 8 + 14,
        alpha: Math.random() * 0.45 + 0.2,
        width: Math.random() * 1.4 + 0.6
      });
    }
    requestAnimationFrame(this.loop);
  }

  stop() {
    this.active = false;
    if (this.ctx) this.ctx.clearRect(0, 0, this.width, this.height);
  }

  loop() {
    if (!this.active || !this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw rain streaks
    this.ctx.strokeStyle = 'rgba(224, 242, 254, 0.4)';
    this.ctx.lineCap = 'round';

    for (let i = 0; i < this.drops.length; i++) {
      const d = this.drops[i];
      d.y += d.speed;
      d.x += 1.5; // gentle diagonal sea wind

      if (d.y > this.height) {
        // Create splash on ocean surface
        if (Math.random() > 0.4) {
          this.splashes.push({
            x: d.x,
            y: this.height - Math.random() * 30,
            radius: 1,
            maxRadius: Math.random() * 8 + 4,
            alpha: 0.6
          });
        }
        d.y = -d.len;
        d.x = Math.random() * this.width;
      }

      this.ctx.lineWidth = d.width;
      this.ctx.strokeStyle = `rgba(224, 242, 254, ${d.alpha})`;
      this.ctx.beginPath();
      this.ctx.moveTo(d.x, d.y);
      this.ctx.lineTo(d.x + 2, d.y + d.len);
      this.ctx.stroke();
    }

    // Draw ripples/splashes
    for (let i = this.splashes.length - 1; i >= 0; i--) {
      const s = this.splashes[i];
      s.radius += 0.8;
      s.alpha -= 0.04;
      if (s.alpha <= 0) {
        this.splashes.splice(i, 1);
        continue;
      }
      this.ctx.strokeStyle = `rgba(255, 255, 255, ${s.alpha})`;
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.ellipse(s.x, s.y, s.radius, s.radius * 0.35, 0, 0, Math.PI * 2);
      this.ctx.stroke();
    }

    requestAnimationFrame(this.loop);
  }
}

let particleSys;
let rainSys;

// ============================================================================
// 4. STAGE CONTROLLER & TRANSITIONS
// ============================================================================
const stages = [
  'stage-landing',
  'stage-wish',
  'stage-cake',
  'stage-photo-rain',
  'stage-letter',
  'stage-voice',
  'stage-ending'
];

let currentStageIndex = 0;

function switchStage(stageId, newMood = null) {
  const currentStageEl = document.querySelector('.stage-section.active');
  const nextStageEl = document.getElementById(stageId);
  const viewport = document.getElementById('scene-viewport');

  if (currentStageEl) {
    currentStageEl.classList.remove('active');
  }

  if (newMood && viewport) {
    viewport.className = '';
    viewport.classList.add(newMood);
  }

  setTimeout(() => {
    if (nextStageEl) {
      nextStageEl.classList.add('active');
      currentStageIndex = stages.indexOf(stageId);
    }
  }, 350);
}

// ============================================================================
// 5. BULLETPROOF NATIVE CSS PUZZLE (Drag-and-Drop + Tap-to-Swap + Numbers)
// ============================================================================
class SeasidePuzzle {
  constructor() {
    this.boardEl = document.getElementById('puzzle-board');
    this.statusEl = document.getElementById('puzzle-status');
    this.progressBar = document.getElementById('puzzle-progress-bar');
    this.previewCard = document.getElementById('puzzle-preview-card');
    this.gridSize = 3; // 3x3 = 9 pieces
    this.totalPieces = 9;
    this.showNumbers = false;
    this.selectedPieceIndex = null;
    this.draggedSlotIdx = null;

    // Scramble order
    this.currentOrder = [4, 7, 0, 8, 2, 5, 1, 6, 3];
    this.initControls();
    this.render();
  }

  initControls() {
    const previewBtn = document.getElementById('btn-toggle-preview');
    if (previewBtn && this.previewCard) {
      previewBtn.addEventListener('click', () => {
        const isHidden = this.previewCard.style.display === 'none';
        this.previewCard.style.display = isHidden ? 'flex' : 'none';
      });
      // Click outside preview card to close
      this.previewCard.addEventListener('click', () => {
        this.previewCard.style.display = 'none';
      });
    }

    const numbersBtn = document.getElementById('btn-toggle-numbers');
    if (numbersBtn) {
      numbersBtn.addEventListener('click', () => {
        this.showNumbers = !this.showNumbers;
        numbersBtn.textContent = this.showNumbers ? '🔢 Sembunyi Nomor' : '🔢 Nomor Bantuan';
        this.render();
      });
    }
  }

  render() {
    if (!this.boardEl) return;
    this.boardEl.innerHTML = '';

    const correctCount = this.getCorrectCount();
    if (this.statusEl) {
      this.statusEl.textContent = `Tersusun: ${correctCount} / ${this.totalPieces}`;
    }
    if (this.progressBar) {
      this.progressBar.style.width = `${(correctCount / this.totalPieces) * 100}%`;
    }

    if (correctCount >= this.totalPieces - 2) {
      this.boardEl.classList.add('almost-done');
    } else {
      this.boardEl.classList.remove('almost-done');
    }

    this.currentOrder.forEach((originalPieceIdx, currentSlotIdx) => {
      const slot = document.createElement('div');
      slot.className = 'puzzle-slot';
      slot.dataset.slotIndex = currentSlotIdx;
      slot.setAttribute('draggable', 'true');

      // Native, flawless background positioning
      const col = originalPieceIdx % this.gridSize;
      const row = Math.floor(originalPieceIdx / this.gridSize);
      slot.style.backgroundImage = `url('${CONFIG.puzzleImage}')`;
      slot.style.backgroundSize = '300% 300%';
      slot.style.backgroundPosition = `${col * 50}% ${row * 50}%`;

      if (originalPieceIdx === currentSlotIdx) {
        slot.classList.add('correct');
      }

      if (this.selectedPieceIndex === currentSlotIdx) {
        slot.classList.add('selected');
      }

      // Optional number badge
      if (this.showNumbers) {
        const badge = document.createElement('span');
        badge.className = 'puzzle-hint-badge';
        badge.textContent = String(originalPieceIdx + 1);
        slot.appendChild(badge);
      }

      // Tap to select / swap
      slot.addEventListener('click', () => this.handleSlotClick(currentSlotIdx));

      // Drag and Drop (Mouse)
      slot.addEventListener('dragstart', (e) => {
        this.draggedSlotIdx = currentSlotIdx;
        e.dataTransfer.setData('text/plain', String(currentSlotIdx));
      });
      slot.addEventListener('dragover', (e) => e.preventDefault());
      slot.addEventListener('drop', (e) => {
        e.preventDefault();
        const fromIdx = this.draggedSlotIdx;
        const toIdx = currentSlotIdx;
        if (fromIdx !== null && fromIdx !== toIdx) {
          this.swapPieces(fromIdx, toIdx);
        }
        this.draggedSlotIdx = null;
      });

      // Touch Drag support for Mobile
      slot.addEventListener('touchstart', (e) => {
        this.touchStartIdx = currentSlotIdx;
      }, { passive: true });

      slot.addEventListener('touchend', (e) => {
        const touch = e.changedTouches[0];
        const targetEl = document.elementFromPoint(touch.clientX, touch.clientY);
        if (targetEl && targetEl.closest('.puzzle-slot')) {
          const targetSlot = targetEl.closest('.puzzle-slot');
          const targetIdx = parseInt(targetSlot.dataset.slotIndex, 10);
          if (this.touchStartIdx !== null && targetIdx !== this.touchStartIdx) {
            this.swapPieces(this.touchStartIdx, targetIdx);
          }
        }
      });

      this.boardEl.appendChild(slot);
    });
  }

  handleSlotClick(slotIdx) {
    if (this.selectedPieceIndex === null) {
      this.selectedPieceIndex = slotIdx;
      this.render();
    } else if (this.selectedPieceIndex === slotIdx) {
      this.selectedPieceIndex = null;
      this.render();
    } else {
      const from = this.selectedPieceIndex;
      const to = slotIdx;
      this.selectedPieceIndex = null;
      this.swapPieces(from, to);
    }
  }

  swapPieces(from, to) {
    [this.currentOrder[from], this.currentOrder[to]] = [this.currentOrder[to], this.currentOrder[from]];
    this.render();

    // Feedback shake if moved into incorrect spot
    if (this.currentOrder[to] !== to && this.boardEl) {
      const slotEl = this.boardEl.querySelector(`[data-slot-index="${to}"]`);
      if (slotEl) {
        slotEl.classList.add('shake');
        setTimeout(() => slotEl.classList.remove('shake'), 400);
      }
    }

    if (this.checkSolved()) {
      this.onCompleted();
    }
  }

  getCorrectCount() {
    return this.currentOrder.filter((val, idx) => val === idx).length;
  }

  checkSolved() {
    return this.currentOrder.every((val, idx) => val === idx);
  }

  solve() {
    this.currentOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.render();
    this.onCompleted();
  }

  onCompleted() {
    if (this.statusEl) {
      this.statusEl.textContent = 'You found it... ✨';
    }
    if (this.progressBar) {
      this.progressBar.style.width = '100%';
    }
    this.boardEl.classList.add('almost-done');

    // Confetti burst
    if (particleSys) {
      particleSys.burst(window.innerWidth / 2, window.innerHeight / 2, 70);
    }

    const banner = document.getElementById('puzzle-complete-banner');
    if (banner) {
      banner.style.display = 'block';
    }

    // Immediately autoplay background music right after puzzle is solved!
    audioManager.playSeasons();
    const musicBtn = document.getElementById('floating-music-btn');
    if (musicBtn) {
      musicBtn.style.display = 'flex';
    }

    setTimeout(() => {
      // Transition to Make a Wish with sunset mood
      switchStage('stage-wish', 'mood-sunset');
    }, 1800);
  }
}

// ============================================================================
// 6. MAKE A WISH & INTERACTIVE CANDLES (Curved Arc of Candles on Cake)
// ============================================================================
class WishCandles {
  constructor() {
    this.candles = [
      { id: 'candle-1', extinguished: false },
      { id: 'candle-2', extinguished: false },
      { id: 'candle-3', extinguished: false },
      { id: 'candle-4', extinguished: false },
      { id: 'candle-5', extinguished: false }
    ];
    this.initCandles();
  }

  initCandles() {
    this.candles.forEach(c => {
      const el = document.getElementById(c.id);
      if (el) {
        el.addEventListener('click', () => this.extinguish(c.id));
        el.addEventListener('touchstart', (e) => {
          e.preventDefault();
          this.extinguish(c.id);
        });
      }
    });

    const blowBtn = document.getElementById('btn-blow-candles');
    if (blowBtn) {
      blowBtn.addEventListener('click', () => this.blowAll());
    }
  }

  extinguish(candleId) {
    const candle = this.candles.find(c => c.id === candleId);
    if (!candle || candle.extinguished) return;

    candle.extinguished = true;
    const el = document.getElementById(candleId);
    if (el) {
      el.classList.add('extinguished');
    }

    if (particleSys) {
      const rect = el ? el.getBoundingClientRect() : null;
      if (rect) {
        particleSys.burst(rect.left + rect.width / 2, rect.top, 14);
      }
    }

    if (this.candles.every(c => c.extinguished)) {
      this.onAllExtinguished();
    }
  }

  blowAll() {
    this.candles.forEach((c, idx) => {
      setTimeout(() => {
        this.extinguish(c.id);
      }, idx * 250);
    });
  }

  onAllExtinguished() {
    const subtitle = document.getElementById('wish-subtitle');
    if (subtitle) {
      subtitle.textContent = 'Your wish has been made... ✨';
    }

    const viewport = document.getElementById('scene-viewport');
    if (viewport) {
      viewport.style.filter = 'brightness(0.92)';
    }

    setTimeout(() => {
      if (viewport) viewport.style.filter = '';
      // Move to Cut The Cake stage
      switchStage('stage-cake', 'mood-sunset');
      initCakeCutting();
    }, 1800);
  }
}

// ============================================================================
// 7. CUT THE CAKE WITH ORNATE CELEBRATION KNIFE (TOP-DOWN PIZZA SLICE CUT)
// ============================================================================
function initCakeCutting() {
  const knife = document.getElementById('virtual-knife');
  const cakeScene = document.querySelector('.topdown-cake-scene');
  const pizzaSlice = document.getElementById('pizza-slice-wedge');
  const sliceBtn = document.getElementById('btn-slice-cake');
  const sliceBanner = document.getElementById('cake-slice-banner');
  const instruction = document.getElementById('cake-cut-instruction');
  let isDragging = false;
  let hasCut = false;

  if (knife) knife.classList.add('active');

  function performCut() {
    if (hasCut) return;
    hasCut = true;

    // Play crisp cake slicing sound
    audioManager.playSliceSound();

    if (knife) {
      knife.style.transform = 'translate(-35px, 55px) rotate(16deg)';
      setTimeout(() => { knife.style.opacity = '0'; }, 320);
    }

    if (cakeScene) {
      cakeScene.classList.add('cut');
    }

    if (sliceBanner) {
      sliceBanner.style.display = 'block';
    }

    if (instruction) {
      instruction.textContent = 'Kue ulang tahunmu telah terpotong manis... ✨';
    }

    // Sparkle burst & crumbs right at the pizza slice location
    if (particleSys) {
      const rect = pizzaSlice ? pizzaSlice.getBoundingClientRect() : null;
      const cx = rect ? rect.left + rect.width / 2 : window.innerWidth / 2 + 35;
      const cy = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
      particleSys.burst(cx, cy, 65);
    }

    // Ensure music is playing if not already started
    if (!audioManager.isSeasonsPlaying) {
      audioManager.playSeasons();
    }
    const musicBtn = document.getElementById('floating-music-btn');
    if (musicBtn) {
      musicBtn.style.display = 'flex';
    }

    // Bloom flash and transition to Realistic Photo Rain
    setTimeout(() => {
      const bloom = document.getElementById('bloom-flash');
      if (bloom) {
        bloom.classList.add('active');
        setTimeout(() => {
          bloom.classList.remove('active');
          switchStage('stage-photo-rain', 'mood-twilight');
          startRealisticPhotoRain();
        }, 800);
      } else {
        switchStage('stage-photo-rain', 'mood-twilight');
        startRealisticPhotoRain();
      }
    }, 1800);
  }

  // Tap directly on the pizza slice to cut it
  if (pizzaSlice) {
    pizzaSlice.addEventListener('click', performCut);
    pizzaSlice.addEventListener('touchend', (e) => {
      e.preventDefault();
      performCut();
    });
  }

  // Pointer drag for luxury cake knife
  if (knife) {
    let startY = 0;
    let startX = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    };

    const onPointerMove = (e) => {
      if (!isDragging || hasCut) return;
      if (e.cancelable) e.preventDefault();
      const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const currentY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      const distance = Math.hypot(deltaX, deltaY);

      if (distance > 15) {
        knife.style.transform = `translate(${deltaX * 0.4}px, ${deltaY * 0.6}px) rotate(${38 - distance * 0.25}deg)`;
      }

      if (distance > 55) {
        isDragging = false;
        performCut();
      }
    };

    const onPointerUp = () => {
      if (isDragging && !hasCut) {
        isDragging = false;
        knife.style.transform = 'rotate(38deg)';
      }
    };

    knife.addEventListener('mousedown', onPointerDown);
    knife.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);
  }

  if (sliceBtn) {
    sliceBtn.addEventListener('click', performCut);
    sliceBtn.addEventListener('touchend', (e) => {
      e.preventDefault();
      performCut();
    });
  }
}

// ============================================================================
// 8. REALISTIC PHOTO RAIN (Ambient Rain Streaks + Multi-Depth Memories)
// ============================================================================
// ============================================================================
// 8. REALISTIC PHOTO RAIN (Full-Width Distributed Continuous Memory Rainfall)
// ============================================================================
let photoRainInterval = null;
let activePolaroids = [];

function startRealisticPhotoRain() {
  const container = document.getElementById('photo-rain-layer');
  if (!container) return;
  container.innerHTML = '';
  activePolaroids = [];

  // Start realistic rain streaks canvas
  if (rainSys) {
    rainSys.start();
  }

  const photosList = CONFIG.photos;
  let photoIndex = 0;

  // 5 Distributed Screen Lanes across the full screen width
  // Ensures photos fall across left, center-left, center, center-right, right!
  const totalLanes = 5;
  let availableLanes = [];

  function getNextLane() {
    if (availableLanes.length === 0) {
      // Shuffle lanes [0, 1, 2, 3, 4] so adjacent spawns never cluster
      const lanes = [0, 1, 2, 3, 4];
      for (let i = lanes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lanes[i], lanes[j]] = [lanes[j], lanes[i]];
      }
      availableLanes = lanes;
    }
    return availableLanes.pop();
  }

  function calculateXForLane(laneIndex, cardWidth) {
    const screenWidth = window.innerWidth;
    const laneWidth = (screenWidth - cardWidth) / totalLanes;
    // Base X for the lane + randomized organic jitter
    const minX = laneIndex * laneWidth + 10;
    const jitter = (Math.random() - 0.5) * (laneWidth * 0.45);
    const x = Math.max(8, Math.min(screenWidth - cardWidth - 8, minX + jitter));
    return x;
  }

  function spawnPolaroid(startY = null) {
    // Keep max 7 active polaroids for silky performance and clear screen
    if (activePolaroids.length >= 7) return;

    const photoSrc = photosList[photoIndex % photosList.length];
    const caption = photoCaptions[photoIndex % photoCaptions.length];
    photoIndex++;

    const item = document.createElement('div');
    item.className = 'polaroid-item';

    // Layer depth: 0=distant (small & faster), 1=mid, 2=foreground
    const depth = Math.floor(Math.random() * 3);
    let cardWidth = 175;
    if (depth === 0) {
      item.classList.add('layer-distant');
      cardWidth = 115;
    } else if (depth === 1) {
      item.classList.add('layer-mid');
      cardWidth = 145;
    } else {
      item.classList.add('layer-fore');
      cardWidth = 175;
    }

    const lane = getNextLane();
    const x = calculateXForLane(lane, cardWidth);
    const y = startY !== null ? startY : -cardWidth - 60;

    const baseRotation = (Math.random() * 12 - 6).toFixed(1);
    const tapeRot = (Math.random() * 14 - 7).toFixed(1);
    // Smooth, gentle falling speed per depth
    const speed = depth === 0 ? Math.random() * 0.35 + 0.95 : depth === 1 ? Math.random() * 0.3 + 0.8 : Math.random() * 0.25 + 0.65;

    item.innerHTML = `
      <div class="washi-tape-strip" style="transform: translateX(-50%) rotate(${tapeRot}deg);"></div>
      <div class="polaroid-img-wrap">
        <img src="${photoSrc}" alt="Memory" loading="lazy" />
      </div>
      <div class="polaroid-caption">${caption}</div>
    `;

    container.appendChild(item);
    animateFalling(item, x, y, speed, baseRotation, depth);

    // Interactive Tap / Click to Pause & Spotlight memory (Desktop & Mobile)
    let lastTapTime = 0;
    const handleTap = (e) => {
      e.stopPropagation();
      const now = Date.now();
      if (now - lastTapTime < 280) return;
      lastTapTime = now;

      const isCurrentlySpotlight = item.classList.contains('spotlight');
      
      // Remove spotlight from any other cards
      document.querySelectorAll('.polaroid-item.spotlight').forEach(p => {
        p.classList.remove('spotlight');
        p.style.transform = '';
      });

      if (!isCurrentlySpotlight) {
        item.classList.add('spotlight');
        item.style.transform = '';
      }
    };

    item.addEventListener('click', handleTap);
    item.addEventListener('touchend', handleTap);
  }

  function animateFalling(el, baseX, initialY, speed, baseRot, depth) {
    activePolaroids.push(el);
    let currentY = initialY;
    let swayAngle = Math.random() * Math.PI * 2;
    const swayAmplitude = 10 + depth * 4;
    const swayFrequency = 0.02 + Math.random() * 0.008;

    function step() {
      if (!el.isConnected) return;

      if (!el.classList.contains('spotlight')) {
        currentY += speed;
        swayAngle += swayFrequency;

        const currentRot = parseFloat(baseRot) + Math.sin(swayAngle * 0.8) * 3;
        const currentX = baseX + Math.sin(swayAngle) * swayAmplitude;
        const tiltY = Math.cos(swayAngle * 0.5) * 5;

        el.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0) rotate(${currentRot.toFixed(1)}deg) rotateY(${tiltY.toFixed(1)}deg)`;

        // Clean exit when past bottom of viewport
        if (currentY > window.innerHeight + 80) {
          el.remove();
          activePolaroids = activePolaroids.filter(p => p !== el);
          return;
        }
      }

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  // Tap anywhere on stage to dismiss any spotlighted memory
  const dismissSpotlight = () => {
    document.querySelectorAll('.polaroid-item.spotlight').forEach(p => {
      p.classList.remove('spotlight');
      p.style.transform = '';
    });
  };
  container.addEventListener('click', dismissSpotlight);
  container.addEventListener('touchend', dismissSpotlight);

  // Pre-seed 3-4 polaroids across different screen lanes at staggered heights
  // so the user immediately sees photos gracefully floating across left, center, right!
  const screenH = window.innerHeight;
  spawnPolaroid(screenH * 0.12);
  setTimeout(() => spawnPolaroid(screenH * 0.38), 260);
  setTimeout(() => spawnPolaroid(screenH * 0.62), 520);
  setTimeout(() => spawnPolaroid(-120), 780);

  // Gentle, steady rainfall spawn
  photoRainInterval = setInterval(() => {
    spawnPolaroid();
  }, 1800);

  // Hook to Letter button (Safe & robust click + touch handler)
  bindLetterButton();
}

function bindLetterButton() {
  const toLetterBtn = document.getElementById('btn-open-letter');
  if (toLetterBtn) {
    const handleLetterOpen = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (photoRainInterval) {
        clearInterval(photoRainInterval);
        photoRainInterval = null;
      }
      if (rainSys) rainSys.stop();
      activePolaroids.forEach(p => p.remove());
      activePolaroids = [];
      switchStage('stage-letter', 'mood-twilight');
      initLetter();
    };

    toLetterBtn.onclick = handleLetterOpen;
    toLetterBtn.ontouchend = handleLetterOpen;
  }
}

// ============================================================================
// 9. BIRTHDAY LETTER (MULTI-PAGE PAGINATION)
// ============================================================================
let currentLetterPage = 0;

function initLetter() {
  const contentEl = document.getElementById('letter-content');
  const indicatorEl = document.getElementById('letter-page-indicator');
  const dotsContainer = document.getElementById('letter-dots-container');
  const prevBtn = document.getElementById('btn-letter-prev');
  const nextBtn = document.getElementById('btn-letter-next');

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    letterPages.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `dot-step ${idx === currentLetterPage ? 'active' : ''}`;
      dotsContainer.appendChild(dot);
    });
  }

  function showPage(pageIdx) {
    if (!contentEl) return;
    contentEl.classList.add('fading-out');

    setTimeout(() => {
      currentLetterPage = pageIdx;
      const text = letterPages[pageIdx] || '';
      contentEl.textContent = text;

      // Auto adjust font size if page has very long text
      if (text.length > 260) {
        contentEl.classList.add('long-text');
      } else {
        contentEl.classList.remove('long-text');
      }

      // Reset scroll position to top of letter on page change
      const letterBody = document.querySelector('.letter-body');
      if (letterBody) {
        letterBody.scrollTop = 0;
      }

      contentEl.classList.remove('fading-out');
      contentEl.classList.add('fading-in');

      setTimeout(() => {
        contentEl.classList.remove('fading-in');
      }, 300);

      if (indicatorEl) {
        indicatorEl.textContent = `LETTER ${String(pageIdx + 1).padStart(2, '0')} / ${String(letterPages.length).padStart(2, '0')}`;
      }

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.dot-step');
        dots.forEach((d, i) => {
          if (i === pageIdx) d.classList.add('active');
          else d.classList.remove('active');
        });
      }

      if (prevBtn) prevBtn.disabled = pageIdx === 0;

      if (nextBtn) {
        if (pageIdx === letterPages.length - 1) {
          nextBtn.textContent = 'Dengar Suaraku →';
        } else {
          nextBtn.textContent = 'Next →';
        }
      }
    }, 250);
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (currentLetterPage > 0) {
        showPage(currentLetterPage - 1);
      }
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      if (currentLetterPage < letterPages.length - 1) {
        showPage(currentLetterPage + 1);
      } else {
        switchStage('stage-voice', 'mood-twilight');
      }
    };
  }

  showPage(0);
}

// ============================================================================
// 10. VOICE NOTE STAGE
// ============================================================================
function initVoiceStage() {
  const trigger = document.getElementById('voice-play-trigger');
  const finishBtn = document.getElementById('btn-voice-finish');

  if (trigger) {
    trigger.addEventListener('click', () => {
      audioManager.toggleVoiceNote();
    });
  }

  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      switchStage('stage-ending', 'mood-night');
      initEnding();
    });
  }
}

// ============================================================================
// 11. FINAL ENDING & STORY REPLAY
// ============================================================================
function initEnding() {
  const nameEl = document.getElementById('ending-partner-name');
  if (nameEl) {
    nameEl.textContent = CONFIG.partnerName;
  }

  const replayBtn = document.getElementById('btn-replay');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      window.location.reload();
    });
  }

  window.addEventListener('click', (e) => {
    if (currentStageIndex === stages.indexOf('stage-ending')) {
      if (particleSys) {
        particleSys.burst(e.clientX, e.clientY, 15);
      }
    }
  });
}

// ============================================================================
// INITIALIZATION ON DOM READY
// ============================================================================
window.addEventListener('DOMContentLoaded', () => {
  particleSys = new ParticleCanvas('particle-canvas');
  rainSys = new RealisticRainCanvas('rain-canvas');

  // Initialize Puzzle
  const puzzle = new SeasidePuzzle();
  const solveBtn = document.getElementById('btn-solve-puzzle');
  if (solveBtn) {
    solveBtn.addEventListener('click', () => puzzle.solve());
  }

  // Initialize Wish & Candles
  new WishCandles();

  // Floating Music Controls
  const musicBtn = document.getElementById('floating-music-btn');
  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      audioManager.toggleSeasons();
    });
  }

  // Initialize Voice Note stage handlers
  initVoiceStage();

  // Bind Letter Button Early
  bindLetterButton();
});
