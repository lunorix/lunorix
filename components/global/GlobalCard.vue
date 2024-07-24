<script setup lang="ts">
const props = defineProps({
  cardTitle: String,
  cardDescription: String,
  cardUrl: String,
  cardImage: String,
  cardImageAlt: String,
})

function navigate() {
  window.location.href = <string>props.cardUrl;
}
</script>

<template>
  <div class="card" @click="navigate()">
    <div class="card-image">
      <img :src="cardImage" :alt="cardImageAlt" />
    </div>
    <div class="card-title">
      <p>{{ cardTitle }}</p>
    </div>
    <div class="card-description">
      <p>{{ cardDescription }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  cursor: pointer;
  margin: 10px;
  width: fit-content;
  border-radius: 20px;
  padding: 20px;
  background-color: #f8f9fd;
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-image {
    overflow: hidden;
    width: 316px;
    height: 180px;

    img {
      background-color: #ffffff;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .card-title {
    margin-top: 10px;
    text-align: center;
    font-size: 26px;
    font-weight: 500;
    color: var(--lunorix-common-fcolor-2) !important;
  }

  .card-description {
    text-align: center;
  }
}
</style>
