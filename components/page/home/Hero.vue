<script setup lang="ts">
onMounted(() => {
  let wallpapers = [
    "/assets/images/wallpapers/japan-tokyo-akihabara.jpg",
    "/assets/images/wallpapers/southkorea-seoul.jpg",
    "/assets/images/wallpapers/poland-warsaw.jpg",
    "/assets/images/wallpapers/indonesia-jakarta.jpg",
  ];

  let heroElement: HTMLElement | null = document.getElementById("hero");
  if (heroElement) {
    if (wallpapers.length > 0) {
      heroElement.style.backgroundImage = `url(${wallpapers[getRandomInt(wallpapers.length)]})`;
    }
  }
});

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}
</script>

<template>
  <div class="hero" id="hero">
    <p>Welcome</p>
  </div>
</template>

<style scoped lang="scss">
.hero {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.2);

  p {
    color: white;
    font-size: 80px;
    font-weight: 600;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  }
}
</style>
