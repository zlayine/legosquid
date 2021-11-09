<template>
  <div id="app">
    <navbar />
    <home-hero />
    <how-it-works />
    <mint-carousel />
    <live-auction />
    <call-to-action />
    <Footer />
    <copyright />
  </div>
</template>

<script>
import CallToAction from "./components/CallToAction.vue";
import Copyright from "./components/Copyright.vue";
import Footer from "./components/Footer.vue";
import HomeHero from "./components/HomeHero.vue";
import HowItWorks from "./components/HowItWorks.vue";
import LiveAuction from "./components/LiveAuction.vue";
import MintCarousel from "./components/MintCarousel.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  async mounted() {
    await this.$store.dispatch("connect");
  },
  components: {
    Navbar,
    HomeHero,
    HowItWorks,
    Footer,
    Copyright,
    MintCarousel,
    LiveAuction,
    CallToAction,
  },
};
</script>