<template>
  <div class="breadCrumpCore">
    <div class="navHistoryItem">Project</div>
    <div class="chevronDivider">
      <img src="../assets/images/icn_chevron_gray.svg" alt="icon chevron" />
    </div>
    <div class="projectName">{{ projectName }}</div>
    <div class="chevronDivider">
      <img src="../assets/images/icn_chevron_gray.svg" alt="icon chevron" />
    </div>
    <div class="projectName">{{ personName }}</div>
  </div>
</template>

<script>
export default {
  name: "BreadCrump",
  props: {
    projectName: {
      type: String,
      default: "Ocean Cleanup"
    },
    personName: {
      type: String,
      default: "Boyan Slat"
    }
  }
};
</script>

<style lang="scss" scoped>
.breadCrumpCore {
  display: flex;
  flex-direction: row;
  align-items: center;

  font: {
    family: "McQueenText";
    size: $--font--size--XXS;
    variation-settings: "wght" 400;
  }
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #787878;
}

.navHistoryItem {
  background: #f8f8f8;
  border-radius: 4px;
  padding: 10px 16px;
}

.chevronDivider {
  margin: 0 16px;

  img {
    position: relative;
    top: -1px;
    width: auto;
    height: 10px;
  }
}
</style>
