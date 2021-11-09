<template>
  <div class="hero-5" id="mint">
    <div class="hero-inr">
      <div class="row row-custom">
        <div class="col-lg-7 col-carousel-otr">
          <carousel
            :autoplay="false"
            :loop="true"
            :dots="false"
            :autoWidth="true"
            :margin="24"
            :nav="false"
            :navText="[
              '<img src=\'./icons/ArrowLeft.svg\'>',
              '<img src=\'./icons/ArrowRight.svg\'>',
            ]"
            :responsive="{
              0: {
                center: true,
                nav: false,
              },
              420: {
                center: true,
                nav: true,
              },
              992: {
                center: false,
                rtl: true,
                nav: true,
              },
            }"
            class="col-carousel-inr owl-carousel owl-theme owl-loaded owl-drag"
          >
            <div class="col-img-inr">
              <img
                class="img1 img-fluid"
                src="../assets/img/lego-squid-game-full-23.jpg"
                alt="squid game characters NFT"
              />
              <a href="#." class="profile-otr">
                <div class="profile-inr">
                  <div class="username-otr">
                    <p class="user-info body-mb">Hairy Guy</p>
                    <p class="username body-s">Lego Squid Game</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-img-inr">
              <img
                class="img1 img-fluid"
                src="../assets/img/lego-squid-game-full-33.jpg"
                alt="squid game characters NFT"
              />
              <a href="#." class="profile-otr">
                <div class="profile-inr">
                  <div class="username-otr">
                    <p class="user-info body-mb">Don't Mes With</p>
                    <p class="username body-s">Lego Squid Game</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-img-inr">
              <img
                class="img1 img-fluid"
                src="../assets/img/lego-squid-game-full-03.jpg"
                alt="squid game characters NFT"
              />
              <a href="#." class="profile-otr">
                <div class="profile-inr">
                  <div class="username-otr">
                    <p class="user-info body-mb">Frustrated</p>
                    <p class="username body-s">Lego Squid Game</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-img-inr">
              <img
                class="img1 img-fluid"
                src="../assets/img/lego-squid-game-full-04.jpg"
                alt="squid game characters NFT"
              />
              <a href="#." class="profile-otr">
                <div class="profile-inr">
                  <div class="username-otr">
                    <p class="user-info body-mb">Worried</p>
                    <p class="username body-s">Lego Squid Game</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-img-inr">
              <img
                class="img1 img-fluid"
                src="../assets/img/lego-squid-game-full-09.jpg"
                alt="squid game characters NFT"
              />
              <a href="#." class="profile-otr">
                <div class="profile-inr">
                  <div class="username-otr">
                    <p class="user-info body-mb">Focused</p>
                    <p class="username body-s">Lego Squid Game</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-img-inr">
              <img
                class="img1 img-fluid"
                src="../assets/img/lego-squid-game-full-06.jpg"
                alt="squid game characters NFT"
              />
              <a href="#." class="profile-otr">
                <div class="profile-inr">
                  <div class="username-otr">
                    <p class="user-info body-mb">Happy</p>
                    <p class="username body-s">Lego Squid Game</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-img-inr">
              <img
                class="img1 img-fluid"
                src="../assets/img/lego-squid-game-full-07.jpg"
                alt="squid game characters NFT"
              />
              <a href="#." class="profile-otr">
                <div class="profile-inr">
                  <div class="username-otr">
                    <p class="user-info body-mb">Red Hair</p>
                    <p class="username body-s">Lego Squid Game</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-img-inr">
              <img
                class="img1 img-fluid"
                src="../assets/img/lego-squid-game-full-08.jpg"
                alt="squid game characters NFT"
              />
              <a href="#." class="profile-otr">
                <div class="profile-inr">
                  <div class="username-otr">
                    <p class="user-info body-mb">Cool Guy</p>
                    <p class="username body-s">Lego Squid Game</p>
                  </div>
                </div>
              </a>
            </div>
          </carousel>
        </div>
        <mint-action />
      </div>
      <img
        class="shape-bg"
        src="../assets/img/bg-shape-home5.svg"
        alt="shape"
      />
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import MintAction from "./MintAction.vue";
export default {
  components: { carousel, MintAction },
};
</script>

<style lang="scss" scoped>
</style>