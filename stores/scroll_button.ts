import { defineStore } from "pinia";

export const use_scroll_button_store = defineStore("scroll_button", {
  state: () => {
    return { show: false, scroll_to_top: false };
  },
});
