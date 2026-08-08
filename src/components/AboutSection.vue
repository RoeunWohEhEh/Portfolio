<template>
  <section id="about-me" class="scroll-mt-24">
    <div class="flex items-center gap-3 mb-12">
      <span class="text-brand-purple font-mono text-xl">#</span>
      <h2 class="text-3xl font-bold font-heading text-white">about-me</h2>
      <div class="h-[1px] bg-gradient-to-r from-brand-purple to-transparent w-32 hidden sm:block"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <!-- Text Info -->
      <div class="lg:col-span-7 space-y-6">
        <h3 class="text-2xl font-bold text-white font-heading">Self-taught Front-end Developer based in Phnom Penh
        </h3>

        <div class="space-y-4 text-sm text-gray-400 leading-relaxed font-sans">
          <p>
            Hello, I'm <strong class="text-white font-medium">CHAMROEUN</strong>! I specialize in translating
            complex visual designs into interactive, high-fidelity responsive websites.
          </p>
          <p>
            Transforming creative design structures into functional code interfaces is my core passion. I focus
            heavily on component reusability, clean CSS configurations, and seamless navigation layouts.
          </p>
          <p>
            I continuously expand my expertise, ensuring modern best practices are adhered to in every module I
            develop.
          </p>
        </div>

        <!-- Short Timeline -->
        <div class="space-y-4 pt-4 border-t border-white/5">
          <h4 class="text-sm font-bold text-white font-heading">Key Milestones</h4>
          <div class="space-y-3 font-sans">
            <div class="flex items-start gap-4 text-xs">
              <span class="px-2 py-1 rounded bg-brand-purple/20 text-brand-purple font-mono font-bold">2026</span>
              <span class="text-gray-300 font-medium">Self-Employed Freelance Frontend Specialist</span>
            </div>
            <div class="flex items-start gap-4 text-xs">
              <span class="px-2 py-1 rounded bg-brand-teal/20 text-brand-teal font-mono font-bold">2024</span>
              <span class="text-gray-300 font-medium">Built & Deployed multiple dashboard user interfaces</span>
            </div>
            <div class="flex items-start gap-4 text-xs">
              <span class="px-2 py-1 rounded bg-white/10 text-gray-400 font-mono font-bold">2023</span>
              <span class="text-gray-300 font-medium">Started diving deep into Vue.js and UI/UX Designing</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Graphic Container -->
      <div class="lg:col-span-5 flex justify-center relative">
        <div
          class="relative w-full max-w-sm rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 p-3 shadow-2xl backdrop-blur-sm group">
          <div
            class="absolute inset-0 bg-gradient-to-br from-brand-teal/15 to-brand-purple/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>
          <img :src="aboutArtwork" alt="About Me Illustration"
            class="w-full h-auto rounded-xl object-cover aspect-[4/5] z-10 relative group-hover:scale-[1.01] transition-transform duration-500" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  aboutArtwork: {
    type: String,
    required: true
  }
})
</script>
