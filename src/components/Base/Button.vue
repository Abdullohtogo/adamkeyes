<template>
  <button class="flex flex-col text-white xl:mt-[40px] text-[16px]">{{ text }}</button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Button'
  }
})
</script>