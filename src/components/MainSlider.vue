<template>
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="auto"
      :loop="false"
      :autoplay="{ delay: 5000 }"
      :navigation="{
        nextEl: '.action-buttons .swp-next',
        prevEl: '.action-buttons .swp-prev',
        disabledClass: 'disabled',
      }"
      :pagination="{
        el: '.swp-paginate',
        bulletActiveClass: 'active',
        bulletClass: 'a',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class='${className}' data-v-8cb3e393> </span>`;
        },
      }"
      data-v-9cb3d8ec=""
      class="main-slider"
    >
      <swiper-slide
        data-v-9cb3d8ec=""
        v-for="(item, index) in mainSliderItems"
        :key="index"
      >
        <router-link data-v-9cb3d8ec="" :to="item.url">
          <div
            data-v-a9e7a9f6=""
            data-v-9cb3d8ec=""
            class="slide has-rights"
            :style="item.style"
          ></div>
        </router-link>
      </swiper-slide>
      <div
        data-v-8cb3e393=""
        data-v-9cb3d8ec=""
        class="slider-control action-buttons"
        style="--071f8bef: flex-start; --006c92dc: 87px"
      >
        <div data-v-8cb3e393="" class="swp-paginate"></div>
        <div data-v-8cb3e393="" class="swp-nav">
          <div data-v-8cb3e393="" class="swp swp-prev">
            <img
              data-v-8cb3e393=""
              src="@/assets/chevron-left-ab39b75e.svg"
              alt=""
            />
          </div>
          <div data-v-8cb3e393="" class="swp swp-next">
            <img
              data-v-8cb3e393=""
              src="@/assets/chevron-right-b7eac6e0.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Swiper>


</template>


<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
</script>

<script>
export default {
  name: "MainSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      mainSliderItems: [
        {
          id: 0,
          url: "/en/media/press-and-announcements/fly-to-brand-new-stories-on-10-new-routes-with-ajet",
          style:
            "--ef97a558: url(/ajet-clone/ajt_theme/press/20240928/EN/350x235.jpg); --d93e49d0: url(/ajet-clone/ajt_theme/press/20240928/EN/570x330.jpg); --ac9df3dc: url(/ajet-clone/ajt_theme/press/20240928/EN/1900x640.jpg);",
        },
        {
          id: 1,
          url: "/en/media/press-and-announcements/now-you-can-benefit-from-special-discounts-for-disabled-passengers-veterans-and-relatives-of-martyrs-through-ajetcom-and-ajet-mobile-app",
          style:
            " --ef97a558: url(/ajet-clone/ajt_theme/press/20240929/EN/350x235.jpg); --d93e49d0: url(/ajet-clone/ajt_theme/press/20240929/EN/570x330.jpg); --ac9df3dc: url(/ajet-clone/ajt_theme/press/20240929/EN/1900x640.jpg); ",
        },
        {
          id: 2,
          url: "/en/media/press-and-announcements/exclusive-lounges-welcome-ajet-passengers-in-domestic-flights",
          style:
            "--ef97a558: url(/ajet-clone/ajt_theme/press/20240911/EN/350x235.jpg); --d93e49d0: url(/ajet-clone/ajt_theme/press/20240911/EN/570x330.jpg); --ac9df3dc: url(/ajet-clone/ajt_theme/press/20240911/EN/1900x640.jpg);",
        },
        {
          id: 3,
          url: "/en",
          style:
            "--ef97a558: url(/ajet-clone/ajt_theme/press/20240813/EN/350x235.jpg); --d93e49d0: url(/ajet-clone/ajt_theme/press/20240813/EN/570x330.jpg); --ac9df3dc: url(/ajet-clone/ajt_theme/press/20240813/EN/1900x640.jpg);",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation, Autoplay, Pagination],
    };
  },
};
</script>