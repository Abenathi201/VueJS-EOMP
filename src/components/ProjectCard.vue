<template>
    <div class="project-card" v-for="project in projects" :key="project.id">
        <a :href="project.lnk" 
        :target="_blank">
          <img :src="project.image" :alt="project.name">
          <div class="overlay project-img" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <p><i class="fas fa-eye fa-2x"></i></p>
            <h5>{{ project.name }}</h5>
          </div>
        </a>
    </div>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
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


    .modal{
        position: fixed !important;
        min-width: 550px !important;
        box-shadow: 0 5px 26px -8px rgba(0, 0, 0, 0.3) !important;
        /* z-index: 20; */
        transition: all 0.4s ease;
        /* opacity: 0; */
        pointer-events: none;
    }
    
</style>