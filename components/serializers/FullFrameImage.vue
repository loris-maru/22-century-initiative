<template>
  <div class="fullFrameCore">
    <div class="captionBox">
      <div class="pagination">
        <h3>
          {{ currentCaption }}
        </h3>
        <div class="divider"></div>
        <h3>
          {{ totalCaption }}
        </h3>
      </div>

      <div class="contentBlock">
        <h1>{{ captionTitle }}</h1>
        <p>{{ captionText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullFrameImage",
  props: {
    currentCaption: {
      type: Number,
      default: 1
    },
    fullTitle: {
      type: String,
      default: "This is the caption"
    },
    captionTitle: {},
    captionText: {}
  }
};
</script>

<style lang="scss" scoped>
.fullFrameCore {
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin: $--spacer--180 0;

  background: url("../../assets/images/img_fullFrame_placeholder.jpg") no-repeat;
  background-size: cover;
}

.captionBox {
  position: relative;
  bottom: -90px;
  width: 34%;
  display: flex;
  flex-direction: row;
  background: #000;
  padding: 42px 100px 42px 0;
}

.contentBlock {
  display: flex;
  flex-direction: column;
}

.pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 32px 0 32px;
}

.divider {
  width: 100%;
  height: 1px;
  background: #fff;
  margin: 6px 0;
}

h1 {
  font: {
    family: "McQueenText";
    size: $--font--size--MM;
    variation-settings: "wght" 800;
  }
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 14px;
}

h3 {
  font: {
    family: "McQueenText";
    size: $--font--size--XS;
    variation-settings: "wght" 400;
  }
  color: #fff;
}

p {
  font: {
    family: "Arvana";
    size: $--font--size--S;
    weight: 500;
  }
  color: #fff;
  line-height: 1.5;
}
</style>
