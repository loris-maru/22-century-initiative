<template>
  <div class="profileCard">
    <ul>
      <h1>Eric Tessier</h1>
      <h2>Hydraulic Engineer</h2>
      <li>
        <ButtonSecondaryBack :buttonLabel="btnLabel" />
      </li>
    </ul>
    <div class="portraitImage">
      <img
        src="../../assets/images/img_portrait_home.jpg"
        alt="portrait image"
        :class="{ enlarge: isMouseOnIMG }"
      />
    </div>
  </div>
</template>

<script>
import ButtonSecondaryBack from "@/components/buttons/ButtonLevel-2-Black";

export default {
  name: "ProfileCard",
  data() {
    return {
      isMouseOnIMG: false
    };
  },
  components: {
    ButtonSecondaryBack
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
