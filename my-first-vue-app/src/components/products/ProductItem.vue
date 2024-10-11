<template>
  <div class="product-item">
    <h2>{{ product.name }}</h2>
    <p>Price: {{ product.price }}$</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch('addToCart', product)
    },
  },
};
</script>
