<template>
  <div>
    <nav class="header" :class="{ 'is-hidden': !showHeader }">
      <div class="logo">Sarunas Lekstutis</div>
      <div>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    showHeader: true,
    lastScrollPosition: 0,
    scrollOffset: 40,
  }),
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    // Toggle if navigation is shown or hidden
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) <
        this.scrollOffset
      ) {
        return;
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
