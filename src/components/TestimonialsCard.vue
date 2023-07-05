<template>

    <div class="card" v-for="testimonial in testimonials" :key="testimonial.id">
        <div class="details">
            <img :src="testimonial.image" :alt="testimonial.name">
            <h5>Life Choices Academy Cohort</h5>
        </div>

        <div class="testimony">
            <p>
            {{ testimonial.testimony }}
            </p>
        </div>

        <p><i class="fa-solid fa-comment"></i> {{ testimonial.name }} </p>
    </div>
</template>

<script>
export default{
    props: ["testimonials"]
}
</script>


<style scoped>
    .card{
      width: 400px;
      min-height: 450px;
      margin: auto;
      margin-block: 40px;
      padding: 20px;
      background: #d9d9d9;
    }

    .details{
      display: flex;;
    }

    .details img{
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    .details h5{
      margin: auto;
      margin-inline: 10px;
    }
    .testimony{
        margin-top: 30px;
    }
    .card p{
        margin-top: 45px;
    }
</style>