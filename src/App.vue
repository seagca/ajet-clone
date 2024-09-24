<template>
  <div id="app">
    <AppHeader />
    //<FlightSearch />
    <AppFooter />
  </div>
</template>
  
<script>
import AppHeader from './components/AppHeader.vue';
//import FlightSearch from './components/FlightSearch.vue';
import AppFooter from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    //FlightSearch,
    AppFooter,
  },
};
</script>

<style> 
.body {
  background-color:#eef1f4;
  font-family:Inter,sans-serif;
  font-weight:200
}

</style>
