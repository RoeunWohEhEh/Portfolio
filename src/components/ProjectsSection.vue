<template>
  <section id="works" class="scroll-mt-24">
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <span class="text-brand-purple font-mono text-2xl font-bold">#</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">projects</h2>
          <div class="h-[2px] bg-gradient-to-r from-brand-purple via-brand-teal to-transparent w-28 hidden sm:block rounded-full"></div>
        </div>
        <p class="text-sm text-gray-400 max-w-lg">
          A showcase of responsive web applications, full-stack systems, and user interfaces.
        </p>
      </div>

      <!-- Filter Segmented Tabs -->
      <div
        class="flex flex-wrap gap-1.5 p-1.5 rounded-2xl border border-white/[0.08] bg-[#0A0F1D]/80 backdrop-blur-xl shadow-lg">
        <button v-for="tab in filterTabs" :key="tab" @click="activeFilter = tab"
          class="px-4 py-2 rounded-xl text-xs font-semibold font-mono tracking-wide transition-all duration-300 cursor-pointer"
          :class="activeFilter === tab
            ? 'bg-gradient-to-r from-brand-purple to-indigo-600 text-white shadow-md shadow-brand-purple/20'
            : 'text-gray-400 hover:text-white hover:bg-white/5'">
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- Project Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      <div v-for="project in filteredProjects" :key="project.title"
        class="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#0B1120]/80 backdrop-blur-xl overflow-hidden shadow-xl hover:border-brand-purple/40 hover:shadow-[0_10px_35px_rgba(139,92,246,0.15)] hover:-translate-y-1.5 transition-all duration-500">
        
        <!-- Image Cover Area -->
        <div class="h-56 relative overflow-hidden bg-slate-950 cursor-pointer" @click="handleCardClick(project)">
          <template v-if="project.image">
            <img :src="project.image" :alt="project.title"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-black/20 opacity-90 group-hover:opacity-75 transition-opacity duration-300">
            </div>
          </template>

          <template v-else>
            <div
              class="absolute inset-0 bg-gradient-to-br opacity-80 group-hover:scale-105 transition-transform duration-500"
              :class="project.imageBg || 'from-brand-purple to-slate-900'"></div>
            <div class="absolute inset-0 bg-grid-pattern opacity-30"></div>
            <div class="absolute inset-0 flex items-center justify-center p-4">
              <span
                class="font-mono text-white text-sm font-semibold tracking-wide bg-slate-950/70 backdrop-blur-md px-4 py-2 border border-white/10 rounded-xl group-hover:scale-105 transition-transform duration-300">
                &lt; {{ project.title }} /&gt;
              </span>
            </div>
          </template>

          <!-- Category Pill -->
          <div class="absolute top-3.5 left-3.5 z-10">
            <span
              class="px-3 py-1 text-[11px] font-mono font-medium rounded-full bg-[#070A13]/85 backdrop-blur-md text-brand-teal border border-brand-teal/30 shadow-md">
              {{ project.category }}
            </span>
          </div>

          <!-- Hover Overlay -->
          <div
            class="absolute inset-0 flex items-center justify-center bg-slate-950/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <span
              class="px-4 py-2 text-xs font-semibold text-white bg-brand-purple rounded-xl shadow-lg border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
              <i v-if="project.liveLink && project.liveLink !== '#'" class="fas fa-external-link-alt text-[10px]"></i>
              <i v-else class="fas fa-search-plus text-[10px]"></i>
              <span>View Project</span>
            </span>
          </div>
        </div>

        <!-- Tech Stack Pill Row -->
        <div class="flex flex-wrap gap-1.5 px-5 py-3 border-b border-white/[0.06] bg-white/[0.01]">
          <span v-for="tech in project.techStack.slice(0, 4)" :key="tech"
            class="px-2.5 py-0.5 text-[10px] font-mono rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.06]">
            {{ tech }}
          </span>
          <span v-if="project.techStack.length > 4"
            class="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/[0.04] text-gray-400">
            +{{ project.techStack.length - 4 }}
          </span>
        </div>

        <!-- Content Area -->
        <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-2.5">
            <h3
              class="text-white text-lg font-bold font-heading group-hover:text-brand-purple transition-colors duration-300 line-clamp-1">
              {{ project.title }}
            </h3>
            <p class="text-gray-400 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2.5 pt-3 border-t border-white/[0.06]">
            <a v-if="project.liveLink && project.liveLink !== '#'" :href="project.liveLink" target="_blank"
              rel="noopener noreferrer"
              class="btn-shimmer flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-brand-purple/90 hover:bg-brand-purple text-white text-xs font-semibold shadow-md hover:shadow-brand-purple/30 transition-all duration-300">
              <span>Live Demo</span>
              <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
            </a>

            <button @click="previewProject(project)"
              class="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-gray-300 hover:text-white text-xs font-medium transition-all duration-300 cursor-pointer">
              <i class="fas fa-eye text-[11px] text-brand-teal"></i>
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Fullscreen Lightbox / Demo Preview Modal -->
    <div v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      @click.self="closePreview">
      <div
        class="relative w-full max-w-4xl max-h-[90vh] bg-[#0A0F1D] border border-white/[0.12] rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        
        <!-- Modal Header -->
        <div class="flex justify-between items-center px-6 py-4 border-b border-white/[0.08] bg-[#070A13]/80 backdrop-blur-md">
          <div class="flex items-center gap-3">
            <span
              class="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
              {{ selectedProject.category }}
            </span>
            <h3 class="text-white font-bold text-lg font-heading">{{ selectedProject.title }}</h3>
          </div>
          <button @click="closePreview"
            class="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal">
            <i class="fas fa-times text-sm"></i>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="p-6 overflow-y-auto max-h-[65vh] flex flex-col items-center justify-center space-y-6">
          <img v-if="selectedProject.image" :src="selectedProject.image" :alt="selectedProject.title"
            class="w-full max-h-[50vh] object-contain rounded-2xl border border-white/10 shadow-2xl bg-black/40" />
          <p class="text-sm text-gray-300 text-center max-w-2xl font-sans leading-relaxed">
            {{ selectedProject.description }}
          </p>
        </div>

        <!-- Modal Footer -->
        <div
          class="flex flex-wrap justify-between items-center px-6 py-4 border-t border-white/[0.08] bg-[#070A13]/80 backdrop-blur-md text-xs gap-4">
          <div class="flex flex-wrap gap-2 font-mono">
            <span v-for="tech in selectedProject.techStack" :key="tech"
              class="px-2.5 py-1 text-gray-300 bg-white/5 rounded-lg border border-white/5 text-[11px]">
              {{ tech }}
            </span>
          </div>

          <a v-if="selectedProject.liveLink && selectedProject.liveLink !== '#'" :href="selectedProject.liveLink"
            target="_blank" rel="noopener noreferrer"
            class="btn-shimmer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-purple text-white font-semibold text-xs shadow-lg hover:shadow-brand-purple/30 transition-all duration-300">
            <span>Open Live App</span>
            <i class="fas fa-arrow-up-right-from-square text-[11px]"></i>
          </a>
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

const filterTabs = ['All', 'Frontend', 'Fullstack']
const activeFilter = ref('All')
const selectedProject = ref(null)

const previewProject = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closePreview = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
}

const handleCardClick = (project) => {
  if (project.liveLink && project.liveLink !== '#') {
    window.open(project.liveLink, '_blank', 'noopener,noreferrer')
  } else {
    previewProject(project)
  }
}

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return props.projects
  return props.projects.filter(p => p.category === activeFilter.value)
})
</script>
