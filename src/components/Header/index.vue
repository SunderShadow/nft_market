<script setup lang="ts">

import Search from "./Search.vue";
import SunIcon from "@/components/icons/Sun.vue";
import BellIcon from "@/components/icons/Bell.vue";
</script>

<template>
  <header>
    <Search />
    <div class="side">
      <SunIcon />
      <BellIcon />
      <img src="/avatar.png" alt="">
    </div>
  </header>
</template>

<style lang="scss" scoped>

header {
  display: flex;
  justify-content: space-between;
}

.side {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>