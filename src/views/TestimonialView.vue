<template>
    <div v-if="testimonials" class="testimonials">
        <TestimonialsCard :testimonials = "testimonials"/>
    </div>

    <div v-else>
        Loading...
    </div>
</template>

<script>
import TestimonialsCard from '@/components/TestimonialsCard.vue';

export default{
    components: { TestimonialsCard },

    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },

    mounted() {
        return this.$store.dispatch("getTestimonials")
    },
}
</script>

<style scoped>
    .testimonials{
        display: flex;
        flex-wrap: wrap;
    }
</style>