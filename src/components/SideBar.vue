<template>
  <div class="flex flex-col gap-y-4 items-center py-8 w-24 bg-blue-900 h-full">
    <div class="flex flex-col gap-y-2 items-end self-end">
        <div @click="backToHome()"
        :class="activeMenu === 'Shopping'
            ? 'bg-gray-100 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'
            : ''
        "
        >
        <button class="p-4 my-2 mr-4 ml-3 rounded-xl" @click="activeMenu = 'Shopping'"
        :class="activeMenu === 'Shopping'
        ? 'text-white shadow-error bg-blue-900'
        : 'text-blue-300'">
        <Component :is="ShoppingIcon" class="w-6 h-6" />
        </button>
        </div>

        <div @click="goToSetting()"
        :class="activeMenu === 'Setting'
            ? 'bg-gray-100 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'
            : ''
        "
        >
        <button class="p-4 my-2 mr-4 ml-3 rounded-xl" @click="activeMenu = 'Setting'"
        :class="activeMenu === 'Setting'
        ? 'text-white shadow-error bg-blue-900'
        : 'text-blue-300'">
        <Component :is="SettingsIcon" class="w-6 h-6" />
        </button>
        </div>

        <div @click="goToOfflineProcess()"
        :class="activeMenu === 'OfflineProcess'
            ? 'bg-gray-100 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom'
            : ''
        "
        >
        <button class="p-4 my-2 mr-4 ml-3 rounded-xl" @click="activeMenu = 'OfflineProcess'"
        :class="activeMenu === 'OfflineProcess'
        ? 'text-white shadow-error bg-blue-900'
        : 'text-blue-300'">
        <Component :is="OfflineProcessIcon" class="w-6 h-6" />
        </button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import store from "../store/index";
import ShoppingIcon from "../icons/shopping.svg";
import SettingsIcon from "../icons/options.svg";
import OfflineProcessIcon from "../icons/offline.svg";

const activeMenu = ref("Shopping");

const menus = [
  { name: "Shopping", icon: ShoppingIcon },
  { name: "Setting", icon: SettingsIcon },
  { name: "OfflineProcess", icon: OfflineProcessIcon },
];

const router = useRouter();

function backToHome() {
  store.currentState = store.appStates.isScan;
  router.push({
    name: "Home",
  });
}

function goToSetting() {
  store.currentState = store.appStates.isSetting;
  router.push({
    name: "Setting",
  });
}

function goToOfflineProcess() {
  store.currentState = store.appStates.isOfflineProcess;
  router.push({
    name: "OfflineProcess",
  });
}
</script>
