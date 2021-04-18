<template>
  <div id="app">
    <Nav />
    <Main />
    <Projects />
    <About />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Main from "./views/Main.vue";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";

export default {
  name: "App",
  components: {
    Nav,
    Main,
    Projects,
    About,
  },
};
</script>

<style lang="scss">
@import "styles/application.scss";
</style>
