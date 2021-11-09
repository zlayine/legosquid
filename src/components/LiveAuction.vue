<template>
  <div class="live-acution">
    <div class="container-fluid">
      <div class="live-auction-inr">
        <div class="heading-otr">
          <div class="head-otr">
            <span class="dot"></span>
            <h3 class="heading heading-h3">Meet Some of the Players</h3>
          </div>
        </div>
        <span class="line"></span>
        <carousel
          :autoplay="false"
          :loop="false"
          :dots="false"
          :margin="24"
          :nav="true"
          :navText="[
            '<img src=\'./icons/ArrowRight.svg\'>',
            '<img src=\'./icons/ArrowLeft.svg\'>',
          ]"
          :responsive="{
            0: {
              items: 1,
              nav: false,
              dots: true,
            },
            575: {
              items: 2,
            },
            992: {
              items: 3,
            },
            1300: {
              items: 4,
            },
          }"
          class="row row-custom owl-carousel owl-theme owl-loaded owl-drag"
        >
          <div class="col-otr">
            <div class="col-inr box1">
              <div class="img-otr">
                <a href="#." class="tilt-otr img-tilt" data-tilt>
                  <img
                    class="img-inr img-fluid"
                    src="../assets/img/lego-squid-game-24.jpg"
                    alt="artwork-img"
                  />
                </a>
              </div>
              <a href="#." class="body-mb box-head"></a>
              <div class="bid-main">
                <p class="body-sb bid">Mint Fee</p>
                <p class="body-mb eth">0.025 ETH</p>
              </div>
            </div>
          </div>
          <div class="col-otr">
            <div class="col-inr box2">
              <div class="img-otr">
                <a href="#." class="tilt-otr img-tilt" data-tilt>
                  <img
                    class="img-inr img-fluid"
                    src="../assets/img/lego-squid-game-18.jpg"
                    alt="artwork-img"
                  />
                </a>
              </div>
              <a href="#." class="body-mb box-head"></a>
              <div class="bid-main">
                <p class="body-sb bid">Mint Fee</p>
                <p class="body-mb eth">0.025 ETH</p>
              </div>
            </div>
          </div>
          <div class="col-otr">
            <div class="col-inr box3">
              <div class="img-otr">
                <a href="#." class="tilt-otr img-tilt" data-tilt>
                  <img
                    class="img-inr img-fluid"
                    src="../assets/img/lego-squid-game-04.jpg"
                    alt="artwork-img"
                  />
                </a>
              </div>
              <a href="#." class="body-mb box-head"></a>
              <div class="bid-main">
                <p class="body-sb bid">Mint Fee</p>
                <p class="body-mb eth">0.025 ETH</p>
              </div>
            </div>
          </div>
          <div class="col-otr">
            <div class="col-inr box4">
              <div class="img-otr">
                <a href="#." class="tilt-otr img-tilt" data-tilt>
                  <img
                    class="img-inr img-fluid"
                    src="../assets/img/lego-squid-game-16.jpg"
                    alt="artwork-img"
                  />
                </a>
              </div>
              <a href="#." class="body-mb box-head"></a>
              <div class="bid-main">
                <p class="body-sb bid">Mint Fee</p>
                <p class="body-mb eth">0.025 ETH</p>
              </div>
            </div>
          </div>
          <div class="col-otr">
            <div class="col-inr box5">
              <div class="img-otr">
                <a href="#." class="tilt-otr img-tilt" data-tilt>
                  <img
                    class="img-inr img-fluid"
                    src="../assets/img/lego-squid-game-27.jpg"
                    alt="artwork-img"
                  />
                </a>
              </div>
              <a href="#." class="body-mb box-head"></a>
              <div class="bid-main">
                <p class="body-sb bid">Mint Fee</p>
                <p class="body-mb eth">0.025 ETH</p>
              </div>
            </div>
          </div>
          <div class="col-otr">
            <div class="col-inr box6">
              <div class="img-otr">
                <a href="#." class="tilt-otr img-tilt" data-tilt>
                  <img
                    class="img-inr img-fluid"
                    src="../assets/img/lego-squid-game-23.jpg"
                    alt="artwork-img"
                  />
                </a>
              </div>
              <a href="#." class="body-mb box-head"></a>
              <div class="bid-main">
                <p class="body-sb bid">Mint Fee</p>
                <p class="body-mb eth">0.025 ETH</p>
              </div>
            </div>
          </div>
          <div class="col-otr">
            <div class="col-inr box7">
              <div class="img-otr">
                <a href="#." class="tilt-otr img-tilt" data-tilt>
                  <img
                    class="img-inr img-fluid"
                    src="../assets/img/lego-squid-game-07.jpg"
                    alt="artwork-img"
                  />
                </a>
              </div>
              <a href="#." class="body-mb box-head"></a>
              <div class="bid-main">
                <p class="body-sb bid">Mint Fee</p>
                <p class="body-mb eth">0.025 ETH</p>
              </div>
            </div>
          </div>
          <div class="col-otr">
            <div class="col-inr box8">
              <div class="img-otr">
                <a href="#." class="tilt-otr img-tilt" data-tilt>
                  <img
                    class="img-inr img-fluid"
                    src="../assets/img/lego-squid-game-17.jpg"
                    alt="artwork-img"
                  />
                </a>
              </div>
              <a href="#." class="body-mb box-head"></a>
              <div class="bid-main">
                <p class="body-sb bid">Mint Fee</p>
                <p class="body-mb eth">0.025 ETH</p>
              </div>
            </div>
          </div>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  components: { carousel },
};
</script>

<style lang="scss" scoped>
</style>