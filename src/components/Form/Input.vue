<template>
    <div class="">
        <input :type="type" :placeholder="placeholder" class="input mb-5 w-[450px]"/>
    </div>
</template>


<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: false
  }
})
</script>
