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
    <div class="menu-group">
        <span class="menu-group__title">{{ groupName }}</span>
        <ul class="menu-group__list">
            <MenuItem v-for="route in routes" :key="route.name" :route="route" />
        </ul>
    </div>
</template>

<style scoped>
.menu-group__title {
    display: block;
    margin-bottom: 20px;
    color: #c0c0c0;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
}

.menu-group__list {
    margin: 0;
    padding: 0;
}

.menu-group {
    margin-top: 54px;
}
</style>
