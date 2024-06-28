<template>
    <div>
      <h1>Locations</h1>
      <ul>
        <li v-for="location in locations" :key="location.id">
          {{ location.name }}
          <ul>
            <li v-for="bin in location.bins" :key="bin.id">
              {{ bin.name }}
              <ul>
                <li v-for="item in bin.items" :key="item.id">
                  {{ item.name }}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from '../axios';
  
  export default {
    data() {
      return {
        locations: [],
      };
    },
    created() {
      this.fetchLocations();
    },
    methods: {
      async fetchLocations() {
        try {
          const response = await axios.get('/locations');
          const locations = response.data;
  
          for (const location of locations) {
            const binsResponse = await axios.get(`/locations/${location.id}/bins`);
            const bins = binsResponse.data;
  
            for (const bin of bins) {
              const itemsResponse = await axios.get(`/bins/${bin.id}/items`);
              bin.items = itemsResponse.data;
            }
  
            location.bins = bins;
          }
  
          this.locations = locations;
        } catch (error) {
          console.error('Error fetching locations, bins, or items:', error);
        }
      },
    },
  };
  </script>