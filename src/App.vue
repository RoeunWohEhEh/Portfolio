<template>
  <div class="min-h-screen bg-brand-bg text-gray-300 font-sans relative overflow-hidden bg-grid-pattern">

    <!-- Background Glow Blobs -->
    <div
      class="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-purple/15 blur-[120px] pointer-events-none animate-pulse-slow">
    </div>
    <div
      class="absolute top-[30%] -right-40 w-[600px] h-[600px] rounded-full bg-brand-teal/10 blur-[150px] pointer-events-none animate-pulse-slow">
    </div>
    <div
      class="absolute bottom-10 left-[20%] w-[500px] h-[500px] rounded-full bg-brand-pink/5 blur-[130px] pointer-events-none animate-pulse-slow">
    </div>

    <!-- Floating Tech Shapes Decor -->
    <div
      class="hidden lg:block absolute top-[15%] left-[8%] w-12 h-12 border border-white/10 rounded-xl animate-float opacity-30">
    </div>
    <div
      class="hidden lg:block absolute top-[40%] right-[10%] w-16 h-16 border border-brand-purple/20 rounded-full animate-float-slow opacity-40">
    </div>
    <div
      class="hidden lg:block absolute bottom-[25%] left-[5%] w-10 h-10 border border-brand-teal/20 rotate-45 animate-float opacity-30">
    </div>

    <!-- Left Fixed Social Bar -->
    <SocialBar />

    <!-- Navbar -->
    <Navbar :navLinks="navLinks" :activeSection="activeSection" />

    <!-- Main Content Container -->
    <main class="max-w-6xl mx-auto px-6 pt-24 pb-12 relative z-10 space-y-32">
      <!-- Hero Section -->
      <HeroSection :heroArtwork="heroArtwork" :cvFile="cvFile" />

      <!-- Stats Metrics Section -->
      <StatsSection :stats="stats" />

      <!-- Projects Section -->
      <ProjectsSection :projects="projects" />

      <!-- Skills Section -->
      <SkillsSection :skills="skills" />

      <!-- Certificates Section -->
      <CertificatesSection :certificates="certificates" @open-modal="openCertificateModal" />

      <!-- About Me Section -->
      <AboutSection :aboutArtwork="aboutArtwork" />

      <!-- Contacts Section -->
      <ContactSection />
    </main>

    <!-- Certificate Lightbox Modal -->
    <CertificateModal :selectedCertificate="selectedCertificate" @close="closeCertificateModal" />

    <!-- Footer -->
    <Footer />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Components
import SocialBar from './components/SocialBar.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import CertificateModal from './components/CertificateModal.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

// Asset Graphics
import heroArtwork from './assets/hero_artwork.png'
import aboutArtwork from './assets/about_artwork.png'
import certFrontend from './assets/cert_frontend.png'
import certYicmg from './assets/yicmg_certificate.png'
import certYicmgGrand from './assets/yicmg_certificate_internaional_team.jpg'
import certInternEtec from './assets/certificate_intern_etec.jpg'
import certVue from './assets/cert_vue.png'
import cvFile from './assets/SekChamroeun_CV.pdf'

// Navigation links configuration
const navLinks = [
  { name: 'home', href: '#home', id: 'home' },
  { name: 'projects', href: '#works', id: 'works' },
  { name: 'skills', href: '#skills', id: 'skills' },
  { name: 'certificates', href: '#certificates', id: 'certificates' },
  { name: 'about-me', href: '#about-me', id: 'about-me' },
  { name: 'contacts', href: '#contacts', id: 'contacts' }
]

// Active section tracker (ScrollSpy)
const activeSection = ref('home')
const handleScroll = () => {
  const scrollPosition = window.scrollY + 120
  for (const link of navLinks) {
    const el = document.getElementById(link.id)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = link.id
      }
    }
  }
}

// Certificate Modal State
const selectedCertificate = ref(null)

const openCertificateModal = (cert) => {
  selectedCertificate.value = cert
  document.body.style.overflow = 'hidden'
}

const closeCertificateModal = () => {
  selectedCertificate.value = null
  document.body.style.overflow = ''
}

const handleKeydown = (e) => {
  if (e.key === 'Escape' && selectedCertificate.value) {
    closeCertificateModal()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

// Key metrics stats
const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Completed Projects' },
  { value: '99.9%', label: 'Attention to Detail' },
  { value: '24/7', label: 'Availability' }
]

// Projects dataset
const projects = ref([
  {
    title: 'ChertNodes',
    description: 'Sleek interface designed for Minecraft hosting platforms, providing developers with detailed charts and container operations.',
    techStack: ['HTML', 'SCSS', 'Python', 'Flask'],
    category: 'Fullstack',
    imageBg: 'from-brand-purple to-indigo-700',
    liveLink: '#'
  },
  {
    title: 'ProtectX Dashboard',
    description: 'Discord anti-crash bot web dashboard. Highly interactive configurations, live system statuses, and authorization logs.',
    techStack: ['React', 'Express', 'Discord.js', 'Node.js'],
    category: 'Frontend',
    imageBg: 'from-brand-teal to-cyan-700',
    liveLink: '#'
  },
  {
    title: 'Kahoot Answers Viewer',
    description: 'Real-time quiz analysis tool allowing visual answer trackers and immediate result visualizations.',
    techStack: ['CSS', 'Express', 'Node.js'],
    category: 'Tools',
    imageBg: 'from-brand-pink to-rose-700',
    liveLink: '#'
  },
  {
    title: 'Aesthetic Portfolio UI',
    description: 'The interactive prototype, custom animations, and layout mockups developed for this digital resume.',
    techStack: ['Figma', 'Vite', 'TailwindCSS'],
    category: 'Design',
    imageBg: 'from-indigo-600 to-brand-purple',
    liveLink: '#'
  }
])

// Skills dataset
const skills = ref({
  Languages: ['TypeScript', 'JavaScript', 'Python', 'Lua', 'HTML/CSS'],
  Frameworks: ['Vue 3', 'React.js', 'Vite', 'TailwindCSS', 'Flask', 'Express'],
  Databases: ['PostgreSQL', 'SQLite', 'MongoDB', 'Redis'],
  Tools: ['VSCode', 'Neovim', 'Git/GitHub', 'Figma', 'Linux'],
  Others: ['REST APIs', 'UI Design', 'Responsive Layouts', 'SEO Standards']
})

// Certificates dataset
const certificates = ref([
  {
    id: 1,
    title: 'Youth Innovation Competition Award (Second Prize)',
    issuer: 'International Organizing Committee of YICMG',
    date: 'July 2026',
    credentialUrl: '#',
    image: certYicmg,
    skills: ['Governance & Development', 'Youth Innovation', 'Team Collaboration'],
    description: 'Awarded Second Prize in the 10th Youth Innovation Competition on Lancang-Mekong Region\'s Governance and Development.'
  },
  {
    id: 2,
    title: 'Grand Prize & Best Project for Incubation Award',
    issuer: 'International Organizing Committee of YICMG 2026',
    date: 'July 2026',
    credentialUrl: '#',
    image: certYicmgGrand,
    skills: ['Youth Innovation', 'Project Incubation', 'International Collaboration', 'Governance & Development'],
    description: 'Awarded the Grand Prize & Best Project for Incubation Award in the 10th Youth Innovation Competition on Lancang-Mekong Region\'s Governance and Development.'
  },
  {
    id: 3,
    title: 'Frontend Development Internship Certificate',
    issuer: 'KRU IT Solution & ETEC Center',
    date: 'July 15, 2026',
    credentialUrl: '#',
    image: certInternEtec,
    skills: ['Frontend Development', 'Teamwork', 'Professional Growth', 'Web Development'],
    description: 'Successfully completed an internship in Frontend Development at KRU IT Solution, demonstrating dedication, teamwork, and commitment to professional growth.'
  },
  {
    id: 4,
    title: 'Frontend Web Development Specialist Certificate',
    issuer: 'ETEC Training Center',
    date: '2025',
    credentialUrl: '#',
    image: certFrontend,
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'Responsive Web Design', 'UI Components'],
    description: 'Comprehensive certification in Frontend Web Development covering modern HTML, CSS, JavaScript, responsive layouts, and user interface development.'
  },
  {
    id: 5,
    title: 'Vue.js 3 Certified Specialist',
    issuer: 'Vue Mastery & Open JS',
    date: '2024',
    credentialUrl: 'https://vuemastery.com',
    image: certVue,
    skills: ['Vue 3 Composition API', 'Pinia State Management', 'Vite', 'Vue Router'],
    description: 'Advanced specialization in Vue 3 architecture, reactive state management, custom directives, performance optimization, and modular component design.'
  }
])
</script>