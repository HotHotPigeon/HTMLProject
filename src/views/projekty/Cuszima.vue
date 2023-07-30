<script setup lang="ts">
import Tiles from '@/components/project_tsushima/Tiles.vue';
import Controls from '@/components/project_tsushima/Controls.vue';
import Info from '@/components/project_tsushima/Info.vue';
import Navigation from '@/components/project_tsushima/Navigation.vue';
import Storage from '@/components/project_tsushima/Storage.vue';
</script>

<template>
    <div class="container-top">
        <Navigation />
        <Storage />
    </div>

    <div class="container-content">
        <div class="container-content__top">
            <Tiles />
        </div>

        <div class="container-content__bottom">
            <Info />
            <Controls />
        </div>

    </div>
</template>
<style>
div {
    padding: 16px;
    margin: 8px;
}

.container-top {
    background-color: #070707;
}

.container-content {
    background: linear-gradient(90deg, rgba(165, 165, 165, 1) 5%, rgba(249, 246, 239, 1) 20%);
}

.red {
    background-color: #ffaaaa;

}

.green {
    background-color: #aaffaa;
}

.text--gold {
    color: #6C6958;
}
</style>