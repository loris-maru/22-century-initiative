<template>
  <div class="featurePortraitCore">
    <div class="textContent">
      <h1>{{ personName }}</h1>
      <h2>{{ jobTitle }}</h2>
      <ButtonSecondary />
    </div>
    <div class="imageContent">
      <img
        src="../../assets/images/img_placeholder_portrait.jpg"
        alt="Portrait of the week"
      />
    </div>
  </div>
</template>

<script>
// Components
import ButtonSecondary from "@/components/buttons/ButtonLevel-2-Black";

export default {
  name: "FooterFeature",
  components: {
    ButtonSecondary
  },
  props: {
    personName: {
      type: String,
      default: "Boyan Slat"
    },
    jobTitle: {
      type: String,
      default: "Hydraulic Engineer"
    }
  }
};
</script>

<style lang="scss" scoped>
.featurePortraitCore {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.textContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  background: #fff;
  padding-left: 4vw;
}

.imageContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  background: #000;
  overflow: hidden;

  img {
    width: 120%;
    height: auto;
  }
}

h1 {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 600;
  }
  color: #000;
  margin-bottom: 6px;
}
h2 {
  font: {
    family: "McQueenItalic";
    size: $--font--size--S;
    variation-settings: "wght" 400;
  }
  color: #000;
  margin-bottom: 12px;
}
</style>
