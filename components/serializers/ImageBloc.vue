<template>
  <div class="imageCore">
    <div class="imageBox">
      <img :src="image" alt="Image Box" />
    </div>
    <div class="captionCore">
      <div class="titleCore">
        <div class="bullet"></div>
        <h1>{{ title }}</h1>
      </div>
      <div class="contentCore">
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBloc",
  props: {
    title: {
      type: String,
      default: "This is the caption title"
    },
    content: {
      type: String,
      default:
        "Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. "
    }
  }
};
</script>

<style lang="scss" scoped>
.imageCore {
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0 9vw;
  margin: $--spacer--80 0;
}

.imageBox {
  width: 100%;
  margin-bottom: $--spacer--40;
  img {
    width: 100%;
    height: auto;
  }
}

.captionCore {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.titleCore {
  width: 15%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.bullet {
  position: relative;
  top: 4px;
  width: 22px;
  height: 22px;
  border-radius: 11px;
  background: #000;
  margin-right: 22px;
}

.contentCore {
  position: relative;
  top: -2px;
  width: 30%;
  @include paragraph-level-two;
}

h1 {
  position: relative;
  top: 1px;
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 700;
  }
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #000;
  line-height: 1.3;
}
</style>
