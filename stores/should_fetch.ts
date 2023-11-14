import { defineStore } from "pinia";

export const use_should_fetch_store = defineStore("should_fetch", {
  state: () => {
    return { should_fetch: false, page: 1 };
  },
  actions: {
    set(value: boolean) {
      this.should_fetch = value;
    },
  },
});
