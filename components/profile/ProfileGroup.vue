<template>
  <div class="profileGroupCore">
    <h1>{{ mainTitle }}</h1>
    <div class="cardGroup">
      <div
        class="individualCard"
        v-for="(profile, profileKey) in teamMember"
        :key="profileKey"
      >
        <ProfileCard :title="profile.name" :subtitle="profile.job" />
      </div>
    </div>
  </div>
</template>

<script>
// Component
import ProfileCard from "@/components/profile/ProfileCard";

export default {
  name: "ProfileGroup",
  data() {
    return {
      teamMember: [
        { name: "Josh Huli", job: "Design Lead" },
        { name: "Anita Barra", job: "Service Designer" },
        { name: "Mark Branhill", job: "Senior Engineer" },
        { name: "Sarah McCormic", job: "Technical Lead" },
        { name: "Aaronda", job: "Block Chain Operation" },
        { name: "Supita N'yona", job: "Coordinator Local" },
      ],
    };
  },
  components: {
    ProfileCard,
  },
  props: {
    mainTitle: {
      type: String,
      default: "The Team",
    },
  },
};
</script>

<style lang="scss" scoped>
.profileGroupCore {
  width: 100vw;
  padding: 0 9vw;
  margin: $--spacer--150 0;
}

.cardGroup {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.individualCard {
  flex-basis: 30%;
}

h1 {
  @include title_one(#000);
  margin-bottom: $--spacer--60;
}
</style>
