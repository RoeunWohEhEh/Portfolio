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
        class="group relative flex flex-col border border-white/5 bg-slate-900/30 rounded-2xl overflow-hidden shadow-lg hover:border-brand-purple/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-500">

        <!-- Graphic Image Cover -->
        <div class="h-52 relative overflow-hidden bg-slate-950 cursor-pointer" @click="handleCardClick(project)">
          <!-- Real Project Image if available -->
          <template v-if="project.image">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <!-- Dark Gradient overlay at bottom for smooth transition -->
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
          </template>

          <!-- Fallback Graphic Gradient Overlay if no image -->
          <template v-else>
            <div
              class="absolute inset-0 bg-gradient-to-br opacity-80 z-0 group-hover:scale-105 transition-transform duration-500"
              :class="project.imageBg || 'from-brand-purple to-slate-900'"></div>
            <div class="absolute inset-0 bg-grid-pattern opacity-30 z-1"></div>
            <div class="absolute inset-0 flex items-center justify-center z-10 p-4">
              <span
                class="font-mono text-white/90 text-sm font-semibold tracking-wide bg-slate-950/60 backdrop-blur-sm px-4 py-2 border border-white/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
                &lt; {{ project.title }} /&gt;
              </span>
            </div>
          </template>

          <!-- Category Floating Badge -->
          <div class="absolute top-3 left-3 z-10">
            <span class="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-slate-950/80 backdrop-blur-md text-brand-purple border border-brand-purple/30 shadow-md">
              {{ project.category }}
            </span>
          </div>

          <!-- Hover Overlay Action Button -->
          <div class="absolute inset-0 flex items-center justify-center bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
            <span class="px-3.5 py-1.5 text-xs font-mono font-semibold text-white bg-brand-purple/90 rounded-lg shadow-lg border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
              <i v-if="project.liveLink && project.liveLink !== '#'" class="fas fa-external-link-alt"></i>
              <i v-else class="fas fa-search-plus"></i>
              Live Link
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
            <a v-if="project.liveLink && project.liveLink !== '#'" :href="project.liveLink" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-purple/80 hover:bg-brand-purple border border-brand-purple/40 text-xs text-white shadow-md hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 font-semibold">
              Live Link <i class="fas fa-external-link-alt text-[10px]"></i>
            </a>
            <button @click="previewProject(project)"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">
              <i class="fas fa-image text-[10px]"></i> Preview Demo
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Fullscreen Lightbox / Demo Preview Modal -->
    <div v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      @click.self="closePreview">
      <div class="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        <!-- Modal Header -->
        <div class="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-slate-950/70">
          <div class="flex items-center gap-3">
            <span class="px-2.5 py-1 text-[10px] font-mono font-medium rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/30">
              {{ selectedProject.category }}
            </span>
            <h3 class="text-white font-bold text-lg font-heading">{{ selectedProject.title }}</h3>
          </div>
          <button @click="closePreview"
            class="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors">
            <i class="fas fa-times text-lg"></i>
          </button>
        </div>

        <!-- Modal Body / Image -->
        <div class="p-6 overflow-y-auto max-h-[70vh] flex flex-col items-center justify-center bg-slate-950/50 space-y-6">
          <img v-if="selectedProject.image" :src="selectedProject.image" :alt="selectedProject.title"
            class="w-full max-h-[55vh] object-contain rounded-xl border border-white/10 shadow-2xl" />
          <p class="text-sm text-gray-300 text-center max-w-2xl font-sans leading-relaxed">
            {{ selectedProject.description }}
          </p>
        </div>

        <!-- Modal Footer -->
        <div class="flex flex-wrap justify-between items-center px-6 py-4 border-t border-white/10 bg-slate-950/70 text-xs gap-4">
          <div class="flex flex-wrap gap-2 font-mono text-brand-teal">
            <span v-for="tech in selectedProject.techStack" :key="tech"
              class="px-2.5 py-1 text-gray-300 bg-white/5 rounded-md border border-white/5">
              {{ tech }}
            </span>
          </div>
          <a v-if="selectedProject.liveLink && selectedProject.liveLink !== '#'" :href="selectedProject.liveLink" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-purple text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
            Live Link <i class="fas fa-external-link-alt text-xs"></i>
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

const filterTabs = ['All', 'Frontend', 'Fullstack', 'Tools', 'Design']
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
