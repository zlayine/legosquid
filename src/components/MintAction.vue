<template>
  <div class="col-lg-5 col-content-otr" style="z-index: 10">
    <div class="col-content-inr">
      <h2 class="heading-h1 heading">Mint to find out which Player you are.</h2>
      <p class="desc body-m">
        "Life is like a game, there are may players. If you don't play with
        them, they'll play with you."
      </p>
      <div class="action-otr" v-if="!mining">
        <input
          type="number"
          min="1"
          max="101"
          class="input mr-2"
          v-model="total"
        />
        <button class="btn-fill btn-create" @click="mint">
          Mint {{ total }}
        </button>
      </div>
      <div class="action-otr" v-else>
        <button class="btn-fill btn-create">Mining...</button>
      </div>
      <p class="desc body-m">
        "There's this saying in investing, "Try not to keep all your eggs in the
        same basket."
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 1,
    };
  },
  methods: {
    async mint() {
      if (this.total > 101) this.total = 101;
      await this.$store.dispatch("mintLegos", this.total);
    },
  },
  computed: {
    mining() {
      return this.$store.getters.mining;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 0;
}
.input {
  margin-right: 6px;
}
</style>