<template>
  <div class="flex justify-around p-6 bg-blue-900 rounded-lg">
    <hr class="border-gray-200" />
        <button class="grow p-3.5 mx-2 rounded-lg border border-white text-white text-sm font-semibold"
            @click="activateBarcodeScan()">
            Barcode-Scan
        </button>
        <button class="grow p-3.5 mx-2 rounded-lg border border-white text-white text-sm font-semibold"
            @click="activateSearchByName()">
            Search-by-Name
        </button>
        <button class="grow p-3.5 mx-2 rounded-lg border border-white text-white text-sm font-semibold"
            @click="activateAutoRecog()">
            Auto-Recognize
        </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import store from "../store/index";
import products from "../store/products";
import { useCartStore } from "../store/cart";

const router = useRouter();

function activateAutoRecog() {
    store.currentState = store.appStates.isAutoRecog;
    router.push({
        name: "PredictionPage",
    });
}

function activateSearchByName() {
    store.currentState = store.appStates.isSearchByName;
    router.push({
        name: "Search",
    });
}

const cart = useCartStore();

function activateBarcodeScan() {
    const item = products.productList.find(product => product.name === "Packaged Product");
    cart.addItem(item);
    store.currentState = store.appStates.isScan;
    router.push({
        name: "Home",
    });
}
</script>