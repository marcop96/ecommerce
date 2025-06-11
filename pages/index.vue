<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()

console.log(cart.items)

</script>

<template> 
    <div>
        <h1>Cart</h1>
    </div>
</template> 