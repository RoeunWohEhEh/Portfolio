<template>
  <section id="works" class="scroll-mt-24">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <span class="text-brand-purple font-mono text-xl">#</span>
          <h2 class="text-3xl font-bold font-heading text-white">projects</h2>
          <div class="h-[1px] bg-gradient-to-r from-brand-purple to-transparent w-32 hidden sm:block"></div>
        </div>
        <p class="text-sm text-gray-400">A curation of recent applications and user interfaces I built.</p>
      </div>

      <!-- Project Filter Tabs -->
      <div
        class="flex flex-wrap gap-2 bg-slate-950/60 p-1.5 border border-white/5 rounded-xl text-xs font-semibold">
        <button v-for="tab in filterTabs" :key="tab"
          @click="activeFilter = tab" class="px-4 py-2 rounded-lg transition-all duration-300"
          :class="activeFilter === tab ? 'bg-brand-purple text-white shadow-md' : 'text-gray-400 hover:text-white'">
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Project Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in filteredProjects" :key="project.title"
        class="group relative flex flex-col border border-white/5 bg-slate-900/30 rounded-2xl overflow-hidden shadow-lg hover:border-brand-purple/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-500">

        <!-- Graphic Image Cover -->
        <div class="h-48 relative overflow-hidden bg-slate-950">
          <!-- Gradient Overlay Background -->
          <div
            class="absolute inset-0 bg-gradient-to-br opacity-80 z-0 group-hover:scale-105 transition-transform duration-500"
            :class="project.imageBg"></div>

          <!-- Tech Grid Pattern -->
          <div class="absolute inset-0 bg-grid-pattern opacity-30 z-1"></div>

          <!-- Monospace Tech Tag Floating inside the Cover -->
          <div class="absolute inset-0 flex items-center justify-center z-10 p-4">
            <span
              class="font-mono text-white/90 text-sm font-semibold tracking-wide bg-slate-950/60 backdrop-blur-sm px-4 py-2 border border-white/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
              &lt; {{ project.title }} /&gt;
            </span>
          </div>
        </div>

        <!-- Tech badges row -->
        <div
          class="flex flex-wrap gap-1.5 border-b border-white/5 px-4 py-3 bg-slate-950/40 text-[10px] font-mono text-brand-teal">
          <span v-for="tech in project.techStack" :key="tech"
            class="px-2 py-0.5 rounded bg-white/5 border border-white/5">
            {{ tech }}
          </span>
        </div>

        <!-- Content Area -->
        <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <h3
              class="text-white text-lg font-bold font-heading group-hover:text-brand-purple transition-colors duration-300">
              {{ project.title }}</h3>
            <p class="text-gray-400 text-xs leading-relaxed">{{ project.description }}</p>
          </div>
          <div class="flex gap-3 pt-2">
            <a :href="project.liveLink"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white hover:bg-brand-purple hover:border-brand-purple hover:shadow-[0_0_10px_rgba(139,92,246,0.2)] transition-all duration-300">
              Live View <i class="fas fa-external-link-alt text-[10px]"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const filterTabs = ['All', 'Frontend', 'Fullstack', 'Tools', 'Design']
const activeFilter = ref('All')

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return props.projects
  return props.projects.filter(p => p.category === activeFilter.value)
})
</script>
