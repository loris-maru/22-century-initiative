<template>
  <div class="coreContent">
    <!-- HEADER -->
    <div class="headSection" :class="{ headLarge: mouseOverMap }">
      <!-- BLOCK 1 -->
      <div class="brandBlock">
        <h1>22 Century Initiative</h1>
        <h4>Discover Independent Environement Innovations and Technologies</h4>
      </div>

      <!-- BLOCK 2 -->
      <div
        class="mapSectionBlock"
        @mouseover="mouseOnMap"
        @mouseout="mouseOutMap"
      >
        <MapLink />
      </div>
    </div>

    <!-- SECTION TOP -->
    <div
      class="contentSection"
      :class="{ largeReduction: mouseOverMap, halfHeight: !mouseOverMap }"
    >
      <!-- BLOCK LEFT -->
      <div class="leftColumnContent">
        <div class="featureTop">
          <div class="titlePortrait">
            <div class="categoryBlock">
              <h3 class="blackColor extraMargin">Portrait</h3>
              <ButtonSecondaryBack :buttonLabel="btnDiscover" />
            </div>
          </div>

          <!-- Featured Block portrait -->
          <ProfileCard />
        </div>

        <!-- BLOCK BOTTOM -->
        <div
          class="featureBlockBottom"
          :class="{ smallReduction: mouseOverMap }"
        >
          <div class="categoryBlock">
            <h3 class="whiteColor extraMargin">Categories</h3>
            <ButtonSecondaryWhite :buttonLabel="btnCategory" />
          </div>
        </div>
      </div>
      <!-- END of Block Content Section -->

      <div class="rightColumnContent">
        <div class="columnOne">
          <h3 class="whiteColor">Latest Projects</h3>
          <ButtonSecondaryWhite :buttonLabel="btnAllProjects" />
        </div>

        <ProjectCard
          :projectName="cardProjectName"
          :publishedDate="dateOfPublication"
        />
        <ProjectCard
          :projectName="cardProjectName"
          :publishedDate="dateOfPublication"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Components
import ButtonSecondaryWhite from "@/components/buttons/ButtonLevel-2-White";
import ButtonSecondaryBack from "@/components/buttons/ButtonLevel-2-Black";
import ProfileCard from "@/components/cards/ProfileCard";
import ProjectCard from "@/components/projects/ProjectFeatureCard";
import MapLink from "@/components/MapHome";

export default {
  name: "HomePage",
  data() {
    return {
      mouseOverMap: false
    };
  },
  components: {
    ButtonSecondaryWhite,
    ButtonSecondaryBack,
    ProfileCard,
    ProjectCard,
    MapLink
  },
  computed: {
    fillGray() {
      return "C0C0C0";
    },
    fillBlack() {
      return "000000";
    },
    btnCategory() {
      return "All Categories";
    },
    btnAllProjects() {
      return "All Projects";
    },
    cardProjectName() {
      return "Ocean Cleanup";
    },
    dateOfPublication() {
      return "19.20.2020";
    },
    btnDiscover() {
      return "Discover";
    }
  },
  methods: {
    mouseOnMap() {
      this.mouseOverMap = true;
    },
    mouseOutMap() {
      this.mouseOverMap = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.coreContent {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.headSection {
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: row;
  transition: all ease-in-out 0.5s;
}

// DYNAMIC CLASSES
.headLarge {
  height: 52vh;
}

.smallReduction {
  height: 23vh;
}

.largeReduction {
  height: 48vh;
}

.halfHeight {
  height: 50vh;
}
//----------------

.contentSection {
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: #000;
  transition: all ease-in-out 0.5s;
}

.leftColumnContent,
.rightColumnContent {
  display: flex;
  width: 50vw;
  transition: all ease-in-out 0.5s;
}

.leftColumnContent {
  flex-direction: column;
  transition: all ease-in-out 0.5s;
}

.rightColumnContent {
  flex-direction: row;
  transition: all ease-in-out 0.5s;
}

.featureTop,
.featureBlockBottom {
  width: 100%;
  height: 50%;
  transition: all ease-in-out 0.5s;
}

.featureTop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: $--color--gold;
}

.categoryBlock {
  width: 16vw;
  padding: 40px 0 0 40px;
}

.brandBlock,
.mapSectionBlock {
  width: 50%;
  overflow: hidden;
}

.brandBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8vw;
}

.titlePortrait {
  width: 40%;
  transition: all ease-in-out 0.5s;
}

.columnOne {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20vw;
  height: 100%;
  padding: 40px;
  transition: all ease-in-out 0.5s;
}

.titleSectionLatestProject {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 600;
  }
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.extraMargin {
  margin-bottom: 6px;
}

//--------------- Universal TAG
h1 {
  font: {
    family: "McQueenDisplay";
    size: $--font--fluid--XL;
    weight: 800;
  }
  color: #000;
}

h3 {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 600;
  }
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h4 {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 400;
  }
  color: #000;
  margin-top: 20px;
}
</style>
