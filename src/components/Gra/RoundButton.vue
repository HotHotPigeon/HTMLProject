<script setup lang="ts">
</script>

<template>
    <button>
        <slot />
    </button>
</template>

<style scoped>
button {
    width: 32px;
    height: 32px;
    background: radial-gradient(100% 1406.25% at 0% 0%, #4F482B 0%, #B4AA81 39.11%, #826C31 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    border: none;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
}

button:hover {
    background: #0C0C0C;
    color: #FFFFFF;
}
</style>