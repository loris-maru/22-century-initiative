<template>
  <div>
    <navigation class="navigation" :class="{ navOpen: isTheMenuOpened }" />
    <div class="blackFilter" :class="{ appear: isTheMenuOpened }"></div>
    <Nuxt class="bodyApp" />
  </div>
</template>

<script>
import navigation from "@/components/Navigation";

export default {
  name: "default",
  components: {
    navigation
  },
  computed: {
    isTheMenuOpened() {
      return this.$store.state.isMenuOpen;
    }
  }
};
</script>
<style>
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
</style>
