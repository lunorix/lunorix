<script setup lang="ts">
onMounted(() => {
  let heroElement: HTMLElement | null = document.getElementById("hero");
  if (heroElement) {
    if (getRandomInt(1) == 0) {
      heroElement.style.backgroundImage = `url("/assets/images/wallpapers/japan-tokyo-akihabara.jpg")`;
    } else if (getRandomInt(1) == 1) {
      heroElement.style.backgroundImage = `url("/assets/images/wallpapers/southkorea-seoul.jpg")`;
    }
  }
})

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
</script>

<template>
  <div class="hero" id="hero">
    <p>Welcome</p>
  </div>
</template>

<style scoped lang="scss">
.hero {
  background-image: url("/assets/images/wallpapers/japan-tokyo-akihabara.jpg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);

  p {
    color: white;
    font-size: 80px;
    font-weight: 600;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  }
}
</style>
