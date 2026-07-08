<script setup lang="ts">
import { portfolioChips } from '~/data/portfolio'

interface ProjectCard {
  title: string
  url: string
  to: string
  target: string
  coverImg: string
  logo: string
}

const projects: Ref<ProjectCard[]> = ref([])
const loading = ref(true)
const showAll = ref(false)

const visibleProjects = computed(() => (showAll.value ? projects.value : projects.value.slice(0, 6)))

onMounted(async () => {
  try {
    const { recentCards } = await useProjectData()
    projects.value = await recentCards()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section id="portfolio" class="border-y border-line bg-bg-alt py-[120px]">
    <div class="mx-auto max-w-[1180px] px-6 sm:px-10">
      <div class="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div class="flex max-w-[60ch] flex-col gap-[18px]">
          <span class="font-mono text-xs uppercase tracking-[.18em] text-accent">02 — Portfólio</span>
          <h2 class="m-0 text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.04] tracking-[-.028em]">
            Quem já confiou na Maquete de Bolso
          </h2>
          <p class="m-0 text-lg leading-[1.62] text-soft">
            Ao longo de 8 anos, a Maquete de Bolso esteve presente em lançamentos de
            incorporadoras como DeDomit, AGL e Bouw, entre outras.
          </p>
        </div>
        <span class="whitespace-nowrap font-mono text-xs tracking-[.08em] text-soft">
          19 empreendimentos · 4 cidades · 2017-2025
        </span>
      </div>

      <p v-if="loading" class="font-mono text-xs uppercase tracking-[.1em] text-soft">
        Carregando projetos…
      </p>

      <div v-else class="mb-[18px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <a
          v-for="project in visibleProjects"
          :key="project.to"
          :href="project.to"
          :target="project.target"
          rel="noopener"
          class="flex flex-col border border-line bg-white text-inherit no-underline transition-all duration-200 hover:-translate-y-[5px] hover:border-ink"
        >
          <div class="flex items-center gap-[7px] border-b border-line px-[14px] py-[11px]">
            <span class="h-2 w-2 rounded-full bg-line" />
            <span class="h-2 w-2 rounded-full bg-line" />
            <span class="h-2 w-2 rounded-full bg-line" />
            <span class="ml-[6px] truncate font-mono text-[10px] text-soft">{{ project.url }}</span>
          </div>
          <div class="aspect-[4/3] overflow-hidden bg-[#eceae3]">
            <img :src="project.coverImg" :alt="project.title" loading="lazy" class="block h-full w-full object-cover" />
          </div>
          <div class="flex items-center justify-between gap-[10px] px-4 py-4">
            <span class="text-[15px] font-bold">{{ project.title }}</span>
            <span class="whitespace-nowrap font-mono text-[11px] text-accent">veja o projeto ↗</span>
          </div>
        </a>
      </div>

      <div v-if="!loading && projects.length > 6" class="mb-[18px] flex justify-center">
        <button
          type="button"
          class="border border-line bg-white px-6 py-3 font-mono text-xs uppercase tracking-[.1em] transition-colors duration-200 hover:border-ink"
          @click="showAll = !showAll"
        >
          {{ showAll ? 'Ver menos' : 'Ver mais' }}
        </button>
      </div>

      <div class="mt-[14px] flex flex-wrap items-center gap-[14px]">
        <span class="font-mono text-[11px] uppercase tracking-[.1em] text-soft">
          Também presentes em lançamentos de:
        </span>
        <div
          v-for="chip in portfolioChips"
          :key="chip"
          class="flex items-center gap-2.5 border border-line bg-white px-4 py-[10px]"
        >
          <span class="text-sm font-semibold">{{ chip }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
