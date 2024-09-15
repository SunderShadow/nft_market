<script setup lang="ts">

import DashboardIcon from "@/components/icons/Dashboard.vue"
import LogoIcon      from "@/components/icons/Logo.vue"
import LogoutIcon    from "@/components/icons/Logout.vue"
import BidIcon       from "@/components/icons/Bid.vue"
import HeartIcon     from "@/components/icons/Heart.vue"
import AccountIcon   from "@/components/icons/Account.vue"
import SettingsIcon  from "@/components/icons/Settings.vue"
</script>

<template>
  <aside>
    <div class="logo">
      <LogoIcon />
    </div>

    <div class="icons">
      <RouterLink class="icon" to="/">
        <DashboardIcon/>
      </RouterLink>
      <RouterLink class="icon bid" to="/bid">
        <BidIcon/>
      </RouterLink>
      <RouterLink class="icon heart" to="/saved">
        <HeartIcon/>
      </RouterLink>
      <RouterLink class="icon stroke account" to="/profile">
        <AccountIcon/>
      </RouterLink>
      <RouterLink class="icon" to="/settings">
        <SettingsIcon/>
      </RouterLink>
    </div>

    <div class="logout icon">
      <LogoutIcon />
    </div>

  </aside>
</template>

<style lang="scss" scoped>
@use "@/cfg";

aside {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2rem;

  position: sticky;
  top: 0;
  height: 100vh;

  background: cfg.$component-bg;
}

.logo {
  width: 30px;
  height: 30px;
}

.icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-top: 5rem;
}

.icon {
  width: 24px;

  &:not(.stroke) {
    fill: cfg.$sidebar-icon-color;
  }

  &.stroke {
    stroke: cfg.$sidebar-icon-color;
  }

  transition: fill 200ms;

  cursor: pointer;

  &:hover {
    &:not(.stroke) {
      fill: rgba(cfg.$sidebar-icon-active-color, .75);
    }

    &.stroke {
      stroke: rgba(cfg.$sidebar-icon-active-color, .75);
    }
  }

  &.router-link-active {
    &:not(.stroke) {
      fill: cfg.$sidebar-icon-active-color;
    }

    &.stroke {
      stroke: cfg.$sidebar-icon-active-color;
    }
  }
}

.logout {
  display: flex;
  margin-top: auto;
}

.bid {
  transform: scale(1.35);
}

.heart {
  transform: scale(1.25);
}

.account {
  transform: scale(1.1);
}
</style>