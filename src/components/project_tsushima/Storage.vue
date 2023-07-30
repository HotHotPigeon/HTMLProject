<script setup lang="ts">
const storage = [
    {
        icon: "O",
        value: 1,
    },
    {
        icon: "O",
        value: 1,
    },
    {
        icon: "O",
        value: 1,
    }
];
</script>

<template>
    <div class="storage">
        <div v-for="element in storage"> 
            <span>{{ element.icon }}</span>
            <span>{{ element.value }}</span>
        </div>
    </div>
</template>

<style scoped></style>