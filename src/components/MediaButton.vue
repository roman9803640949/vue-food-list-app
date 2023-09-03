<script setup>
defineProps({
  href: String,
  styleClass: {
    type: String,
    required: false
  }
})
</script>

<template>
  <a :href="href" target="_blank" :class="styleClass">
    <slot name="btnText">Youtube</slot>
  </a>
</template>

<style lang="scss" scoped></style>
