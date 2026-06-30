<script setup lang="ts">

type Device = 'phone' | 'tablet' | 'desktop'

const device = ref<Device>('phone')
const iframeRef = useTemplateRef('iframeRef')
const aspectClass = computed(() => {
  switch (device.value) {
    case 'tablet':
      return 'aspect-[3/4] '
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
      // controla pela largura
      return 'max-w-[450vw]  w-full h-auto'
    case 'tablet':
      // controla pela altura
      return 'max-h-[80vh] h-full w-auto'
    default:
      // phone → também pela altura
      return 'max-h-[70vh] h-full w-auto'
  }
})

// defina uma prop obrigatória de src em typescript
const props = defineProps<{
  src: string
}>()
const targetOrigin = computed(() => {
  try {
    const url = new URL(props.src)
    return url.origin         // ex: https://tenant123.maquetedebolso.com.br
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
    <!-- 🔘 Botões para trocar o device -->
    <UFieldGroup >
      <UButton color="neutral" variant="outline"
         icon="i-heroicons-device-phone-mobile" label="Telefone"
        :class="{ 'bg-primary text-white': device === 'phone' }"
        @click="device = 'phone'"
      />
      <UButton
       icon="i-heroicons-device-tablet" color="neutral" variant="outline" label="Tablet"
      :class="{ 'bg-primary text-white': device === 'tablet' }"
      @click="device = 'tablet'"
      />
      <UButton
       icon="i-heroicons-tv" color="neutral" variant="outline" label="Monitor / TV"
        :class="{ 'bg-primary text-white': device === 'desktop' }"
        @click="device = 'desktop'"
      />
    </UFieldGroup>

    <!-- 🖼 Mockup com iframe -->
    <div
      class="relative   overflow-hidden transition-all duration-500 ease-in-out shadow-xl shadow-gray-400 dark:shadow-black"
      :class="[aspectClass, frameClass, sizeClass]"
    >
      <iframe ref="iframeRef"
        :src="src"
        class="w-full h-full border-0" 
      />
    </div>
  </div>
</template>

<style scoped>

</style>

