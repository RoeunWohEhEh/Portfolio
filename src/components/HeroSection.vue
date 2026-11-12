<template>
  <section id="home" class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[75vh] pt-8">
    <!-- Hero Text -->
    <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
      <!-- Status Badge -->
      <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs text-gray-300 font-mono shadow-sm">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span class="tracking-wide">Available for new opportunities</span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] font-heading tracking-tight">
        Hi, I am <br class="hidden sm:inline" />
        <span class="text-gradient">Sek Chamroeun</span>
      </h1>

      <!-- Dynamic Subheadline -->
      <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 h-10 flex items-center justify-center lg:justify-start">
        <span>A passionate&nbsp;</span>
        <span class="text-brand-teal font-heading font-bold border-r-2 border-brand-teal pr-1.5 animate-pulse">
          {{ currentRole }}
        </span>
      </h2>

      <!-- Description -->
      <p class="text-gray-400 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
        Crafting modern, responsive web experiences with <span class="text-white font-medium">Vue.js</span>, <span class="text-white font-medium">Tailwind CSS</span>, and clean architecture. Focused on intuitive UI, peak performance, and pixel precision.
      </p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-3">
        <a href="#works"
          class="btn-shimmer px-6 py-3 rounded-xl bg-gradient-to-r from-brand-purple via-indigo-600 to-brand-teal text-white font-semibold text-sm shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center inline-flex items-center justify-center gap-2">
          <span>Explore Projects</span>
          <i class="fas fa-arrow-down text-xs"></i>
        </a>

        <a v-if="cvFile" :href="cvFile" download="SekChamroeun_CV.pdf"
          class="px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 hover:text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center inline-flex items-center justify-center gap-2 backdrop-blur-md shadow-sm">
          <i class="fas fa-file-download text-brand-teal text-xs"></i>
          <span>Download CV</span>
        </a>

        <a href="#contacts"
          class="px-6 py-3 rounded-xl border border-white/10 hover:border-brand-purple/40 bg-white/[0.02] hover:bg-brand-purple/10 text-gray-300 hover:text-white font-semibold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center inline-flex items-center justify-center gap-2 backdrop-blur-md">
          <i class="fas fa-envelope text-brand-purple text-xs"></i>
          <span>Contact Me</span>
        </a>
      </div>
    </div>

    <!-- Hero Graphics / Avatar & Interactive Snippet -->
    <div class="lg:col-span-5 flex flex-col items-center justify-center relative">
      <!-- Ambient Backlight -->
      <div class="absolute w-72 h-72 rounded-full bg-brand-purple/20 blur-[90px] -z-10 pointer-events-none"></div>

      <!-- Avatar Card -->
      <div
        class="relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/[0.12] bg-slate-900/50 p-3 shadow-2xl backdrop-blur-xl group hover:border-brand-purple/40 transition-all duration-500">
        <div
          class="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        </div>
        
        <img :src="heroArtwork" alt="Sek Chamroeun Profile Illustration"
          class="w-full h-auto rounded-xl object-cover aspect-[4/5] z-10 relative group-hover:scale-[1.02] transition-transform duration-700" />
        
        <!-- Live Project Badge -->
        <div
          class="absolute bottom-5 left-5 right-5 border border-white/10 bg-[#070A13]/90 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs text-gray-300 flex items-center gap-3 shadow-xl z-20">
          <span class="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse"></span>
          <span class="truncate">Currently building <strong class="text-white font-semibold">Vue 3 Design System</strong></span>
        </div>
      </div>

      <!-- Floating Code Terminal Snippet -->
      <div
        class="hidden sm:block absolute -top-6 -right-6 w-64 border border-white/[0.1] bg-[#070A13]/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl font-mono text-[11px] text-gray-300 z-20 hover:scale-105 hover:border-brand-purple/40 transition-all duration-300">
        <div class="flex items-center justify-between pb-2 mb-2.5 border-b border-white/5">
          <div class="flex gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <span class="text-[10px] text-gray-500">developer.ts</span>
        </div>
        <div class="space-y-1">
          <p><span class="text-brand-purple font-semibold">const</span> <span class="text-sky-300">developer</span> = {</p>
          <p class="pl-3.5"><span class="text-gray-400">name:</span> <span class="text-amber-300">'Chamroeun'</span>,</p>
          <p class="pl-3.5"><span class="text-gray-400">role:</span> <span class="text-emerald-400">'Frontend Dev'</span>,</p>
          <p class="pl-3.5"><span class="text-gray-400">stack:</span> [<span class="text-amber-300">'Vue'</span>, <span class="text-amber-300">'Tailwind'</span>],</p>
          <p class="pl-3.5"><span class="text-gray-400">status:</span> <span class="text-brand-teal">'Available'</span> 🚀</p>
          <p class="text-gray-500">};</p>
        </div>
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
const roles = ['Front-End Developer', 'Web Designer', 'UI/UX Enthusiast', 'CCNA Networking Explorer']
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

  let typeSpeed = isDeleting ? 35 : 75

  if (!isDeleting && charIndex === role.length) {
    typeSpeed = 2200 // Hold
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
