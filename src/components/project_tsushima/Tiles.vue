<script setup lang="ts">
import Tile from './Tile.vue';
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
                max: 59,
                icon: ""
            },
            {
                triangle: false,
                title: "hot springs",
                current: 18,
                max: 18,
                icon: ""
            },
            {
                triangle: false,
                title: "bamboo strikes",
                current: 16,
                max: 16,
                icon: ""
            },
            {
                triangle: false,
                title: "shinto shrines",
                current: 16,
                max: 16,
                icon: ""
            },
            {
                triangle: false,
                title: "pillars of honor",
                current: 23,
                max: 23,
                icon: ""
            },
            {
                triangle: false,
                title: "inari shrines",
                current: 49,
                max: 49,
                icon: ""
            },
            {
                triangle: false,
                title: "haiku",
                current: 19,
                max: 19,
                icon: ""
            },
            {
                triangle: false,
                title: "duels",
                current: 5,
                max: 5,
                icon: ""
            },
        ],
    },
];
</script>

<template>
    <div v-for="element in tiles" :class="`tiles--${element.type}`">
        <Tile 
        v-for="tile in element.content" 
            :triangle="tile.triangle"
            :title="tile.title"
            :icon="tile?.icon"
        />
    </div>
</template>

<style scoped></style>