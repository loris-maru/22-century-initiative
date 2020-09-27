<template>
  <div class="profileMainCore">
    <BreadCrump class="innerNavigation" />
    <ProfileHeadline class="headlineBlock" />
  </div>
</template>

<script>
// Components
import BreadCrump from "@/components/BreadCrump";
import ProfileHeadline from "@/components/profile/HeadlineProfile";

export default {
  name: "Profile",
  layout: "RichContent",
  components: {
    BreadCrump,
    ProfileHeadline
  }
};
</script>

<style lang="scss" scoped>
.innerNavigation {
  position: fixed;
  top: 45px;
  left: 9vw;
  z-index: 800;
}
</style>
