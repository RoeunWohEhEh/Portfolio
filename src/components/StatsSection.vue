<template>
  <section
    class="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border border-white/5 bg-slate-900/20 backdrop-blur-sm">
    <div v-for="stat in stats" :key="stat.label" class="text-center space-y-1 group">
      <div
        class="text-3xl sm:text-4xl font-extrabold font-heading text-white group-hover:text-brand-purple transition-colors duration-300">
        {{ stat.value }}</div>
      <div class="text-xs text-gray-400 tracking-wider uppercase font-mono">{{ stat.label }}</div>
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
