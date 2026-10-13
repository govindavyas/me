<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <canvas
      ref="canvasRef"
      class="w-full h-full"
      @mousemove="onMouseMove"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

let particles: Particle[] = []
let animationId: number
let mouseX = 0
let mouseY = 0
let ctx: CanvasRenderingContext2D | null = null

const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b']

const createParticles = () => {
  particles = []
  const particleCount = 50
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }
}

const updateParticles = () => {
  particles.forEach(particle => {
    // Move particles
    particle.x += particle.vx
    particle.y += particle.vy
    
    // Mouse interaction
    const dx = mouseX - particle.x
    const dy = mouseY - particle.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    
    if (distance < 100) {
      const force = (100 - distance) / 100
      particle.vx += dx * force * 0.001
      particle.vy += dy * force * 0.001
    }
    
    // Boundary check
    if (particle.x < 0 || particle.x > window.innerWidth) {
      particle.vx *= -1
      particle.x = Math.max(0, Math.min(window.innerWidth, particle.x))
    }
    if (particle.y < 0 || particle.y > window.innerHeight) {
      particle.vy *= -1
      particle.y = Math.max(0, Math.min(window.innerHeight, particle.y))
    }
    
    // Damping
    particle.vx *= 0.99
    particle.vy *= 0.99
  })
}

const drawParticles = () => {
  if (!ctx || !canvasRef.value) return
  
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  
    particles.forEach(particle => {
      if (!ctx) return
    ctx.save()
    ctx.globalAlpha = particle.opacity
    ctx.fillStyle = particle.color
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  })
  
  // Draw connections
  particles.forEach((particle, i) => {
    particles.slice(i + 1).forEach(otherParticle => {
      const dx = particle.x - otherParticle.x
      const dy = particle.y - otherParticle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance < 100) {
          if (ctx) {
            ctx.save()
        ctx.globalAlpha = (100 - distance) / 100 * 0.2
        ctx.strokeStyle = '#3b82f6'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(otherParticle.x, otherParticle.y)
        ctx.stroke()
        ctx.restore()
          }
      }
    })
  })
}

const animate = () => {
  updateParticles()
  drawParticles()
  animationId = requestAnimationFrame(animate)
}

const onMouseMove = (event: MouseEvent) => {
  mouseX = event.clientX
  mouseY = event.clientY
}

const handleResize = () => {
  if (!canvasRef.value) return
  
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
  createParticles()
}

onMounted(() => {
  if (!canvasRef.value) return
  
  ctx = canvasRef.value.getContext('2d')
  canvasRef.value.width = window.innerWidth
  canvasRef.value.height = window.innerHeight
  
  createParticles()
  animate()
  
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', handleResize)
})
</script>
