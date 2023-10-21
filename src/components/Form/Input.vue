<template>
    <div class="">
        <input :type="type" :placeholder="placeholder" />
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
