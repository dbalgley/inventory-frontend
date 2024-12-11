<template>
    <div class="item-card">
        <img :src="item.imageUrl" :alt="item.name" class="item-photo"/>
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <p>Price: ${{ item.price }}</p>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
    }
};
</script>

<style scoped>
.item-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  max-width: 200px;
}
.item-photo {
  width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>