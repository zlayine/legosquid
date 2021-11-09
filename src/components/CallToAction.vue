<template>
  <div class="call-to-action">
    <div class="container-fluid">
      <div class="call-to-action-inr">
        <div class="overlay">
          <div class="content">
            <h2 class="heading-h2 heading">
              Doing something is always <br />
              more fun than just watching
            </h2>
            <p class="desc body-m">
              Soon there'll be none to mint <br />
              else you buy from another player.
            </p>
            <div class="action-otr">
              <a href="#mint" class="btn-fill-white btn-create">
                Mint an NFT for 0.025 ETH
              </a>
              <a :href="opensea_link" class="btn-outline-white btn-wallet">
                Explore on OpenSea
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    opensea_link() {
      return this.$store.state.opensea;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>