<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="header-left">
      <img src="/assets/images/lunorix/banner/banner.png">
    </div>
    <div class="header-right">
      <div class="header-right-links">
        <a href="https://github.com/lunorix"><i class="fa-brands fa-github"></i></a>
        <a href="https://discord.gg/UY9Nx4Dnvg"><i class="fa-brands fa-discord"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  padding: 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 0 0 10px 10px;

  .header-left {
    img {
      height: 50px;
    }
  }

  .header-right {
    .header-right-links {
      display: flex;

      a {
        color: var(--lunorix-common-fcolor-2) !important;
        padding: 10px;

        i {
          font-size: 20px;
        }
      }
    }
  }
}
</style>