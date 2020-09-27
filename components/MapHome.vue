<template>
  <div class="coreHomeMap">
    <img
      src="../assets/images/image_home_placeholder.jpg"
      alt="Image placeholder home"
    />
  </div>
</template>

<script>
export default {
  name: "HomePreviewMap",
  data() {
    return {
      mousePosition: false
    };
  },
  methods: {
    mouseInside() {
      this.mousePosition = true;
    },
    mouseOutside() {
      this.mousePosition = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.coreHomeMap {
  width: 50vw;
  height: 100%;
  transition: all ease-in-out 0.4s;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  width: 115%;
  height: auto;
  transition: all ease-in-out 0.5s;

  &:hover {
    width: 130%;
    height: auto;
  }
}
</style>
