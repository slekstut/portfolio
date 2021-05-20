<template>
  <div id="app">
    <Nav />
    <Main />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Main from "./views/Main.vue";
import Projects from "./views/Projects.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Main,
    Projects,
    About,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss">
@import "styles/main.scss";
</style>
