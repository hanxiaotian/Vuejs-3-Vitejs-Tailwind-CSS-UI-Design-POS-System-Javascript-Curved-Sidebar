<template>
  <div class="flex flex-col justify-between py-8 p-6 bg-blue-900 rounded-lg h-full">
    <div class="flex flex-col justify-between items-center">
      <h2 class="text-xl font-semibold leading-loose text-white">Shopping Cart</h2>
      <hr class="border-gray-200, w-full" />
      <div class="flex flex-col gap-y-3">
          <!-- <div v-for="order in shoppingCart " class="flex gap-x-4 items-center">
              <img class="w-14 h-14" :src="`/img/${order.image}`" alt="" />
              <div class="flex flex-col gap-y-0.5">
                  <div class="text-sm font-medium text-white">{{order.name}}</div>
                  <div class="text-xs text-gray-200">{{order.price}}</div>
              </div>
          </div> -->
          <div v-for="item in cart.items " class="flex flex-1 justify-between gap-x-4 items-center">
              <img class="w-12 h-12" :src="`${item.img}`"/>
              <div class="flex flex-col gap-y-0.5">
                  <div class="text-sm font-medium text-white">{{item.name}}</div>
                  <div class="text-xs text-gray-200">{{item.price}}</div>
              </div>
          </div>
      </div>
    </div>

    <button class="py-3.5 rounded-lg border border-white text-white text-sm font-semibold">
        Checkout
    </button>
  </div>
</template>

<script setup>
import products from "../store/products";
import { useCartStore } from "../store/cart";

const cart = useCartStore();

// const shoppingCart = [
//   {
//     name: "Burger King Halloween Whopper ",
//     image: "food-1.png",
//     price: "$1.0",
//   },
//   {
//     name: "King Whopper Sandwich Hamburger",
//     image: "food-2.png",
//     price: "$1.0",
//   },
//   {
//     name: "Red Robin Gourmet Burger",
//     image: "food-3.png",
//     price: "$1.0",
//   },
// ];
</script>
