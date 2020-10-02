<template>
  <div class="IntroductionCore">
    <div class="titleColumn">
      <h1>Introduction</h1>
    </div>
    <div class="contentText"></div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  props: {
    content: {},
    title: {}
  },
  created() {
    console.log("INTRO", this);
  }
};
</script>

<style lang="scss" scoped>
.IntroductionCore {
  display: flex;
  flex-direction: row;
  padding: 0 9vw;
}

.titleColumn {
  margin-right: 60px;
}

.contentText {
  flex-basis: 60%;
}

h1 {
  font: {
    family: "McQueenText";
    size: $--font--size--L;
    variation-settings: "wght" 700;
  }
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

p {
  position: relative;
  top: -4px;
  @include paragraph-level-one;
}
</style>
