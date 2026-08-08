<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/5 bg-brand-bg/75 backdrop-blur-md transition-all duration-300">
    <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#home" class="flex items-center gap-2 font-heading font-bold text-white text-lg tracking-tight group">
        <span class="text-brand-purple group-hover:rotate-12 transition-transform duration-300">&lt;</span>
        <span>SEK CHAMROEUN<span class="text-brand-teal font-light">.dev</span></span>
        <span class="text-brand-purple group-hover:-rotate-12 transition-transform duration-300">&gt;</span>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium">
        <a v-for="link in navLinks" :key="link.href" :href="link.href"
          class="relative py-1 transition-colors duration-200"
          :class="activeSection === link.id ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'">
          <span class="text-brand-purple font-mono mr-1">#</span>{{ link.name }}
          <span v-if="activeSection === link.id"
            class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-purple to-brand-teal rounded-full"></span>
        </a>
        <a href="#contacts"
          class="ml-2 px-4 py-2 text-xs font-semibold text-white border border-brand-purple/30 rounded-lg hover:bg-brand-purple/10 hover:border-brand-purple hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300">
          Hire Me
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" class="md:hidden text-gray-400 hover:text-white focus:outline-none p-1"
        aria-label="Toggle menu">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <div v-show="mobileMenuOpen"
      class="md:hidden border-b border-white/5 bg-brand-bg/95 backdrop-blur-lg animate-fade-in">
      <div class="px-6 py-4 flex flex-col gap-4 text-sm font-medium">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="mobileMenuOpen = false"
          class="flex items-center py-2"
          :class="activeSection === link.id ? 'text-white border-l-2 border-brand-purple pl-2' : 'text-gray-400 hover:text-white'">
          <span class="text-brand-purple font-mono mr-2">#</span>{{ link.name }}
        </a>
        <a href="#contacts" @click="mobileMenuOpen = false"
          class="text-center px-4 py-2 border border-brand-purple/30 rounded-lg hover:bg-brand-purple/10 text-white transition-colors duration-200">
          Hire Me
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  navLinks: {
    type: Array,
    required: true
  },
  activeSection: {
    type: String,
    default: 'home'
  }
})

const mobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
