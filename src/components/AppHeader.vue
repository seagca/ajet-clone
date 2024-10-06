<template>
  <div data-v-ba2b0ba0="" class="loader out"></div>
  <LoaderIcon />

  <div
    data-v-834e9ed9=""
    data-v-93c6af58=""
    class="header-fix"
    :style="{
      '--22e0a771': headerHeight,
      '--30596d21': topBannerHeight,
      '--39271329': BannerHeight,
    }"
  ></div>
  <header
    data-v-93c6af58=""
    class="_ajt_large_container show-topbar"
    :style="{ '--22e0a771': headerHeight, '--30596d21': topBannerHeight }"
  >
    <div
      data-v-93c6af58=""
      :class="{
        'submenu-container active': serviceActive,
        'submenu-container': !serviceActive,
      }"
    >
      <div
        data-v-93c6af58=""
        :class="{ 'submenu active': serviceActive, submenu: !serviceActive }"
        @mouseover="serviceOpen()"
        @mouseleave="serviceClose()"
      >
        <div data-v-93c6af58="" class="container">
          <div data-v-93c6af58="" class="sub-block">
            <h3 data-v-93c6af58="">Pre-Flight</h3>
            <span data-v-93c6af58=""
              ><router-link
                data-v-93c6af58=""
                to="/en/services/free-check-in"
                class=""
                >Free Check-in</router-link
              ></span
            ><span data-v-93c6af58=""
              ><router-link
                data-v-93c6af58=""
                to="/en/services/seat-selection"
                class=""
                >Seat Selection</router-link
              ></span
            ><span data-v-93c6af58=""
              ><router-link
                data-v-93c6af58=""
                to="/en/services/excess-baggage"
                class=""
                >Excess Baggage</router-link
              ></span
            ><span data-v-93c6af58=""
              ><router-link
                data-v-93c6af58=""
                to="/en/services/sports-equipment"
                class=""
                >Sports Equipment</router-link
              ></span
            >
          </div>
        </div>
      </div>
      <div data-v-93c6af58="" class="submenu"></div>
      <div data-v-93c6af58="" class="submenu"><!----></div>
    </div>
    <!---->
    <div data-v-93c6af58="" class="top-banner-wrapper">
      <Swiper
        :modules="[Navigation, Autoplay]"
        :slides-per-view="auto"
        :loop="true"
        :autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
        :navigation="{ nextEl: '.swp-next', prevEl: '.swp-prev' }"
        data-v-500f2780=""
        data-v-93c6af58=""
        :class="{
          'top-banner top-banner-container swiper-ios text-xs md:text-sm xl:text-base active':
            bannerActive,
          'top-banner top-banner-container swiper-ios text-xs md:text-sm xl:text-base':
            !bannerActive,
        }"
      >
        <swiper-slide
          data-v-500f2780=""
          v-for="(item, index) in topSliderItems"
          :key="index"
        >
          <router-link data-v-500f2780="" :to="item.url">
            <span
              data-v-500f2780=""
              class="slide block overflow-hidden white-space-nowrap text-overflow-ellipsis pr-68"
              style="color: rgb(0, 0, 0)"
            >
              <BannerPinIcon></BannerPinIcon>
              {{ item.text }}
            </span>
          </router-link>
        </swiper-slide>

        <div
          data-v-99e41b1c=""
          data-v-500f2780=""
          class="swp-buttons action-buttons"
        >
          <div data-v-99e41b1c="" class="swp swp-prev">
            <img
              data-v-99e41b1c=""
              src="@/assets/arrow-left-4e890973.svg"
              alt=""
            />
          </div>
          <div data-v-99e41b1c="" class="swp swp-next">
            <img
              data-v-99e41b1c=""
              src="@/assets/arrow-right-255a83a7.svg"
              alt=""
            />
          </div>
        </div>
      </Swiper>
      <div
        data-v-93c6af58=""
        :class="{ 'close active': bannerActive, close: !bannerActive }"
        @click="closeBannerWrapper()"
      >
        <span data-v-93c6af58="" class="material-icons">cancel</span>
      </div>
    </div>
    <!---->
    <div data-v-93c6af58="" class="menu-container">
      <main data-v-93c6af58="" class="">
        <router-link
          to="/"
          data-v-93c6af58=""
          class="home-link"
          aria-current="page"
          ><img
            data-v-93c6af58=""
            src="@/assets/ajet-logo-0d41a81e.svg"
            alt="AJet"
        /></router-link>
        <div data-v-93c6af58="" class="menu-items">
          <span
            data-v-93c6af58=""
            class="item hidden lg:flex"
            @mouseover="serviceOpen()"
            @mouseleave="serviceClose()"
            ><router-link
              data-v-93c6af58=""
              to="/en/services"
              class="item-link flex align-items-center"
              >Services
              <span data-v-93c6af58="" class="material-icons ml-4"
                >expand_more</span
              ></router-link
            ></span
          ><span data-v-93c6af58="" class="item hidden lg:flex"
            ><router-link
              data-v-93c6af58=""
              to="/en/city-guide"
              class="item-link flex align-items-center"
              >City Guide
              <!----></router-link
            ></span
          ><span data-v-93c6af58="" class="item hidden lg:flex"
            ><router-link
              data-v-93c6af58=""
              to="/en/frequently-asked-questions"
              class="item-link flex align-items-center"
              >FAQ
              <!----></router-link
            ></span
          >
        </div>
        <div
          data-v-93c6af58=""
          class="language-select lang-select lg:flex hidden"
          style="--2beacc2e: url(/ajet-clone/menu-lang-bg-n-d5cdc789.svg)"
        >
          <span class="hover-root"
            ><img src="@/assets/world-0909cfa7.svg" alt="" /><span class="lang"
              ><span class="selected" translate="no">en</span
              ><span class="alternate"
                ><span class="lang-select" translate="no">tr</span></span
              ></span
            ><img
              src="@/assets/toggle-arrow-down-4b9e4030.svg"
              class="lang-toggle"
              alt=""
          /></span>
        </div>
        <div data-v-93c6af58="" class="mob-menu-container flex lg:hidden">
          <div
            data-v-93c6af58=""
            id="_ajt_mobile_menu"
            class="mob-menu"
            style="background-image: url(/ajet-clone/mob-menu-bg-e24ded0c.svg)"
          >
            <img
              data-v-93c6af58=""
              src="@/assets/menu-toggle-cde1118c.svg"
              class="mob-toggle"
              alt=""
              @click="toggleClass()"
            />
            <div
              data-v-93c6af58=""
              :class="{
                'mob-menu-content active': isActive,
                'mob-menu-content': !isActive,
              }"
            >
              <img
                data-v-93c6af58=""
                src="@/assets/ajet-logo-big-blue-4e958dd2.svg"
                class="mob-menu-bg"
                alt="AJet"
              />
              <nav data-v-93c6af58="" class="top">
                <div
                  data-v-93c6af58=""
                  class="language-select lang-select lg:flex"
                  style="
                    --2beacc2e: url(/ajet-clone/menu-lang-bg-n-d5cdc789.svg);
                  "
                >
                  <span class="hover-root"
                    ><img src="@/assets/world-0909cfa7.svg" alt="" /><span
                      class="lang"
                      ><span class="selected" translate="no">en</span
                      ><span class="alternate"
                        ><span class="lang-select" translate="no"
                          >tr</span
                        ></span
                      ></span
                    ><img
                      src="@/assets/toggle-arrow-down-4b9e4030.svg"
                      class="lang-toggle"
                      alt=""
                  /></span>
                </div>
                <span
                  data-v-93c6af58=""
                  :class="{ 'item active': subActive, item: !subActive }"
                  ><router-link
                    data-v-93c6af58=""
                    to="/en/services"
                    class="item-link"
                    >Services</router-link
                  ><img
                    data-v-93c6af58=""
                    style="width: 11px !important"
                    class="sub-toggle"
                    src="@/assets/chevron-right.svg"
                    alt=""
                    @click="subToggle()"
                  />
                  <div data-v-93c6af58="" class="subs">
                    <span data-v-93c6af58="" class="sub-item"
                      ><router-link
                        data-v-93c6af58=""
                        to="/en/services/free-check-in"
                        class="sub-link"
                        >Free Check-in</router-link
                      ></span
                    ><span data-v-93c6af58="" class="sub-item"
                      ><router-link
                        data-v-93c6af58=""
                        to="/en/services/seat-selection"
                        class="sub-link"
                        >Seat Selection</router-link
                      ></span
                    ><span data-v-93c6af58="" class="sub-item"
                      ><router-link
                        data-v-93c6af58=""
                        to="/en/services/excess-baggage"
                        class="sub-link"
                        >Excess Baggage</router-link
                      ></span
                    ><span data-v-93c6af58="" class="sub-item"
                      ><router-link
                        data-v-93c6af58=""
                        to="/en/services/sports-equipment"
                        class="sub-link"
                        >Sports Equipment</router-link
                      ></span
                    >
                  </div> </span
                ><span data-v-93c6af58="" class="item"
                  ><router-link
                    data-v-93c6af58=""
                    to="/en/city-guide"
                    class="item-link"
                    >City Guide</router-link
                  ><!---->
                  <div data-v-93c6af58="" class="subs"></div> </span
                ><span data-v-93c6af58="" class="item"
                  ><router-link
                    data-v-93c6af58=""
                    to="/en/frequently-asked-questions"
                    class="item-link"
                    >FAQ</router-link
                  ><!---->
                  <div data-v-93c6af58="" class="subs"></div>
                </span>
              </nav>
              <nav data-v-93c6af58="" class="bottom">
                <span data-v-93c6af58="" class="item"
                  ><router-link
                    data-v-93c6af58=""
                    to="/en/corporate/feedback-form"
                    class="item-link"
                    >Feedback Form</router-link
                  ></span
                ><span data-v-93c6af58="" class="item"
                  ><router-link
                    data-v-93c6af58=""
                    to="/en/corporate/our-policies"
                    class="item-link"
                    >Our Policy</router-link
                  ></span
                ><span data-v-93c6af58="" class="item"
                  ><router-link
                    data-v-93c6af58=""
                    to="/en/corporate/privacy-statement"
                    class="item-link"
                    >Personal Information Protection</router-link
                  ></span
                ><span data-v-93c6af58="" class="item"
                  ><router-link
                    data-v-93c6af58=""
                    to="/en/corporate/rules-and-conditions/privacy-and-cookie-policy"
                    class="item-link"
                    >Privacy and Cookie Policy</router-link
                  ></span
                >
              </nav>
            </div>
          </div>
        </div>
        <div data-v-93c6af58="" class="header-login" id="header-login">
          <div>
            <button
              class="p-button p-component aj-font font-medium px-24"
              type="button"
              data-pc-name="button"
              data-pc-section="root"
              @click="handleLogin()"
            >
              <span class="hidden md:inline mr-8">Login</span
              ><span class="material-icons md-20">login</span>
            </button>
          </div>
          <!---->
        </div>
      </main>
    </div>
  </header>
</template>

<script setup>
import LoaderIcon from "@/components/svg/LoaderIcon.vue";
import BannerPinIcon from "@/components/svg/BannerPinIcon.vue";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import topSliderData from "@/data/topSliderData.json";
</script>

<script>
export default {
  components: {
    LoaderIcon,
    Swiper,
    SwiperSlide,
    BannerPinIcon,
  },
  data() {
    return {
      isActive: false,
      subActive: false,
      serviceActive: false,
      bannerActive: true,
      headerHeight: "120px", // --22e0a771
      topBannerHeight: "90px", // --30596d21
      BannerHeight: "120px", // --39271329
      topSliderItems: topSliderData,
    };
  },
  mounted() {
    this.scrollHandler = this.handleScroll;
    window.addEventListener("scroll", this.handleScroll);
  },

  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },

  methods: {
    toggleClass() {
      this.isActive = !this.isActive; // Toggle the class when clicked
    },
    subToggle() {
      this.subActive = !this.subActive; // Toggle the class when clicked
    },
    serviceOpen() {
      this.serviceActive = true; // Toggle the class when clicked
    },
    serviceClose() {
      this.serviceActive = false; // Toggle the class when clicked
    },

    closeBannerWrapper() {
      this.bannerActive = false;

      this.headerHeight = "70px"; // --22e0a771
      this.topBannerHeight = "40px"; // --30596d21
      this.BannerHeight = "40px"; // --39271329
      window.removeEventListener("scroll", this.scrollHandler);
      const topBannerWrapper = document.querySelector(".top-banner-wrapper");
      if (topBannerWrapper) {
        setTimeout(() => topBannerWrapper.remove(), 250);
      }
    },

    handleScroll() {
      

      if (window.scrollY > 50) {
        this.headerHeight = "70px"; // --22e0a771
        this.topBannerHeight = "40px"; // --30596d21
        this.BannerHeight = "70px"; // --39271329
        this.bannerActive = false;
      } else {
        this.bannerActive = true;
        this.headerHeight = "120px"; // --22e0a771
        this.topBannerHeight = "90px"; // --30596d21
        this.BannerHeight = "90px"; // --39271329
        //topBannerContainer.classList.add('active');
        //closeBanner.classList.add('active');
        //largeContainer.style.setProperty('--22e0a771', '120px');
        //headerFix.style.setProperty('--39271329', '120px');
      }
    },
  },
};

const handleLogin = () => {
  alert("You have successfully logged in!");
};
</script>
