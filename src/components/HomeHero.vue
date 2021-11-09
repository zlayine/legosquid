<template>
  <div class="home3-hero">
    <div class="container-fluid">
      <div class="row row-content">
        <div class="col-lg-6 col-head-otr">
          <div class="col-head-inr">
            <h1 class="head heading-h1">
              Lego Squid Game <br />NFT Collection
            </h1>
            <div class="boxes-main">
              <div class="auction-main">
                <p class="body-mb acution">Launch Date</p>
                <div id="clock" class="timer" v-if="currentTime">
                  <div class="days-main main">
                    <p class="heading-h3 time-inr" id="days">
                      {{ currentTime.days }}
                    </p>
                    <p class="days-p body-mb">Days</p>
                  </div>
                  <div class="hours-main main">
                    <p class="heading-h3 time-inr" id="hours">
                      {{ currentTime.hours }}
                    </p>
                    <p class="hours-p body-mb">Hours</p>
                  </div>
                  <div class="minutes-main main">
                    <p class="heading-h3 time-inr" id="minutes">
                      {{ currentTime.minutes }}
                    </p>
                    <p class="minutes-p body-mb">Minutes</p>
                  </div>
                  <div class="seconds-main main">
                    <p class="heading-h3 time-inr" id="seconds">
                      {{ currentTime.seconds }}
                    </p>
                    <p class="seconds-p body-mb">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-text-otr">
          <div class="col-text-inr">
            <p class="desc body-m">
              Get one or more of these exclusive 10,000 unique NFTs collectibles
              living on the Ethereum blockchain inspired by the Movie Series
              "SQUID GAME".
            </p>
            <div class="btn-otr">
              <connect-wallet :nav="false" />
              <a
                :href="opensea_link"
                target="_blank"
                class="btn-outline1 btn-create"
              >
                Explore on OpenSea
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="row row-imgs">
          <div class="col-lg-2 col-md-2 col-sm-2 col-img-otr box-1">
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-21.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-22.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-09.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-img-otr box-2">
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-06.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-33.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-35.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-img-otr box-3">
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-29.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-03.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-32.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-img-otr box-4">
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-02.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-13.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-15.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-img-otr box-5">
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-34.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-08.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-17.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-img-otr box-6">
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-23.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-04.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
            <div class="col-img-inr">
              <img
                class="about-img img-fluid"
                src="../assets/img/lego-squid-game-16.jpg"
                alt="lego squid game nft collection image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConnectWallet from "./ConnectWallet.vue";
export default {
  data() {
    return {
      currentTime: null,
      deadline: "14 Nov 2021 13:00:00",
    };
  },
  mounted() {
    setTimeout(this.countdown, 1000);
  },
  methods: {
    countdown() {
      let t = Date.parse(this.deadline) - Date.parse(new Date());
      let seconds = Math.floor((t / 1000) % 60);
      let minutes = Math.floor((t / 1000 / 60) % 60);
      let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      if (t > 0) {
        this.currentTime = {
          total: t,
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        };
        setTimeout(this.countdown, 1000);
      } else {
        this.currentTime = null;
      }
    },
  },
  computed: {
    opensea_link() {
      return this.$store.state.opensea;
    },
  },
  components: {
    ConnectWallet,
  },
};
</script>

<style lang="scss" scoped>
</style>