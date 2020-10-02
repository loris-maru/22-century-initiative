<template>
  <div class="projectArticleCore">
    <BreadCrump class="innerNavigation" />
    <HeadlineProject
      :name="project.name"
      :origin="project.origin"
      :founder="project.projectFounder"
      :categories="project.categories"
    />

    <div class="coreProjectContent">
      <block-content
        :blocks="project.introduction"
        :serializers="$options.serializers"
      />
      <!--<Highlight />
      <Numbers />
      <Lexical />
      <FullFrameImage />
      <ImageBloc />
      <ProfileGroup />
      <InteractiveMap />
      -->
    </div>

    <Footer class="footerBlock" />
  </div>
</template>

<script>
// Api
import { fetchProject } from "@/api/projectApi";
// Component
import BreadCrump from "@/components/BreadCrump";
import HeadlineProject from "@/components/projects/HeadlineProject";
import Footer from "@/components/global/Footer";

// Serializers
import Introduction from "@/components/serializers/Introduction";
import Highlight from "@/components/serializers/Highlight";
import Numbers from "@/components/serializers/Numbers";
import Lexical from "@/components/serializers/Lexical";
import FullFrameImage from "@/components/serializers/FullFrameImage";
import ImageBloc from "@/components/serializers/ImageBloc";
import ProfileGroup from "@/components/profile/ProfileGroup";
import InteractiveMap from "@/components/serializers/MapInteractive";
import Description from "@/components/serializers/Description";

export default {
  name: "Project",
  layout: "RichContent",
  components: {
    BreadCrump,
    HeadlineProject,
    Footer
  },
  data() {
    return {
      project: null
    };
  },
  async fetch() {
    console.log("in fetch", this.$route);
    this.project = await fetchProject(this.$route.params.slug);
  },
  created() {
    this.$options.serializers = {
      types: {
        // First name of the query (Sanity) & Second is the components (Vue)
        introduction: Introduction,
        description: Description,
        highlight: Highlight,
        numbers: Numbers,
        lexical: Lexical,
        fullFrameImage: FullFrameImage,
        imageBloc: ImageBloc,
        profileGroup: ProfileGroup,
        interactiveMap: InteractiveMap
      }
    };
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
