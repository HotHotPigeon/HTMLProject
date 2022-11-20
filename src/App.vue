<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation/Navigation.vue';
</script>

<template>
    <Navigation />
    <div class="page-content">
        <RouterView />
    </div>
</template>

<style scoped>
.page-content {
    padding-left: 328px;
}
</style>
