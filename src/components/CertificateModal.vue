<template>
  <div v-if="selectedCertificate"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
    @click.self="$emit('close')">
    <div
      class="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
      <!-- Modal Header -->
      <div class="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-slate-950/60">
        <div class="flex items-center gap-3">
          <i class="fas fa-award text-brand-purple text-lg"></i>
          <div>
            <h3 class="text-white font-bold text-base font-heading">{{ selectedCertificate.title }}</h3>
            <p class="text-xs text-gray-400 font-mono">{{ selectedCertificate.issuer }} • {{ selectedCertificate.date }}</p>
          </div>
        </div>
        <button @click="$emit('close')"
          class="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
          <i class="fas fa-times text-lg"></i>
        </button>
      </div>

      <!-- Modal Body Image -->
      <div
        class="p-6 overflow-y-auto max-h-[70vh] flex flex-col items-center justify-center bg-slate-950/40 space-y-6">
        <img :src="selectedCertificate.image" :alt="selectedCertificate.title"
          class="w-full max-h-[60vh] object-contain rounded-xl border border-white/10 shadow-lg" />
        <p class="text-sm text-gray-300 text-center max-w-2xl font-sans leading-relaxed">
          {{ selectedCertificate.description }}
        </p>
      </div>

      <!-- Modal Footer -->
      <div class="flex justify-between items-center px-6 py-4 border-t border-white/10 bg-slate-950/60 text-xs">
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in selectedCertificate.skills" :key="skill"
            class="px-2.5 py-1 text-gray-300 bg-white/5 rounded-md border border-white/5 font-mono">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  selectedCertificate: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])
</script>
