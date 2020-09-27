<template>
  <div class="projectListingCard">
    <!-- LINE 1 -->
    <h3># {{ projectNumber }}</h3>

    <!-- LINE 2 -->
    <div class="titleAndTag">
      <h1>{{ projectName }}</h1>
      <ul>
        <li>
          <CategoryCard />
        </li>
        <li>
          <CategoryCard />
        </li>
      </ul>
    </div>

    <!-- LINE 3 -->
    <div class="projectReference">
      <div class="infoBlock sectionOne">
        <img src="../../assets/images/icn_pin.svg" alt="Icon of a map pin" />
        <h2>{{ countryTitle }}</h2>
      </div>
      <div class="infoBlock sectionTwo">
        <img src="../../assets/images/icn_person.svg" alt="Icon of a map pin" />
        <h2>{{ keyPerson }}</h2>
      </div>
    </div>
  </div>
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
    projectName: {
      type: String,
      default: "Ocean Cleanup"
    },
    categoryName: {
      type: String,
      default: "water"
    },
    countryTitle: {
      type: String,
      default: "The Netherlands"
    },
    keyPerson: {
      type: String,
      default: "Boyan Slat"
    }
  },
  components: {
    CategoryCard
  }
};
</script>

<style lang="scss" scoped>
.projectListingCard {
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

h2 {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 400;
  }
  color: #000;
  letter-spacing: -0.01em;
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
