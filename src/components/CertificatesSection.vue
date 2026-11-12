<template>
  <section id="certificates" class="scroll-mt-24">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <span class="text-brand-purple font-mono text-2xl font-bold">#</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">certificates</h2>
          <div class="h-[2px] bg-gradient-to-r from-brand-purple via-brand-teal to-transparent w-28 hidden sm:block rounded-full"></div>
        </div>
        <p class="text-sm text-gray-400">Professional credentials, competition awards, and engineering specializations I have earned.</p>
      </div>
      <div class="text-xs font-mono text-brand-teal px-3 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20">
        {{ certificates.length }} Credentials Earned
      </div>
    </div>

    <!-- Certificates Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
      <div v-for="cert in certificates" :key="cert.id"
        class="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0B1120]/80 backdrop-blur-xl overflow-hidden shadow-xl hover:border-brand-purple/40 hover:shadow-[0_10px_35px_rgba(139,92,246,0.15)] hover:-translate-y-1.5 transition-all duration-500">

        <!-- Image / Artwork Container -->
        <div class="h-52 relative overflow-hidden bg-slate-950 cursor-pointer" @click="$emit('open-modal', cert)">
          <img :src="cert.image" :alt="cert.title"
            class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-slate-950/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-300"></div>

          <!-- Hover Action Badge -->
          <div
            class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span
              class="px-4 py-2 rounded-xl bg-brand-purple text-white text-xs font-semibold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <i class="fas fa-search-plus text-[11px]"></i> Preview Certificate
            </span>
          </div>

          <!-- Date Floating Badge -->
          <div
            class="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#070A13]/85 border border-white/10 text-[10px] font-mono text-brand-teal backdrop-blur-md shadow-md">
            {{ cert.date }}
          </div>
        </div>

        <!-- Content Area -->
        <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-xs font-mono text-brand-purple">
              <i class="fas fa-award text-[11px]"></i>
              <span class="line-clamp-1 text-[11px]">{{ cert.issuer }}</span>
            </div>
            <h3
              class="text-white text-base sm:text-lg font-bold font-heading group-hover:text-brand-purple transition-colors duration-300 line-clamp-2 leading-snug">
              {{ cert.title }}
            </h3>
            <p class="text-gray-400 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
              {{ cert.description }}
            </p>

            <!-- Skill Tags -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span v-for="skill in cert.skills.slice(0, 3)" :key="skill"
                class="px-2 py-0.5 text-[10px] font-mono text-gray-300 bg-white/[0.04] rounded-md border border-white/[0.06]">
                {{ skill }}
              </span>
              <span v-if="cert.skills.length > 3"
                class="px-2 py-0.5 text-[10px] font-mono text-gray-400 bg-white/[0.04] rounded-md">
                +{{ cert.skills.length - 3 }}
              </span>
            </div>
          </div>

          <!-- Actions -->
          <div class="pt-3 border-t border-white/[0.06]">
            <button @click="$emit('open-modal', cert)"
              class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-brand-purple border border-white/[0.08] hover:border-brand-purple text-xs text-gray-300 hover:text-white font-medium transition-all duration-300 cursor-pointer">
              <i class="fas fa-expand text-[10px]"></i> View Full Certificate
            </button>
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
