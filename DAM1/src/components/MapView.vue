
<script setup>
    import { GoogleMap, Marker,AdvancedMarker } from 'vue3-google-map'
    const center = { lat: 40.473711016516944, lng: -3.3718197163742847 };
    const markerOptions = { position: center, title: 'LADY LIBERTY' }
    const pinOptions = { background: '#FBBC04' }

</script>

<template>

    <GoogleMap
        api-key=""
        mapId="DEMO_MAP_ID"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="8"
        >
    <!--<Marker :options="{ position: center }" />-->

    <AdvancedMarker :options="markerOptions" :pin-options="pinOptions"/>
  </GoogleMap>

</template>
  
  
<style scoped>

</style>