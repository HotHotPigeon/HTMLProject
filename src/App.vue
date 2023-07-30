<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Navigation from './components/Navigation/Navigation.vue';
import { computed, onMounted } from 'vue';

const route = useRoute();

// @ts-ignore
let navigationEnabled;
const classes = `page-content ${navigationEnabled ? "page-content--navigation" : ""}`;
onMounted(() => {
    navigationEnabled=route.meta?.navigation != null ? route.meta.navigation : true;
});
</script>

<template>
    <Navigation v-if="navigationEnabled"/>
    <div :class="classes">
        <RouterView />
    </div>
</template>

<style>
body, div {
    margin: 0;
    padding: 0;
}
</style>

<style scoped>
.page-content {

}

.page-content--navigation {
    padding-left: 440px;
}
</style>
