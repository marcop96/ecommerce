<script setup lang="ts">
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()

const featuredProducts = [
    {
        id: 1,
        name: 'Premium Product 1',
        price: 99.99,
        image: 'https://placehold.co/400x400',
        category: 'Category 1'
    },
    {
        id: 2,
        name: 'Premium Product 2',
        price: 149.99,
        image: 'https://placehold.co/400x400',
        category: 'Category 2'
    },
    {
        id: 3,
        name: 'Premium Product 3',
        price: 199.99,
        image: 'https://placehold.co/400x400',
        category: 'Category 1'
    },
    {
        id: 4,
        name: 'Premium Product 4',
        price: 79.99,
        image: 'https://placehold.co/400x400',
        category: 'Category 3'
    }
]
</script>

<template>
    <div>
        <!-- Hero Section -->
        <section class="relative overflow-hidden bg-neutral-50">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0"
                    style="background-image: url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');">
                </div>
            </div>

            <div class="container mx-auto px-4 py-16 md:py-24 relative">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <!-- Hero Content -->
                    <div class="space-y-8 text-center lg:text-left">
                        <div class="inline-block">
                            <span
                                class="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                                New Collection
                            </span>
                        </div>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                            Discover Quality
                            <span class="relative">
                                <span class="text-primary-600">Products</span>
                                <svg class="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5.5C1 5.5 50 0.5 100 0.5C150 0.5 199 5.5 199 5.5" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </span>
                        </h1>
                        <p class="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto lg:mx-0">
                            Explore our curated collection of premium products. Quality meets innovation in every piece.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <NuxtLink to="/catalog"
                                class="group inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-primary-600 rounded-lg hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5">
                                Shop Now
                                <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </NuxtLink>
                            <NuxtLink to="/categories"
                                class="group inline-flex items-center justify-center px-8 py-4 font-semibold text-neutral-900 transition-all duration-200 bg-white border-2 border-neutral-900 rounded-lg hover:bg-neutral-900 hover:text-white hover:shadow-lg hover:-translate-y-0.5">
                                Browse Categories
                            </NuxtLink>
                        </div>
                    </div>
                    <!-- Hero Image -->
                    <div class="relative group">
                        <div
                            class="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000">
                        </div>
                        <img src="https://placehold.co/800x600" alt="Hero Image"
                            class="relative w-full h-full object-cover rounded-lg shadow-lg transform group-hover:scale-[1.02] transition duration-500" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Products Section -->
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12">
                    <span
                        class="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
                        Featured Collection
                    </span>
                    <h2 class="text-3xl font-bold text-neutral-900 mb-4">Featured Products</h2>
                    <p class="text-neutral-600 max-w-2xl mx-auto">
                        Discover our handpicked selection of premium products, chosen for their quality and style.
                    </p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="product in featuredProducts" :key="product.id" class="group">
                        <div class="relative overflow-hidden rounded-lg bg-neutral-50">
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>
                            <img :src="product.image" :alt="product.name"
                                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div
                                class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <button
                                    class="w-full px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                                    Quick View
                                </button>
                            </div>
                        </div>
                        <div class="mt-4 space-y-2">
                            <p class="text-sm text-primary-600">{{ product.category }}</p>
                            <h3
                                class="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                                {{ product.name }}</h3>
                            <p class="text-lg font-bold text-neutral-900">${{ product.price }}</p>
                            <button
                                class="w-full px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-12">
                    <NuxtLink to="/catalog"
                        class="group inline-flex items-center justify-center px-8 py-4 font-semibold text-primary-600 transition-all duration-200 border-2 border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white hover:shadow-lg hover:-translate-y-0.5">
                        View All Products
                        <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-16 bg-neutral-50">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        class="group text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div
                            class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-neutral-900 mb-2">Quality Products</h3>
                        <p class="text-neutral-600">Carefully selected items that meet our high standards.</p>
                    </div>
                    <div
                        class="group text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div
                            class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-neutral-900 mb-2">Fast Shipping</h3>
                        <p class="text-neutral-600">Quick and reliable delivery to your doorstep.</p>
                    </div>
                    <div
                        class="group text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div
                            class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-neutral-900 mb-2">Secure Payment</h3>
                        <p class="text-neutral-600">Safe and secure payment methods for your peace of mind.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0px);
    }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}
</style>