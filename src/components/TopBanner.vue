<template>

<div data-v-93c6af58="" class="top-banner-wrapper">
      <Swiper

        :modules="[Navigation, Autoplay]"
        :slides-per-view="auto"
        :loop="true"
        :autoplay="{ delay: 3000 ,pauseOnMouseEnter: true}"
        :navigation="{nextEl: '.swp-next', prevEl: '.swp-prev'}"
        data-v-500f2780=""
        data-v-93c6af58=""
        :class="{'top-banner top-banner-container swiper-ios text-xs md:text-sm xl:text-base active': bannerActive , 'top-banner top-banner-container swiper-ios text-xs md:text-sm xl:text-base' : !bannerActive }"
      >
      <swiper-slide data-v-500f2780="" v-for="(item, index) in topSliderItems" :key="index">
        <router-link data-v-500f2780="" :to = "item.url" >
          <span data-v-500f2780="" class="slide block overflow-hidden white-space-nowrap text-overflow-ellipsis pr-68" style="color: rgb(0, 0, 0)">
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
      <div data-v-93c6af58="" class="close active" @click="closeBannerWrapper()">
        <span data-v-93c6af58="" class="material-icons">cancel</span>
      </div>
    </div>


</template>

<script setup>
import {  onMounted } from 'vue';
import {Swiper , SwiperSlide} from 'swiper/vue';
import {Navigation , Autoplay , Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BannerPinIcon from '@/components/svg/BannerPinIcon.vue';



onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

</script>


<script>



export default {
  components: {
    Swiper,
    SwiperSlide,
    BannerPinIcon,
  },
  data() {
    return {
        isActive: false,
        subActive: false,
        bannerActive: true,
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

    toggleClass() {
      this.isActive = !this.isActive; // Toggle the class when clicked
    },
    subToggle() {
      this.subActive = !this.subActive; // Toggle the class when clicked
      },

      closeBannerWrapper() {
          this.bannerActive = false;
          this.$emit('update-dimensions', 70, 40, 40);
          this.headerHeight = 70; // --22e0a771
          this.topBannerHeight = 40; // --30596d21
          this.BannerHeight = 40; // --39271329
          //document.documentElement.style.setProperty('--22e0a771', '70px');
          //document.documentElement.style.setProperty('--30596d21' topBannerHeight, '40px');
          //document.documentElement.style.setProperty('--39271329', BannerHeight'40px');
            
        
      const topBannerWrapper = document.querySelector('.top-banner-wrapper');
      if (topBannerWrapper) {
        setTimeout(() => topBannerWrapper.remove(), 250);
      }
    }
  }
};




const handleScroll = () => {
    //this.headerHeight = 70; // --22e0a771
      //    this.topBannerHeight = 40; // --30596d21
        //  this.BannerHeight = 40; // --39271329
  const largeContainer = document.querySelector('._ajt_large_container');
  const headerFix = document.querySelector('.header-fix');
  const topBannerContainer = document.querySelector('.top-banner-container');
  const closeBanner = document.querySelector('.close[data-v-93c6af58]');
  const activeElements = document.querySelectorAll('.active[data-v-93c6af58]');


  if (window.scrollY > 50) {
      if (headerFix && largeContainer && topBannerContainer) {
          this.headerHeight = 70; // --22e0a771
          this.BannerHeight = 40;
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

