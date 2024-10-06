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
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import MainSlider from "@/components/MainSlider.vue";
import ServiceBlock from "@/components/main/ServiceBlock.vue";
import DestinationsBlock from "@/components/main/DestinationsBlock.vue";
import CitiesBlock from "@/components/main/CitiesBlock.vue";
import NewsBlock from "@/components/main/NewsBlock.vue";
import FaqBlock from "@/components/main/FaqBlock.vue";
import mainSliderData from "@/data/mainSliderData.json";
</script>

<script>
export default {
  name: "FlightSearch",
  components: {
    MainSlider,
    ServiceBlock,
    DestinationsBlock,
    CitiesBlock,
    NewsBlock,
    FaqBlock,
  },
  data() {
    return {
      mainSliderItems: mainSliderData,
    };
  },
  setup() {
    return {
      modules: [Navigation, Autoplay, Pagination],
    };
  },
};
</script>
