<template>
  <div class="primaryButtonCore">
    <button @mouseover="mouseOverButton" @mouseout="mouseOutsideButton">
      <h1
        :class="{
          colorBlack: isMouseOverIt,
          colorWhite: !isMouseOverIt,
          decallage: isMouseOverIt
        }"
      >
        View Project
      </h1>
      <svg
        width="10"
        height="8"
        viewBox="0 0 8 6"
        :class="{ onHoverPosition: isMouseOverIt }"
      >
        <path
          d="M7.88434 2.71425L5.42292 0.142922C5.26428 -0.0322999 4.95119 -0.0479135 4.76731 0.104419C4.58342 0.257313 4.56479 0.548602 4.73546 0.714324L6.51414 2.57139H0.461516C0.206728 2.57139 0 2.76336 0 2.99995C0 3.23654 0.206728 3.4285 0.461516 3.4285H6.51414L4.73546 5.28557C4.56539 5.45131 4.58823 5.74203 4.77211 5.89492C4.956 6.04781 5.26488 6.03275 5.42293 5.85698L7.88435 3.28565C8.0448 3.07751 8.03218 2.89114 7.88435 2.71424L7.88434 2.71425Z"
          :fill="`#${fillColor}`"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonLevelOne",
  data() {
    return {
      isMouseOverIt: false
    };
  },
  props: {
    fillColor: {
      type: [String, Number],
      default: "C0C0C0"
    },
    fontColor: {
      type: [String, Number],
      default: "C0C0C0"
    }
  },
  methods: {
    mouseOverButton() {
      this.isMouseOverIt = true;
    },
    mouseOutsideButton() {
      this.isMouseOverIt = false;
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: transparent;
  border: 1px solid #3c3c3c;
  padding: 8px 16px;
  border-radius: 3px;
  transition: all ease-in-out 0.4s;
  overflow: hidden;

  &:hover {
    background: #fff;
    padding: 8px 24px;
  }
}

h1 {
  position: relative;
  left: 0;
  font: {
    family: "McQueenText";
    size: $--font--size--XXS;
    variation-settings: "wght" 400;
  }
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-right: 10px;
  transition: all ease-in-out 0.4s;
}

svg {
  position: relative;
  left: 0;
  transition: all ease-in-out 0.4s;
}

.onHoverPosition {
  left: 40px;
}

.decallage {
  left: 9px;
}

.colorBlack {
  color: #000;
}

.colorWhite {
  color: #fff;
}
</style>
