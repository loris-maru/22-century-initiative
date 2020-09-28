<template>
  <div class="projectArticleCore">
    <BreadCrump class="innerNavigation" />
    <HeadlineProject />

    <!-- Project Core -->
    <div class="coreProjectContent">
      <Introduction />
      <Highlight />
      <Numbers />
      <Lexical />
    </div>

    <!-- || -->

    <Footer class="footerBlock" />
  </div>
</template>

<script>
// Component
import BreadCrump from "@/components/BreadCrump";
import HeadlineProject from "@/components/projects/HeadlineProject";
import Footer from "@/components/global/Footer";

// Serializers
import Introduction from "@/components/serializers/Introduction";
import Highlight from "@/components/serializers/Highlight";
import Numbers from "@/components/serializers/Numbers";
import Lexical from "@/components/serializers/Lexical";

export default {
  name: "Project",
  layout: "RichContent",
  components: {
    BreadCrump,
    HeadlineProject,
    Footer,
    Introduction,
    Highlight,
    Numbers,
    Lexical
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

.footerBlock {
  margin-top: 120px;
}

//------ Core Content Style

.coreProjectContent {
  padding: 120px 0;
}

p {
  @include paragraph-level-one;
}
</style>
