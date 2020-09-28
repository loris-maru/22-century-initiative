<template>
  <div class="IntroductionCore">
    <div class="titleColumn">
      <h1>{{ introductionTitle }}</h1>
    </div>
    <div class="contentText">
      <p>
        Sed posuere consectetur est at lobortis. Nullam id dolor id nibh
        ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor
        fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis
        consectetur purus sit amet fermentum.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
  props: {
    introductionTitle: {
      type: String,
      default: "Introduction"
    }
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
