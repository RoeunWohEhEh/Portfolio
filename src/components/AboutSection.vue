<template>
  <section id="about-me" class="scroll-mt-24">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-12">
      <span class="text-brand-purple font-mono text-2xl font-bold">#</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">about-me</h2>
      <div class="h-[2px] bg-gradient-to-r from-brand-purple via-brand-teal to-transparent w-28 hidden sm:block rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <!-- Text Narrative Column -->
      <div class="lg:col-span-7 space-y-6">
        <div class="space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-xs text-brand-purple font-mono">
            <i class="fas fa-terminal text-[10px]"></i>
            <span>Engineering & Design Focus</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-snug">
            Computer Science Student & Front-End Developer based in Phnom Penh
          </h3>
        </div>

        <div class="space-y-4 text-sm sm:text-base text-gray-400 leading-relaxed font-sans font-normal">
          <p>
            Hello, I'm <strong class="text-white font-semibold">SEK CHAMROEUN</strong>!
            I'm a senior Computer Science student at the <strong class="text-gray-200">Royal University of Phnom Penh (RUPP)</strong> with an acute focus on modern front-end engineering, UI/UX aesthetics, and full-stack systems.
          </p>

          <p>
            I specialize in transforming intricate designs and ambitious concepts into fluid, responsive, and high-performance web applications using <strong class="text-white font-semibold">Vue.js, Tailwind CSS, JavaScript, and Laravel REST APIs</strong>.
          </p>

          <p>
            With formal training spanning modern web architecture, international innovation competitions, and <strong class="text-brand-teal font-medium">Cisco CCNA networking</strong>, I bring a well-rounded technical foundation and an unwavering eye for detail to every codebase.
          </p>
        </div>

        <!-- Milestones Modern Timeline -->
        <div class="pt-6 border-t border-white/[0.08] space-y-4">
          <h4 class="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-2">
            <i class="fas fa-history text-brand-purple"></i>
            Key Milestones & Journey
          </h4>

          <div class="space-y-3 font-sans">
            <div class="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-purple/30 transition-colors">
              <span class="px-2.5 py-1 rounded-md bg-brand-purple/15 text-brand-purple border border-brand-purple/25 text-xs font-mono font-bold shrink-0">
                2026
              </span>
              <p class="text-xs sm:text-sm text-gray-300">
                Earning Cisco CCNA Credentials, building full-stack enterprise web systems, and YICMG International Competition Finalist.
              </p>
            </div>

            <div class="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-teal/30 transition-colors">
              <span class="px-2.5 py-1 rounded-md bg-brand-teal/15 text-brand-teal border border-brand-teal/25 text-xs font-mono font-bold shrink-0">
                2025
              </span>
              <p class="text-xs sm:text-sm text-gray-300">
                Developed production-ready web apps using Vue.js, Laravel, REST APIs, and Mobile development at ETEC Center.
              </p>
            </div>

            <div class="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-pink/30 transition-colors">
              <span class="px-2.5 py-1 rounded-md bg-white/10 text-gray-400 border border-white/10 text-xs font-mono font-bold shrink-0">
                2024
              </span>
              <p class="text-xs sm:text-sm text-gray-300">
                Deep dive into modern web technologies, responsive layouts, data structures, and UI/UX design paradigms.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Graphic Column -->
      <div class="lg:col-span-5 flex justify-center relative">
        <!-- Ambient Glow -->
        <div class="absolute w-64 h-64 rounded-full bg-brand-teal/15 blur-[90px] -z-10 pointer-events-none"></div>

        <div
          class="relative w-full max-w-sm rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0A0F1D]/80 p-3 shadow-2xl backdrop-blur-xl group hover:border-brand-teal/40 transition-all duration-500">
          <div
            class="absolute inset-0 bg-gradient-to-br from-brand-teal/15 via-transparent to-brand-purple/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          </div>

          <img :src="aboutArtwork" alt="About Me Illustration"
            class="w-full h-auto rounded-2xl object-cover aspect-[4/5] z-10 relative group-hover:scale-[1.02] transition-transform duration-700" />
          
          <div
            class="absolute bottom-6 left-6 right-6 border border-white/10 bg-[#070A13]/90 backdrop-blur-md px-4 py-2.5 rounded-xl text-xs text-gray-300 flex items-center justify-between shadow-xl z-20">
            <span class="flex items-center gap-2">
              <i class="fas fa-graduation-cap text-brand-purple"></i>
              <span>RUPP CS Student</span>
            </span>
            <span class="text-brand-teal font-mono text-[11px]">Senior Year</span>
          </div>
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
