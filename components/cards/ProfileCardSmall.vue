<template>
  <div class="profileCard">
    <ul>
      <h1>{{ fullname }}</h1>
      <h2>{{ job }}</h2>
      <li>
        <ButtonLevel fillColor="#000" :to="`/profile/${slug.current}`">{{
          btnLabel
        }}</ButtonLevel>
      </li>
    </ul>
    <div class="portraitImage">
      <img
        :src="getImageUrl(portrait)"
        alt="portrait image"
        :class="{ enlarge: isMouseOnIMG }"
      />
    </div>
  </div>
</template>

<script>
import ButtonSecondaryBack from "@/components/buttons/ButtonLevel-2-Black";
import ButtonLevel from "@/components/buttons/ButtonLevel";
import { getImageUrl } from "@/services/sanity";

export default {
  name: "ProfileCardSmall",
  props: {
    fullname: String,
    job: String,
    portrait: Object,
    slug: Object
  },
  data() {
    return {
      isMouseOnIMG: false
    };
  },
  components: {
    ButtonSecondaryBack,
    ButtonLevel
  },
  computed: {
    fillGray() {
      return "C0C0C0";
    },
    fillBlack() {
      return "000000";
    },
    btnLabel() {
      return "Discover";
    }
  },
  methods: {
    getImageUrl
  }
};
</script>

<style lang="scss" scoped>
.profileCard {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 30vw;
  height: 100%;
  transition: all ease-in-out 0.5s;
}

ul {
  width: 40%;
  padding-top: 40px;
}

.portraitImage {
  width: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  img {
    width: auto;
    height: 130%;
    cursor: pointer;
  }
}

h1,
h2 {
  color: #000;
}

h1 {
  font: {
    family: "McQueenText";
    size: $--font--size--M;
    variation-settings: "wght" 800;
  }
  margin-bottom: 6px;
}

h2 {
  font: {
    family: "McQueenItalic";
    size: $--font--size--M;
    variation-settings: "wght" 300;
  }
  margin-bottom: 20px;
}
</style>
