<template>
  <div class="interactiveMapCore">
    <h1>{{ title }}</h1>
    <div class="interactiveArea">
      <img
        src="../../assets/images/map-placeholder.jpg"
        alt="Image placeholder"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InteractiveMap",
  props: {
    title: {
      type: String,
      default: "Project Localisation"
    }
  }
};
</script>

<style lang="scss" scoped>
.interactiveMapCore {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background: #000;
  padding: $--spacer--150 9vw;
}

.interactiveArea {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
}

h1 {
  font: {
    family: "McQueenText";
    size: $--font--size--L;
    variation-settings: "wght" 700;
  }
  color: #fff;
  line-height: 1.3;
  margin-bottom: $--spacer--60;
}
</style>
