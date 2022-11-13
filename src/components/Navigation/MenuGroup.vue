<script setup lang="ts">
import router from '@/router';
import MenuItem from './MenuItem.vue';

const props = defineProps({
    groupName: {
        type: String,
        default: 'Menu Group'
    }
});

const routes = router.options.routes;
</script>

<template>
    <div>
        <span>{{groupName}}</span>
        <ul>
            <MenuItem v-for="route in routes" :key="route.name" :route="route" />
        </ul>
    </div>
</template>

<style scoped>
</style>