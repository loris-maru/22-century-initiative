<template>
  <div
    class="projectFeatureCard"
    @mouseover="mouseOverIt"
    @mouseout="mouseOutsideOfIt"
  >
    <h3>01</h3>

    <div class="coreInfos" :class="{ coreUp: isMouseInside }">
      <h1>{{ projectName }}</h1>

      <div class="divider"></div>

      <div class="dateInfos">
        <img src="../../assets/images/icn_calendar.svg" alt="calendar icon" />
        {{ publishedDate }}
      </div>
      <div class="imageMap" :class="{ imgReveal: isMouseInside }">
        <img
          src="../../assets/images/img_MapPin.jpg"
          alt="Localisation image"
        />
      </div>
    </div>
    <!-- CoreInfos -->

    <MainButton :fillColor="whiteColor" :fontColor="whiteColor" />
  </div>
</template>

<script>
import MainButton from "@/components/buttons/ButtonLevel-1";

export default {
  name: "ProjectFeaturedCard",
  data() {
    return {
      isMouseInside: false
    };
  },
  props: {
    publishedDate: {
      type: [String, Number],
      default: "23.03.2020"
    },
    projectName: {
      type: String,
      default: "Ocean Cleanup"
    }
  },
  components: {
    MainButton
  },
  computed: {
    whiteColor() {
      return "fff";
    }
  },
  methods: {
    mouseOverIt() {
      this.isMouseInside = true;
    },
    mouseOutsideOfIt() {
      this.isMouseInside = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.projectFeatureCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 15vw;
  height: 100%;
  border-right: solid 1px #4b4b4b;
  border-left: solid 1px #4b4b4b;
  padding: 40px;
  cursor: pointer;
}

.coreInfos {
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all ease-in-out 0.4s;
}

.coreUp {
  top: 4px;
}

.dateInfos {
  display: flex;
  flex-direction: row;
  align-items: center;
  font: {
    family: "McQueenText";
    size: $--font--size--XXS;
    variation-settings: "wght" 300;
  }
  color: #fff;
  letter-spacing: 0.06em;
}

.divider {
  width: 80%;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  margin: 10px 0 14px 0;
}

img {
  margin-right: 8px;
}

.imageMap {
  width: 80%;
  height: 0;
  overflow: hidden;
  margin-top: 16px;
  transition: all ease-in-out 0.4s;
  transition-delay: 0.1s;
  opacity: 0;

  img {
    position: relative;
    width: 100%;
    height: auto;
  }
}

.imgReveal {
  height: 100px;
  opacity: 1;
}

//------- TITLE

h1 {
  font: {
    family: "McQueenDisplay";
    size: $--font--size--XL;
    weight: 800;
  }
  color: #fff;
  text-align: center;
  line-height: 1.1;
}

h3 {
  font: {
    family: "McQueenText";
    size: $--font--size--XS;
    variation-settings: "wght" 600;
  }
  color: #fff;
  letter-spacing: 0.1em;
}
</style>
