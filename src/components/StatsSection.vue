<template>
  <section class="relative">
    <!-- Subtle ambient glow behind stats -->
    <div class="absolute inset-0 bg-gradient-to-r from-brand-purple/10 via-brand-teal/5 to-brand-pink/10 blur-2xl -z-10 rounded-3xl"></div>

    <div
      class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0A0F1D]/75 backdrop-blur-xl shadow-xl">
      <div v-for="(stat, idx) in stats" :key="stat.label"
        class="relative flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] group">
        
        <!-- Subtle icon container -->
        <div v-if="stat.icon"
          class="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 group-hover:text-brand-teal group-hover:border-brand-teal/30 group-hover:scale-110 transition-all duration-300 mb-2.5">
          <i :class="stat.icon" class="text-sm"></i>
        </div>

        <div
          class="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-purple group-hover:to-brand-teal transition-all duration-300">
          {{ stat.value }}
        </div>
        <div class="text-[11px] sm:text-xs text-gray-400 font-mono tracking-wider uppercase mt-1">
          {{ stat.label }}
        </div>

        <!-- Vertical Divider for Desktop -->
        <div v-if="idx < stats.length - 1"
          class="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/[0.06]"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true
  }
})
</script>
