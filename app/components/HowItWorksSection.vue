<script setup lang="ts">
const steps = [
  {
    numero: '01',
    titulo: 'Captura',
    descricao:
      'Voo de drone em turntable - captura aérea real do empreendimento, com máscaras de recorte que preservam o primeiro plano.',
  },
  {
    numero: '02',
    titulo: 'Processamento',
    descricao:
      'Fotogrametria e renderização 3D transformam a captura numa maquete navegável de alta fidelidade.',
  },
  {
    numero: '03',
    titulo: 'Entrega',
    descricao:
      'Tudo publicado num site próprio do empreendimento, acessível por qualquer navegador — pronto em 7 a 15 dias, sem instalar nada.',
  },
]
</script>

<template>
  <section id="como" class="py-[120px]">
    <div class="mx-auto max-w-[1180px] px-6 sm:px-10">
      <div class="mb-14 flex max-w-[62ch] flex-col gap-[18px]">
        <span class="font-mono text-xs uppercase tracking-[.18em] text-accent">03 — Como funciona</span>
        <h2 class="m-0 text-[clamp(30px,4.2vw,52px)] font-extrabold leading-[1.04] tracking-[-.028em]">
          Tecnologia de ponta, sem complicação para você
        </h2>
        <p class="m-0 text-lg leading-[1.62] text-soft">
          Capturamos o empreendimento com voo de drone, processamos com tecnologia de
          fotogrametria e renderização 3D, e entregamos uma maquete interativa pronta para uso
          em poucos dias, sem curva de aprendizado para sua equipe de vendas.
        </p>
      </div>

      <div class="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8">
        <div v-for="step in steps" :key="step.numero" class="flex flex-col gap-[14px] border-t-2 border-ink pt-[22px]">
          <span class="font-mono text-[13px] font-bold tracking-[.08em] text-accent">{{ step.numero }}</span>
          <h3 class="m-0 text-[22px] font-bold tracking-[-.01em]">{{ step.titulo }}</h3>
          <p class="m-0 text-base leading-[1.6] text-soft">{{ step.descricao }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
