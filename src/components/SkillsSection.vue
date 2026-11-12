<template>
  <section id="skills" class="scroll-mt-24">
    <!-- Header -->
    <div class="flex items-center gap-3 mb-12">
      <span class="text-brand-teal font-mono text-2xl font-bold">#</span>
      <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">skills</h2>
      <div class="h-[2px] bg-gradient-to-r from-brand-teal via-brand-purple to-transparent w-28 hidden sm:block rounded-full"></div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
      <!-- Left Editorial Column -->
      <div class="lg:col-span-5 space-y-6">
        <div class="space-y-3">
          <h3 class="text-2xl font-bold text-white font-heading">
            Technical Stack & Engineering Toolkit
          </h3>
          <p class="text-sm text-gray-400 leading-relaxed font-sans">
            I craft clean, high-performance web applications utilizing modern tools and engineering standards. Here is the spectrum of frameworks, languages, databases, and network technologies I leverage.
          </p>
        </div>

        <!-- Decorative Live Stack Widget -->
        <div
          class="relative w-full rounded-2xl border border-white/[0.08] bg-[#0A0F1D]/80 backdrop-blur-xl p-5 shadow-xl overflow-hidden group">
          <div class="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-brand-teal/15 blur-2xl pointer-events-none"></div>
          
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
            <span class="text-xs font-mono font-semibold text-gray-300 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
              Core Specialization
            </span>
            <span class="text-[10px] font-mono text-brand-purple">Vue 3 + Tailwind CSS</span>
          </div>

          <div class="space-y-2.5 font-mono text-xs text-gray-400">
            <div class="flex justify-between items-center">
              <span>Frontend Architecture</span>
              <span class="text-brand-teal font-semibold">95%</span>
            </div>
            <div class="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div class="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-teal w-[95%]"></div>
            </div>

            <div class="flex justify-between items-center pt-1">
              <span>UI/UX & Responsive Systems</span>
              <span class="text-brand-purple font-semibold">90%</span>
            </div>
            <div class="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div class="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-pink w-[90%]"></div>
            </div>

            <div class="flex justify-between items-center pt-1">
              <span>API Integration & Backend</span>
              <span class="text-indigo-400 font-semibold">85%</span>
            </div>
            <div class="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div class="h-full rounded-full bg-gradient-to-r from-indigo-500 to-brand-purple w-[85%]"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Skills Grid (Bento Style) -->
      <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div v-for="(items, category) in skills" :key="category"
          class="border border-white/[0.08] bg-[#0A0F1D]/75 backdrop-blur-xl rounded-2xl p-5 hover:border-brand-teal/40 hover:shadow-[0_8px_30px_rgba(20,184,166,0.1)] transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between pb-3 mb-3.5 border-b border-white/[0.06]">
              <h4 class="text-sm font-bold text-white font-heading tracking-wide flex items-center gap-2">
                <span class="w-2 h-2 rounded-full" :class="getCategoryColor(category)"></span>
                {{ category }}
              </h4>
              <i :class="getCategoryIcon(category)" class="text-xs text-gray-500"></i>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span v-for="item in items" :key="item"
                class="px-2.5 py-1 text-xs font-mono text-gray-300 bg-white/[0.04] rounded-lg border border-white/[0.06] hover:border-brand-teal/40 hover:bg-white/[0.08] hover:text-white transition-all duration-200">
                {{ item }}
              </span>
            </div>
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

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Languages': return 'fas fa-code'
    case 'Frameworks': return 'fas fa-layer-group'
    case 'Databases': return 'fas fa-database'
    case 'Tools': return 'fas fa-tools'
    case 'Others': return 'fas fa-network-wired'
    default: return 'fas fa-check-circle'
  }
}

const getCategoryColor = (category) => {
  switch (category) {
    case 'Languages': return 'bg-brand-purple'
    case 'Frameworks': return 'bg-brand-teal'
    case 'Databases': return 'bg-emerald-400'
    case 'Tools': return 'bg-amber-400'
    case 'Others': return 'bg-brand-pink'
    default: return 'bg-brand-teal'
  }
}
</script>
