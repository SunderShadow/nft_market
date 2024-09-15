<script setup lang="ts">

import DashboardIcon from "@/components/icons/Dashboard.vue"
import LogoIcon      from "@/components/icons/Logo.vue"
import LogoutIcon    from "@/components/icons/Logout.vue"
</script>

<template>
  <aside>
    <div class="logo">
      <LogoIcon />
    </div>

    <div class="icons">
      <RouterLink class="icon active" to="/">
        <DashboardIcon/>
      </RouterLink>
      <RouterLink class="icon active" to="/">
        <DashboardIcon/>
      </RouterLink>
      <RouterLink class="icon active" to="/">
        <DashboardIcon/>
      </RouterLink>
      <RouterLink class="icon active" to="/">
        <DashboardIcon/>
      </RouterLink>
    </div>

    <div class="logout icon">
      <LogoutIcon />
    </div>

  </aside>
</template>

<style lang="scss" scoped>
@use "@/cfg.scss";

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
  fill: cfg.$sidebar-icon-color;

  transition: fill 200ms;

  cursor: pointer;

  &:hover {
    fill: rgba(cfg.$sidebar-icon-active-color, .75);
  }

  &.router-link-active {
    fill: cfg.$sidebar-icon-active-color;
  }
}

.logout {
  display: flex;
  margin-top: auto;
}
</style>