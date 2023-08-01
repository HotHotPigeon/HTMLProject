<script setup lang="ts">
defineProps<{
    triangle: boolean;
    title: string;
    icon?: string;
}>();
</script>

<template>
        <div >
            <span>{{ triangle }}</span>
            <p>{{title}}</p>
            <span>{{icon}}</span>
        </div>
</template>

<style scoped></style>