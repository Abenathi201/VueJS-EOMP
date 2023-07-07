<template>
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="/">
      <img src="https://i.postimg.cc/jq4VMfdT/v.png" alt="Nav-Comp">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">My Links</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link links" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link links" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link links" href="/resume">Resume</a>
          </li>
          <li class="nav-item">
            <a class="nav-link links" href="/projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link links" href="/testimonials">Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link links" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default{

}
</script>

<style scoped>
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #000000;
        background-image: linear-gradient(147deg, #000000 0%, #333 74%);
        padding: 1em;
    }
    .offcanvas-header, .offcanvas-body{
      background: #333;
    }
    .navbar-nav{
      display: flex;
    }
    
    nav .links {
      text-decoration: none;
      text-transform: capitalize;
      color: #ffffff;
    }
    ul {
      list-style: none;
      display: flex;
      gap: 1em;
    }
    .links {
      padding: 0.5em;
      border: none;
    }
    .links:hover {
      background-color: #000000;
      border-radius: 0.5em;
      border: none;

    }
    .active {
      border-bottom: 2px solid #ffffff;
    }

    .logo img{
      width: 80px;
      height: 80px;
    }

    @media screen and (max-width: 700px) {
    ul .links:hover {
        background-color: #000000;
        background-image: linear-gradient(147deg, #000000 0%, #333 74%);
    }
    }
    </style>