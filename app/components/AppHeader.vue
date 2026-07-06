<script setup lang="ts">
const navLinks = [
  { href: '#experiencia', label: 'A experiência' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#como', label: 'Como funciona' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 h-[70px] border-b border-line bg-white/[.82] backdrop-blur-md"
  >
    <div class="mx-auto flex h-full max-w-[1180px] items-center justify-between gap-6 px-6 sm:px-10">
      <div class="flex items-baseline gap-[11px]">
        <span class="text-[17px] font-extrabold tracking-[-.02em]">Maquete de Bolso</span>
        <span class="hidden font-mono text-[10px] uppercase tracking-[.14em] text-soft sm:inline">
          por Pipe Studio
        </span>
      </div>

      <div class="flex items-center gap-5 sm:gap-[30px]">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="hidden text-sm font-medium text-ink no-underline md:inline"
        >
          {{ link.label }}
        </a>
        <a
          href="#agendar"
          class="inline-flex items-center bg-accent px-[18px] py-[11px] font-sans text-[13px] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_20px_rgba(223,0,169,.28)]"
        >
          Agendar demonstração
        </a>
      </div>
    </div>
  </header>
</template>
