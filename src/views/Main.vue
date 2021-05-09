<template>
  <div>
    <div class="hero" id="home">
      <h1 class="main-title">
        Digitize <br />
        your minds
      </h1>
      <p>FullStack Web Developer</p>
      <a href="#" v-scroll-to="'#projects'" v-smooth-scroll
          ><button class="button">
        Check My Projects
      </button></a
        >
      <div class="image"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {},
};
</script>
