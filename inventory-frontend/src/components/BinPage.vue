<template>
    <div>
      <h1>{{ bin.name }}</h1>
      <div class="item-grid">
        <ItemCard v-for="item in items" :key="item.id" :item="item" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from '../axios';
  import ItemCard from './ItemCard.vue';
  
  export default {
    components: {
      ItemCard,
    },
    props: {
      binId: Number,
    },
    data() {
      return {
        bin: {},
        items: [],
      };
    },
    created() {
      this.fetchBin();
      this.fetchItems();
    },
    watch: {
        binId: 'fetchData',
    },
    methods: {
      async fetchBin() {
        try {
          const response = await axios.get(`/bins/${this.binId}`);
          this.bin = response.data;
        } catch (error) {
          console.error('Error fetching bin:', error);
        }
      },
      async fetchItems() {
        try {
          const response = await axios.get(`/bins/${this.binId}/items`);
          this.items = response.data;
        } catch (error) {
          console.error('Error fetching items:', error);
        }
      },
      fetchData() {
        this.fetchBin();
        this.fetchItems();
      },
    },
  };
  </script>
  
  <style scoped>
  .item-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  </style>