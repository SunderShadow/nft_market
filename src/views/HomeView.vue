<script setup lang="ts">

import InfoCardTemplate from "@/components/SectionTemplate.vue";
import BidCard from "@/components/BidCard.vue";
</script>

<template>
  <InfoCardTemplate>
    <template v-slot:title>Trending Bids</template>

    <div class="bids">
      <BidCard v-for="i in 8"/>
    </div>
  </InfoCardTemplate>
</template>

<style scoped>
.bids {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
}
</style>