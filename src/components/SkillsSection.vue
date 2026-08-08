<template>
  <section id="skills" class="scroll-mt-24">
    <div class="flex items-center gap-3 mb-12">
      <span class="text-brand-teal font-mono text-xl">#</span>
      <h2 class="text-3xl font-bold font-heading text-white">skills</h2>
      <div class="h-[1px] bg-gradient-to-r from-brand-teal to-transparent w-32 hidden sm:block"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <!-- Text and Geometric Side decoration -->
      <div class="lg:col-span-5 space-y-6">
        <h3 class="text-xl font-bold text-white font-heading">My Technical Toolkit</h3>
        <p class="text-sm text-gray-400 leading-relaxed font-sans">
          I construct clean, performant applications utilizing modern tools and standards. Here is the spectrum of
          frameworks, languages, and tools I use to bring interfaces to life.
        </p>
        <div
          class="relative w-full h-44 rounded-xl border border-white/5 bg-slate-900/10 hidden lg:flex items-center justify-center overflow-hidden">
          <div class="absolute inset-0 bg-grid-pattern opacity-40"></div>
          <!-- Floating graphic squares -->
          <div
            class="w-16 h-16 border border-brand-purple/20 absolute -top-4 -left-4 rounded-xl animate-float-slow">
          </div>
          <div class="w-20 h-20 border border-brand-teal/20 absolute -bottom-6 -right-6 rounded-full animate-float">
          </div>
          <span class="font-mono text-xs text-brand-purple select-none animate-pulse-slow">const stack = Vue +
            Tailwind;</span>
        </div>
      </div>

      <!-- Skills List -->
      <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div v-for="(items, category) in skills" :key="category"
          class="border border-white/5 bg-slate-900/20 backdrop-blur-sm rounded-xl p-5 hover:border-brand-teal/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.05)] transition-all duration-300">
          <h4
            class="text-sm font-bold text-white font-heading tracking-wide border-b border-white/5 pb-2.5 mb-4 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-brand-teal"></span>
            {{ category }}
          </h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="item in items" :key="item"
              class="px-2.5 py-1 text-xs font-mono text-gray-300 bg-white/5 rounded-lg border border-white/5 hover:border-brand-teal/30 hover:text-white transition-colors duration-200">
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  skills: {
    type: Object,
    required: true
  }
})
</script>
