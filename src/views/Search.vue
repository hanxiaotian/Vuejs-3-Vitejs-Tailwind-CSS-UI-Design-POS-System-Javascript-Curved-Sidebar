<template>
    <div class="flex flex-col items-center justify-center">
        <div class="relative">
            <input class="py-1 px-3 bg-opacity-80 border border-solid border-black/12 rounded-lg bg-white" 
                type="text" v-model="search" placeholder="Fruit or Vegetable name.."/>
        </div>
        <div class="flex flex-wrap overflow-y-scroll h-80">
            <div class="shadow-lg hover:scale-105 transform transition duration-200 ease-in-out"
                v-for="product in filteredList"
                @click="selectAndReturnHome(product.name)"
                :key="product.name">
                <button class="no-underline p-1 text-blue-800 text-xs flex flex-col items-center break-words">
                    <img class="h-14 w-14" v-bind:src="product.img"/>
                    {{ product.name }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import store from "../store/index";
import products from "../store/products";
import { useCartStore } from "../store/cart";

const router = useRouter();

const search = ref('');

var filteredList = computed(() => {
    return products.productList.filter(product => {
    return product.name.toLowerCase().includes(search.value.toLowerCase())
    })
});


const cart = useCartStore();

function addToCart(productName) {
    const item = products.productList.find(product => product.name === productName);
    cart.addItem(item);
}

function selectAndReturnHome(productName) {
    addToCart(productName);
    store.currentState = store.appStates.isScan;
    router.push({
        name: "Home",
    });
}
</script>