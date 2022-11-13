<script setup lang="ts">import router from '@/router';
const props = defineProps({
    route: {
        type: Object,
        required: true,
    }
});
</script>

<template v-if="route.path">
    <RouterLink :to="route.path" exact-path custom v-slot="{ href, isActive }">
        <li :class="{ active: isActive }">
            <a :href="href">
                <slot>
                    {{ route.name }}
                </slot>
            </a>
        </li>
    </RouterLink>
</template>

<style scoped>
    .active {
        font-weight: 700;
    }

    .active::after {
        content: ' Active';
    }
</style>