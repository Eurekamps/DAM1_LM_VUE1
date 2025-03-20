<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 40.47358456148284, lng: -3.3715514721326434 }
</script>

<template>
  <GoogleMap
  api-key=""
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="15"
  >
    <Marker :options="{ position: center }" />
    <Marker :options="{ position: { lat: 40.47358456148284, lng: -3.3715514721326434 } }" />
    <Marker :options="{ position: { lat: 40.57358456148284, lng: -3.3715514721326434 } }" />
    <Marker :options="{ position: { lat: 40.67358456148284, lng: -3.3715514721326434 } }" />
    <Marker :options="{ position: { lat: 40.77358456148284, lng: -3.3715514721326434 } }" />
  </GoogleMap>
</template>