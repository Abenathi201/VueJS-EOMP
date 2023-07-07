<template>
    <div v-for="item in education" :key="item.id">
        <h4 class="header">{{ item.school }}</h4>
        <p class="text1">{{ item.duration }}</p>
        <p class="text2">{{ item.desc }}</p>
    </div>
</template>

<script>
export default {
    props: ["education"]
}
</script>

<style scoped>
    .text1{
        font-size: 13px;
    }
    .header{
        font-weight: 400;
        letter-spacing: 1px;
    }
    .text1{
        font-size: 15px;
        font-weight: 500;
    }
</style>