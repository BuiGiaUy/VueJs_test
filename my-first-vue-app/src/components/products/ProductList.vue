<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}$
        <button @click="addToCart(product)">Add to Cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 }
      ]
    };
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    }
  }
};
</script>
