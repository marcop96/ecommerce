<script setup lang="ts">
const route = useRoute()
</script>

<template> 
    <div>
        <h1>{{route.path}}</h1>
    </div>
</template>