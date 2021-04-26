<template>
  <nav>
    <div class="menu-icon" @click="toggleBodyClass">
      <span class="menu-icon__line menu-icon__line-left"></span>
      <span class="menu-icon__line"></span>
      <span class="menu-icon__line menu-icon__line-right"></span>
    </div>

    <div class="nav">
      <div class="nav__content">
        <div class="logo">Sarunas Lekstutis</div>
        <ul class="nav__list">
          <li class="nav__list-item">Home</li>
          <li class="nav__list-item">Projects</li>
          <li class="nav__list-item">About</li>
          <li class="nav__list-item">Contact</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleBodyClass() {
      this.active = !this.active;
      let el = document.body;
      this.active
        ? el.classList.add("nav-active")
        : el.classList.remove("nav-active");
    },
  },
};
</script>
