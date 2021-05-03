<template>
  <header>
    <h4>Sarunas Lekstutis</h4>
    <nav :class="{ mobileNav: active }">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
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
