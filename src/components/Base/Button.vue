<template>
  <button class="flex flex-col gap-2.5 group">
    <span class="transition-all duration-200 font-700 text-base text-white leading-[162.5%] hover:text-green">
      {{ text }}
    </span>
    <div class="bg-green w-[100%] h-[2px] hover:text-green-400"></div>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Button',
  },
})
</script>
