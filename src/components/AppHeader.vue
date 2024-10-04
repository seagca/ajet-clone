<template>
  <div data-v-ba2b0ba0="" class="loader out"></div>
  <LoaderIcon />
  
  <div data-v-834e9ed9="" class="header-fix" style="--22e0a771: 120px; --30596d21: 90px;"></div>
  <header
    data-v-93c6af58=""
    class="_ajt_large_container show-topbar"
    style="--22e0a771: 120px; --30596d21: 90px"
  >
    <div data-v-93c6af58="" class="submenu-container" >
      <div data-v-93c6af58="" class="submenu" @mouseover="serviceOpen()" @mouseleave="serviceClose()">
        <div data-v-93c6af58="" class="container">
          <div data-v-93c6af58="" class="sub-block">
            <h3 data-v-93c6af58="">Pre-Flight</h3>
            <span data-v-93c6af58=""
              ><a data-v-93c6af58="" href="/en/services/free-check-in" class=""
                >Free Check-in</a
              ></span
            ><span data-v-93c6af58=""
              ><a data-v-93c6af58="" href="/en/services/seat-selection" class=""
                >Seat Selection</a
              ></span
            ><span data-v-93c6af58=""
              ><a data-v-93c6af58="" href="/en/services/excess-baggage" class=""
                >Excess Baggage</a
              ></span
            ><span data-v-93c6af58=""
              ><a
                data-v-93c6af58=""
                href="/en/services/sports-equipment"
                class=""
                >Sports Equipment</a
              ></span
            >
          </div>
        </div>
      </div>
      <div data-v-93c6af58="" class="submenu"></div>
      <div data-v-93c6af58="" class="submenu"><!----></div>
    </div>
    <div data-v-93c6af58="" class="top-banner-wrapper">
      <Swiper

        :modules="[Navigation, Autoplay]"
        :slides-per-view="auto"
        :loop="true"
        :autoplay="{ delay: 3000 ,pauseOnMouseEnter: true}"
        :navigation="{nextEl: '.swp-next', prevEl: '.swp-prev'}"
        data-v-500f2780=""
        data-v-93c6af58=""
        class="top-banner top-banner-container swiper-ios text-xs md:text-sm xl:text-base active"
      >
      <swiper-slide data-v-500f2780="" v-for="(item, index) in topSliderItems" :key="index">
        <a data-v-500f2780="" :href = "item.url" >
          <span data-v-500f2780="" class="slide block overflow-hidden white-space-nowrap text-overflow-ellipsis pr-68" style="color: rgb(0, 0, 0)">
            <BannerPinIcon></BannerPinIcon>
              {{ item.text }}
          </span>
        </a>
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
      <div data-v-93c6af58="" class="close active" @click="closeBannerWrapper">
        <span data-v-93c6af58="" class="material-icons">cancel</span>
      </div>
    </div>
    <div data-v-93c6af58="" class="menu-container">
      <main data-v-93c6af58="" class="">
        <a
          data-v-93c6af58=""
          href="/en"
          class="router-link-active router-link-exact-active home-link"
          aria-current="page"
          ><img
            data-v-93c6af58=""
            src="@/assets/ajet-logo-0d41a81e.svg"
            alt="AJet"
        /></a>
        <div data-v-93c6af58="" class="menu-items" >
          <span data-v-93c6af58="" class="item hidden lg:flex" @mouseover="serviceOpen()" @mouseleave="serviceClose()"
            ><a
              data-v-93c6af58=""
              href="/en/services"
              class="item-link flex align-items-center"
              >Services
              <span data-v-93c6af58="" class="material-icons ml-4"
                >expand_more</span
              ></a
            ></span
          ><span data-v-93c6af58="" class="item hidden lg:flex"
            ><a
              data-v-93c6af58=""
              href="/en/city-guide"
              class="item-link flex align-items-center"
              >City Guide
              <!----></a
            ></span
          ><span data-v-93c6af58="" class="item hidden lg:flex"
            ><a
              data-v-93c6af58=""
              href="/en/frequently-asked-questions"
              class="item-link flex align-items-center"
              >FAQ
              <!----></a
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
            />
            <div data-v-93c6af58="" class="mob-menu-content">
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
                  style="--2beacc2e: url(/ajet-clone/menu-lang-bg-n-d5cdc789.svg)"
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
                <span data-v-93c6af58="" class="item"
                  ><a data-v-93c6af58="" href="/en/services" class="item-link"
                    >Services</a
                  ><img
                    data-v-93c6af58=""
                    style="width: 11px !important"
                    class="sub-toggle"
                    src="@/assets/chevron-right.svg"
                    alt=""
                  />
                  <div data-v-93c6af58="" class="subs">
                    <span data-v-93c6af58="" class="sub-item"
                      ><a
                        data-v-93c6af58=""
                        href="/en/services/free-check-in"
                        class="sub-link"
                        >Free Check-in</a
                      ></span
                    ><span data-v-93c6af58="" class="sub-item"
                      ><a
                        data-v-93c6af58=""
                        href="/en/services/seat-selection"
                        class="sub-link"
                        >Seat Selection</a
                      ></span
                    ><span data-v-93c6af58="" class="sub-item"
                      ><a
                        data-v-93c6af58=""
                        href="/en/services/excess-baggage"
                        class="sub-link"
                        >Excess Baggage</a
                      ></span
                    ><span data-v-93c6af58="" class="sub-item"
                      ><a
                        data-v-93c6af58=""
                        href="/en/services/sports-equipment"
                        class="sub-link"
                        >Sports Equipment</a
                      ></span
                    >
                  </div> </span
                ><span data-v-93c6af58="" class="item"
                  ><a data-v-93c6af58="" href="/en/city-guide" class="item-link"
                    >City Guide</a
                  ><!---->
                  <div data-v-93c6af58="" class="subs"></div> </span
                ><span data-v-93c6af58="" class="item"
                  ><a
                    data-v-93c6af58=""
                    href="/en/frequently-asked-questions"
                    class="item-link"
                    >FAQ</a
                  ><!---->
                  <div data-v-93c6af58="" class="subs"></div>
                </span>
              </nav>
              <nav data-v-93c6af58="" class="bottom">
                <span data-v-93c6af58="" class="item"
                  ><a
                    data-v-93c6af58=""
                    href="/en/corporate/feedback-form"
                    class="item-link"
                    >Feedback Form</a
                  ></span
                ><span data-v-93c6af58="" class="item"
                  ><a
                    data-v-93c6af58=""
                    href="/en/corporate/our-policies"
                    class="item-link"
                    >Our Policy</a
                  ></span
                ><span data-v-93c6af58="" class="item"
                  ><a
                    data-v-93c6af58=""
                    href="/en/corporate/privacy-statement"
                    class="item-link"
                    >Personal Information Protection</a
                  ></span
                ><span data-v-93c6af58="" class="item"
                  ><a
                    data-v-93c6af58=""
                    href="/en/corporate/rules-and-conditions/privacy-and-cookie-policy"
                    class="item-link"
                    >Privacy and Cookie Policy</a
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
              @click=" handleLogin()"
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
import LoaderIcon from '@/components/LoaderIcon.vue';
import { onMounted } from 'vue';
import {Swiper , SwiperSlide} from 'swiper/vue';
import {Navigation , Autoplay , Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BannerPinIcon from '@/components/BannerPinIcon.vue';

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

</script>


<script>



export default {
  components: {
    Swiper,
    SwiperSlide,
    LoaderIcon,
    BannerPinIcon,
  },
  data() {
      return {
        topSliderItems: [
          {
            id: 1,
            url: '/en/media/press-and-announcements/fly-to-brand-new-stories-on-10-new-routes-with-ajet',
            text: 'Fly to Brand New Stories on 10 New Routes with AJet!',
          },
          {
            id: 2,
            url: '/en/media/press-and-announcements/now-you-can-benefit-from-special-discounts-for-disabled-passengers-veterans-and-relatives-of-martyrs-through-ajetcom-and-ajet-mobile-app',
            text: 'Now, you can benefit from special discounts for disabled passengers, veterans, and relatives of martyrs, through AJet.com and AJet Mobile app!',
          },
          {
            id: 3,
            url: '/en/media/press-and-announcements/exclusive-lounges-welcome-ajet-passengers-in-domestic-flights',
            text: 'Exclusive lounges welcome AJet passengers in domestic flights!',
          },
          {
            id: 4,
            url: '/en/media/press-and-announcements/extra-rights-given-to-passengers-due-to-events-affecting-our-lebanon-and-iraq-flight',
            text: 'Extra Rights Given To Passengers Due To Events Affecting Our Lebanon And Iraq Flight',
          },
        ],
      };
    },
  setup() {
      return {
        modules: [Navigation, Pagination, Autoplay],
      };
    },
  
  methods: {



    closeBannerWrapper() {
      const activeElements = document.querySelectorAll('.active[data-v-93c6af58]');
      const headerFix = document.querySelector('.header-fix');
      const largeContainer = document.querySelector('._ajt_large_container');
      // Select active elements
      
      // Remove the "active" class from all active elements
      activeElements.forEach(element => element.classList.remove("active"));

      // Change the height using CSS variables
      if (headerFix && largeContainer) {
        headerFix.style.setProperty('--30596d21', '40px');
        headerFix.style.setProperty('--39271329', '40px');
        largeContainer.style.setProperty('--22e0a771', '70px');
        largeContainer.style.setProperty('--30596d21', '40px');
      }
      
      // Remove the top-banner-wrapper after a delay, if it exists
      const topBannerWrapper = document.querySelector('.top-banner-wrapper');
      if (topBannerWrapper) {
        setTimeout(() => topBannerWrapper.remove(), 250);
      }
    }
  }
};


const handleLogin = () => {
  alert('You have successfully logged in!');  
}


const serviceOpen = () => {
  const service = document.querySelector('.submenu-container[data-v-93c6af58]');
  service.classList.add('active');
}
const serviceClose = () => {
  const service = document.querySelector('.submenu-container[data-v-93c6af58]');
  service.classList.remove('active');
  
}

const handleScroll = () => {
  const largeContainer = document.querySelector('._ajt_large_container');
  const headerFix = document.querySelector('.header-fix');
  const topBannerContainer = document.querySelector('.top-banner-container');
  const closeBanner = document.querySelector('.close[data-v-93c6af58]');
  const activeElements = document.querySelectorAll('.active[data-v-93c6af58]');


  if (window.scrollY > 50) {
    if (headerFix && largeContainer && topBannerContainer) {
      largeContainer.style.setProperty('--22e0a771', '70px');
      headerFix.style.setProperty('--39271329', '70px');
      activeElements.forEach(element => element.classList.remove('active'));
    }
  } else {
    if (topBannerContainer) {
      topBannerContainer.classList.add('active');
      closeBanner.classList.add('active');
      largeContainer.style.setProperty('--22e0a771', '120px');
      headerFix.style.setProperty('--39271329', '120px');
    }
  }
};



</script>

