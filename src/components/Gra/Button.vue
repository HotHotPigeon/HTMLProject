<script setup lang="ts">
</script>

<template>
    <button>
        <slot />
    </button>
</template>

<style scoped>
button {
    background: radial-gradient(100% 1406.25% at 0% 0%, #4F482B 0%, #B4AA81 39.11%, #826C31 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    border: none;
    padding: 8px 36px;
}

button:hover {
    background: #0C0C0C;
    color: #FFFFFF;
}
</style>