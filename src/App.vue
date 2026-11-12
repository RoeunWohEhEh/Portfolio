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
      <HeroSection data-aos="fade-up" data-aos-duration="1000" :heroArtwork="heroArtwork" :cvFile="cvFile" />

      <!-- Stats Metrics Section -->
      <StatsSection data-aos="fade-up" data-aos-delay="200" :stats="stats" />

      <!-- Projects Section -->
      <ProjectsSection data-aos="fade-up" data-aos-delay="200" :projects="projects" />

      <!-- Skills Section -->
      <SkillsSection data-aos="fade-up" data-aos-delay="200" :skills="skills" />

      <!-- Certificates Section -->
      <CertificatesSection data-aos="fade-up" data-aos-delay="200" :certificates="certificates" @open-modal="openCertificateModal" />

      <!-- About Me Section -->
      <AboutSection data-aos="fade-up" data-aos-delay="200" :aboutArtwork="aboutArtwork" />

      <!-- Contacts Section -->
      <ContactSection data-aos="fade-up" data-aos-delay="200" />
    </main>

    <!-- Certificate Lightbox Modal -->
    <CertificateModal :selectedCertificate="selectedCertificate" @close="closeCertificateModal" />

    <!-- Footer -->
    <Footer />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'

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
import certYicmg from './assets/yicmg_certificate.PNG'
import certYicmgGrand from './assets/yicmg_certificate_internaional_team.jpg'
import certInternEtec from './assets/certificate_intern_etec.jpg'
import certFlutterEtec from './assets/flutter_course-etec.jpg'
import certFrontendEtec from './assets/fontend_web_course_etec.jpg'
import certJavaEtec from './assets/java_course-etec.jpg'
import cvFile from './assets/SekChamroeun_CV.pdf'

// CCNA Certificates
import certCcnaEnterprise from './assets/CCNA Enterprise Networking, Security, and Automation.png'
import certCcnaSwitching from './assets/CCNA Switching, Routing, and Wireless Essentials.png'
import certCcnaIntro from './assets/CCNA Introduction to Networks.png'

// Project Demo Images
import projectMovie from './assets/project_movie.png'
import projectZando from './assets/project_zando.png'
import projectPOS from './assets/project_pos.png'

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
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
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
  { value: '3+', label: 'Years Experience', icon: 'fas fa-code' },
  { value: '15+', label: 'Completed Projects', icon: 'fas fa-laptop-code' },
  { value: '9+', label: 'Credentials Earned', icon: 'fas fa-award' },
  { value: '100%', label: 'Passion & Focus', icon: 'fas fa-fire-alt' }
]

// Projects dataset
const projects = ref([
  {
    title: 'Website Movie',
    description: 'A dynamic movie streaming platform built with Vue.js and integrated with the TMDB API. Users can explore trending movies, search for specific titles, view detailed movie information, and manage their personal favorites list.',
    techStack: ['Vue.js', 'JavaScript', 'Bootstrap'],
    category: 'Frontend',
    image: projectMovie,
    imageBg: 'from-violet-900 to-indigo-950',
    liveLink: 'https://vue-movie-app-roan.vercel.app/'
  },
  {
    title: 'Clone UI ZANDO',
    description: 'Clonned UI ZANDO for learning purposes.',
    techStack: ['HTML', 'CSS'],
    category: 'Frontend',
    image: projectZando,
    imageBg: 'from-indigo-600 to-brand-purple',
    liveLink: 'https://zando-lac.vercel.app/'
  },
  {
    title: 'POS Management System',

    description:
      'A full-stack Point of Sale management system built with Vue.js and Laravel. The system includes product and category management, inventory tracking, order processing, cash and KHQR payments, role-based authentication, and REST API integration. The application is deployed using Vercel, Render, and Railway.',

    techStack: [
      'Vue.js',
      'Laravel',
      'MySQL',
      'REST API',
      'Sanctum',
      'Pinia',
      'Axios',
      'Bakong KHQR',
      'Vercel',
      'Render',
      'Railway'
    ],

    category: 'Fullstack',

    image: projectPOS,

    imageBg: 'from-emerald-900 to-slate-950',

    liveLink: 'https://pos-system-frontend-seven.vercel.app/',
  }



])

// Skills dataset
const skills = ref({
  Languages: [
    'JavaScript',
    'Dart',
    'PHP',
    'SQL',
    'HTML/CSS',
    'C/C++',
    'Java'
  ],

  Frameworks: [
    'Flutter',
    'Laravel',
    'Vue.js',
    'Vue 3',
    'Tailwind CSS'
  ],

  Databases: [
    'MySQL',
    'SQLite'
  ],

  Tools: [
    'Git/GitHub',
    'VS Code',
    'Android Studio',
    'Postman',
    'Cisco Packet Tracer',
    'XAMPP'
  ],

  Others: [
    'REST APIs',
    'Dio / HTTP',
    'Laravel Sanctum',
    'Firebase',
    'Responsive UI',
    'CCNA Networking',
    'IT Support',
    'Software Support'
  ]
})

// Certificates dataset
const certificates = ref([
  {
    id: 1,
    title: 'Youth Innovation Competition Award (Second Prize)',
    issuer: 'International Organizing Committee of YICMG 2026 | Wuhan University, China',
    date: 'July 2026',
    credentialUrl: '#',
    image: certYicmg,
    skills: ['Governance & Development', 'Youth Innovation', 'Team Collaboration'],
    description: 'Awarded Second Prize in the 10th Youth Innovation Competition on Lancang-Mekong Region\'s Governance and Development.'
  },
  {
    id: 2,
    title: 'Grand Prize & Best Project for Incubation Award',
    issuer: 'International Organizing Committee of YICMG 2026 | Wuhan University, China',
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
    title: 'Frontend Web Development Course Certificate',
    issuer: 'Engineering of Technology and Electronic Center (ETEC)',
    date: 'June 15, 2026',
    credentialUrl: '#',
    image: certFrontendEtec,
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Vue.js', 'Web Projects'],
    description: 'Successfully completed computer training courses in HTML, CSS, Bootstrap, JavaScript, VueJs, and Project Courses.'
  },
  {
    id: 5,
    title: 'Mobile & Full-Stack Development Course Certificate',
    issuer: 'Engineering of Technology and Electronic Center (ETEC)',
    date: 'July 15, 2025',
    credentialUrl: '#',
    image: certFlutterEtec,
    skills: ['Flutter', 'Dart', 'REST API', 'Laravel', 'Mobile App Development'],
    description: 'Successfully completed computer training courses in Basic & Advanced Flutter, Dart, API integration, Laravel, and Project Courses.'
  },
  {
    id: 6,
    title: 'Java & Database Development Course Certificate',
    issuer: 'Engineering of Technology and Electronic Center (ETEC)',
    date: 'February 15, 2025',
    credentialUrl: '#',
    image: certJavaEtec,
    skills: ['Java', 'MySQL', 'iReport', 'OOP', 'Backend Development'],
    description: 'Successfully completed computer training courses in Basic & Advanced Java, MySQL database management, iReport, and Project Courses.'
  },
  {
    id: 7,
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    issuer: 'Cisco Networking Academy | Royal University of Phnom Penh',
    date: 'February 04, 2026',
    credentialUrl: '#',
    image: certCcnaEnterprise,
    skills: ['Enterprise Networking', 'Network Security', 'OSPFv2', 'ACLs & NAT', 'Network Automation', 'Cisco IOS'],
    description: 'Successfully completed the CCNA Enterprise Networking, Security, and Automation course covering large-scale network architecture, advanced security, OSPFv2, ACLs, NAT, VPNs, and network programmability/automation.'
  },
  {
    id: 8,
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy | Royal University of Phnom Penh',
    date: 'February 04, 2026',
    credentialUrl: '#',
    image: certCcnaSwitching,
    skills: ['VLANs', 'Inter-VLAN Routing', 'STP & EtherChannel', 'DHCPv4 & SLAAC', 'WLAN', 'Routing Fundamentals'],
    description: 'Successfully completed the CCNA Switching, Routing, and Wireless Essentials course focusing on configuring and troubleshooting switches, routers, VLANs, STP, EtherChannel, and WLANs in enterprise environments.'
  },
  {
    id: 9,
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy | Royal University of Phnom Penh',
    date: 'August 11, 2025',
    credentialUrl: '#',
    image: certCcnaIntro,
    skills: ['Network Fundamentals', 'IPv4 & IPv6 Addressing', 'Subnetting', 'Ethernet', 'Cisco IOS Configuration', 'Network Protocols'],
    description: 'Successfully completed the CCNA Introduction to Networks course covering fundamental networking architectures, models, protocols, IPv4/IPv6 addressing, subnetting, and Cisco device configuration.'
  },

])
</script>