export const state = () => ({
  isMenuOpen: false
});

// Mutations
export const mutations = {
  openMenu(state) {
    state.isMenuOpen = !state.isMenuOpen;
  }
};
