<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/product_list">Product</router-link></li>
        <li><router-link to="/cart">Cart ({{ cartItems.length }})</router-link></li> <!-- Link đến giỏ hàng -->
      </ul>
    </nav>
    <router-view></router-view> <!-- Hiển thị component tương ứng với route -->
  </div>
</template>
<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    }
  }
};
</script>

<style>
nav ul {
  list-style: none;
  padding: 0;
}
nav ul li {
  display: inline;
  margin-right: 10px;
}
</style>