<template>
  <div class="_ajt_large_container home-page">
    <MainSlider /> 
    

    <main class="full">
      <ServiceBlock />
      <DestinationsBlock />
      <CitiesBlock />
      <NewsBlock />
      <FaqBlock />
      
      
      
      
    </main>
  </div>
</template>

<script setup>
//import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import MainSlider from "@/components/MainSlider.vue";
import ServiceBlock from "@/components/main/ServiceBlock.vue";
import DestinationsBlock from "@/components/main/DestinationsBlock.vue";
import CitiesBlock from "@/components/main/CitiesBlock.vue";
import NewsBlock from "@/components/main/NewsBlock.vue";
import FaqBlock from "@/components/main/FaqBlock.vue";

</script>

<script>
export default {
  name: "FlightSearch",
  components: {
    //Swiper,
    //SwiperSlide,
    MainSlider,
    ServiceBlock,
    DestinationsBlock,
    CitiesBlock,
    NewsBlock,
    FaqBlock,
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
      flightPointsSlider: [
        {
          id: 0,
          text: "Trabzon",
          url: "/en/city-guide/trabzon-flight-ticket",
          style: "--55b64b8c: url(/ajet-clone/ajt_theme/img/city-guide/trabzon.webp);",
        },
        {
          id: 1,
          text: "Erzurum",
          url: "/en/city-guide/erzurum-flight-ticket",
          style: "--55b64b8c: url(/ajet-clone/ajt_theme/img/city-guide/erzurum.webp);",
        },
        {
          id: 2,
          text: "Adana",
          url: "/en/city-guide/adana-flight-ticket",
          style: "--55b64b8c: url(/ajet-clone/ajt_theme/img/city-guide/adana.webp);",
        },
        {
          id: 3,
          text: "Bodrum",
          url: "/en/city-guide/bodrum-flight-ticket",
          style: "--55b64b8c: url(/ajet-clone/ajt_theme/img/city-guide/bodrum.webp);",
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
