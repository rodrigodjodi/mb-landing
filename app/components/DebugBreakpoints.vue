<script setup lang="ts">
const breakpoints = [
  { name: 'medium-short', class: 'medium-short:block' },
  { name: 'medium-tall', class: 'medium-tall:block' },
  { name: 'wide-landscape', class: 'wide-landscape:block' },
  { name: 'wide-portrait', class: 'wide-portrait:block' },
]
</script>

<template>
  <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
    <div
      v-for="bp in breakpoints"
      :key="bp.name"
      class="hidden px-3 py-1 rounded-lg text-xs font-mono bg-black/70 text-white"
      :class="bp.class"
    >
      {{ bp.name }}
    </div>
  </div>
</template>
