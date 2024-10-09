<template>
  <div>
    <!-- eslint-disable-next-line no-undef -->
    <h3>{{ product.name }} - {{ product.price }}</h3>
    <button @click="addToCart">Add To Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product);
    },
  },
};
</script>
