<template>
  <div 
    v-if="visible" 
    ref="container"
    class="splash-container"
  >
    <!-- Animated Matrix Background -->
    <div class="matrix-background">
      <canvas ref="matrixCanvas" class="matrix-canvas"></canvas>
    </div>

    <!-- Floating Geometric Elements - Reduced count for better CLS -->
    <div class="geometric-background">
      <div 
        v-for="i in 8" 
        :key="i"
        class="floating-geometry"
        :style="getGeometryStyle(i)"
      ></div>
    </div>

    <!-- Main Content -->
    <div class="splash-content">
      
      <!-- Top Brand Mark -->
      <div ref="brandMarkEl" class="brand-mark">
        <div class="brand-ring">
          <div class="brand-inner">
            <span class="brand-text">GV</span>
          </div>
        </div>
        <div class="brand-orb-1"></div>
        <div class="brand-orb-2"></div>
        <div class="brand-orb-3"></div>
      </div>

      <!-- Main Title Animation -->
      <div class="title-section">
        <h1 class="main-title">
          <span 
            ref="firstNameEl"
            class="title-word title-word-1"
          >
            GOVIND
          </span>
          <span 
            ref="lastNameEl"
            class="title-word title-word-2"
          >
            VYAS
          </span>
        </h1>
        
        <div ref="subtitleEl" class="subtitle-line">
          <div class="subtitle-text">SOFTWARE DEVELOPER</div>
          <div class="subtitle-accent">& DIGITAL INNOVATOR</div>
        </div>
      </div>

      <!-- Advanced Loading System -->
      <div ref="loadingSystemEl" class="loading-system">
        
        <!-- Hexagonal Progress -->
        <div class="hex-progress-container">
          <svg class="hex-progress" viewBox="0 0 100 100">
            <path
              ref="hexProgressPath"
              class="hex-path"
              d="M50,5 L85,25 L85,65 L50,85 L15,65 L15,25 Z"
              fill="none"
              stroke="url(#hexGradient)"
              stroke-width="2"
              stroke-dasharray="240"
              stroke-dashoffset="240"
            />
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#00f5ff;stop-opacity:1" />
                <stop offset="50%" style="stop-color:#7c3aed;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#ff007f;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
          <div class="hex-center">
            <span ref="progressPercentEl" class="progress-percent">0%</span>
          </div>
        </div>

        <!-- Quantum Loading Dots -->
        <div class="quantum-dots">
          <div 
            v-for="i in 8" 
            :key="i"
            class="quantum-dot"
            :style="{ animationDelay: `${i * 0.15}s` }"
          ></div>
        </div>

        <!-- Loading Status -->
        <div ref="loadingStatusEl" class="loading-status">
          <div class="status-text">{{ state.currentStatus }}</div>
          <div class="status-details">{{ state.currentDetails }}</div>
        </div>

        <!-- System Metrics -->
        <div ref="metricsEl" class="system-metrics">
          <div class="metric-item">
            <span class="metric-label">NEURAL NET</span>
            <span class="metric-value">{{ Math.round(state.neuralProgress * 100) / 100 }}%</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">QUANTUM SYNC</span>
            <span class="metric-value">{{ Math.round(state.quantumProgress * 100) / 100 }}%</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">MATRIX LOAD</span>
            <span class="metric-value">{{ Math.round(state.matrixProgress * 100) / 100 }}%</span>
          </div>
        </div>
      </div>

      <!-- Skip Interface -->
      <div ref="skipInterfaceEl" class="skip-interface">
        <button @click="skipAnimation" class="skip-btn">
          <span class="skip-icon">⚡</span>
          <span class="skip-text">SKIP INITIALIZATION</span>
        </button>
        <div class="skip-hint">Press [ESC] or [SPACE]</div>
      </div>

      <!-- Bottom HUD -->
      <div ref="hudEl" class="bottom-hud">
        <div class="hud-left">
          <div class="version-info">PORTFOLIO v3.0.1</div>
          <div class="build-info">BUILD {{ state.buildNumber }}</div>
        </div>
        <div class="hud-right">
          <div class="timestamp">{{ state.currentTime }}</div>
          <div class="location">DIGITAL REALM</div>
        </div>
      </div>

    </div>

    <!-- Scan Lines Effect -->
    <div class="scan-lines"></div>
    
    <!-- Vignette Effect -->
    <div class="vignette"></div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import gsap from 'gsap'

// Define emits
const emit = defineEmits(['done'])

// Reactive refs
const visible = ref(true)
const container = ref<HTMLElement>()
const matrixCanvas = ref<HTMLCanvasElement>()
const brandMarkEl = ref<HTMLElement>()
const firstNameEl = ref<HTMLElement>()
const lastNameEl = ref<HTMLElement>()
const subtitleEl = ref<HTMLElement>()
const loadingSystemEl = ref<HTMLElement>()
const hexProgressPath = ref<SVGPathElement>()
const progressPercentEl = ref<HTMLElement>()
const loadingStatusEl = ref<HTMLElement>()
const metricsEl = ref<HTMLElement>()
const skipInterfaceEl = ref<HTMLElement>()
const hudEl = ref<HTMLElement>()

// State management
const state = reactive({
  currentStatus: 'INITIALIZING NEURAL NETWORKS',
  currentDetails: 'Loading quantum algorithms...',
  neuralProgress: 0,
  quantumProgress: 0,
  matrixProgress: 0,
  buildNumber: Math.floor(Math.random() * 9999) + 1000,
  currentTime: new Date().toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit' 
  }),
  overallProgress: 0
})

// Matrix animation variables
let matrixCtx: CanvasRenderingContext2D | null = null
let matrixAnimationId: number | null = null

// Geometry styles - Fixed positions to prevent CLS
const geometryPositions = [
  { size: 50, left: 10, top: 15 },
  { size: 35, left: 80, top: 10 },
  { size: 45, left: 85, top: 70 },
  { size: 30, left: 15, top: 75 },
  { size: 40, left: 50, top: 5 },
  { size: 55, left: 5, top: 45 },
  { size: 38, left: 90, top: 40 },
  { size: 42, left: 45, top: 85 },
]

const getGeometryStyle = (index: number) => {
  const pos = geometryPositions[index - 1] || geometryPositions[0]
  const delay = index * 0.5
  const duration = 12 + index * 2
  
  return {
    width: `${pos.size}px`,
    height: `${pos.size}px`,
    left: `${pos.left}%`,
    top: `${pos.top}%`,
    animationDelay: `${delay}s`,
    '--duration': `${duration}s`,
  }
}

// Status messages
const statusSequence = [
  { status: 'INITIALIZING NEURAL NETWORKS', details: 'Loading quantum algorithms...' },
  { status: 'SYNCHRONIZING MATRIX PROTOCOLS', details: 'Establishing secure connections...' },
  { status: 'CALIBRATING DIGITAL INTERFACE', details: 'Optimizing performance metrics...' },
  { status: 'LOADING PORTFOLIO ASSETS', details: 'Preparing visual components...' },
  { status: 'FINALIZING AUTHENTICATION', details: 'Securing user experience...' },
  { status: 'SYSTEM READY', details: 'Welcome to the digital realm...' }
]

// Matrix rain effect - Optimized for performance
const initMatrixEffect = () => {
  if (!matrixCanvas.value) return
  
  const canvas = matrixCanvas.value
  matrixCtx = canvas.getContext('2d', { alpha: false })
  if (!matrixCtx) return

  // Set canvas size - use device pixel ratio for crisp rendering
  const resizeCanvas = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
    matrixCtx?.scale(dpr, dpr)
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  // Matrix characters - reduced set for performance
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const charArray = chars.split('')
  
  const fontSize = 16
  const columns = Math.floor(window.innerWidth / fontSize)
  const drops: number[] = []
  
  // Initialize drops
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100
  }

  let lastTime = 0
  const fps = 20 // Limit to 20 FPS for performance

  const drawMatrix = (currentTime: number) => {
    if (!matrixCtx || !canvas) return
    
    // Throttle to target FPS
    if (currentTime - lastTime < 1000 / fps) {
      matrixAnimationId = requestAnimationFrame(drawMatrix)
      return
    }
    lastTime = currentTime

    // Semi-transparent background for fade effect
    matrixCtx.fillStyle = 'rgba(10, 10, 15, 0.1)'
    matrixCtx.fillRect(0, 0, window.innerWidth, window.innerHeight)

    matrixCtx.fillStyle = '#00ff41'
    matrixCtx.font = `${fontSize}px monospace`

    for (let i = 0; i < drops.length; i++) {
      if (drops[i] > 0) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        matrixCtx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.5 + 0.3})`
        matrixCtx.fillText(text, i * fontSize, drops[i] * fontSize)
      }

      if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.95) {
        drops[i] = 0
      }
      drops[i]++
    }
    
    matrixAnimationId = requestAnimationFrame(drawMatrix)
  }

  matrixAnimationId = requestAnimationFrame(drawMatrix)
}

// Main animation timeline
let mainTimeline: gsap.core.Timeline

const startAnimation = () => {
  mainTimeline = gsap.timeline()

  // Set initial states
  const elements = [
    brandMarkEl.value, 
    firstNameEl.value, 
    lastNameEl.value, 
    subtitleEl.value,
    loadingSystemEl.value,
    skipInterfaceEl.value,
    hudEl.value
  ].filter(Boolean)

  gsap.set(elements, {
    opacity: 0,
    y: 100
  })

  // 1. Brand mark entrance
  if (brandMarkEl.value) {
    mainTimeline.to(brandMarkEl.value, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    })
  }

  // 2. Title sequence
  if (firstNameEl.value) {
    mainTimeline.to(firstNameEl.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
  }

  if (lastNameEl.value) {
    mainTimeline.to(lastNameEl.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
  }

  // 3. Subtitle
  if (subtitleEl.value) {
    mainTimeline.to(subtitleEl.value, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.2")
  }

  // 4. Loading system
  if (loadingSystemEl.value) {
    mainTimeline.to(loadingSystemEl.value, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.1")
  }

  // 5. Skip interface
  if (skipInterfaceEl.value) {
    mainTimeline.to(skipInterfaceEl.value, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.3")
  }

  // 6. HUD
  if (hudEl.value) {
    mainTimeline.to(hudEl.value, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.2")
  }

  // Start progress simulation
  startProgressSimulation()
}

const startProgressSimulation = () => {
  let statusIndex = 0
  let progressStep = 0

  const progressInterval = setInterval(() => {
    progressStep += 1
    const totalSteps = 100
    const progress = (progressStep / totalSteps) * 100

    // Update individual metrics
    state.neuralProgress = Math.min(100, progress + Math.random() * 10)
    state.quantumProgress = Math.min(100, progress * 0.8 + Math.random() * 15)
    state.matrixProgress = Math.min(100, progress * 1.2 + Math.random() * 8)
    state.overallProgress = progress

    // Update hex progress
    if (hexProgressPath.value) {
      const circumference = 240
      const offset = circumference - (progress / 100) * circumference
      gsap.to(hexProgressPath.value, {
        strokeDashoffset: offset,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    // Update percentage
    if (progressPercentEl.value) {
      progressPercentEl.value.textContent = Math.floor(progress) + '%'
    }

    // Update status
    if (statusIndex < statusSequence.length - 1 && progress > (statusIndex + 1) * 16.67) {
      statusIndex++
      state.currentStatus = statusSequence[statusIndex].status
      state.currentDetails = statusSequence[statusIndex].details
    }

    // Complete
    if (progress >= 100) {
      clearInterval(progressInterval)
      setTimeout(animateExit, 1500)
    }
  }, 80)
}

const animateExit = () => {
  const exitTimeline = gsap.timeline({
    onComplete: () => {
      visible.value = false
  emit('done')
    }
  })

  if (container.value) {
    exitTimeline.to(container.value, {
      opacity: 0,
      scale: 1.05,
      duration: 1.2,
      ease: "power2.inOut"
    })
  }
}

const skipAnimation = () => {
  if (mainTimeline) mainTimeline.kill()
  if (matrixAnimationId) cancelAnimationFrame(matrixAnimationId)
  animateExit()
}

// Keyboard handlers
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' || event.key === ' ') {
    event.preventDefault()
    skipAnimation()
  }
}

// Time update
const updateTime = () => {
  state.currentTime = new Date().toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  })
}

onMounted(() => {
  initMatrixEffect()
  startAnimation()
  
  // Update time every second
  const timeInterval = setInterval(updateTime, 1000)
  
  window.addEventListener('keydown', handleKeydown)
  
  // Cleanup
  onUnmounted(() => {
    if (mainTimeline) mainTimeline.kill()
    if (matrixAnimationId) cancelAnimationFrame(matrixAnimationId)
    clearInterval(timeInterval)
    window.removeEventListener('keydown', handleKeydown)
  })
})
</script>

<style scoped>
/* Advanced Splash Screen Styles */
.splash-container {
  position: fixed;
  inset: 0;
  z-index: 1000;
  overflow: hidden;
  background: radial-gradient(ellipse at center, #0a0a23 0%, #000 70%);
  font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
}

/* Matrix Background */
.matrix-background {
  position: absolute;
  inset: 0;
  opacity: 0.15;
}

.matrix-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

/* Floating Geometric Elements - Fixed for CLS */
.geometric-background {
  position: absolute;
  inset: 0;
  overflow: hidden;
  contain: strict;
  pointer-events: none;
}

.floating-geometry {
  position: absolute;
  background: linear-gradient(45deg, #00f5ff, #7c3aed, #ff007f);
  border-radius: 50%;
  opacity: 0.1;
  /* Use GPU-accelerated properties only - prevents CLS */
  will-change: transform, opacity;
  transform: translateZ(0);
  animation: geometryFloat var(--duration, 15s) ease-in-out infinite;
  filter: blur(2px);
  /* Prevent layout contribution */
  contain: layout style;
}

@keyframes geometryFloat {
  0%, 100% { 
    transform: translateY(0) rotate(0deg) scale(1) translateZ(0);
    opacity: 0.1;
  }
  25% { 
    transform: translateY(-20px) rotate(90deg) scale(1.1) translateZ(0);
    opacity: 0.2;
  }
  50% { 
    transform: translateY(-40px) rotate(180deg) scale(0.9) translateZ(0);
    opacity: 0.15;
  }
  75% { 
    transform: translateY(-20px) rotate(270deg) scale(1.05) translateZ(0);
    opacity: 0.25;
  }
}

/* Main Content */
.splash-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}

/* Brand Mark */
.brand-mark {
  position: relative;
  margin-bottom: 3rem;
  animation: brandPulse 4s ease-in-out infinite;
}

.brand-ring {
  width: 120px;
  height: 120px;
  border: 3px solid;
  border-image: linear-gradient(45deg, #00f5ff, #7c3aed, #ff007f) 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  animation: brandRotate 20s linear infinite;
}

.brand-inner {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00f5ff, #7c3aed);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 0 30px rgba(0, 245, 255, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
}

.brand-text {
  font-size: 2rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.brand-orb-1, .brand-orb-2, .brand-orb-3 {
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00f5ff, #ff007f);
  animation: orbitBrand 6s ease-in-out infinite;
}

.brand-orb-1 {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}

.brand-orb-2 {
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  animation-delay: 2s;
}

.brand-orb-3 {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 4s;
}

@keyframes brandPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes brandRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes orbitBrand {
  0%, 100% { 
    opacity: 1;
    transform: scale(1);
  }
  50% { 
    opacity: 0.3;
    transform: scale(1.5);
  }
}

/* Title Section */
.title-section {
  text-align: center;
  margin-bottom: 4rem;
}

.main-title {
  margin-bottom: 1.5rem;
}

.title-word {
  display: block;
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #00f5ff 0%, #7c3aed 50%, #ff007f 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-position: 50% 50%;
  /* GPU acceleration - only use transform and opacity */
  will-change: transform, opacity;
  transform: translateZ(0);
  /* Static text shadow for glow effect instead of animated filter */
  text-shadow: 0 0 40px rgba(0, 245, 255, 0.3);
}

.title-word-1 {
  /* GPU-composited animation using only opacity */
  animation: titlePulse 4s ease-in-out infinite;
}

.title-word-2 {
  animation: titlePulse 4s ease-in-out infinite;
  animation-delay: 2s;
}

/* Pure GPU-composited animation - only opacity and transform */
@keyframes titlePulse {
  0%, 100% { 
    opacity: 1;
    transform: translateZ(0) scale(1);
  }
  50% { 
    opacity: 0.9;
    transform: translateZ(0) scale(1.02);
  }
}

.subtitle-line {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}

.subtitle-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00f5ff;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.subtitle-accent {
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.05em;
}

/* Loading System */
.loading-system {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Hexagonal Progress */
.hex-progress-container {
  position: relative;
  width: 120px;
  height: 120px;
}

.hex-progress {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.hex-path {
  filter: drop-shadow(0 0 10px rgba(0, 245, 255, 0.5));
}

.hex-center {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-percent {
  font-size: 1.5rem;
  font-weight: 700;
  color: #00f5ff;
  font-family: 'Space Grotesk', monospace;
}

/* Quantum Dots */
.quantum-dots {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

.quantum-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00f5ff, #7c3aed);
  animation: quantumPulse 1.5s ease-in-out infinite;
}

@keyframes quantumPulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 0.5;
  }
  50% { 
    transform: scale(1.5);
    opacity: 1;
  }
}

/* Loading Status */
.loading-status {
  text-align: center;
  margin: 1rem 0;
}

.status-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #00f5ff;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.status-details {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: monospace;
}

/* System Metrics */
.system-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;
}

.metric-item {
  text-align: center;
  padding: 1rem;
  border: 1px solid rgba(0, 245, 255, 0.3);
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
}

.metric-label {
  display: block;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
}

.metric-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: #00f5ff;
  font-family: monospace;
}

/* Skip Interface */
.skip-interface {
  position: absolute;
  top: 2rem;
  right: 2rem;
  text-align: center;
}

.skip-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 245, 255, 0.3);
  border-radius: 0.5rem;
  color: #00f5ff;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.skip-btn:hover {
  background: rgba(0, 245, 255, 0.1);
  border-color: #00f5ff;
  transform: translateY(-2px);
}

.skip-icon {
  font-size: 1.2rem;
}

.skip-hint {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 0.5rem;
  font-family: monospace;
}

/* Bottom HUD */
.bottom-hud {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  font-family: monospace;
}

.hud-left, .hud-right {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.hud-right {
  text-align: right;
}

.version-info, .timestamp {
  color: #00f5ff;
  font-weight: 600;
}

/* Scan Lines Effect */
.scan-lines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 245, 255, 0.03) 2px,
    rgba(0, 245, 255, 0.03) 4px
  );
  animation: scanMove 2s linear infinite;
  pointer-events: none;
}

@keyframes scanMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(4px); }
}

/* Vignette Effect */
.vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 40%,
    rgba(0, 0, 0, 0.4) 100%
  );
  pointer-events: none;
}

/* Responsive Design */
@media (max-width: 768px) {
  .splash-content {
    padding: 1rem;
  }
  
  .brand-mark {
    margin-bottom: 2rem;
  }
  
  .brand-ring {
    width: 80px;
    height: 80px;
  }
  
  .brand-inner {
    width: 60px;
    height: 60px;
  }
  
  .brand-text {
    font-size: 1.5rem;
  }
  
  .title-section {
    margin-bottom: 2rem;
  }
  
  .subtitle-text {
    font-size: 1.2rem;
  }
  
  .system-metrics {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .skip-interface {
    top: 1rem;
    right: 1rem;
  }
  
  .bottom-hud {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .hex-progress-container {
    width: 80px;
    height: 80px;
  }
  
  .progress-percent {
    font-size: 1rem;
  }
  
  .loading-system {
    gap: 1rem;
    margin-bottom: 2rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .splash-container {
    background: #000;
  }
  
  .title-word {
    -webkit-text-fill-color: #fff;
    color: #fff;
  }
  
  .subtitle-text,
  .status-text,
  .progress-percent,
  .metric-value {
    color: #fff;
  }
}
</style>
