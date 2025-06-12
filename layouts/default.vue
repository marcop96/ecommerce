<template>
    <div class="min-h-screen flex flex-col">
        <Header />
        <main class="flex-grow pt-16">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
// Components will be auto-imported by Nuxt
</script>