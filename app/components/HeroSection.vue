<script setup lang="ts">
const stats = [
  { value: '19', label: 'empreendimentos' },
  { value: '4', label: 'cidades' },
  { value: '8', label: 'anos de mercado' },
]
</script>

<template>
  <section class="border-b border-line">
    <div
      class="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-[60px] px-6 py-16 sm:px-10 lg:grid-cols-[1.08fr_.92fr] lg:py-20"
    >
      <div class="flex flex-col gap-[26px]">
        <span class="font-mono text-xs uppercase tracking-[.18em] text-accent">
          Maquete de Bolso · Pipe Studio
        </span>
        <h1 class="m-0 text-[clamp(40px,5.4vw,72px)] font-extrabold leading-[.98] tracking-[-.035em]">
          Seu empreendimento, explorável de qualquer tela
          
        </h1>
        <p class="m-0 max-w-[48ch] text-[19px] leading-[1.58] text-soft">
          Maquetes virtuais interativas a partir de captura aérea real, entregues como uma
          plataforma completa de apresentação online para o seu lançamento.
        </p>
        <div class="flex flex-wrap gap-[14px]">
          <a
            href="#agendar"
            class="inline-flex items-center bg-accent px-8 py-[17px] font-sans text-base font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(223,0,169,.3)]"
          >
            Agendar demonstração
          </a>
          <a
            href="#experiencia"
            class="inline-flex items-center border border-ink bg-transparent px-7 py-4 font-sans text-base font-medium text-ink no-underline transition-colors duration-200 hover:bg-ink hover:text-white"
          >
            Ver a experiência
          </a>
        </div>
        <div class="mt-[10px] flex flex-wrap gap-[34px] border-t border-line pt-[22px]">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col gap-1">
            <span class="text-[26px] font-extrabold tracking-[-.02em]">{{ stat.value }}</span>
            <span class="font-mono text-[10px] uppercase tracking-[.1em] text-soft">
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex w-full flex-col items-center gap-[18px]">
        <div class="flex h-[560px] w-full items-center justify-center">
          <DeviceFrame class="h-full" src="https://now.maquetedebolso.com.br/" />
        </div>
        <span class="text-center font-mono text-[10px] uppercase tracking-[.12em] text-soft">
          Mesma maquete · celular, tablet e TV · sem instalar nada
        </span>
      </div>
    </div>
  </section>
</template>
