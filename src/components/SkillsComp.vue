<template>
    <ul v-for="skill in skills" :key="skill.id" class="skills">
        <li><img :src="skill.image" :alt="skill.name"></li>
    </ul>
</template>

<script>
export default{
    props: ["skills"]
}
</script>

<style scoped>
    .skills{
        margin-left: -40px;
        margin-bottom: 40px;
    }
    .skills li{
        list-style: none;
        float: left;
        position: relative;
    }
    .skills li img{
        width: 75px;
        padding-right: 20px;
    }

    @media screen and (max-width: 700px) {
        .skills{
            margin-left: -20px;
            /* margin-bottom: 20px; */
            display: flex;
        }
    }
</style>