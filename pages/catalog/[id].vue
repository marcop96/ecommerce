<script setup lang="ts">
const route = useRoute()
</script>

<template> 
    <div>
        <h1>{{route.params.id}}</h1>
    </div>
</template>