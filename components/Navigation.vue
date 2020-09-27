<template>
  <div class="navCore">
    <!-- Search Component -->
    <div
      class="searchComponent"
      :class="{ disappear: isTheMenuOpened, widthBlocked: isTheMenuOpened }"
    >
      <svg width="25" height="25" viewBox="0 0 25 25">
        <path
          d="M10.0689 0C4.52059 0 0 4.52059 0 10.0689C0 15.6172 4.52059 20.1378 10.0689 20.1378C12.4681 20.1378 14.6721 19.2901 16.4054 17.881L23.2192 24.6948C23.6261 25.1017 24.2879 25.1017 24.6948 24.6948C25.1017 24.2879 25.1017 23.6369 24.6948 23.2301L17.881 16.4162C19.2928 14.6829 20.1378 12.4709 20.1378 10.069C20.1378 4.52066 15.6172 6.9535e-05 10.0689 6.9535e-05V0ZM10.0689 2.08322C14.4916 2.08322 18.0546 5.64622 18.0546 10.0689C18.0546 14.4916 14.4916 18.0546 10.0689 18.0546C5.64622 18.0546 2.08322 14.4916 2.08322 10.0689C2.08322 5.64622 5.64622 2.08322 10.0689 2.08322Z"
        />
      </svg>
    </div>
    <!-- Search Component -->
    <div
      class="menuBlock"
      @click.prevent="openMenu"
      @mouseover="onMouseIn"
      @mouseout="onMouseOut"
      :class="{ widthBlocked: isTheMenuOpened }"
    >
      <button :class="{ buttonSmall: isTheMenuOpened }">
        <div
          class="blockLine top"
          :class="{ rotationTop: isMouseOver, hamBlockTop: isTheMenuOpened }"
        ></div>
        <div
          class="blockLine bottom"
          :class="{
            rotationBottom: isMouseOver,
            hamBlockBottom: isTheMenuOpened
          }"
        ></div>
      </button>
    </div>

    <!-- MENU CONTENT -->
    <div class="menuContent" :class="{ menuDisplayed: isTheMenuOpened }">
      <!-- ITEM -->
      <div class="menuItem one" :class="{ pushOne: isTheMenuOpened }">
        <nuxt-link to="/">
          Projects
        </nuxt-link>
      </div>
      <!-- ITEM -->
      <div class="menuItem two" :class="{ pushTwo: isTheMenuOpened }">
        <nuxt-link to="/">
          Portraits
        </nuxt-link>
      </div>
      <!-- ITEM -->
      <div class="menuItem three" :class="{ pushthree: isTheMenuOpened }">
        <nuxt-link to="/">
          Categories
        </nuxt-link>
      </div>
      <!-- ITEM -->
      <div class="menuItem four" :class="{ pushFour: isTheMenuOpened }">
        <nuxt-link to="/">
          Ressources
        </nuxt-link>
      </div>
      <!-- ITEM -->
      <div class="menuItem five" :class="{ pushFive: isTheMenuOpened }">
        <nuxt-link to="/">
          About
        </nuxt-link>
      </div>
      <!-- ITEM -->
      <div class="menuItem six" :class="{ pushSix: isTheMenuOpened }">
        <nuxt-link to="/">
          Contact
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { state, mutations } from "vuex";

export default {
  name: "Navigation",
  data() {
    return {
      isMouseOver: false
    };
  },
  computed: {
    isTheMenuOpened() {
      return this.$store.state.isMenuOpen;
    }
  },
  methods: {
    onMouseIn() {
      this.isMouseOver = true;
    },
    onMouseOut() {
      this.isMouseOver = false;
    },
    openMenu() {
      this.$store.commit("openMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
.navCore {
  display: flex;
  flex-direction: row;
  width: 12.5vw;
  height: 6.25vw;
}

.searchComponent,
.menuBlock {
  transform-origin: top right;
  transition: all ease-in-out 0.25s;
  cursor: pointer;

  &:hover {
    width: 80%;
  }
}

.widthBlocked {
  width: 50%;
  &:hover {
    width: 50%;
  }
}

.searchComponent {
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  opacity: 1;

  transition: all ease-in-out 0.6s;

  &:hover {
    background: #faf8f8;
  }
}

.disappear {
  opacity: 0;
}

.menuBlock {
  position: relative;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;

  transition: all ease-in-out 0.6s;
}

button {
  width: 50%;
  height: 16px;
  background: transparent;
  border: none;
  opacity: 1;
  transition: all ease-in-out 0.4s;
}

.buttonSmall {
  width: 40%;
  opacity: 0.6;
}

// BUTTON MENU HAMBURGER
.blockLine {
  position: relative;
  height: 2px;
  border-radius: 6px;
  background: #fff;
  transform-origin: center center;
  transition: all ease-in-out 0.25s;
}

.top {
  transform-origin: top left;
  top: -4px;
}

.bottom {
  transform-origin: bottom left;
  bottom: -4px;
}

.rotationTop {
  top: -8px;
}

.rotationBottom {
  bottom: -8px;
}

.hamBlockTop {
  top: -10px;
  transform: rotate(45deg);
}

.hamBlockBottom {
  bottom: -9px;
  transform: rotate(-45deg);
}

//-------------- MENU ITEMS

.menuContent {
  position: fixed;
  top: 0;
  right: -50vw;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8vw;
  background: #000;

  transition: all ease-in-out 0.6s;
}

.menuDisplayed {
  right: 0;
}

.menuItem {
  position: relative;
  left: 250px;
  opacity: 0;
  margin-bottom: 24px;
  transition: all ease-in-out 0.6s;

  a {
    font: {
      family: "McQueenDisplay";
      size: $--font--size--2XL;
      weight: 800;
    }
    color: #fff;
    text-decoration: none;
    transition: all ease-in-out 0.5s;

    &:hover {
      color: $--color--gold;
    }
  }
  &:hover {
    margin: 36px 0;
  }
}

// Animation
.one {
  transition-delay: 0;
}
.pushOne {
  left: 0;
  opacity: 1;
}

// Animation 02
.two {
  transition-delay: 0.2s;
}
.pushTwo {
  left: 0;
  opacity: 1;
}

// Animation 03
.three {
  transition-delay: 0.4s;
}
.pushthree {
  left: 0;
  opacity: 1;
}

// Animation 04
.four {
  transition-delay: 0.6s;
}
.pushFour {
  left: 0;
  opacity: 1;
}
// Animation 05
.five {
  transition-delay: 0.8s;
}
.pushFive {
  left: 0;
  opacity: 1;
}
// Animation 06
.six {
  transition-delay: 1s;
}
.pushSix {
  left: 0;
  opacity: 1;
}
</style>
