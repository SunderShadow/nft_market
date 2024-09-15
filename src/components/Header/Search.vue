<script setup lang="ts">

import MagnifierIcon from "@/components/icons/Magnifier.vue";
</script>

<template>
  <div class="search">
    <MagnifierIcon />
    <input placeholder="Search Here" type="text">
  </div>
</template>

<style lang="scss" scoped>
@use "@/cfg.scss";

.search {
  display: flex;
  gap: 1em;
  align-items: center;
  background: cfg.$component-bg;
  padding: .5em 1em;
  border-radius: 1em;

  width: 400px;
  input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;

    font: inherit;
    font-size: 1.5rem;
    color: #fff;
  }
}
</style>