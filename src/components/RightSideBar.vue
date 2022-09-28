<template>
  <div class="flex flex-col justify-between py-8 p-6 bg-blue-900 rounded-lg h-full">
    <div class="flex flex-col justify-between items-center">
      <h2 class="text-xl font-semibold leading-loose text-white">Shopping Cart</h2>
      <hr class="border-gray-200, w-full" />
      <div class="flex flex-col gap-y-3 w-full px-3">
          <div v-for="item in cart.items " class="flex justify-between gap-x-4 items-center">
              <img class="w-12 h-12" :src="`${item.img}`"/>
              <div class="flex flex-col gap-y-0.5 text-right">
                  <div class="text-sm font-medium text-white">{{item.name}}</div>
                  <div class="text-xs text-gray-200">{{item.price}}</div>
              </div>
          </div>
      </div>
    </div>

    <button class="py-3.5 rounded-lg border border-white text-white text-sm font-semibold"
      @click="">
        Checkout
    </button>
  </div>
</template>

<script setup>
import { useCartStore } from "../store/cart";

const cart = useCartStore();
</script>
