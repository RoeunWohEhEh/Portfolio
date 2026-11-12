<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4">
    <div
      class="max-w-6xl mx-auto px-5 py-3 rounded-2xl border border-white/[0.08] bg-[#070A13]/85 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex justify-between items-center transition-all duration-300 hover:border-white/[0.15]">
      
      <!-- Brand Logo -->
      <a href="#home" class="flex items-center gap-2.5 font-heading font-bold text-white text-base sm:text-lg tracking-tight group">
        <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-teal flex items-center justify-center text-white shadow-md shadow-brand-purple/20 group-hover:scale-105 transition-transform duration-300">
          <span class="font-mono text-xs font-black">&lt;/&gt;</span>
        </div>
        <div class="flex items-center">
          <span class="text-white group-hover:text-brand-purple transition-colors duration-300 font-extrabold tracking-wide">CHAMROEUN</span>
          <span class="ml-1 text-[11px] font-mono font-medium px-1.5 py-0.5 rounded bg-brand-teal/15 text-brand-teal border border-brand-teal/30">.dev</span>
        </div>
      </a>

      <!-- Desktop Nav Items -->
      <div class="hidden md:flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm font-medium">
        <a v-for="link in navLinks" :key="link.href" :href="link.href"
          class="relative px-3.5 py-1.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 group"
          :class="activeSection === link.id
            ? 'text-white bg-white/10 font-semibold shadow-inner'
            : 'text-gray-400 hover:text-white hover:bg-white/5'">
          <span class="text-brand-purple font-mono opacity-60 group-hover:opacity-100 transition-opacity">#</span>
          <span>{{ link.name }}</span>
        </a>
      </div>

      <!-- Action Button -->
      <div class="hidden md:flex items-center gap-3">
        <a href="#contacts"
          class="btn-shimmer relative px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-purple/90 border border-brand-purple/40 rounded-xl hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2">
          <span>Hire Me</span>
          <i class="fas fa-arrow-right text-[10px] transform group-hover:translate-x-0.5 transition-transform"></i>
        </a>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button @click="toggleMobileMenu"
        class="md:hidden w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:border-brand-purple/40 transition-colors focus:outline-none"
        aria-label="Toggle navigation menu">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-3 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in" leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-3 opacity-0">
      <div v-show="mobileMenuOpen"
        class="md:hidden mt-2 max-w-6xl mx-auto border border-white/[0.08] bg-[#070A13]/95 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl">
        <div class="flex flex-col gap-1.5 text-sm font-medium">
          <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="mobileMenuOpen = false"
            class="flex items-center px-4 py-2.5 rounded-xl transition-all"
            :class="activeSection === link.id
              ? 'text-white bg-brand-purple/20 border border-brand-purple/30 font-semibold'
              : 'text-gray-400 hover:text-white hover:bg-white/5'">
            <span class="text-brand-purple font-mono mr-2.5">#</span>{{ link.name }}
          </a>
          <div class="pt-2 mt-2 border-t border-white/5">
            <a href="#contacts" @click="mobileMenuOpen = false"
              class="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-teal text-white font-semibold text-xs shadow-lg">
              <span>Get In Touch</span>
              <i class="fas fa-paper-plane text-[10px]"></i>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
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
