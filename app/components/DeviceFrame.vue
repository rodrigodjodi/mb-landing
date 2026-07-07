<script setup lang="ts">
type Device = 'phone' | 'tablet' | 'desktop'

const device = ref<Device>('phone')
const iframeRef = useTemplateRef('iframeRef')
const frameRef = useTemplateRef('frameRef')

// 📐 Resolução "real" simulada de cada device.
// As proporções aqui devem bater com os aspectClass abaixo.
const DEVICE_SPECS: Record<Device, { width: number; height: number }> = {
  phone: { width: 390, height: 780 },     // ~9:18
  tablet: { width: 834, height: 1112 },   // ~3:4
  desktop: { width: 1920, height: 1200 }, // ~16:10
}

const spec = computed(() => DEVICE_SPECS[device.value])

const aspectClass = computed(() => {
  switch (device.value) {
    case 'tablet':
      return 'aspect-[3/4]'
    case 'desktop':
      return 'aspect-[16/10]'
    default:
      return 'aspect-[9/18]'
  }
})

const frameClass = computed(() => {
  switch (device.value) {
    case 'tablet':
      return 'rounded-[2rem] border-[12px]'
    case 'desktop':
      return 'rounded-xl border-[6px]'
    default:
      return 'rounded-[2rem] border-[10px]'
  }
})

const sizeClass = computed(() => {
  switch (device.value) {
    case 'desktop':
      return 'max-w-[450vw] w-full h-auto'
    case 'tablet':
      return 'max-h-[80vh] h-full w-auto'
    default:
      return 'max-h-[70vh] h-full w-auto'
  }
})

// 🔍 Escala calculada dinamicamente com base no tamanho real
// (em px) que a caixa visível está ocupando na tela.
const scale = ref(1)
let resizeObserver: ResizeObserver | null = null

function updateScale() {
  if (!frameRef.value) return
  const { width } = frameRef.value.getBoundingClientRect()
  scale.value = width / spec.value.width
}

onMounted(() => {
  resizeObserver = new ResizeObserver(() => updateScale())
  if (frameRef.value) resizeObserver.observe(frameRef.value)
  updateScale()
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})

// Recalcula sempre que trocar de device (a caixa muda de proporção/tamanho)
watch(device, async () => {
  await nextTick()
  updateScale()
})

const props = defineProps<{
  src: string
}>()

const targetOrigin = computed(() => {
  try {
    const url = new URL(props.src)
    return url.origin
  } catch (e) {
    throw new Error('Invalid URL for DeviceFrame src prop')
  }
})

defineExpose({
  send(data: any) {
    iframeRef.value?.contentWindow?.postMessage(data, targetOrigin.value)
  }
})
</script>

<template>
  <div class="flex flex-col items-center gap-4 w-full h-full justify-center">
    <UFieldGroup>
      <UButton color="" variant="outline"
        icon="i-heroicons-device-phone-mobile" label="Telefone"
        :class="{ 'bg-primary text-white': device === 'phone' }"
        @click="device = 'phone'"
      />
      <UButton
        icon="i-heroicons-device-tablet" color="" variant="outline" label="Tablet"
        :class="{ 'bg-primary text-white': device === 'tablet' }"
        @click="device = 'tablet'"
      />
      <UButton
        icon="i-heroicons-tv" color="" variant="outline" label="Monitor / TV"
        :class="{ 'bg-primary text-white': device === 'desktop' }"
        @click="device = 'desktop'"
      />
    </UFieldGroup>

    <!-- 🖼 Caixa visível: define o tamanho na tela -->
    <div
      ref="frameRef"
      class="relative overflow-hidden transition-all duration-500 ease-in-out shadow-xl shadow-gray-400 dark:shadow-black"
      :class="[aspectClass, frameClass, sizeClass]"
    >
      <!-- 🖥️ Wrapper renderizado na resolução REAL do device, depois escalado -->
      <iframe
        ref="iframeRef"
        :src="src"
        class="absolute top-0 left-0 border-0"
        :style="{
          width: spec.width + 'px',
          height: spec.height + 'px',
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }"
      />
    </div>
  </div>
</template>