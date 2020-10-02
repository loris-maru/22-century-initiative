<template>
  <nuxt-link :to="`/project/${slug.current}`" class="projectListingCard">
    <!-- LINE 1 -->
    <h3># {{ projectNumber }}</h3>

    <!-- LINE 2 -->
    <div class="titleAndTag">
      <h1>{{ name }}</h1>
      <ul>
        <li v-for="category in categories" :key="category._id">
          <CategoryCard v-bind="category" />
        </li>
      </ul>
    </div>

    <!-- LINE 3 -->
    <div class="projectReference">
      <div class="infoBlock sectionOne">
        <img src="../../assets/images/icn_pin.svg" alt="Icon of a map pin" />
        <component
          :is="origin.slug ? 'nuxt-link' : 'span'"
          class="project-reference-link"
          v-bind="{
            ...(origin.slug && {
              to: `/country/${origin.slug.current}`
            })
          }"
        >
          {{ origin.name }}
        </component>
      </div>
      <div class="infoBlock sectionTwo">
        <img src="../../assets/images/icn_person.svg" alt="Icon of a map pin" />
        <nuxt-link
          v-if="projectFounder.slug"
          :to="`/profile/${projectFounder.slug.current}`"
          class="project-reference-link"
          >{{ projectFounder.fullname }}</nuxt-link
        >
      </div>
    </div>
  </nuxt-link>
</template>

<script>
// Components
import CategoryCard from "@/components/global/CategoryCard";

export default {
  name: "ProjectListCard",
  props: {
    projectNumber: {
      type: Number,
      default: 2
    },
    name: {
      type: String,
      default: "Ocean Cleanup"
    },
    categories: {
      type: Array,
      default: () => []
    },
    origin: {
      type: String
    },
    projectFounder: {
      type: String
    },
    slug: Object
  },
  components: {
    CategoryCard
  },
  created() {
    console.log("in list cart", this.projectFounder);
  }
};
</script>

<style lang="scss" scoped>
.projectListingCard {
  text-decoration: none;
  display: block;
  background: #fff;
  padding: 46px 0;
  transition: all ease-in-out 0.4s;
  &:hover {
    background: #f8f8f8;
    padding: 80px 0;
    padding-left: 80px;
  }
}

.titleAndTag {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

ul {
  position: relative;
  top: 4px;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 10px;

  &:last-child {
    margin: 0;
  }
}

//----- Info Block
.projectReference {
  display: flex;
  flex-direction: row;
  margin-top: 8px;
}

.infoBlock {
  display: flex;
  flex-direction: row;
  margin-right: 34px;

  &:last-child {
    margin-right: 0;
  }
}

img {
  position: relative;
  top: -1px;
  margin-right: 8px;
}

//-------------- Title Tags
h1 {
  font: {
    family: "McQueenDisplay";
    size: $--font--size--2XL;
    weight: 800;
  }
  color: #000;
}

.project-reference-link {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 400;
  }
  color: #000;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: 0.5 all;
  &[href]:hover {
    text-decoration: underline;
  }
}

h3 {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 400;
  }
  color: #000;
}
</style>
