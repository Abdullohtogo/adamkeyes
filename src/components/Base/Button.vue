<template>
  <button class="flex flex-col gap-2.5 group-button">
    <span class="transition-all duration-200 font-700 text-base text-white button-text ">
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
