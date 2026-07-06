<script setup lang="ts">
import { portfolioClientes, portfolioChips } from '~/data/portfolio'
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
            incorporadoras como DeDomit, AGL e Bouw, entre outras — alguns deles, clientes
            recorrentes.
          </p>
        </div>
        <span class="whitespace-nowrap font-mono text-xs tracking-[.08em] text-soft">
          19 empreendimentos · 4 cidades · 2017–2025
        </span>
      </div>

      <div class="mb-[18px] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        <div v-for="cliente in portfolioClientes" :key="cliente.nome" class="flex flex-col border border-line bg-white">
          <div class="relative aspect-[4/3] overflow-hidden">
            <img :src="cliente.imagem" :alt="cliente.alt" loading="lazy" class="block h-full w-full object-cover" />
            <span
              v-if="cliente.destaque"
              class="absolute left-3 top-3 bg-accent px-2 py-1 font-mono text-[9px] uppercase tracking-[.1em] text-white"
            >
              cliente recorrente
            </span>
          </div>
          <div class="flex items-end justify-between gap-3 px-5 py-[18px]">
            <div class="flex flex-col gap-1">
              <span class="text-[19px] font-bold tracking-[-.01em]">{{ cliente.nome }}</span>
              <span class="font-mono text-[10px] uppercase tracking-[.08em] text-soft">{{ cliente.tipo }}</span>
            </div>
            <div class="flex items-baseline gap-[5px]">
              <span class="font-mono text-[30px] font-bold leading-none text-accent">
                {{ String(cliente.projetos).padStart(2, '0') }}
              </span>
              <span class="font-mono text-[10px] text-soft">proj.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[14px] flex flex-wrap items-center gap-[14px]">
        <span class="font-mono text-[11px] uppercase tracking-[.1em] text-soft">
          Também presentes em lançamentos de:
        </span>
        <div
          v-for="chip in portfolioChips"
          :key="chip"
          class="flex items-center gap-[10px] border border-line bg-white px-4 py-[10px]"
        >
          <span class="text-sm font-semibold">{{ chip }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
