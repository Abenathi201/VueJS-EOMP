<template>
    <div v-if="projects" class="projects">
        <ProjectCard :projects="projects"/>
    </div>

    <div v-else>
        Loading...
    </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default{
    components: { ProjectCard },

    computed: {
        projects() {
            return this.$store.state.projects
        }
    },

    mounted() {
        return this.$store.dispatch("getProjects")
    },
}
</script>

<style scoped>
    .projects{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>