<template>
        <footer>
            <div class="container">
              <ul class="nav links justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Home</a></li>
                <li class="nav-item"><a href="/about" class="nav-link px-2 text-body-secondary">About</a></li>
                <li class="nav-item"><a href="/testimonials" class="nav-link px-2 text-body-secondary">Testimonials</a></li>
                <li class="nav-item"><a href="/projects" class="nav-link px-2 text-body-secondary">Projects</a></li>
                <li class="nav-item"><a href="/contact" class="nav-link px-2 text-body-secondary">Contact</a></li>
                <li class="nav-item"><a href="/resume" class="nav-link px-2 text-body-secondary">Resume</a></li>
              </ul>
              <div class="bottom">
                <p class="text-center text-body-secondary">© 2023 Copyright</p>
            
                <ul class="nav social list-unstyled d-flex">
                    <li class="ms-3"><a class="" href="https://www.facebook.com/abenathi.sindaphi.5/"><i class="fa-brands fa-facebook" style="color: #1660df;"></i></a></li>
                    <li class="ms-3"><a class="" href="https://www.linkedin.com/in/abenathi-sindapi-420969270/"><i class="fa-brands fa-linkedin" style="color: #125dde;"></i></a></li>
                    <li class="ms-3"><a class="" href="https://github.com/Abenathi201"><i class="fa-brands fa-github"></i></a></li>
                    <li class="ms-3"><a class="" href="https://twitter.com/AbenathiSindapi"><i class="fa-brands fa-twitter" style="color: #3f7fee;"></i></a></li>
                </ul>
               </div>
             </div>
        </footer>
</template>

<script>
export default{

}
</script>

<style scoped>
    footer{
        background: black !important;
        width: 100% !important;
        /* margin-top: 45px; */
    }
    .links li a{
        font-size: 17px;
        font-weight: 500;
        color: whitesmoke !important;
        margin-block: 10px !important;
        transition: all 0.3s;
    }
    .links li a:hover{
        border: 2px solid white;
        border-radius: 5px;
    }
    .bottom{
        display: flex;
        justify-content: center;
    }
    .bottom p{
        font-size: 17px;
        font-weight: 500;
        color: whitesmoke !important;    
    }
    .bottom ul li{
        font-size: 20px !important;
        /* font-weight: 500 !important; */
        transition: all 0.3s;
    }
    .bottom ul li:hover{
        transform: scale(1.2);
    }

    @media screen and (max-width: 700px) {
        footer{
            width: 50px;
        }
        .bottom{
        display: flex;
        flex-direction: column;
        justify-content: center;
        }
        .bottom ul li{
            margin: auto;
            gap: 0;
        }
    }
</style>