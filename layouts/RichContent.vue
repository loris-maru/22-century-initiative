<template>
  <div class="coreLayoutSubPage" :class="backgroundPageColor">
    <navigation class="navigation" :class="{ navOpen: isTheMenuOpened }" />
    <div class="blackFilter" :class="{ appear: isTheMenuOpened }"></div>
    <Nuxt class="bodyApp" />

    <!-- LATERAL NAVIGATION -->
    <div class="lateralNavigation">
      <!-- Navigation Item: 1 | to Projects -->
      <div
        class="navProjects"
        @mouseover="mouseOverProject"
        @mouseout="mouseOutsideProject"
        :style="{ height: `${projectHeight}` }"
      >
        <div class="accessPoint"></div>
        <div class="labelNavigation">
          Projects
        </div>
      </div>
      <!-- Categories Item: 2 | to Categories -->
      <div
        class="navCategories"
        @mouseover="mouseOverCategories"
        @mouseout="mouseOutsideCategories"
        :style="{ height: `${categoriesHeight}` }"
      >
        <div class="accessPoint"></div>
        <div class="labelNavigation">
          Categories
        </div>
      </div>
      <!-- Navigation Item: 3 | to Map -->
      <div
        class="navmap"
        @mouseover="mouseOverMap"
        @mouseout="mouseOutsideMap"
        :style="{ height: `${mapHeight}` }"
      >
        <div class="accessPoint"></div>
        <div class="labelNavigation">
          Map
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navigation from "@/components/Navigation";

export default {
  name: "RichContent",
  data() {
    return {
      projectHeight: "calc(100vh / 3)",
      categoriesHeight: "calc(100vh / 3)",
      mapHeight: "calc(100vh / 3)"
    };
  },
  components: {
    navigation
  },
  computed: {
    isTheMenuOpened() {
      return this.$store.state.isMenuOpen;
    },
    backgroundPageColor() {
      if (this.$route.name == "ProjectList") return "whiteBackground";
      if (this.$route.name == "CategoriesList") return "goldBackground";
      if (this.$route.name == "MapGlobal") return "blackBackground";
      return "whiteBackground";
    }
  },
  methods: {
    // Over Project
    mouseOverProject() {
      (this.projectHeight = "38vh"),
        (this.categoriesHeight = "31vh"),
        (this.mapHeight = "31vh");
    },
    mouseOutsideProject() {
      (this.projectHeight = "calc(100vh / 3)"),
        (this.categoriesHeight = "calc(100vh / 3)"),
        (this.mapHeight = "calc(100vh / 3)");
    },
    // Over Categories
    mouseOverCategories() {
      (this.projectHeight = "31vh"),
        (this.categoriesHeight = "38vh"),
        (this.mapHeight = "31vh");
    },
    mouseOutsideCategories() {
      (this.projectHeight = "calc(100vh / 3)"),
        (this.categoriesHeight = "calc(100vh / 3)"),
        (this.mapHeight = "calc(100vh / 3)");
    },
    // Over Map
    mouseOverMap() {
      (this.projectHeight = "31vh"),
        (this.categoriesHeight = "31vh"),
        (this.mapHeight = "38vh");
    },
    mouseOutsideMap() {
      (this.projectHeight = "calc(100vh / 3)"),
        (this.categoriesHeight = "calc(100vh / 3)"),
        (this.mapHeight = "calc(100vh / 3)");
    }
  }
};
</script>

<style lang="scss" scoped>
.coreLayoutSubPage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.navigation {
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  transition: all ease-in-out 0.6s;
}

.navOpen {
  right: 50vw;
}

.blackFilter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 850;
  background: rgba(0, 0, 0, 0.86);
  opacity: 0;
  pointer-events: none;
  transition: all ease-in-out 0.4s;
}

.appear {
  opacity: 1;
}

.bodyApp {
  position: relative;
  z-index: 800;
}

/* LATERAL NAVIGATION */

.lateralNavigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
  z-index: 900;
}

.navProjects,
.navCategories,
.navmap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 12px 2px 18px 0;
  height: calc(100vh / 3);
  transition: all ease-in-out 0.5s;
  cursor: pointer;
}

.onOverBlock {
  height: 38vh;
}

.reducedBlock {
  height: 31vh;
}

.navProjects {
  background: #fff;
  color: #000;

  .accessPoint {
    background: #000;
  }
}

.navCategories {
  background: #c79c62;
  color: #000;

  .accessPoint {
    background: #000;
  }
}

.navmap {
  background: #000;
  color: #fff;

  .accessPoint {
    background: #fff;
  }
}

.accessPoint {
  width: 10px;
  height: 10px;
  border-radius: 5px;
}

.labelNavigation {
  writing-mode: vertical-lr;
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 400;
  }
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
</style>
