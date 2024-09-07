<script setup lang="ts">
const props = defineProps({
  sectionTitle: String,
})
</script>

<template>
  <div class="section">
    <p class="section-title">{{ sectionTitle }}</p>
    <div class="section-body">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;

  .section-title {
    font-size: 40px;
    font-weight: 600;
  }

  .section-body {
    display: flex;
    justify-content: center;
  }
}
</style>