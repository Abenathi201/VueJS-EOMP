<template>
  <div class="about">
      <div class="hero">
        <article>
            <h1>About Me</h1>
              <img src="https://i.postimg.cc/hjYzpV22/C12-C2-Abenathi-Sindapi-2.jpg" alt="Abenathi Sindapi  ">
              <h5>Abenathi Sindapi</h5>
            <content>
                My name is Abenathi Sindapi, I am a 22 year old who was born in<b> 4th of March 2001 </b>I am aiming 
                to become a software developer in the near future.I spent most of my life in Cape Town but originally I am form Eastern Cape. I am aspiring to be a web developer to improve my life and upskill myself and keep on improving throughout my whole life.
            </content>
        </article>
      </div>
  </div>
</template>

<script>
export default{

}
</script>

<style scoped>
  .about{
      min-height: 100vh;
      background: #333;
  }

  .hero{
      width: 80%;
      margin: auto;
      padding: 30px 0;
  }

  article h1{
      font-size: 50px;
      font-weight: 500;
      text-transform: uppercase;
      color: azure;
      text-align: center;
  }

  article h1::after{
      content: "";
      height: 3px;
      width: 230px;
      background-color: azure;
      display: block;
      margin: auto
  }

  article img{
      margin: auto;
      display: block;
      margin-top: 40px;
      height: 20rem;
      width: 15rem;
      border-radius: 10px 50% /* --- If a circle looks better*/;
      /* box-shadow: .3vw .3vw .5vw  azure; */
      margin-bottom: 28px;
  }

  article h5{
      text-transform: uppercase;
      font-size: 35px;
      color: azure;
      margin-bottom: 15px;
  }

  content{
      font-size: 20px;
      font-weight: 600;
      color: azure;
      line-height: 1.4;
  }

  content::after{
      content: "";
      height: 3px;
      width: 100%;
      background-color: azure;
      display: block;
      margin-top: 50px;
  }

  article p{
      font-size: 20px;
      color: azure;
      margin-top: 10px;
  }
</style>
