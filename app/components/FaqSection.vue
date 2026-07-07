<script setup lang="ts">
const faqs = [
  {
    pergunta: 'Funciona em qualquer dispositivo?',
    resposta: 'Sim. Roda direto no navegador — celular, tablet, desktop ou TV — sem instalar nada.',
  },
  {
    pergunta: 'Quanto tempo leva para ficar pronto?',
    resposta:
      'De 7 a 15 dias após a captura das imagens. O voo de drone depende da janela de clima — combinamos a data de captura com você.',
  },
]

const faqOpen = ref(-1)
function toggle(i: number) {
  faqOpen.value = faqOpen.value === i ? -1 : i
}
</script>

<template>
  <section class="bg-ink py-[118px] text-white">
    <div class="mx-auto max-w-[880px] px-6 sm:px-10">
      <div class="mb-[42px] flex flex-col gap-[14px]">
        <span class="font-mono text-xs uppercase tracking-[.18em] text-accent">Perguntas rápidas</span>
        <h2 class="m-0 text-[clamp(28px,3.6vw,44px)] font-extrabold leading-[1.06] tracking-[-.025em]">
          Tudo que você precisa saber antes de agendar
        </h2>
      </div>

      <div
        v-for="(faq, i) in faqs"
        :key="faq.pergunta"
        class="border-t border-white/[.16]"
        :class="{ 'border-b': i === faqs.length - 1 }"
      >
        <button
          type="button"
          class="flex w-full items-center justify-between gap-5 border-none bg-none py-[26px] text-left font-sans text-white"
          @click="toggle(i)"
        >
          <span class="text-xl font-semibold tracking-[-.01em]">{{ faq.pergunta }}</span>
          <span
            class="flex-none text-[28px] font-light leading-none text-accent transition-transform duration-300 ease-out"
            :class="{ 'rotate-45': faqOpen === i }"
          >
            +
          </span>
        </button>
        <div
          class="grid overflow-hidden transition-[grid-template-rows] duration-[380ms] ease-out"
          :style="{ gridTemplateRows: faqOpen === i ? '1fr' : '0fr' }"
        >
          <div class="min-h-0">
            <p class="m-0 max-w-[60ch] pb-[26px] text-[17px] leading-[1.62] text-white/[.72]">
              {{ faq.resposta }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
