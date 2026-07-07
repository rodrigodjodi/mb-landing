<script setup lang="ts">
const cards = [
  {
    href: 'https://edge.maquetedebolso.com.br',
    url: 'edge.maquetedebolso.com.br',
    imagem: '/images/plataforma-maquete-edge.jpg',
    alt: 'Maquete 360° — empreendimento The Edge',
    titulo: 'Maquete 360°',
  },
  {
    href: 'https://newurban.maquetedebolso.com.br/ap3qtipo',
    url: 'newurban.maquetedebolso.com.br',
    imagem: '/images/plataforma-tour-newurban.jpg',
    alt: 'Tour virtual — New Urban Residence',
    titulo: 'Tours pelas unidades',
  },
]

const emBreve = [
  { titulo: 'Plantas e galeria' },
  { titulo: 'Espelho de vendas' },
]
</script>

<template>
  <section id="experiencia" class="py-[120px]">
    <div class="mx-auto max-w-[1180px] px-6 sm:px-10">
      <div class="mb-[54px] flex max-w-[62ch] flex-col gap-[18px]">
        <span class="font-mono text-xs uppercase tracking-[.18em] text-accent">01 — A plataforma</span>
        <h2 class="m-0 text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.04] tracking-[-.028em]">
          Uma plataforma de apresentação
        </h2>
        <p class="m-0 text-lg leading-[1.62] text-soft">
          Cada empreendimento ganha um espaço próprio, reunindo maquete 360°, tours virtuais
          pelas unidades, plantas detalhadas e espelho de vendas - tudo num único link, sem
          instalar nada.
        </p>
      </div>

      <div class="grid grid-cols-[repeat(auto-fit,minmax(244px,1fr))] gap-5">
        <a
          v-for="card in cards"
          :key="card.href"
          :href="card.href"
          target="_blank"
          rel="noopener"
          class="flex flex-col border border-line bg-white text-inherit no-underline transition-all duration-200 hover:-translate-y-[5px] hover:border-ink"
        >
          <div class="flex items-center gap-[7px] border-b border-line px-[14px] py-[11px]">
            <span class="h-2 w-2 rounded-full bg-line" />
            <span class="h-2 w-2 rounded-full bg-line" />
            <span class="h-2 w-2 rounded-full bg-line" />
            <span class="ml-[6px] font-mono text-[10px] text-soft">{{ card.url }}</span>
          </div>
          <div class="aspect-[4/3] overflow-hidden bg-[#eceae3]">
            <img :src="card.imagem" :alt="card.alt" loading="lazy" class="block h-full w-full object-cover" />
          </div>
          <div class="flex items-center justify-between gap-[10px] px-4 py-4">
            <span class="text-[15px] font-semibold">{{ card.titulo }}</span>
            <span class="font-mono text-[11px] text-accent">veja funcionando ↗</span>
          </div>
        </a>

        <div
          v-for="card in emBreve"
          :key="card.titulo"
          class="flex flex-col border border-line bg-bg-alt"
        >
          <div class="flex items-center gap-[7px] border-b border-line px-[14px] py-[11px]">
            <span class="h-2 w-2 rounded-full bg-line" />
            <span class="h-2 w-2 rounded-full bg-line" />
            <span class="h-2 w-2 rounded-full bg-line" />
          </div>
          <div
            class="flex aspect-[4/3] flex-col items-center justify-center gap-[10px] bg-[repeating-linear-gradient(45deg,#efeee9,#efeee9_11px,#e6e4dc_11px,#e6e4dc_22px)]"
          >
            <span class="border border-soft px-[11px] py-[5px] font-mono text-[10px] uppercase tracking-[.14em] text-soft">
              Em breve
            </span>
          </div>
          <div class="flex items-center justify-between gap-[10px] px-4 py-4">
            <span class="text-[15px] font-semibold text-soft">{{ card.titulo }}</span>
            <span class="font-mono text-[11px] text-soft">em construção</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
