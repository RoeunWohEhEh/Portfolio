<template>
  <div v-if="selectedCertificate"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
    @click.self="$emit('close')">
    <div
      class="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0F1D] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
      
      <!-- Modal Header -->
      <div class="flex justify-between items-center px-6 py-4 border-b border-white/[0.08] bg-[#070A13]/80 backdrop-blur-md">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-brand-purple/15 border border-brand-purple/30 flex items-center justify-center text-brand-purple">
            <i class="fas fa-award text-base"></i>
          </div>
          <div>
            <h3 class="text-white font-bold text-base sm:text-lg font-heading leading-tight">{{ selectedCertificate.title }}</h3>
            <p class="text-xs text-gray-400 font-mono mt-0.5">{{ selectedCertificate.issuer }} • {{ selectedCertificate.date }}</p>
          </div>
        </div>
        <button @click="$emit('close')"
          class="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal">
          <i class="fas fa-times text-sm"></i>
        </button>
      </div>

      <!-- Modal Body Image -->
      <div
        class="p-6 overflow-y-auto max-h-[65vh] flex flex-col items-center justify-center bg-slate-950/40 space-y-5">
        <img :src="selectedCertificate.image" :alt="selectedCertificate.title"
          class="w-full max-h-[55vh] object-contain rounded-2xl border border-white/10 shadow-2xl bg-black/30" />
        <p class="text-sm text-gray-300 text-center max-w-2xl font-sans leading-relaxed">
          {{ selectedCertificate.description }}
        </p>
      </div>

      <!-- Modal Footer -->
      <div class="flex flex-wrap justify-between items-center px-6 py-4 border-t border-white/[0.08] bg-[#070A13]/80 backdrop-blur-md text-xs gap-3">
        <div class="flex flex-wrap gap-2">
          <span v-for="skill in selectedCertificate.skills" :key="skill"
            class="px-2.5 py-1 text-gray-300 bg-white/5 rounded-lg border border-white/5 font-mono text-[11px]">
            {{ skill }}
          </span>
        </div>
        <button @click="$emit('close')"
          class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors cursor-pointer ml-auto">
          Close Preview
        </button>
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
