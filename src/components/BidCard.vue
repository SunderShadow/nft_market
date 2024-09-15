<script setup lang="ts">

</script>

<template>
  <article>
    <div class="thumbnail">
      <img class="thumbnail" src="/NFT.png" alt="">
    </div>
    <h1>Liquid wave</h1>
    <div class="data">
      <div class="auction_time">
        <div class="auction_time-title">Auction time</div>
        <div class="auction_time-time">3h 1m 50s</div>
      </div>
      <div class="current_bid">
        <span class="current_bid-title">Current bid</span>
        <span class="current_bid-bid">0.15 ETH</span>
      </div>
    </div>
    <button class="place_bid">Place a bid</button>
  </article>
</template>

<style lang="scss" scoped>
@use "@/cfg.scss";

article {
  border-radius: 1.25em;
  padding: 1.5em;

  background: cfg.$component-bg;
}

.thumbnail {
  border-radius: inherit;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
}

h1 {
  margin-top: 2em;
  font-size: 1.25em;
  font-weight: 600;
}

.data {
  display: flex;
  justify-content: space-between;

  margin-top: 1.25em;
}

.auction_time {
  display: flex;
  flex-direction: column;

  &-time {
    margin-top: auto;
    opacity: .5;
  }
}

.current_bid {
  display: flex;
  flex-direction: column;
  text-align: right;

  &-bid {
    margin-top: 1em;
    opacity: .5;
  }
}

.place_bid {
  margin-top: 2.5em;
}
</style>