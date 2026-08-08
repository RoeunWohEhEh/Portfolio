<template>
  <section id="certificates" class="scroll-mt-24">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <span class="text-brand-purple font-mono text-xl">#</span>
          <h2 class="text-3xl font-bold font-heading text-white">certificates</h2>
          <div class="h-[1px] bg-gradient-to-r from-brand-purple to-transparent w-32 hidden sm:block"></div>
        </div>
        <p class="text-sm text-gray-400">Professional credentials and specializations I have earned.</p>
      </div>
    </div>

    <!-- Certificates Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="cert in certificates" :key="cert.id"
        class="group relative flex flex-col border border-white/5 bg-slate-900/30 rounded-2xl overflow-hidden shadow-lg hover:border-brand-purple/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-500">

        <!-- Image / Artwork Header -->
        <div class="h-56 relative overflow-hidden bg-slate-950 cursor-pointer" @click="$emit('open-modal', cert)">
          <img :src="cert.image" :alt="cert.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div
            class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span
              class="px-4 py-2 rounded-xl bg-brand-purple/90 text-white text-xs font-semibold shadow-lg flex items-center gap-2">
              <i class="fas fa-search-plus"></i> Preview Certificate
            </span>
          </div>
          <!-- Issuer & Date Floating Badge -->
          <div
            class="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 text-[10px] font-mono text-brand-teal backdrop-blur-md">
            {{ cert.date }}
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-xs font-mono text-brand-purple">
              <i class="fas fa-award"></i>
              <span>{{ cert.issuer }}</span>
            </div>
            <h3
              class="text-white text-xl font-bold font-heading group-hover:text-brand-purple transition-colors duration-300">
              {{ cert.title }}
            </h3>
            <p class="text-gray-400 text-xs leading-relaxed">
              {{ cert.description }}
            </p>

            <!-- Skill Tags -->
            <div class="flex flex-wrap gap-1.5 pt-2">
              <span v-for="skill in cert.skills" :key="skill"
                class="px-2.5 py-1 text-[11px] font-mono text-gray-300 bg-white/5 rounded-md border border-white/5">
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-3 pt-4 border-t border-white/5">
            <button @click="$emit('open-modal', cert)"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white hover:bg-brand-purple hover:border-brand-purple transition-all duration-300">
              <i class="fas fa-expand text-[10px]"></i> View Full Preview
            </button>
            <a :href="cert.credentialUrl" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-brand-teal/30 text-xs text-brand-teal hover:bg-brand-teal/10 hover:border-brand-teal transition-all duration-300">
              <i class="fas fa-external-link-alt text-[10px]"></i> Verify Credential
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  certificates: {
    type: Array,
    required: true
  }
})

defineEmits(['open-modal'])
</script>
