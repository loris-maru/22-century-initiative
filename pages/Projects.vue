<template>
  <div class="projectListCore">
    <FilterBlock class="filterBlock" />

    <div v-for="(project, projectIndex) in projects" :key="project._id">
      <ProjectCard
        class="projectItem"
        v-bind="project"
        :projectNumber="projectIndex + 1"
      />
      <div v-if="projectIndex < projects.length - 1" class="projDivider" />
    </div>
  </div>
</template>

<script>
// Components
import ProjectCard from "@/components/projects/ProjectListCard";
import FilterBlock from "@/components/projects/FilterBlock";
import { fetchProjects } from "@/api/projectApi";

export default {
  layout: "SubPage",
  name: "ProjectList",
  components: {
    ProjectCard,
    FilterBlock
  },
  data() {
    return {
      projects: [],
      page: this.$route.query.page || 1
    };
  },
  async fetch() {
    const projects = await fetchProjects({ page: this.page });
    console.log("projects", projects);
    this.projects = projects;
  },
  fetchProjects(params) {
    return fetchProjects(params);
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
