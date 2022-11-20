<script setup lang="ts">

const props = defineProps({
    userName: {
        type: String,
        default: 'Username'
    }
});

</script>

<template>
    <div class="username">
        <div class="username__image">
            <img src="https://picsum.photos/200/300" />
        </div>
        <span class="username__text">
            {{ userName }}
        </span>
    </div>
</template>

<style scoped>
.username {
    display:flex;
    margin-top: 44.28px;
}
.username__image {
    margin-right: 18px;
    height: 36px;
    width: 36px;
    border-radius: 36px;
    overflow: hidden;
}
.username__image img {
object-fit: cover;
height: 100%;
width: 100%;
}

.username__text {
    line-height: 17px;
    display: flex;
    align-items: center;
}
</style>
