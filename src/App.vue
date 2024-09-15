<script setup lang="ts">

import Sidebar from "@/components/App/Sidebar.vue";
import Header from "@/components/App/Header/index.vue";
</script>

<template>
  <div class="app_container">
    <Sidebar/>
    <div class="app_container-main">
      <div class="header">
        <Header/>
      </div>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.app_container {
  display: flex;
  min-height: 100vh;
}

.app_container-main {
  position: relative;
  flex-grow: 1;
  padding: 0 70px;
}

.header {
  padding-top: 30px;
}

main {
  margin-top: 3rem;
}
</style>