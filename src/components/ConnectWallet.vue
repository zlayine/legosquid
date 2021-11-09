<template>
  <button class="btn-fill btn-explore" @click="connect" v-if="!account">
    Connect Wallet
  </button>
  <div class="d-flex" v-else-if="nav">
    <span class="btn-fill btn-explore">Connected</span>
    <button class="btn-fill btn-explore" @click="withdraw" v-if="!owner">
      Withdraw
    </button>
  </div>
</template>

<script>
export default {
  props: ["nav"],
  methods: {
    async connect() {
      await this.$store.dispatch("connect", 1);
    },
    async withdraw() {
      await this.$store.dispatch("withdraw");
    },
  },
  computed: {
    account() {
      return this.$store.getters.account;
    },
    owner() {
      return this.$store.getters.owner;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 0;
  margin-left: 5px;
}
</style>