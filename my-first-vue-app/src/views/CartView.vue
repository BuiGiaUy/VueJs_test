<template>
  <div>
    <h2>Your Cart</h2>
    <ul v-if="cartItems.length">
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - {{ item.price }}$ x {{ item.quantity }}
        <input
          type="number"
          v-model.number="item.quantity"
          @input="updateQuantity(item.id, item.quantity)"
        />
        <button @click="removeItem(item.id)">Remove</button>
      </li>
    </ul>
    <p v-else>Your cart is empty.</p>
    <h3>Total: {{ cartTotalPrice }}$</h3>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  methods: {
    removeItem(productId) {
      this.$store.dispatch("removeFromCart", productId);
    },
    updateQuantity(productId, quantity) {
      this.$store.dispatch("updateQuantity", { productId, quantity });
    },
  },
};
</script>
