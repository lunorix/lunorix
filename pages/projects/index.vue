<script setup lang="ts">

</script>

<template>
  <div class="foo"></div>
  <div class="projects">
    <Section section-title="Current Projects">
      <Card card-title="Lunorix (Website)" card-description="Lunorix Website" card-link="https://github.com/lunorix/lunorix" />
      <Card card-title="Lunuxt" card-description="Nuxt Template" card-link="https://github.com/lunorix/lunuxt" />
      <Card card-title="Devrules" card-description="Development Rules" card-link="https://github.com/lunorix/devrules" />
    </Section>
    <Section section-title="Archived Projects">
      <p>None</p>
    </Section>
  </div>
</template>

<style scoped lang="scss">
.foo {
  height: 80px;
}

.projects {

}
</style>