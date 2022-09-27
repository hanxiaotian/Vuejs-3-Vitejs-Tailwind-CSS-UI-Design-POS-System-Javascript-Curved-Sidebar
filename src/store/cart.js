import { defineStore } from 'pinia'

export const useCartStore = defineStore({
    id: 'cart',

    state: () => ({
      rawItems: [],
    }),
    getters: {
      items: (state) =>
        state.rawItems.map(rawItem => rawItem.item),
    },
    actions: {
      addItem(item) {
        this.rawItems.push({item: item, time: Date.now()})
      },

      removeItem(idx) {
        if (idx > -1 && idx < this.rawItems.length) this.rawItems.splice(idx, 1);
      },
    },
})