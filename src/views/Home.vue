<template>
  <div id="app" data-v-app="a">
    <AppHeader />
    <FlightSearch />
    <AppFooter />
  </div>
</template>











<script>
import AppHeader from '@/components/AppHeader.vue';
import FlightSearch from '@/components/FlightSearch.vue';
import AppFooter from '@/components/Footer.vue';

export default {
  name: 'AppHome',
  components: {
    AppHeader,
    FlightSearch,
    AppFooter,
  },
};
</script>