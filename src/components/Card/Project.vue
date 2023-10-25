<template>
  <div class="relative mx-auto">
    <div class="lg:h-[400px] relative group">
      <img :src="image" :alt="title" class="" />
      <div class="transition-all duration-200 absolute top-0 left-0 w-full h-full bg-black/75 flex items-center justify-center flex-col gap-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
        <a target="_blank" class="text-[16px]" :href="projectUrl">
          <BaseButton text="VIEW PROJECT" />
        </a>
        <a target="_blank" class="text-[16px]" :href="codeUrl">
          <BaseButton text="VIEW CODE" />
        </a>
      </div>
    </div>
    <h2 class="text-white mt-2 md:text-3xl xs:text-xl">{{ title }}</h2>
    <p class="flex text-white gap-[18px]">
      <span v-for="(item, idx) in languages" :key="idx">
        {{ item }}
      </span>
    </p>
  </div>
</template>

<script setup>
import BaseButton from "@/components/Base/Button.vue"

defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  languages: {
    type: Array,
    required: true,
  },
  projectUrl: {
    type: String,
    required: true,
  },
  codeUrl: {
    type: String,
    required: true,
  },
})
</script>
