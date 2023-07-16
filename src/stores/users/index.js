import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ u: null }),

  getters: {
    user: (state) => state.u,
  },

  actions: {
    login(user) {
      this.u = user;
    },
  },
});
