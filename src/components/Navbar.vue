<template>
  <div class="navbar-main-2 nav-home3">
    <div class="container-fluid">
      <div class="navbar-inr-2">
        <div class="burger-menu">
          <div class="burger-icon-otr burger-click">
            <svg
              class="burger-icon"
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12h16.5M4 6h9M11 18h9"
                stroke="#999"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <a href="./" class="logo-otr">
            <img
              class="logo-img"
              src="../assets/img/lego-squid-game-logo.svg"
              alt="brand-logo"
            />
          </a>
        </div>
        <div class="input-main"></div>
        <div class="navigation-otr">
          <ul class="navigation-inr">
            <li class="dots"></li>
          </ul>
        </div>
        <div class="action-otr">
          <div class="profile-otr">
            <connect-wallet :nav="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConnectWallet from "./ConnectWallet.vue";
export default {
  components: {
    ConnectWallet,
  },
};
</script>

<style lang="scss" scoped>
</style>