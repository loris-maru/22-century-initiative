<template>
  <div class="headlineProfile">
    <div class="leftColumn">
      <h1>{{ profileName }}</h1>
      <div class="profilInformation">
        <!-- COUNTRY -->
        <div class="infoSection">
          <img src="../../assets/images/icn_pin.svg" alt="Pin icon" />
          {{ countryName }}
        </div>
        <!-- PROJECT -->
        <div class="infoSection">
          <img src="../../assets/images/icn_project.svg" alt="Project icon" />
          {{ projectName }}
        </div>
      </div>
    </div>
    <!-- RIGHT COLUMN -->
    <div class="rightColumn">
      <div class="fullSizeImage">
        <img
          src="../../assets/images/img_placeholder_portrait.jpg"
          alt="Portrait Image"
        />
      </div>
      <div class="additionalInformation">
        <h2>{{ informationType }}</h2>
        <div class="blockImageContent">
          <img
            src="../../assets/images/img_detail_placeholder.jpg"
            alt="Additional Informations Image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Component

export default {
  name: "HeadlineProfile",
  props: {
    profileName: {
      type: String,
      default: "Boyan Slat"
    },
    countryName: {
      type: String,
      default: "The Netherlands"
    },
    projectName: {
      type: String,
      default: "Ocean Cleanup"
    },
    informationType: {
      type: String,
      default: "Localisation"
    }
  }
};
</script>

<style lang="scss" scoped>
.headlineProfile {
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 9vw;
}

//----- LEFT COLUMN

.leftColumn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.profilInformation {
  display: flex;
  flex-direction: row;
}

.infoSection {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 30px;
  color: #000;

  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 500;
  }

  img {
    width: auto;
    height: 12px;
    margin-right: 6px;
  }

  &:last-child {
    margin: 0;
  }
}

//----- RIGHT COLUMN

.rightColumn {
  width: 38%;
  height: 100vh;
  background: #000;
}

.fullSizeImage {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 80%;
  overflow: hidden;

  img {
    width: auto;
    height: 100%;
  }
}

.additionalInformation {
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  justify-content: flex-end;
}

.blockImageContent {
  width: 30%;
  display: flex;
  flex-flow: row;

  justify-content: flex-end;
  img {
    width: auto;
    height: 100%;
  }
}

//------ TITLE SECTION

h1 {
  font: {
    family: "McQueenDisplay";
    size: $--font--size--3XL;
    weight: 800;
  }
  color: #000;

  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 30px;
  margin-bottom: 30px;
}

h2 {
  font: {
    family: "McQueenText";
    size: $--font--size--S;
    variation-settings: "wght" 400;
  }
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-right: 40px;
}
</style>
