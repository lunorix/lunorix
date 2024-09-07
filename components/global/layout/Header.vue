<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="header-left">
      <NuxtImg src="/assets/images/lunorix/banner/banner.png" alt="banner" />
    </div>
    <div class="header-center">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
    </div>
    <div class="header-right">
      <a href="https://github.com/lunorix">GitHub</a>
      <a href="https://discord.gg/UY9Nx4Dnvg">Discord</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-color: #ffffff;
  border-radius: 20px;
  height: 60px;
  position: fixed;
  left: 0;
  right: 0;
  margin: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;

  .header-left {
    img {
      height: 50px;
    }
  }

  .header-center {
    * {
      text-decoration: none;
      color: black;
      margin: 10px;
    }
  }

  .header-right {
    * {
      font-weight: 500;
      margin-right: 10px;
    }
  }
}

@media screen and (max-width: 530px) {
  .header {
    padding: 0;
  }
}
</style>