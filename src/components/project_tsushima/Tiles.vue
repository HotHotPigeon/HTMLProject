<script setup lang="ts">
const tiles = [
    {
        type: "vertical",
        content: [
            {
                triangle: false,
                title: "eksploration",
                icon: ""
            },
            {
                triangle: true,
                title: "artifacts",
                icon: ""
            },
            {
                triangle: false,
                title: "satchel",
                icon: ""
            },
        ],

    },
    {
        type: "horizontal",
        content: [
            {
                triangle: false,
                title: "vanity gear",
                current: 48,
                max: 59
            },
            {
                triangle: false,
                title: "hot springs",
                current: 18,
                max: 18
            },
            {
                triangle: false,
                title: "bamboo strikes",
                current: 16,
                max: 16
            },
            {
                triangle: false,
                title: "shinto shrines",
                current: 16,
                max: 16
            },
            {
                triangle: false,
                title: "pillars of honor",
                current: 23,
                max: 23
            },
            {
                triangle: false,
                title: "inari shrines",
                current: 49,
                max: 49
            },
            {
                triangle: false,
                title: "haiku",
                current: 19,
                max: 19
            },
            {
                triangle: false,
                title: "duels",
                current: 5,
                max: 5
            },
        ],
    },
];
</script>

<template>
    <div v-for="element in tiles" :class="`tiles--${element.type}`">

    </div>
</template>

<style scoped></style>