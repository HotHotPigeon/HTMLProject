<script setup lang="ts">
import Button from '../components/Gra/Button.vue';
import RoundButton from '../components/Gra/RoundButton.vue';

const input = [5, 8, 2, 6, 0, 6, 2, 5, 6, 7, 12];
let output = input[input.length-1];
output = input[Math.floor(input.length/2)];
</script>

<template>
    <h1>Gra</h1>
    <div class="bag">
        <Button>Button</Button>
        <RoundButton>+</RoundButton>
    </div>
    <p>{{ input.toString() }}</p>
    <h4>{{ output.toString() }}</h4>

</template>

<style scoped>
.bag {
    display: flex;
    gap: 75px;
}
</style>