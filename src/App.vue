<template>
  <div id="app">
    <AppHeader />
    <FlightSearch />
    <AppFooter />
  </div>
</template>
  
<script>
import AppHeader from './components/AppHeader.vue';
import FlightSearch from './components/FlightSearch.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    FlightSearch,
    AppFooter,
  },
};
</script>
