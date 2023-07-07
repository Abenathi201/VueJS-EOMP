<template>
    <div class="project-card" v-for="project in projects" :key="project.id">
        <!-- <a :href="project.link"  -->
        <!-- target="_blank"> -->
          <img :src="project.image" :alt="project.name">
          <div class="overlay project-img">
            <p><i class="fas fa-eye fa-2x"></i></p>
            <div class="btns">
                <a :href="project.link" target="_blank" class="link-btn">Netlify Link</a>
            </div>
          </div>
        <!-- </a> -->
    </div>

    
</template>

<script>
export default{
    props: ["projects"]
}
</script>

<style scoped>
    .project-card{
      box-shadow: 0 10px 10px 5px rgba(0, 0, 0, 0.2);
      position: relative;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
      width: 400px;
      height: 450px;
      margin: auto;
      margin-block: 45px;
    }

    .project-card img{
      width: 100%;
      height: 100%;
    }

    .project-card h5{
        width: 100%;
        min-height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #ddd;
    }

    .project-img{
      border-radius: 5px;
      max-width: 25rem;
      min-height: 100%;
    }

    .overlay{
      color: #d9d9d9;
      font-size: 1.2rem;
      font-weight: 500;
      position: absolute;
      top: 0;
      left: 0;
      min-width: 100%;
      min-height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      color: #b3b3b3;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    .overlay:hover{
      opacity: 1;
    }

    .btns{
        display: flex;
        gap: 10px;
    }
    .link-btn{
        text-decoration: none;
        border: 1px solid whitesmoke;
        background: transparent;
        border-radius: 5px;
        padding: 10px;
        color: #d9d9d9;
        transition: all 0.3s;
    }

    @media screen and (max-width: 700px) {
      .project-card{
        width: 250px;
        height: 400px;
      }
    }
</style>