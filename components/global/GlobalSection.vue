<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <div class="section">
    <p class="section-title">{{ title }}</p>
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  text-align: center;
  margin: 20px auto;
  max-width: 1280px;

  .section-title {
    font-size: 40px;
    font-weight: 600;
    color: var(--lunorix-common-fcolor-2);
  }

  .section-content {
    justify-content: center;
    display: flex;
  }
}

@media screen and (max-width: 750px) {
  .section {
    .section-content {
      margin: 0 auto;
      display: block;
    }
  }
}
</style>