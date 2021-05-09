<template>
  <header>
    <a href="#" v-scroll-to="'#home'" v-smooth-scroll><h4>Sarunas Lekstutis</h4></a>
    <nav :class="{ mobileNav: active }">
      <ul>
        <li><a href="#" v-scroll-to="'#home'" v-smooth-scroll>Home</a></li>
        <li>
          <a href="#" v-scroll-to="'#projects'" v-smooth-scroll>Projects</a>
        </li>
        <li><a href="#" v-scroll-to="'#about'" v-smooth-scroll>About</a></li>
        <li>
          <a href="#" v-scroll-to="'#contact'" v-smooth-scroll>Contact</a>
        </li>
      </ul>
    </nav>
    <div class="burger" :class="{ open: active }" @click="active = !active">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
};
</script>
