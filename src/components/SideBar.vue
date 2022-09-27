<template>
  <div class="flex flex-col gap-y-4 items-center py-8 w-24 bg-blue-900 h-full">
    <!-- <button class="p-2 bg-opacity-10 text-gray-200 rounded-xl bg-white">
      <ShoppingIcon />
    </button> -->
    <div class="flex flex-col gap-y-2 items-end self-end">
        <div v-for="menu in menus"
        :class="
            activeMenu === menu.name
            ? 'bg-gray-100 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'
            : ''
        "
        >
        <button class="p-4 my-2 mr-4 ml-3 rounded-xl" @click="activeMenu = menu.name"
        :class="activeMenu === menu.name
        ? 'text-white shadow-error bg-blue-900'
        : 'text-blue-300'">
        <Component :is="menu.icon" class="w-6 h-6" />
        </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ShoppingIcon from "../icons/shopping.svg";
import OptionsIcon from "../icons/options.svg";

const activeMenu = ref("Graph");

const menus = [
  { name: "Shopping", icon: ShoppingIcon },
  { name: "Options", icon: OptionsIcon },
];
</script>
