<script setup lang="ts">
import Button from '../components/Gra/Button.vue';
import RoundButton from '../components/Gra/RoundButton.vue';
</script>

<template>
    <h1>Gra</h1>
    <div class="bag">
        <Button>Button</Button>
        <RoundButton>+</RoundButton>
    </div>
</template>

<style scoped>
.bag {
    display: flex;
    gap: 75px;
}
</style>