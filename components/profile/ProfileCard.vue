<template>
  <div class="profileCard">
    <div class="imageCore" @mouseover="mouseIsOver" @mouseout="mouseIsOut">
      <div class="imageContainer">
        <img src="../../assets/images/plhd_portrait.jpg" alt="portraitImage" />
      </div>
      <div class="coloredContainer" :class="{ imgSlide: isMouseOver }"></div>
    </div>

    <div class="textCore">
      <h1 :class="{ colorGold: isMouseOver }">{{ title }}</h1>
      <h2 :class="{ colorGold: isMouseOver }">{{ subtitle }}</h2>
      <p :class="{ colorGold: isMouseOver }">{{ content }}</p>
      <ButtonSecondary :buttonLabel="buttonLabelName" />
    </div>
  </div>
</template>

<script>
import ButtonSecondary from "@/components/buttons/ButtonLevel-2-Black";

export default {
  name: "ProfileCard",
  data() {
    return {
      isMouseOver: false
    };
  },
  components: {
    ButtonSecondary
  },
  props: {
    title: {
      type: String,
      default: "Albert Köhtalen"
    },
    subtitle: {
      type: String,
      default: "Head of Research"
    },
    content: {
      type: String,
      default:
        "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. "
    }
  },
  computed: {
    buttonLabelName() {
      return "View Profile";
    }
  },
  methods: {
    mouseIsOver() {
      this.isMouseOver = true;
    },
    mouseIsOut() {
      this.isMouseOver = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.profileCard {
  display: flex;
  flex-direction: row;
}

.imageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 950;
  position: relative;
  width: 196px;
  height: 226px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: auto;
    height: 100%;
  }
}

.coloredContainer {
  left: 30px;
  top: -226px;
  position: relative;
  z-index: 900;
  background: $--color--gold;
  width: 166px;
  height: 226px;
  transition: all ease-in-out 0.3s;
}

.imgSlide {
  left: 48px;
  top: -211px;
}

.textCore {
  position: relative;
  top: 115px;
  left: 50px;
  width: 40%;
  transition: all ease-in-out 0.3s;
}

.colorGold {
  color: $--color--gold;
}

h1 {
  font: {
    family: "McQueenText";
    size: $--font--size--L;
    variation-settings: "wght" 800;
  }
  color: #000;
  margin-bottom: 4px;
  transition: all ease-in-out 0.3s;
  line-height: 1.2;
}

h2 {
  font: {
    family: "McQueenItalic";
    size: $--font--size--M;
    variation-settings: 300;
  }
  color: #000;
  margin-bottom: 12px;
  transition: all ease-in-out 0.3s;
}

p {
  @include paragraph-level-two;
  transition: all ease-in-out 0.3s;

  margin-bottom: 10px;
}
</style>
