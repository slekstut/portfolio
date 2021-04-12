<template>
  <div id="app">
    <Nav />
    <Main />
    <Projects />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Main from "./views/Main.vue";
import Projects from "./views/Projects.vue";

export default {
  name: "App",
  components: {
    Nav,
    Main,
    Projects,
  },
};
</script>

<style lang="scss">
@import "styles/application.scss";
</style>
