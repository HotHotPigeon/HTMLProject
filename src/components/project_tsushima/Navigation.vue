<script setup lang="ts">
const navigation = [
    "MAP", "JOURNAL", "GEAR", "TECHNIQUES", "COLLECTIONS", "OPTIONS"
];
</script>

<template>
    <div class="navigation">
        <div class="navigation__switch-left">L1</div>
        <ul class="navigation__list">
            <li v-for="link in navigation">{{ link }}</li>
        </ul>
        <div class="navigation__switch-right">R1</div>
    </div>
</template>

<style scoped>

</style>