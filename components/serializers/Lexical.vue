<template>
  <div class="lexicalCore">
    <h1>{{ title }}</h1>

    <div class="lexicalBox">
      <!-- Point N°1 -->
      <div v-for="(point, itemKey) in item" :key="itemKey" class="lexicalItem">
        <h3>#{{ point.number }}</h3>
        <h2>{{ point.title }}</h2>
        <div class="divider"></div>
        <p>{{ point.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lexical",
  props: {
    title: {},
    item: {},
    number: {},
    content: {}
  }
};
</script>

<style lang="scss" scoped>
.lexicalCore {
  width: 100vw;
  padding: 0 9vw;
  margin: $--spacer--120 0;
}

.lexicalBox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: solid 1px #000;
  padding: 60px 62px;
}

.lexicalItem {
  flex-basis: 28%;
}

.divider {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.15);
  margin: 12px 0;
}

//------ UNIVERSAL TAGS

h1 {
  @include title_two(#000);
  margin-bottom: $--spacer--20;
}

h2 {
  @include title_three(#000);
}

h3 {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 500;
  }
  color: #000;
  margin-bottom: 9px;
  letter-spacing: 0.05em;
}

p {
  @include paragraph-level-two;
}
</style>
