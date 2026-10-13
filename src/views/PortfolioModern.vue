<template>
  <div class="portfolio-app">
    <!-- Advanced Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
            <a href="#" class="logo" @click.prevent="scrollToTop">{{ portfolioData.personal.name }}</a>
          <ul class="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section with 3D Elements -->
    <section id="hero" class="hero section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-subtitle">Software Developer & Digital Innovator</div>
            <h1 class="heading-xl hero-title">
              <span class="text-gradient">{{ portfolioData.personal.name }}</span>
            </h1>
            <p class="hero-description">
              {{ portfolioData.personal.tagline }} 
              Crafting digital experiences with cutting-edge technologies.
            </p>
            <div class="hero-actions">
              <button class="btn-primary" @click="scrollToProjects">View My Work</button>
              <button class="btn-outline" @click="scrollToContact">Get In Touch</button>
            </div>
          </div>
          
          <!-- True 3D Interactive Cube -->
          <div class="hero-3d">
            <div class="floating-cube-container" @mousemove="onCubeMouseMove" @mouseleave="onCubeMouseLeave">
              <div class="floating-cube" ref="cube">
                <!-- Front Face - Personal Info -->
                <div class="cube-face front">
                  <div class="face-content">
                    <h3>👨‍💻 {{ portfolioData.personal.name.split(' ')[0] }}</h3>
                    <p>{{ portfolioData.personal.title }}</p>
                    <div class="face-details">
                      <span class="detail-item">🎯 Frontend Expert</span>
                      <span class="detail-item">🎯 Backend Expert</span>
                      <span class="detail-item">⚡ Vue.js Specialist</span>
                    </div>
                  </div>
                </div>
                
                <!-- Back Face - Contact -->
                <div class="cube-face back">
                  <div class="face-content">
                    <h3>📧 Contact Me</h3>
                    <div class="face-details">
                      <span class="detail-item">📍 {{ portfolioData.personal.location }}</span>
                      <span class="detail-item">📞 {{ portfolioData.personal.phone }}</span>
                      <span class="detail-item">✉️ Available</span>
                    </div>
                  </div>
                </div>
                
                <!-- Right Face - Experience -->
                <div class="cube-face right">
                  <div class="face-content">
                    <h3>💼 Experience</h3>
                    <p>{{ portfolioData.experience[0]?.company || 'FirstCry' }}</p>
                    <div class="face-details">
                      <span class="detail-item">⏰ 1+ Years</span>
                      <span class="detail-item">🚀 Professional</span>
                      <span class="detail-item">💯 Dedicated</span>
                    </div>
                  </div>
                </div>
                
                <!-- Left Face - Skills -->
                <div class="cube-face left">
                  <div class="face-content">
                    <h3>🛠️ Tech Stack</h3>
                    <div class="face-details">
                      <span class="detail-item">⚛️ Vue.js</span>
                      <span class="detail-item">☕ JavaScript</span>
                      <span class="detail-item">🎨 CSS3</span>
                      <span class="detail-item">📱 Responsive</span>
                    </div>
                  </div>
                </div>
                
                <!-- Top Face - Projects -->
                <div class="cube-face top">
                  <div class="face-content">
                    <h3>🎯 Projects</h3>
                    <p>{{ portfolioData.projects.length }}+ Delivered</p>
                    <div class="face-details">
                      <span class="detail-item">🏆 AFFIRMA</span>
                      <span class="detail-item">🚗 Escort</span>
                      <span class="detail-item">🏢 B2D</span>
                    </div>
                  </div>
                </div>
                
                <!-- Bottom Face - Achievements -->
                <div class="cube-face bottom">
                  <div class="face-content">
                    <h3>🏅 Achievements</h3>
                    <div class="face-details">
                      <span class="detail-item">🎓 B.Tech CSE</span>
                      <span class="detail-item">⚡ 5x Efficiency</span>
                      <span class="detail-item">🌟 Innovation</span>
                      <span class="detail-item">📈 Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="heading-lg section-title text-gradient">About Me</h2>
          <p class="section-subtitle">Passionate about creating innovative solutions</p>
        </div>
        
        <div class="grid grid-2" style="align-items: center;">
          <div class="glass-card">
            <h3 class="heading-md mb-3">Professional Journey</h3>
            <p class="mb-3" style="color: var(--text-secondary); line-height: 1.8;">
              {{ portfolioData.personal.summary }}
            </p>
            
            <div class="stats-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 2rem;">
              <div class="stat-item">
                <div class="stat-number text-gradient">2+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-number text-gradient">{{ portfolioData.projects.length }}+</div>
                <div class="stat-label">Projects</div>
              </div>
              <div class="stat-item">
                <div class="stat-number text-gradient">5x</div>
                <div class="stat-label">Efficiency Boost</div>
              </div>
              <div class="stat-item">
                <div class="stat-number text-gradient">15+</div>
                <div class="stat-label">Features Delivered</div>
              </div>
            </div>
          </div>
          
          <div class="skills-preview">
            <h3 class="heading-md mb-3 text-center">Core Technologies</h3>
            <div class="skill-icons" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem;">
              <div v-for="skill in portfolioData.skills.frontend.slice(0, 6)" :key="skill" 
                   class="skill-icon floating">
                <div class="icon-bg"></div>
                <span class="icon-text">{{ skill.substring(0, 5).toUpperCase() }}</span>
                <div class="icon-label">{{ skill }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section" style="background: rgba(26, 26, 46, 0.3);">
      <div class="container">
        <div class="section-header">
          <h2 class="heading-lg section-title text-gradient">Technology Stack</h2>
          <p class="section-subtitle">Expertise across the full development spectrum</p>
        </div>
        
        <div class="grid grid-4">
          <div class="skill-category glass-card">
            <div class="category-header">
              <div class="category-icon" style="background: linear-gradient(135deg, var(--primary), var(--accent));">🎨</div>
              <h3 class="heading-md">Frontend</h3>
            </div>
            <div class="skill-list">
              <span v-for="skill in portfolioData.skills.frontend" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
          
          <div class="skill-category glass-card">
            <div class="category-header">
              <div class="category-icon" style="background: linear-gradient(135deg, var(--secondary), var(--primary));">⚙️</div>
              <h3 class="heading-md">Backend</h3>
            </div>
            <div class="skill-list">
              <span v-for="skill in portfolioData.skills.backend" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
          
          <div class="skill-category glass-card">
            <div class="category-header">
              <div class="category-icon" style="background: linear-gradient(135deg, var(--accent), var(--gold));">🗄️</div>
              <h3 class="heading-md">Database</h3>
            </div>
            <div class="skill-list">
              <span v-for="skill in portfolioData.skills.databases" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
          
          <div class="skill-category glass-card">
            <div class="category-header">
              <div class="category-icon" style="background: linear-gradient(135deg, var(--gold), var(--secondary));">🛠️</div>
              <h3 class="heading-md">Tools</h3>
            </div>
            <div class="skill-list">
              <span v-for="skill in portfolioData.skills.tools" :key="skill" class="skill-tag">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="heading-lg section-title text-gradient">Professional Experience</h2>
          <p class="section-subtitle">Building the future, one project at a time</p>
        </div>
        
        <div class="experience-timeline">
          <div v-for="(exp, index) in portfolioData.experience" :key="index" 
               class="timeline-item glass-card">
            <div class="timeline-marker"></div>
            <div class="experience-content">
              <div class="exp-header">
                <div>
                  <h3 class="heading-md text-gradient">{{ exp.role }}</h3>
                  <h4 style="color: var(--primary); font-size: 1.2rem; font-weight: 600;">{{ exp.company }}</h4>
                </div>
                <div class="exp-period">{{ exp.period }}</div>
              </div>
              
              <div class="exp-achievements">
                <div v-for="desc in exp.description" :key="desc" class="achievement-item">
                  <span class="achievement-bullet">▶</span>
                  {{ desc }}
                </div>
              </div>
              
              <div class="tech-stack">
                <span v-for="tech in exp.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section" style="background: rgba(26, 26, 46, 0.3);">
      <div class="container">
        <div class="section-header">
          <h2 class="heading-lg section-title text-gradient">Featured Projects</h2>
          <p class="section-subtitle">Innovative solutions that make a difference</p>
        </div>
        
        <div class="grid grid-2">
          <div v-for="(project, index) in portfolioData.projects" :key="index" 
               class="project-card glass-card">
            <div class="project-header">
              <div class="project-icon">{{ index + 1 }}</div>
              <div>
                <h3 class="project-title">{{ project.name }}</h3>
                <div class="project-period">{{ project.period }}</div>
              </div>
            </div>
            
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-highlights">
              <h4>Key Achievements:</h4>
              <ul>
                <li v-for="highlight in project.highlights" :key="highlight">
                  <span class="highlight-icon">✦</span>
                  {{ highlight }}
                </li>
              </ul>
            </div>
            
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
                {{ tech }}
              </span>
            </div>
            
            <div 
              v-if="project.detailsUrl || project.demoUrl" 
              class="project-actions"
            >
              <button 
                v-if="project.detailsUrl" 
                class="btn-primary btn-sm"
                @click="openUrl(project.detailsUrl)"
              >
                View Details
              </button>
              <button 
                v-if="project.demoUrl" 
                class="btn-outline btn-sm"
                @click="openUrl(project.demoUrl)"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education & Achievements -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="heading-lg section-title text-gradient">Education & Recognition</h2>
          <p class="section-subtitle">Continuous learning and achievement</p>
        </div>
        
        <div class="grid grid-2">
          <div class="education-section">
            <h3 class="heading-md mb-3">Education</h3>
            <div class="education-list">
              <div v-for="edu in portfolioData.education" :key="edu.institution" 
                   class="education-item glass-card">
                <h4 class="text-gradient">{{ edu.degree }}</h4>
                <div class="institution">{{ edu.institution }}</div>
                <div class="period">{{ edu.period }}</div>
              </div>
            </div>
          </div>
          
          <div class="achievements-section">
            <h3 class="heading-md mb-3">Achievements</h3>
            <div class="achievements-list">
              <div v-for="achievement in portfolioData.achievements" :key="achievement.title" 
                   class="achievement-item glass-card">
                <h4 class="text-gradient">{{ achievement.title }}</h4>
                <div class="achievement-desc">{{ achievement.description }}</div>
                <div class="achievement-year">{{ achievement.year }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section" style="background: rgba(26, 26, 46, 0.3);">
      <div class="container">
        <div class="section-header">
          <h2 class="heading-lg section-title text-gradient">Let's Create Something Amazing</h2>
          <p class="section-subtitle">Ready to bring your ideas to life</p>
        </div>
        
        <div class="grid grid-2" style="align-items: start;">
          <div class="contact-info">
            <h3 class="heading-md mb-3">Get In Touch</h3>
            <p class="mb-4" style="color: var(--text-secondary); line-height: 1.8;">
              I'm always excited to discuss new opportunities and collaborate on innovative projects. 
              Let's connect and explore what we can build together.
            </p>
            
            <div class="contact-methods">
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                  <div class="contact-label">Email</div>
                  <div class="contact-value">{{ portfolioData.personal.email }}</div>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📱</div>
                <div>
                  <div class="contact-label">Phone</div>
                  <div class="contact-value">{{ portfolioData.personal.phone }}</div>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <div class="contact-label">Location</div>
                  <div class="contact-value">{{ portfolioData.personal.location }}</div>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <a :href="portfolioData.personal.github" class="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a :href="portfolioData.personal.linkedin" class="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div class="contact-form glass-card">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label>Name</label>
                <input v-model="form.name" type="text" required class="form-input">
              </div>
              
              <div class="form-group">
                <label>Email</label>
                <input v-model="form.email" type="email" required class="form-input">
              </div>
              
              <div class="form-group">
                <label>Message</label>
                <textarea v-model="form.message" required rows="5" class="form-input"></textarea>
              </div>
              
              <button type="submit" class="btn-primary" style="width: 100%;">
                Send Message
                <span v-if="isSubmitting" class="loading"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-left">
            <div class="logo">{{ portfolioData.personal.name }}</div>
            <p>Building the future with code</p>
          </div>
          <div class="footer-right">
            <p>&copy; 2024 {{ portfolioData.personal.name }}. Crafted with Vue.js & Modern Web Technologies</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { portfolioData } from '@/data/portfolio'
// import SecurityUtils from '@/utils/security'
import axios from 'axios'

// Scroll to top function for logo click
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Navigation functions for hero buttons
const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Function to open URLs in new tab
const openUrl = (url: string) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}

// Security: Initialize CSRF token
// const csrfToken = ref<string>(SecurityUtils.generateSecureToken())

const form = ref({
  name: '',
  email: '',
  message: ''
})


const isSubmitting = ref(false)
const cube = ref<HTMLElement>()
const mouseX = ref(0)
const mouseY = ref(0)
const isHovering = ref(false)

// Security: Form validation
// const formErrors = ref({
//   name: '',
//   email: '',
//   message: ''
// })

// Security: Rate limiting for form submissions
// const canSubmitForm = computed(() => {
//   const userIdentifier = 'portfolio-form-' + (
//     typeof window !== 'undefined' 
//       ? window.location.hostname 
//       : 'localhost'
//   );
//   return !SecurityUtils.isRateLimited(userIdentifier, 3, 300000); // 3 submissions per 5 minutes
// })

// Security: Validate form inputs
// const validateForm = (): boolean => {
//   let isValid = true;
//   formErrors.value = { name: '', email: '', message: '' };

//   // Validate name
//   const sanitizedName = SecurityUtils.sanitizeInput(form.value.name, 100);
//   if (!sanitizedName || sanitizedName.length < 2) {
//     formErrors.value.name = 'Name must be at least 2 characters long';
//     isValid = false;
//   } else if (SecurityUtils.detectXSS(form.value.name)) {
//     formErrors.value.name = 'Invalid characters detected';
//     isValid = false;
//   }

//   // Validate email
//   if (!SecurityUtils.validateEmail(form.value.email)) {
//     formErrors.value.email = 'Please enter a valid email address';
//     isValid = false;
//   }

//   // Validate message
//   const sanitizedMessage = SecurityUtils.sanitizeInput(form.value.message, 2000);
//   if (!sanitizedMessage || sanitizedMessage.length < 10) {
//     formErrors.value.message = 'Message must be at least 10 characters long';
//     isValid = false;
//   } else if (SecurityUtils.detectXSS(form.value.message)) {
//     formErrors.value.message = 'Invalid characters detected in message';
//     isValid = false;
//   }

//   return isValid;
// }

const onCubeMouseMove = (event: MouseEvent) => {
  // Security: Validate event object
  if (!event || !event.currentTarget) return;
  
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
  mouseY.value = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height))
  isHovering.value = true
  
  // Enhanced 3D interaction with proper cube positioning
  const cubeElement = cube.value
  if (cubeElement) {
    cubeElement.style.animationPlayState = 'paused'
    const tiltX = (mouseY.value - 0.5) * 60
    const tiltY = (mouseX.value - 0.5) * 60
    cubeElement.style.transform = `rotateX(${-15 + tiltX}deg) rotateY(${15 + tiltY}deg) scale(1.2)`
    cubeElement.style.transition = 'transform 0.1s ease-out'
  }
}

const onCubeMouseLeave = () => {
  isHovering.value = false
  mouseX.value = 0
  mouseY.value = 0
  
  // Resume animation and reset to default 3D position
  const cubeElement = cube.value
  if (cubeElement) {
    cubeElement.style.animationPlayState = 'running'
    cubeElement.style.transform = 'rotateX(-15deg) rotateY(15deg) scale(1)'
    cubeElement.style.transition = 'transform 0.5s ease'
  }
}

// const submitForm = async () => {
//   // Security: Check rate limiting
//   if (!canSubmitForm.value) {
//     alert("Too many submissions. Please wait before submitting again.");
//     return;
//   }

//   // Security: Validate form
//   if (!validateForm()) {
//     return;
//   }

//   isSubmitting.value = true;

//   try {
//     // Security: Sanitize inputs before submission
//     const sanitizedForm = {
//       name: SecurityUtils.sanitizeInput(form.value.name, 100),
//       email: SecurityUtils.sanitizeInput(form.value.email, 254),
//       message: SecurityUtils.sanitizeInput(form.value.message, 2000),
//       csrfToken: csrfToken.value,
//       timestamp: Date.now()
//     };

//     // Send to backend API
//     const res = await axios.post("https://api.govindvyas.com/submit", { "Content-Type": "application/json" }, sanitizedForm);

//     const data: { success?: boolean; error?: string } = await res.data;

//     if (data.success) {
//       // Security: Log submission without sensitive data
//       console.log("Secure form submission completed", {
//         timestamp: sanitizedForm.timestamp,
//         nameLength: sanitizedForm.name.length,
//         emailDomain: sanitizedForm.email.split("@")[1] || "invalid"
//       });

//       // Security: Clear form data
//       form.value = { name: "", email: "", message: "" };

//       // Security: Generate new CSRF token
//       csrfToken.value = SecurityUtils.generateSecureToken();

//       // Security: Success message without exposing sensitive information
//       alert("Thank you for your message! I'll get back to you soon.");
//     } else {
//       alert("Error: " + (data.error || "Unknown error"));
//     }
//   } catch (error) {
//     console.error("Form submission error:", error);
//     alert("There was an error submitting your message. Please try again later.");
//   } finally {
//     isSubmitting.value = false;
//   }
// };



// Security: Secure external link handler (for future use)
// const openSecureLink = (url: string) => {
//   SecurityUtils.openExternalLink(url);
// }

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert("Please fill in all fields.");
    return;
  }

  isSubmitting.value = true;

  try {
    const res = await axios.post(
      "https://api.govindvyas.com/submit",
      {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (res.data.success) {
      alert("Thank you for your message!");
      form.value = { name: "", email: "", message: "" };
    } else {
      alert(res.data.error || "Something went wrong.");
    }
  } catch (err) {
    console.error(err);
    alert("Unable to send your message right now.");
  } finally {
    isSubmitting.value = false;
  }
};


onMounted(() => {
  // Security: Log successful page load
  console.log('Portfolio loaded securely!');
  
  // Security: Validate current environment
  if (typeof window !== 'undefined') {
    // Security: Disable right-click context menu in production
    if (import.meta.env.PROD) {
      document.addEventListener('contextmenu', (e) => e.preventDefault());
      
      // Security: Disable text selection in production
      document.addEventListener('selectstart', (e) => e.preventDefault());
      
      // Security: Disable drag and drop
      document.addEventListener('dragstart', (e) => e.preventDefault());
    }
    
    // Security: Monitor for suspicious activity
    let rapidClickCount = 0;
    let rapidClickTimer: number;
    
    document.addEventListener('click', () => {
      rapidClickCount++;
      clearTimeout(rapidClickTimer);
      
      if (rapidClickCount > 10) {
        console.warn('Suspicious clicking activity detected');
        rapidClickCount = 0;
      }
      
      rapidClickTimer = window.setTimeout(() => {
        rapidClickCount = 0;
      }, 2000);
    });
  }
  
  // Add secure smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const href = link.getAttribute('href')
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    })
  })
  
  // Add secure fade-in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
      }
    })
  }, observerOptions)
  
  // Observe all sections
  const sections = document.querySelectorAll('.section')
  sections.forEach(section => observer.observe(section))
  
  // Security: Setup performance monitoring
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation && navigation.loadEventEnd - navigation.loadEventStart > 5000) {
        console.warn('Slow page load detected, possible security scan');
      }
    });
  }
})
</script>

<style scoped>
/* Additional component-specific styles */

/* TRUE 3D CUBE - PROPER CUBE GEOMETRY */
.floating-cube-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 800px;
  perspective-origin: center center;
}

.floating-cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 15s infinite linear;
  cursor: pointer;
  transition: all 0.4s ease;
  margin: 50px;
  /* Initial position to show it's a 3D cube */
  transform: rotateX(-15deg) rotateY(15deg);
}

.floating-cube:hover {
  animation-play-state: paused;
  transform: rotateX(-15deg) rotateY(15deg) scale(1.2);
}

/* Add depth and lighting effects for true 3D appearance */
.cube-face:hover {
  border-color: rgba(0, 245, 255, 0.8);
  box-shadow: 
    0 12px 48px rgba(0, 245, 255, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1);
}

/* Enhanced visual depth with better shadows and highlights */
.cube-face.front { 
  background: linear-gradient(135deg, rgba(0, 245, 255, 0.25), rgba(255, 0, 127, 0.15));
  transform: rotateY(0deg) translateZ(140px);
  box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
}

.cube-face.back { 
  background: linear-gradient(135deg, rgba(255, 0, 127, 0.25), rgba(124, 58, 237, 0.15));
  transform: rotateY(180deg) translateZ(140px);
  box-shadow: 0 0 20px rgba(255, 0, 127, 0.3);
}

.cube-face.right { 
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(255, 215, 0, 0.15));
  transform: rotateY(90deg) translateZ(140px);
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.3);
}

.cube-face.left { 
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(0, 245, 255, 0.15));
  transform: rotateY(-90deg) translateZ(140px);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

.cube-face.top { 
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(255, 0, 127, 0.15));
  transform: rotateX(90deg) translateZ(140px);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
  opacity: 0.9;
}

.cube-face.bottom { 
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(0, 245, 255, 0.15));
  transform: rotateX(-90deg) translateZ(140px);
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.2);
  opacity: 0.8;
}

/* CUBE FACES - EACH FACE FORMS THE ACTUAL CUBE STRUCTURE */
.cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid rgba(0, 245, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  backface-visibility: visible;
}

.face-content {
  text-align: center;
  z-index: 2;
  position: relative;
  padding: 1rem;
  width: 100%;
}

.face-content h3 {
  color: var(--primary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(0, 245, 255, 0.5);
}

.face-content p {
  color: #ffffff; /* var(--text-secondary); */
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

.face-details {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
}

.detail-item {
  display: inline-block;
  background: rgba(0, 245, 255, 0.15);
  border: 1px solid rgba(0, 245, 255, 0.4);
  border-radius: 8px;
  padding: 0.1rem 0.4rem;
  font-size: 0.65rem;
  color: #ffebeb; /* var(--text-secondary); */
  backdrop-filter: blur(5px);
}

/* REAL 3D CUBE POSITIONING - Each face positioned to form actual cube geometry */

/* FRONT FACE - Directly facing forward */
.cube-face.front { 
  background: linear-gradient(135deg, rgba(0, 245, 255, 0.4), rgba(100, 200, 255, 0.2));
  transform: translateZ(100px);
  border-color: rgba(0, 245, 255, 1);
}

/* BACK FACE - Behind the cube */
.cube-face.back { 
  background: linear-gradient(135deg, rgba(255, 0, 127, 0.4), rgba(255, 100, 180, 0.2));
  transform: rotateY(180deg) translateZ(100px);
  border-color: rgba(255, 0, 127, 1);
}

/* RIGHT FACE - Right side of cube */
.cube-face.right { 
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.4), rgba(180, 120, 255, 0.2));
  transform: rotateY(90deg) translateZ(100px);
  border-color: rgba(124, 58, 237, 1);
}

/* LEFT FACE - Left side of cube */
.cube-face.left { 
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.4), rgba(255, 235, 100, 0.2));
  transform: rotateY(-90deg) translateZ(100px);
  border-color: rgba(255, 215, 0, 1);
}

/* TOP FACE - Top of cube */
.cube-face.top { 
  background: linear-gradient(135deg, rgba(0, 255, 127, 0.4), rgba(100, 255, 180, 0.2));
  transform: rotateX(90deg) translateZ(100px);
  border-color: rgba(0, 255, 127, 1);
}

/* BOTTOM FACE - Bottom of cube */
.cube-face.bottom { 
  background: linear-gradient(135deg, rgba(255, 127, 80, 0.4), rgba(255, 180, 140, 0.2));
  transform: rotateX(-90deg) translateZ(100px);
  border-color: rgba(255, 127, 80, 1);
}

/* True 3D positioned cube faces - each face forms actual cube geometry */
.cube-face.front { 
  background: linear-gradient(135deg, rgba(0, 245, 255, 0.25), rgba(255, 0, 127, 0.15));
  transform: rotateY(0deg) translateZ(140px); 
}

.cube-face.back { 
  background: linear-gradient(135deg, rgba(255, 0, 127, 0.25), rgba(124, 58, 237, 0.15));
  transform: rotateY(180deg) translateZ(140px); 
}

.cube-face.right { 
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(255, 215, 0, 0.15));
  transform: rotateY(90deg) translateZ(140px); 
}

.cube-face.left { 
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(0, 245, 255, 0.15));
  transform: rotateY(-90deg) translateZ(140px); 
}

.cube-face.top { 
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.25), rgba(255, 0, 127, 0.15));
  transform: rotateX(90deg) translateZ(140px); 
}

.cube-face.bottom { 
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(0, 245, 255, 0.15));
  transform: rotateX(-90deg) translateZ(140px); 
}

/* TRUE 3D CUBE ROTATION - Shows all 6 faces as cube rotates */
@keyframes rotateCube {
  0% { 
    transform: rotateX(-15deg) rotateY(15deg); 
  }
  16.66% { 
    transform: rotateX(-15deg) rotateY(105deg); 
  }
  33.33% { 
    transform: rotateX(-15deg) rotateY(195deg); 
  }
  50% { 
    transform: rotateX(-15deg) rotateY(285deg); 
  }
  66.66% { 
    transform: rotateX(75deg) rotateY(285deg); 
  }
  83.33% { 
    transform: rotateX(165deg) rotateY(285deg); 
  }
  100% { 
    transform: rotateX(345deg) rotateY(375deg); 
  }
}

/* Add floating animation to the container */
.floating-cube-container {
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}


/* Responsive cube design */
@media (max-width: 768px) {
  .floating-cube {
    width: 200px;
    height: 200px;
    margin: 30px;
  }
  
  .cube-face {
    width: 200px;
    height: 200px;
  }
  
  .cube-face.front, .cube-face.back, .cube-face.right, .cube-face.left { 
    transform-origin: center center;
  }
  
  .cube-face.front { transform: rotateY(0deg) translateZ(100px); }
  .cube-face.back { transform: rotateY(180deg) translateZ(100px); }
  .cube-face.right { transform: rotateY(90deg) translateZ(100px); }
  .cube-face.left { transform: rotateY(-90deg) translateZ(100px); }
  .cube-face.top { transform: rotateX(90deg) translateZ(100px); }
  .cube-face.bottom { transform: rotateX(-90deg) translateZ(100px); }
  
  .face-content h3 {
    font-size: 1.1rem;
  }
  
  .face-content p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .floating-cube {
    width: 160px;
    height: 160px;
    margin: 20px;
  }
  
  .cube-face {
    width: 160px;
    height: 160px;
    padding: 0.5rem;
  }
  
  .cube-face.front { transform: rotateY(0deg) translateZ(80px); }
  .cube-face.back { transform: rotateY(180deg) translateZ(80px); }
  .cube-face.right { transform: rotateY(90deg) translateZ(80px); }
  .cube-face.left { transform: rotateY(-90deg) translateZ(80px); }
  .cube-face.top { transform: rotateX(90deg) translateZ(80px); }
  .cube-face.bottom { transform: rotateX(-90deg) translateZ(80px); }
  
  .face-content {
    padding: 1rem;
  }
  
  .face-content h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .face-content p {
    font-size: 0.8rem;
  }
}

/* Stats */
.stat-item {
  text-align: center;
  padding: 1rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Space Grotesk', sans-serif;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

/* Skill Icons */
.skill-icon {
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-smooth);
}

.icon-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 16px;
  opacity: 0.1;
  transition: var(--transition-smooth);
}

.icon-text {
  font-weight: 800;
  font-size: 1.2rem;
  color: var(--primary);
  z-index: 2;
}

.icon-label {
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: var(--text-secondary);
  white-space: nowrap;
}

.skill-icon:hover .icon-bg {
  opacity: 0.3;
  transform: scale(1.1);
}

/* Skill Categories */
.skill-category {
  text-align: center;
}

.category-header {
  margin-bottom: 1.5rem;
}

.category-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 1rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

/* Timeline */
.experience-timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 3rem;
}

.timeline-marker {
  position: absolute;
  left: -8px;
  top: 1rem;
  width: 16px;
  height: 16px;
  background: var(--primary);
  border-radius: 50%;
  border: 3px solid var(--bg-primary);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -1px;
  top: 2rem;
  bottom: -2rem;
  width: 2px;
  background: linear-gradient(180deg, var(--primary), transparent);
}

.timeline-item:last-child::before {
  display: none;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.exp-period {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
}

.exp-achievements {
  margin-bottom: 1.5rem;
}

.achievement-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.achievement-bullet {
  color: var(--primary);
  margin-right: 0.5rem;
  margin-top: 0.1rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(0, 245, 255, 0.1);
  border: 1px solid rgba(0, 245, 255, 0.3);
  color: var(--primary);
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
}

/* Projects */
.project-card {
  transition: var(--transition-smooth);
}

.project-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.project-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.2rem;
  margin-right: 1rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.project-period {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-highlights {
  margin-bottom: 1.5rem;
}

.project-highlights h4 {
  color: var(--primary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.project-highlights ul {
  list-style: none;
}

.project-highlights li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.highlight-icon {
  color: var(--primary);
  margin-right: 0.5rem;
  margin-top: 0.1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.3);
  color: var(--accent);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 0.9rem;
}

/* Education & Achievements */
.education-item,
.achievement-item.glass-card {
  margin-bottom: 1rem;
  padding: 1.5rem;
}

.institution,
.achievement-desc {
  color: var(--text-primary);
  font-weight: 600;
  margin: 0.5rem 0;
}

.period,
.achievement-year {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Contact */
.contact-methods {
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-right: 1rem;
}

.contact-label {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.contact-value {
  color: var(--text-primary);
  font-weight: 600;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition-smooth);
}

.social-link:hover {
  background: var(--primary);
  color: black;
  transform: translateY(-2px);
}

/* Form */
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 245, 255, 0.2);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: var(--transition-smooth);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 245, 255, 0.1);
}

.form-input::placeholder {
  color: var(--text-secondary);
}

/* Footer */
.footer {
  border-top: 1px solid rgba(0, 245, 255, 0.1);
  padding: 2rem 0;
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-left .logo {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.footer-left p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.footer-right p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-3d {
    height: 300px;
  }
  
  .floating-cube {
    width: 180px;
    height: 180px;
  }
  
  .cube-face {
    width: 180px;
    height: 180px;
  }
  
  .cube-face.front { transform: rotateY(0deg) translateZ(90px); }
  .cube-face.back { transform: rotateY(180deg) translateZ(90px); }
  .cube-face.right { transform: rotateY(90deg) translateZ(90px); }
  .cube-face.left { transform: rotateY(-90deg) translateZ(90px); }
  .cube-face.top { transform: rotateX(90deg) translateZ(90px); }
  .cube-face.bottom { transform: rotateX(-90deg) translateZ(90px); }
  
  .face-content h3 {
    font-size: 1.1rem;
  }
  
  .face-content p {
    font-size: 0.9rem;
  }
  
  .exp-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  
  .skill-icons {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* Social Links with Icons */
.social-icon {
  width: 24px;
  height: 24px;
  transition: var(--transition-smooth);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 12px;
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition-smooth);
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: var(--primary);
  color: var(--bg-primary);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 245, 255, 0.3);
  border-color: var(--primary);
}

.social-link:hover .social-icon {
  transform: scale(1.1);
}

/* Responsive social links */
@media (max-width: 480px) {
  .social-link {
    width: 44px;
    height: 44px;
  }
  
  .social-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
