<template>
  <div class="footerCore">
    <!-- LEFT COLUMN -->
    <div class="leftColumn">
      <div class="headerFeature">
        Portrait of the week
      </div>
      <div class="portraitZone">
        <DiscoverPortrait />
      </div>
      <div class="portraitZone">
        <SecondaryPortrait />
      </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="rightColumn">
      <ul class="blockMenu">
        <li>
          <nuxt-link to="/">
            Projects
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Portraits
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Categories
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            Resources
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">
            About
          </nuxt-link>
        </li>
      </ul>
      <div class="blockAside">
        <!-- Additional Item 01 -->
        <div class="additionalItem">
          <h3>Follow us</h3>
          <a href="#">
            Linkedin
          </a>
          <a href="#">
            Twitter
          </a>
        </div>
        <!-- Additional Item 02 -->
        <div class="additionalItem">
          <h3>Participate</h3>
          <nuxt-link to="/">
            Suggest a project
          </nuxt-link>
          <nuxt-link to="/">
            Join the team
          </nuxt-link>
        </div>
        <!-- Additional Item 03 -->
        <div class="additionalItem">
          <h3>Who are we</h3>
          <nuxt-link to="/">
            The team
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Component
import DiscoverPortrait from "@/components/global/FeaturePortrait";
import SecondaryPortrait from "@/components/global/FeaturePortrait-secondaryPortrait";

export default {
  name: "Footer",
  components: {
    DiscoverPortrait,
    SecondaryPortrait
  }
};
</script>

<style lang="scss" scoped>
.footerCore {
  display: flex;
  flex-direction: row;
  height: 70vh;
}

.leftColumn {
  width: 30vw;
  height: 100%;
}

.rightColumn {
  display: flex;
  flex-direction: row;
  width: 70vw;
  height: 100%;
  background: #000;
}

.headerFeature {
  width: 100%;
  height: calc(100% / 3);
  background: $--color--gold;
  font: {
    family: "McQueenText";
    size: $--font--size--XS;
    variation-settings: "wght" 400;
  }
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 40px 3vw;
}

.portraitZone {
  width: 100%;
  height: calc(100% / 3);
  background: #000;
}

ul {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 120px 0 120px 120px;
}

li {
  a {
    font: {
      family: "McQueenDisplay";
      size: $--font--fluid--L;
      weight: 800;
    }
    color: #fff;
    text-decoration: none;
  }
  margin-bottom: 30px;

  &:last-child {
    margin: 0;
  }
}

.blockAside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding: 120px 0;

  a {
    text-decoration: none;
    font: {
      family: "McQueenText";
      size: $--font--size--L;
      variation-settings: "wght" 700;
    }
    color: #fff;
  }
}

.additionalItem {
  display: flex;
  flex-direction: column;
  line-height: 1.55;
}

h3 {
  font: {
    family: "McQueenText";
    size: $--font--size--XS;
    variation-settings: "wght" 200;
  }
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
}
</style>
