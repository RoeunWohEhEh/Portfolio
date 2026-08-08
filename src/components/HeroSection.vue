<template>
  <section id="home" class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
    <!-- Hero Text -->
    <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
      <div
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono shadow-inner animate-pulse-slow">
        <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
        <span>Available for new freelance roles</span>
      </div>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-heading">
        Hi, I am <span class="text-gradient">Sek Chamroeun</span>
      </h1>
      <h2 class="text-2xl sm:text-3xl font-semibold text-gray-200 h-10">
        I'm a <span class="text-brand-teal border-r-2 border-brand-teal/80 pr-1 animate-pulse">{{ currentRole }}</span>
      </h2>
      <p class="text-gray-400 text-base max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
        Crafting responsive websites where modern technologies meet clean, professional design. Specializing in
        high-performance frontend interfaces.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
        <a :href="cvFile" download="SekChamroeun_CV.pdf"
          class="px-6 py-3 rounded-lg bg-gradient-to-r from-brand-purple to-brand-teal text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center inline-flex items-center justify-center">
          Download CV <i class="fas fa-download ml-2 text-xs"></i>
        </a>
        <a href="#works"
          class="px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold text-sm hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center">
          Explore Works
        </a>
      </div>
    </div>

    <!-- Hero Graphics / Interactive Code Terminal -->
    <div class="lg:col-span-5 flex flex-col items-center justify-center relative">
      <!-- Main Avatar container -->
      <div
        class="relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 p-3 shadow-2xl backdrop-blur-sm group">
        <div
          class="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        </div>
        <img :src="heroArtwork" alt="Sek Chamroeun Profile Illustration"
          class="w-full h-auto rounded-xl object-cover aspect-[4/5] z-10 relative group-hover:scale-[1.01] transition-transform duration-500" />
        <!-- Floating badge -->
        <div
          class="absolute bottom-6 left-6 right-6 border border-white/10 bg-slate-950/85 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs text-gray-300 flex items-center gap-3 shadow-lg z-20">
          <div class="w-3 h-3 bg-brand-purple rounded-full animate-pulse"></div>
          <span>Currently building <strong class="text-white font-medium">Vue 3 Design System</strong></span>
        </div>
      </div>

      <!-- Decorative Terminal Code snippet on side -->
      <div
        class="hidden sm:block absolute -top-8 -right-8 w-60 border border-white/10 bg-slate-950/90 rounded-xl p-4 shadow-2xl font-mono text-[10px] text-gray-400 z-20 hover:scale-105 hover:border-brand-purple/30 transition-all duration-300">
        <div class="flex gap-1.5 mb-3">
          <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        </div>
        <p class="text-brand-purple font-semibold">&gt; dev.json</p>
        <p class="text-emerald-400">"status": <span class="text-amber-300">"coding"</span>,</p>
        <p class="text-sky-400">"location": <span class="text-amber-300">"Phnom Penh"</span>,</p>
        <p class="text-sky-400">"coffee": <span class="text-amber-300">"overflowing"</span>,</p>
        <p class="text-gray-500">// raising user-friendly web</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  heroArtwork: {
    type: String,
    required: true
  },
  cvFile: {
    type: String,
    required: true
  }
})

// Typing Effect implementation
const roles = ['Web Designer', 'Front-End Developer', 'UI/UX Designer']
const currentRole = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typingTimeout = null

const typeEffect = () => {
  const role = roles[roleIndex]
  if (isDeleting) {
    currentRole.value = role.substring(0, charIndex - 1)
    charIndex--
  } else {
    currentRole.value = role.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 40 : 80

  if (!isDeleting && charIndex === role.length) {
    typeSpeed = 2500 // Hold
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
    typeSpeed = 300 // Pause
  }

  typingTimeout = setTimeout(typeEffect, typeSpeed)
}

onMounted(() => {
  typeEffect()
})

onUnmounted(() => {
  clearTimeout(typingTimeout)
})
</script>
