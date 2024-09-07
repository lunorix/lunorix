<script setup lang="ts">
const props = defineProps({
  cardTitle: String,
  cardDescription: String,
  cardLink: String,
})

function handleMouseDown(event: MouseEvent): void {
  if (event.button === 0) {
    console.log("Left button clicked");
    window.open(props.cardLink, "_self");
  } else if (event.button === 1) {
    console.log("Middle button clicked");
    event.preventDefault();
    window.open(props.cardLink, "_blank");
  }
}
</script>

<template>
  <div class="card" @mousedown="handleMouseDown">
    <p class="card-title">{{ cardTitle }}</p>
    <p class="card-description">{{ cardDescription }}</p>
  </div>
</template>

<style scoped lang="scss">
.card {
  margin: 10px;
  width: 250px;
  height: 110px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  align-content: center;
  border-radius: 20px;
  cursor: pointer;
  transition: box-shadow 0.1s;

  &:hover {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  }

  .card-title {
    font-size: 25px;
    font-weight: 600;
  }
}
</style>
