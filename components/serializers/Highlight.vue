<template>
  <div class="highlightCore">
    <div class="leftColumn">
      <h1>{{ title }}</h1>
      <ul>
        <li v-for="(item, itemKey) in details" :key="itemKey">
          <img src="iconDetail" alt="Category of Details" />
          <span class="detail-name">{{ item.name }}</span>
        </li>
      </ul>
      <p>
        {{ content }}
      </p>
    </div>

    <div class="rightColumn">
      <div class="portraitZone">
        <img :src="image" alt="Portrait Image" />
        <h2>{{ imageCaption }}</h2>
        <ButtonMore :buttonLabel="buttonLabel" class="buttonBox" />
      </div>
    </div>
  </div>
</template>

<script>
// Component
import ButtonMore from "@/components/buttons/ButtonLevel-2-White";

export default {
  name: "Highlight",
  components: {
    ButtonMore
  },
  props: {
    title: {},
    imageCaption: {},
    content: {},
    image: {},
    details: {}
  },
  computed: {
    buttonLabel() {
      return "Read More";
    }
  }
};
</script>

<style lang="scss" scoped>
.highlightCore {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 120px 0 120px 9vw;
}

.leftColumn {
  width: 70vw;
  padding-right: 150px;
}

.rightColumn {
  width: 50vw;
  height: 30vw;
  background: #000;
}

.portraitZone {
  width: 50%;
  height: 50%;

  img {
    width: auto;
    height: 100%;
  }
}

.buttonBox {
  margin-left: 30px;
}

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
}

li {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 400;
  }
  color: #000;
  margin-right: 30px;

  &:last-child {
    margin: 0;
  }

  img {
    width: auto;
    height: 13px;
    margin-right: 6px;
  }
}

p {
  @include paragraph-level-one;
}

h1 {
  @include title_one(#000);
  margin-bottom: 18px;
}

h2 {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 400;
  }
  line-height: 1.4;
  color: #fff;
  padding: 40px 46px 12px 30px;
}
</style>
