<script setup lang="ts">

</script>

<template>
  <div class="goals">
    <div class="padding">
      <div class="div1 card">
        <p class="card-title">Fast and lightweight</p>
        <div class="card-description">
          <p>Lunorix products are designed to be lightweight and fast, providing a smooth user experience.</p>
        </div>
      </div>
    </div>
    <div class="padding">
      <div class="div2 card">
        <p class="card-title">Excellent Support</p>
        <div class="card-description">
          <p>We are always ready to help you with any issues or questions, ensuring you have the best possible experience with our products.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.goals {
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;

  .padding {
    padding: 20px;
  }

  .card {
    background-color: #ffffff;
    border-radius: 30px;
    padding: 20px;
    height: 150px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

    .card-title {
      text-align: center;
      font-size: 20px;
      font-weight: 500;
    }

    .card-description {
      text-align: center;
      color: #5e5e5e;
    }
  }
}

@media screen and (max-width: 530px) {
  .goals {
    display: block;
  }
}
</style>