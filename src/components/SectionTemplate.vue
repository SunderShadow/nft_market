<script setup lang="ts">

</script>

<template>
  <section>
    <div class="title">
      <slot name="title"/>
    </div>
    <div class="main">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.title {
  font-size: 1.35rem;
  font-weight: 600;
}

.main {
  margin-top: 2rem;
}
</style>