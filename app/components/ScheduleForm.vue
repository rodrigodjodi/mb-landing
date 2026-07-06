<script setup lang="ts">
const WHATSAPP_NUMBER = '5541995114631'

const form = reactive({
  nome: '',
  empresa: '',
  contato: '',
  lancamentos: '',
})
const error = ref('')
const submitted = ref(false)

function onFieldInput() {
  error.value = ''
}

function submit() {
  if (!form.nome.trim() || !form.empresa.trim() || !form.contato.trim()) {
    error.value = 'Preencha nome, empresa e contato para agendar.'
    return
  }

  const lancamentosLine = form.lancamentos ? `\nLançamentos/ano: ${form.lancamentos}` : ''
  const mensagem =
    'Olá! Gostaria de agendar uma demonstração da Maquete de Bolso.\n\n' +
    `Nome: ${form.nome}\n` +
    `Empresa: ${form.empresa}\n` +
    `Contato: ${form.contato}${lancamentosLine}`

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
  window.open(url, '_blank', 'noopener')
  submitted.value = true
}
</script>

<template>
  <section id="agendar" class="py-[120px]">
    <div class="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-[60px] px-6 sm:px-10 lg:grid-cols-[1.02fr_.98fr]">
      <div class="flex flex-col gap-[22px]">
        <span class="font-mono text-xs uppercase tracking-[.18em] text-accent">Agendar demonstração</span>
        <h2 class="m-0 text-[clamp(30px,4vw,50px)] font-extrabold leading-[1.04] tracking-[-.028em]">
          Pronto para mostrar seu lançamento de um jeito que ninguém mais está mostrando?
        </h2>
        <p class="m-0 max-w-[46ch] text-lg leading-[1.62] text-soft">
          Agende uma demonstração ao vivo — mostramos a plataforma funcionando com
          empreendimentos reais e respondemos tudo sobre prazo e captura.
        </p>
        <div class="mt-1.5 flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="font-bold text-accent">—</span>
            <span class="text-base">Demonstração guiada com casos reais</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="font-bold text-accent">—</span>
            <span class="text-base">Resposta em até 1 dia útil</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="font-bold text-accent">—</span>
            <span class="text-base">Sem compromisso</span>
          </div>
        </div>
      </div>

      <div class="border border-ink bg-white p-[34px]">
        <form v-if="!submitted" class="flex flex-col gap-[18px]" @submit.prevent="submit">
          <div class="flex flex-col gap-[7px]">
            <label class="font-mono text-[11px] uppercase tracking-[.1em] text-soft">Nome</label>
            <input
              v-model="form.nome"
              type="text"
              placeholder="Seu nome"
              class="border border-line bg-bg-alt px-[14px] py-[13px] font-sans text-[15px] text-ink"
              @input="onFieldInput"
            >
          </div>
          <div class="flex flex-col gap-[7px]">
            <label class="font-mono text-[11px] uppercase tracking-[.1em] text-soft">Empresa</label>
            <input
              v-model="form.empresa"
              type="text"
              placeholder="Incorporadora / construtora"
              class="border border-line bg-bg-alt px-[14px] py-[13px] font-sans text-[15px] text-ink"
              @input="onFieldInput"
            >
          </div>
          <div class="flex flex-col gap-[7px]">
            <label class="font-mono text-[11px] uppercase tracking-[.1em] text-soft">Telefone ou e-mail</label>
            <input
              v-model="form.contato"
              type="text"
              placeholder="(00) 00000-0000 ou voce@empresa.com"
              class="border border-line bg-bg-alt px-[14px] py-[13px] font-sans text-[15px] text-ink"
              @input="onFieldInput"
            >
          </div>
          <div class="flex flex-col gap-[7px]">
            <label class="font-mono text-[11px] uppercase tracking-[.1em] text-soft">
              Quantos lançamentos por ano?
            </label>
            <select
              v-model="form.lancamentos"
              class="cursor-pointer border border-line bg-bg-alt px-[14px] py-[13px] font-sans text-[15px] text-ink"
            >
              <option value="">Selecione</option>
              <option value="1">1 por ano</option>
              <option value="2-3">2 a 3 por ano</option>
              <option value="4-6">4 a 6 por ano</option>
              <option value="7+">7 ou mais por ano</option>
            </select>
          </div>
          <p v-if="error" class="m-0 text-[13px] font-semibold text-accent">{{ error }}</p>
          <button
            type="submit"
            class="mt-1 bg-accent px-4 py-4 font-sans text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(223,0,169,.3)]"
          >
            Agendar pelo WhatsApp
          </button>
          <p class="m-0 text-center text-xs text-soft">
            Ao enviar, abrimos o WhatsApp com sua mensagem pronta. Retornamos em até 1 dia útil.
          </p>
        </form>

        <div v-else class="flex flex-col items-start gap-4 py-5">
          <div class="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-accent text-[26px] text-white">
            ✓
          </div>
          <h3 class="m-0 text-2xl font-extrabold tracking-[-.02em]">Abrindo o WhatsApp…</h3>
          <p class="m-0 text-base leading-[1.6] text-soft">
            Preparamos sua mensagem com os dados preenchidos. Se o WhatsApp não abrir
            automaticamente,
            <a
              :href="`https://wa.me/${WHATSAPP_NUMBER}`"
              target="_blank"
              rel="noopener"
              class="font-semibold text-accent"
            >toque aqui para falar com a gente</a>. Respondemos em até 1 dia útil.
          </p>
          <span class="font-mono text-[11px] tracking-[.08em] text-soft">Pipe Studio · Curitiba/PR</span>
        </div>
      </div>
    </div>
  </section>
</template>
