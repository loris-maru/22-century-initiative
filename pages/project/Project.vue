<template>
  <div class="projectArticleCore">
    <BreadCrump class="innerNavigation" />
    <HeadlineProject />
  </div>
</template>

<script>
// Component
import BreadCrump from "@/components/BreadCrump";
import HeadlineProject from "@/components/projects/HeadlineProject";

export default {
  name: "Project",
  layout: "RichContent",
  components: {
    BreadCrump,
    HeadlineProject
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
