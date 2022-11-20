<script setup lang="ts">
import MenuGroup from './MenuGroup.vue';
import Username from './Username.vue';
</script>

<template>
    <div class="navigation">
        <Username user-name="Wojdeg" />
        <MenuGroup group-name="Menu Group" />
        <MenuGroup group-name="Menu Group" />
    </div>
</template>

<style scoped>
.navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 64px 32px 64px 80px;
    position: absolute;
    width: 328px;
    max-width: 328px;
    height: 1024px;
    top: 0px;
    left: 0px;

    background-color: #141414;
    box-shadow: 8px 0px 8px rgba(0, 0, 0, 0.1);
}
</style>
