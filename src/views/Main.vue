<template>
  <div>
    <div class="hero">
      <h1>
        Digitize your minds
        <svg width="25" height="25" viewBox="0 0 25 25">
          <g fill="#ffb037" stroke="#707070" stroke-width="1">
            <rect width="25" height="25" rx="5" stroke="none" />
            <rect x="0.5" y="0.5" width="24" height="24" rx="4.5" fill="none" />
          </g>
        </svg>
      </h1>
      <p>FullStack Web Developer</p>
      <button class="button">Check My Projects</button>
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

<style scoped lang="scss">
@import "../styles/application.scss";
</style>
