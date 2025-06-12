<script setup lang="ts">
const isMenuOpen = ref(false)

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/catalog' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]
</script>

<template>
    <header class="fixed w-full bg-white border-b border-neutral-200 z-50">
        <nav class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div class="flex-shrink-0">
                    <NuxtLink to="/" class="text-2xl font-bold text-primary-600">
                        STORE
                    </NuxtLink>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <NuxtLink v-for="item in navItems" :key="item.name" :to="item.href"
                        class="text-neutral-600 hover:text-primary-600 transition-colors duration-200">
                        {{ item.name }}
                    </NuxtLink>
                </div>

                <!-- Right side icons -->
                <div class="flex items-center space-x-4">
                    <!-- Search -->
                    <button class="p-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    <!-- Cart -->
                    <NuxtLink to="/cart"
                        class="p-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </NuxtLink>

                    <!-- Mobile menu button -->
                    <button @click="isMenuOpen = !isMenuOpen"
                        class="md:hidden p-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div v-show="isMenuOpen" class="md:hidden bg-white border-t border-neutral-200">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <NuxtLink v-for="item in navItems" :key="item.name" :to="item.href"
                        class="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 transition-colors duration-200"
                        @click="isMenuOpen = false">
                        {{ item.name }}
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </header>
</template>