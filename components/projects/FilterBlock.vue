<template>
  <div class="filterCore" :class="{ openMenu: isFilterOptionOpen }">
    <div class="headBlock">
      <h1 v-if="!isFilterOptionOpen">
        Filters
      </h1>
      <h1
        class="closeOne"
        v-if="isFilterOptionOpen"
        @click.prevent="closeMenuBox"
      >
        Close
      </h1>
      <div class="filterListBlock">
        <!-- Filter by Country -->
        <div class="filterItem" @click.prevent="openFilterCountry">
          <h2 :class="onCountryStyle">
            By Country
          </h2>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            :class="{ rotateOpen: isCountryOpen }"
          >
            ">
            <path
              d="M0.956158 13.0909L0 12.2023L6.08697 6.54545L0 0.888595L0.956158 0L8 6.54551L0.956158 13.0909Z"
              :class="onCountryStyle"
            />
          </svg>
        </div>
        <!-- Filter by Category -->
        <div class="filterItem" @click.prevent="openFilterCategory">
          <h2 :class="onCategoryStyle">
            By Category
          </h2>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            :class="{ rotateOpen: isCategoryOpen, onCategoryStyle }"
          >
            <path
              d="M0.956158 13.0909L0 12.2023L6.08697 6.54545L0 0.888595L0.956158 0L8 6.54551L0.956158 13.0909Z"
              :class="onCategoryStyle"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Filter COUNTRY -->
    <div v-if="isCountryOpen" class="filterItemContent">
      <FilterItem class="singleItem" />
      <FilterItem class="singleItem" />
      <FilterItem class="singleItem" />
      <FilterItem class="singleItem" />
    </div>
    <!-- Filter CATEGOR -->
    <div v-if="isCategoryOpen" class="filterItemContent">
      <FilterItem class="singleItem" />
      <FilterItem class="singleItem" />
      <FilterItem class="singleItem" />
      <FilterItem class="singleItem" />
    </div>
  </div>
</template>

<script>
// Components
import FilterItem from "@/components/projects/FilterSection";

export default {
  name: "FilterBlock",
  data() {
    return {
      isFilterOptionOpen: false,
      isCountryOpen: false,
      isCategoryOpen: false
    };
  },
  components: {
    FilterItem
  },
  computed: {
    onCountryStyle() {
      if (this.isCountryOpen == false && this.isCategoryOpen == true)
        return ["grayFill", "grayColor"];
      return ["blackColor", "blackFill"];
    },
    onCategoryStyle() {
      if (this.isCategoryOpen == false && this.isCountryOpen == true)
        return ["grayFill", "grayColor"];
      return ["blackColor", "blackFill"];
    }
  },
  methods: {
    // Open COUNTRY
    openFilterCountry() {
      if (this.isFilterOptionOpen == false) {
        this.isFilterOptionOpen = true;
        this.isCountryOpen = true;
        this.isCategoryOpen = false;
      } else if (
        this.isFilterOptionOpen == true &&
        this.isCategoryOpen == true
      ) {
        this.isFilterOptionOpen = true;
        this.isCategoryOpen = false;
        this.isCountryOpen = true;
      } else if (this.isCountryOpen == true) {
        this.isFilterOptionOpen = false;
        this.isCountryOpen = false;
      }
    },
    // Open CATEGORY
    openFilterCategory() {
      if (this.isFilterOptionOpen == false) {
        this.isFilterOptionOpen = true;
        this.isCategoryOpen = true;
        this.isCountryOpen = false;
      } else if (
        this.isFilterOptionOpen == true &&
        this.isCountryOpen == true
      ) {
        this.isFilterOptionOpen = true;
        this.isCategoryOpen = true;
        this.isCountryOpen = false;
      } else if (this.isCategoryOpen == true) {
        this.isFilterOptionOpen = false;
        this.isCategoryOpen = false;
      }
    },
    closeMenuBox() {
      this.isFilterOptionOpen = false;
      this.isCountryOpen = false;
      this.isCategoryOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.filterCore {
  width: 100%;
  height: 56px;
  padding: 20px 30px;
  border: 2px solid #000;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.95);
  transition: all ease-in-out 0.4s;
  overflow: hidden;
}

.openMenu {
  height: 400px;
}

.headBlock {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all ease-in-out 0.4s;
  margin-bottom: 40px;
}

.filterListBlock {
  display: flex;
  flex-direction: row;
}

.filterItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
  cursor: pointer;

  &:last-child {
    margin: 0;
  }

  svg {
    position: relative;
    top: 1px;
    margin-left: 10px;
    transition: all ease-in-out 0.4s;
  }
}

.rotateOpen {
  transform: rotate(90deg);
}

//---- Filter Open Content

.filterItemContent {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

//-------- Title Style

h1 {
  font: {
    family: "McQueenText";
    size: $--font--size--XS;
    variation-settings: "wght" 600;
  }
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  cursor: pointer;
}

.closeOne {
  color: #c4c4c4;
}

h2 {
  font: {
    family: "McQueenText";
    size: $--font--size--XS;
    variation-settings: "wght" 400;
  }
  transition: all ease-in-out 0.5s;
}
</style>
