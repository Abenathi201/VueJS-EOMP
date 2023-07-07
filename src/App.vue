<template>
  <NavBarComp />
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: { NavBarComp, FooterComp }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  #app{
    background: #333;
  }

  nav{
    background: transparent;
  }

  @media screen and (max-width: 700px) {
    *{
      overflow: visible;
    }
  }
</style>
