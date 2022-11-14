<script setup lang="ts">
const props = defineProps({
    route: {
        type: Object,
        required: true,
    }
});
</script>

<template v-if="route.path">
    <RouterLink :to="route.path" exact-path custom v-slot="{ href, isActive }">
        <li :class="{ active: isActive }" class="menu-item">
            <a :href="href">
                <slot>
                    {{ route.name }}
                </slot>
            </a>
        </li>
    </RouterLink>
</template>

<style scoped>
.menu-item {
    max-width: 216px;
    /* until menu group doesnt have width*/
    height: 40px;
    border-radius: 8px;
    list-style: none;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    padding-left: 22px;
    font-size: 14px;
    line-height: 17px;
    position: relative;
    overflow: hidden;
}

.menu-item:hover {
    background-color: #0C0C0C;
}

.menu-item a {
    text-decoration: none;
}

.active {
    font-weight: 700;
}

.active::before {
    content: '';
    background: linear-gradient(167.45deg, #4F482B 0.1%, #B4AA81 39.79%, #826C31 101.58%);
    position: absolute;
    width: 6px;
    top: 0;
    bottom: 0;
    left: 0;
}
</style>