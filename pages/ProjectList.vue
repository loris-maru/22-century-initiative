<template>
  <div class="projectListCore">
    <FilterBlock class="filterBlock" />
    <ProjectCard class="projectItem" />
    <div class="projDivider"></div>
    <ProjectCard class="projectItem" />
    <div class="projDivider"></div>
    <ProjectCard class="projectItem" />
    <div class="projDivider"></div>
    <ProjectCard class="projectItem" />
    <div class="projDivider"></div>
    <ProjectCard class="projectItem" />
    <div class="projDivider"></div>
    <ProjectCard class="projectItem" />
  </div>
</template>

<script>
// Components
import ProjectCard from "@/components/projects/ProjectListCard";
import FilterBlock from "@/components/projects/FilterBlock";

export default {
  layout: "SubPage",
  name: "ProjectList",
  components: {
    ProjectCard,
    FilterBlock
  }
};
</script>

<style lang="scss" scoped>
.projectListCore {
  width: 90%;
}

.projectItem {
  cursor: pointer;
}

.projDivider {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
}

.filterBlock {
  position: sticky;
  top: 20px;
  margin-bottom: 80px;
  transition: all ease-in-out 0.4s;
}
</style>
