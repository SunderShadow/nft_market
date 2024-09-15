<script setup lang="ts">

import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header/index.vue";
</script>

<template>
  <div class="app_container">
    <Sidebar/>
    <main>
      <Header/>
      <RouterView />
    </main>
  </div>
</template>
<style lang="scss" scoped>

.app_container {
  display: flex;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>