<script setup lang="ts">
import DeviceFrame from '~/components/DeviceFrame.vue'
const scrollable= useTemplateRef('scrollable')
const deviceFrameRef= useTemplateRef('deviceFrameRef')

const features = ref([
  {
    title: 'Interativo',
    description: 'Muito mais informação na palma da mão, no site ou TV do plantão. Mostre todos os ângulos do empreendimento, aponte diretamente a unidade que está negociando. Faça passeios pelo interior das unidades e áreas comuns. ',
    /* icon: 'i-lucide-smile',
    to: '/docs/getting-started/integrations/icons' */
  },
  {
    title: 'Modular',
    description: 'Além da Maquete, a plataforma oferece módulos para exibição de plantas, tours virtuais, galeria de imagens e muito mais. Tudo centralizado diretamente na Maquete. Uma solução completa à mão do corretor para mostrar cada detalhe do empreendimento. ',
    /* icon: 'i-lucide-a-large-small',
    to: '/docs/getting-started/integrations/fonts' */
  },
  {
    title: 'Compartilhável',
    description: 'Cada módulo da Maquete de Bolso pode ser compartilhado e usado no navegador de qualquer dispositivo, sem instalação de aplicativos ou plugins de terceiros. Os relatórios de horários de acesso mostram que os clientes interagem de casa, conhecendo melhor o seu produto.',
    /* icon: 'i-lucide-sun-moon',
    to: '/docs/getting-started/integrations/color-mode' */
  },
  {
    title: 'Instalável',
    description: 'Carregue os dados para uso offline e tenha acesso rápido e confiável, mesmo sem conexão com a internet. Em dispositivos suportados, execute como se fosse um aplicativo.',
    /* icon: 'i-lucide-sun-moon',
    to: '/docs/getting-started/integrations/color-mode' */
  }
])
const { scrollYProgress } = useScroll({
  container: scrollable
})
let oldFrame = 0
useMotionValueEvent(scrollYProgress, "change", (latest, ) => {
  // console.log("Page scroll: ", latest)
  const frame = Math.floor(latest*72)
  if (frame === oldFrame) return
  let msgType = frame > oldFrame ? 'frame-inc' : 'frame-dec'
  // manda o post message com esse frame
  deviceFrameRef.value?.send({ type: msgType })

  oldFrame = frame
})
const cards = ref([])
onMounted(async () => {
  const {recentCards} = await useProjectData()
  cards.value = await recentCards()
})
const items = ref<StepperItem[]>([
  {
    title: 'Recebimento Projetos',
    description: 'Recebemos se',
    icon: 'i-lucide-house'
  },
  {
    title: 'Voo',
    description: 'Esperamos um dia propício para capturar as imagens aéreas',
    icon: 'i-lucide-truck'
  },
  {
    title: 'Matchmoving',
    description: 'Com as informações do video definimos as cameras'
  },
  {
    title: 'Renders 3D',
    description: 'Reproduzimos o modelo 3D com base nas plantas e imagens fornecidas, ou usamos seu IFC.'
  },
  {
    title: 'Composição',
    description: '.'
  },
  
])
</script>

<template>
  <div class="relative grid grid-cols-1 wide-landscape:grid-cols-2 h-screen">
    <!-- 🖼 Coluna esquerda: mockup fixo -->
    <div class="relative  
      hidden medium-tall:flex wide-landscape:flex wide-portrait:flex 
      h-screen medium-tall:h-[50vh] wide-portrait:h-[50vh] p-8 
    "
    >
      <DeviceFrame ref="deviceFrameRef" src="https://newurban.maquetedebolso.com.br"/>
    </div>


    <!-- 📜 Coluna direita: conteúdo scrollável -->
    <div class="overflow-y-auto" ref="scrollable">
      <UPageSection title="Uma maquete a um clique do seu cliente"
        description="Mostre seu projeto no entorno real, direto no navegador."
        :ui="{root: 'h-screen  medium-tall:h-[50vh] wide-portrait:h-[50vh]'}"
        >
        <UButton size="xl">Get Started</UButton>
      </UPageSection>

      <UPageSection title="Um hub de conteúdos" 
        :ui="{root: 'h-screen  medium-tall:h-[50vh] wide-portrait:h-[50vh]'}"
       
        :features="features"
        />


      <UPageSection title="Projetos recentes"
      :ui="{root: 'h-screen medium-tall:h-[50vh] wide-portrait:h-[50vh]'}">
        <UPageGrid>
          <UPageCard
            v-for="(card, index) in cards"
            :key="index"
            v-bind="card"
          >
            <img :src="card.coverImg" :alt="card.title" class="w-full" />
          </UPageCard>
        </UPageGrid>
      </UPageSection>

      
      <UPageSection title="Fluxo de trabalho"
      :ui="{root: ' medium-tall:h-[50vh] wide-portrait:h-[50vh]'}">
         <UStepper orientation="vertical" :items="items" class="w-full" />
      </UPageSection>


      <UPageSection title="Quer saber mais?"
      :ui="{root: 'bg-amber-300 h-screen medium-tall:h-[50vh] wide-portrait:h-[50vh]'}">
        <UButton size="lg">Peça uma proposta</UButton>
      </UPageSection>

    </div>
  </div>
</template>

<style scoped></style>
