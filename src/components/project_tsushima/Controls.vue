<script setup lang="ts">
const controls = [
    {
        icon: "O",
        label: "SELECT",
    },
    {
        icon: "O",
        label: "EXIT",
    },
];
</script>

<template>
    <div class="controls">
        <div v-for="element in controls">
            <span>{{ element.icon }}</span>
            <p>{{ element.label }}</p>
        </div>
    </div>
</template>

<style scoped></style>