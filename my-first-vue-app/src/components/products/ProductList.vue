<template>
    <div>
        <h2>Product List</h2>
        <ProductItem 
            v-for="product in products" 
            :key="product.id"
            :product="product"
            @addToCart="handleAddToCart"
        />
    </div>
</template>

<script>
import ProductItem from "./ProductItem";
export default {
    components: { ProductItem },
    data() {
        return {
            products: [
                { id: "1", name: "Product 1", price: "100"},
                { id: "2", name: "Product 2", price: "200"}
            ]
        }
    },
    methods: {
        handleAddToCart(product) {
            console.log("Add to cart:", product);
        }
    },
};
</script>