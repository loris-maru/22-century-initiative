<template>
  <div class="headlineProjectCore">
    <div class="masterHead">
      <h1>
        {{ name }}
      </h1>
      <div class="mapBlock">
        <img src="../../assets/images/icn_pin_white.svg" alt="Icon Pin White" />
      </div>
    </div>

    <!-- Technical information -->
    <div class="technicalInformation">
      <div class="contextInfos">
        <div class="itemInfos">
          <img
            src="../../assets/images/icn_pin.svg"
            alt="Icon Pin Localisation"
          />
          <h3>{{ origin.name }}</h3>
        </div>
        <div class="itemInfos">
          <img
            src="../../assets/images/icn_person.svg"
            alt="Icon Pin Localisation"
          />
          <h3>{{ founder.fullname }}</h3>
        </div>
      </div>

      <div class="categoryBlock">
        <CategoryCard
          v-for="category in categories"
          :name="category.name"
          :slug="category.slug"
          :key="category._id"
          class="itemCategory"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Components
import CategoryCard from "@/components/global/CategoryCard";

export default {
  name: "HeadlineProject",
  props: {
    name: {
      type: String
    },
    origin: {
      type: String
    },
    founder: {
      type: String
    },
    categories: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CategoryCard
  }
};
</script>

<style lang="scss" scoped>
.headlineProjectCore {
  width: 100%;
  padding-left: 9vw;
  padding-top: 26vh;
}

.masterHead {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  margin-right: 9vw;
}

.mapBlock {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 200px;
  overflow: hidden;
  background: url("../../assets/images/img_map_placeholder.jpg") no-repeat;
  background-size: cover;
}

.technicalInformation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: solid 1px #cacaca;
  border-bottom: solid 1px #cacaca;
  padding: 30px 0;
  margin-right: 9vw;
}

.contextInfos {
  display: flex;
  flex-direction: row;
}

.itemInfos {
  display: flex;
  flex-direction: row;
  margin-right: 42px;

  img {
    position: relative;
    top: -1px;
    margin-right: 12px;
  }
}

.categoryBlock {
  display: flex;
  flex-direction: row;
}

.itemCategory {
  margin-right: 20px;

  &:last-child {
    margin: 0;
  }
}

//--------- TITLE HEAD
h1 {
  width: 60%;
  font: {
    family: "McQueenDisplay";
    size: $--font--fluid--XXL;
    weight: 800;
  }
  color: #000;
  line-height: 0.9;
}

h3 {
  font: {
    family: "McQueenText";
    size: $--font--size--M;
    variation-settings: "wght" 600;
  }
  color: #000;
}
</style>
