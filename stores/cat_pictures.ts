import { defineStore } from "pinia";
import type { CatPictures } from "~/db/schema";

type CatPictureWithHeight = CatPictures & {
  height?: number;
};

export const use_cat_pictures_store = defineStore("cat_pictures", {
  state: () => {
    return { value: [] as CatPictureWithHeight[] };
  },
  actions: {
    set(value: CatPictures[] | null) {
      if (!value) return;

      this.value = value;
    },

    push(value: CatPictures[] | null) {
      if (!value) return;

      this.value.push(...value);
    },

    set_height(reddit_id: string, height: number) {
      const index = this.value.findIndex(
        (cat_picture) => cat_picture.reddit_id === reddit_id
      );
      this.value[index].height = height;
    },

    get_height(index: number) {
      return this.value[index].height || 300;
    },
  },
});
